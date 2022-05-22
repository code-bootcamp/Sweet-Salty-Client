// 여기는 시식단 리뷰 List Container 입니다..

import { useQuery } from "@apollo/client";
import TesterReviewPresenterPage from "./TesterReviewList.presenter";
import { FETCH_BOARD_CATEGORY_PICK } from "./TesterReviewList.queries";

export default function TesterReviewContainerPage() {
  const { data: fetchBoardsCategoryData, fetchMore } = useQuery(
    FETCH_BOARD_CATEGORY_PICK,
    {
      variables: {
        category: "TASTER",
      },
    }
  );

  // 무한스크롤
  const loadMore = () => {
    if (!fetchBoardsCategoryData) return;
    fetchMore({
      variables: {
        page:
          Math.ceil(
            fetchBoardsCategoryData.fetchBoardCategoryPick.length / 10
          ) + 1,
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
    <TesterReviewPresenterPage
      loadMore={loadMore}
      fetchBoardsCategoryData={fetchBoardsCategoryData}
    />
  );
}
