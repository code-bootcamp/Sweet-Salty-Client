// 일반리뷰 List 페이지 container

import { useQuery } from "@apollo/client";
import CommonReviewPresenterPage from "./CommonReviewList.presenter";
import { FETCH_BOARDS } from "./CommonReviewList.queries";

export default function CommonReviewContainerPage() {
  const { data: fetchBoardsData, fetchMore } = useQuery(FETCH_BOARDS);

  // 무한스크롤
  const loadMore = () => {
    if (!fetchBoardsData) return;
    fetchMore({
      variables: {
        page: Math.ceil(fetchBoardsData.fetchBoards.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult?.fetchBoards],
        };
      },
    });
  };


  return (
    <CommonReviewPresenterPage
      loadMore={loadMore}
      fetchBoardsData={fetchBoardsData}
    />
  );
}
