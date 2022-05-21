// 일반리뷰 List 페이지 container

import { useQuery } from "@apollo/client";
import CommonReviewPresenterPage from "./CommonReviewList.presenter";
import { FETCH_BOARD_CATEGORY_PICK } from "./CommonReviewList.queries";

export default function CommonReviewContainerPage() {
  const { data: ReviewData, fetchMore } = useQuery(FETCH_BOARD_CATEGORY_PICK, {
    variables: {
      category: "REVIEW",
    },
  });

  // 무한스크롤
  const loadMore = () => {
    if (!ReviewData) return;
    fetchMore({
      variables: {
        page: Math.ceil(ReviewData.fetchBoardCategoryPick.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardCategoryPick)
          return { fetchBoardCategoryPick: [...prev.fetchBoardCategoryPick] };
        return {
          fetchBoardCategoryPick: [
            ...prev.fetchBoardCategoryPick,
            ...fetchMoreResult?.fetchBoardCategoryPick,
          ],
        };
      },
    });
  };

  return (
    <CommonReviewPresenterPage loadMore={loadMore} ReviewData={ReviewData} />
  );
}
