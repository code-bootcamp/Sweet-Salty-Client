import CommonReviewItem from "./ReviewItem.presenter";

export default function CommonReviewItemContainerPage(props) {
  return <CommonReviewItem fetchBoardsData={props.el} />;
}
