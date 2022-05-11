// 중고마켓 목록 container

import MarketListUI from "./MarketList.presenter";
import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { WatchProductState } from "../../../commons/store";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "./MarketList.queries";

export default function MarketList() {
  const [watchProduct, setWatchProduct] = useRecoilState(WatchProductState);
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      // 페이지를 받아오니 query에서 page를 리턴해야합니다.
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        // 받아올 데이터가 없을 경우 return(기존 데이터 보여줘)
        if (!fetchMoreResult?.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };
        return {
          fetchBoards: [
            // 이전 뎃글 보여줘
            ...prev.fetchBoards,
            // 다음 댓글 보여줘
            ...fetchMoreResult.fetchBoards,
          ],
        };
      },
    });
  };

  // const [,setWatchProduct] = useRecoilState(WatchProductState);
  // 장바구니 버튼
  const onClickWatch = (el) => () => {};

  return (
    <MarketListUI
      data={data}
      onLoadMore={onLoadMore}
      onClickWatch={onClickWatch}
    />
  );
}
