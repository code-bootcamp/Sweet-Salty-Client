import CommonReviewItemPresenterPage from "./ReviewItem.presenter";

export default function CommonReviewItemContainerPage(props) {
  return <CommonReviewItemPresenterPage fetchBoardsData={props.el} />;
}
