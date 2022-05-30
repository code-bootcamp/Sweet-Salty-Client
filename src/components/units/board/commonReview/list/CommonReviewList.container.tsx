import { useQuery } from "@apollo/client";
import _ from "lodash";
import { useState } from "react";
import CommonReviewPresenterPage from "./CommonReviewList.presenter";
import {
  FETCH_BOARD_BEST,
  FETCH_BOARD_CATEGORY_PICK,
  FETCH_BOARD_WITH_TAGS,
} from "./CommonReviewList.queries";

export default function CommonReviewContainerPage() {
  const [search, setSearch] = useState([]);
  const checkPage = "REVIEW";
  const reviewSearch = _.concat(search, "REVIEW");

  const { data: fetchBoardsCategoryData, fetchMore: categoryFetchMore } =
    useQuery(FETCH_BOARD_CATEGORY_PICK, {
      variables: {
        category: "REVIEW",
      },
    });

  const { data: fetchBoardWithTagData, fetchMore: tagFetchMore } = useQuery(
    FETCH_BOARD_WITH_TAGS,
    {
      variables: {
        tags: reviewSearch,
      },
    }
  );

  const { data: fetchBoardBestData } = useQuery(FETCH_BOARD_BEST, {
    variables: {
      category: "REVIEW",
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
  const infiniteTagArr = fetchBoardWithTagData?.fetchBoardWithTags.hits;
  const filterDataLoadMore = () => {
    if (!infiniteTagArr) return;
    tagFetchMore({
      variables: {
        page: Math.ceil(infiniteTagArr.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.hits) return { hits: [...prev.hits] };
        return {
          hits: [...prev.hits, ...fetchMoreResult?.hits],
        };
      },
    });
  };

  return (
    <CommonReviewPresenterPage
      categoryDataLoadMore={categoryDataLoadMore}
      filterDataLoadMore={filterDataLoadMore}
      fetchBoardsCategoryData={fetchBoardsCategoryData}
      fetchBoardWithTagData={fetchBoardWithTagData}
      search={search}
      setSearch={setSearch}
      fetchBoardBestData={fetchBoardBestData}
      checkPage={checkPage}
    />
  );
}
