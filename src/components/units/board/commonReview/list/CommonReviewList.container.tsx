// 일반리뷰 List 페이지 container
import { MouseEvent } from "react";
import { useQuery } from "@apollo/client";
import CommonReviewPresenterPage from "./CommonReviewList.presenter";
import { FETCH_BOARD_CATEGORY_PICK } from "./CommonReviewList.queries";

export default function CommonReviewContainerPage() {
  const { data: fetchBoardsCategoryData, fetchMore } = useQuery(
    FETCH_BOARD_CATEGORY_PICK,
    {
      variables: {
        category: "REVIEW",
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
// 온클릭디테일페이지
  const onClickDetailPage =(event: MouseEvent<HTMLDivElement>)=>{
    // if (event.target instanceof Element)
    // router.push(`/boards/${event.target.id}`);
    console.log(event);
  }
  return (
    <CommonReviewPresenterPage
      loadMore={loadMore}
      fetchBoardsCategoryData={fetchBoardsCategoryData}
      onClickDetailPage={onClickDetailPage}
    />
  );
}
