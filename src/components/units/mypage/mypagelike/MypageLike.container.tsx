// 좋아요한 단짠 게시글 Container --- 김치훈

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MypageLikePresenter from "./MypageLike.presenter";
import { FETCH_PICKED_BOARDS } from "./MypageLike.queries";


export default function MypageLikeContainer() {
  const router = useRouter()

  // 좋아요 한 단짠 게시글 목록
  const {data, refetch, fetchMore} = useQuery(FETCH_PICKED_BOARDS)

  
  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardsOfUser.length / 5) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        // 받아올 데이터가 없을 경우 return(기존 데이터 보여줘)
        if (!fetchMoreResult?.fetchBoardsOfUser) return { fetchBoardsOfUser: [...prev.fetchBoardsOfUser] };
        return {
          fetchBoardsOfUser: [
            // 이전 뎃글 보여줘
            ...prev.fetchBoardsOfUser,
            // 다음 댓글 보여줘
            ...fetchMoreResult.fetchBoardsOfUser,
          ],
        };
      },
    });
  };

  const onClickMoveLikeReviewDetail = (event: any) =>{
    const data = event.target.id
    const boardId = data.split(/[^0-9]/g)[0]
    const boardSubject = data.split(/[^A-Z]/g).pop()
    if(boardSubject === "REVIEW"){
      router.push(`/reviews/commonReview/${boardId}`)
    } else if(boardSubject === "TASTER"){
      router.push(`/reviews/testerReview/${boardId}`)
    } else if(boardSubject === "REQUEST") {
      router.push(`/reviews/wish/${boardId}`) 
    } else if(boardSubject === "VISITED"){
      router.push(`/reviews/wishreview/${boardId}`)
    }
  }

  return <MypageLikePresenter
    data={data}
    refetch={refetch}
    onLoadMore={onLoadMore}
    onClickMoveLikeReviewDetail={onClickMoveLikeReviewDetail}
  />;
}
