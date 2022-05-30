import { useQuery } from "@apollo/client";
import {
  FETCH_BOARD_BEST,
  FETCH_BOARD_CATEGORY_PICK,
} from "../../commonReview/list/CommonReviewList.queries";
import WishPresenterPage from "./WishList.presenter";

export default function WishContainerPage() {
  const checkPage = "REQUEST";

  const { data: fetchBoardsCategoryData, fetchMore: categoryFetchMore } =
    useQuery(FETCH_BOARD_CATEGORY_PICK, {
      variables: {
        category: "REQUEST",
      },
    });

  const { data: fetchBoardBestData } = useQuery(FETCH_BOARD_BEST, {
    variables: {
      category: "REQUEST",
    },
  });

  const categoryDataLoadMore = () => {
    if (!fetchBoardsCategoryData) return;
    categoryFetchMore({
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
    <WishPresenterPage
      checkPage={checkPage}
      categoryDataLoadMore={categoryDataLoadMore}
      fetchBoardsCategoryData={fetchBoardsCategoryData}
      fetchBoardBestData={fetchBoardBestData}
    />
  );
}
