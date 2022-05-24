// 일반리뷰 List 페이지 container
import { useQuery } from "@apollo/client";
import { useState } from "react";
import CommonReviewPresenterPage from "./CommonReviewList.presenter";
import {
  FETCH_BOARD_CATEGORY_PICK,
  FETCH_BOARD_WITH_TAGS,
} from "./CommonReviewList.queries";

export default function CommonReviewContainerPage() {
  const [menuHashTag, setMenuHashTag] = useState([]);
  const [menuTagCheckList, setMenuTagCheckList] = useState([]);
  const [moodHashTag, setMoodHashTag] = useState([]);
  const [moodTagCheckList, setMoodTagCheckList] = useState([]);

  const searchTags = moodHashTag.concat(menuHashTag);
  console.log(searchTags);
  const {
    data: fetchBoardsCategoryData,
    fetchMore: CategoryFetchMore,
    refetch: CategoryRefetch,
  } = useQuery(FETCH_BOARD_CATEGORY_PICK, {
    variables: {
      category: "REVIEW",
    },
  });

  const {
    data: fetchBoardWithTagData,
    fetchMore: TagFetchMore,
    refetch: TagRefetch,
  } = useQuery(FETCH_BOARD_WITH_TAGS, {
    variables: {
      tags: searchTags,
    },
  });

  const infiniteTagArr = fetchBoardWithTagData?.fetchBoardWithTags.hits;
  // 전체 데이터 무한스크롤
  const categoryDataLoadMore = () => {
    if (!fetchBoardsCategoryData) return;
    CategoryFetchMore({
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
  // 필터 검색 데이터 무한스크롤
  const filterDataLoadMore = () => {
    if (!infiniteTagArr) return;
    TagFetchMore({
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
  // const onClickFilterApply = () => {

  // }
  return (
    <CommonReviewPresenterPage
      categoryDataLoadMore={categoryDataLoadMore}
      filterDataLoadMore={filterDataLoadMore}
      fetchBoardsCategoryData={fetchBoardsCategoryData}
      fetchBoardWithTagData={fetchBoardWithTagData}
      menuTagCheckList={menuTagCheckList}
      setMenuTagCheckList={setMenuTagCheckList}
      moodTagCheckList={moodTagCheckList}
      setMoodTagCheckList={setMoodTagCheckList}
      menuHashTag={menuHashTag}
      setMenuHashTag={setMenuHashTag}
      moodHashTag={moodHashTag}
      setMoodHashTag={setMoodHashTag}
      CategoryRefetch={CategoryRefetch}
      TagRefetch={TagRefetch}
      searchTags={searchTags}
    />
  );
}
