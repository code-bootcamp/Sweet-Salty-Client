// 일반리뷰페이지 container === 김치훈

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommonReviewPresenterPage from "./CommonReview.presenter";
import { FETCH_BOARDS } from "./CommonReview.queries";

export default function CommonReviewContainerPage() {
  const { data: fetchBoardsData, fetchMore } = useQuery(FETCH_BOARDS);
  const router = useRouter();

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

  const onClickCommonReview = () => {
    router.push("/reviews/reviewlist");
  };

  return (
    <CommonReviewPresenterPage
      loadMore={loadMore}
      fetchBoardsData={fetchBoardsData}
      onClickCommonReview={onClickCommonReview}
    />
  );
}
