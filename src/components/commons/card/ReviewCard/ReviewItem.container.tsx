import CommonReviewItem from "./ReviewItem.presenter";

export default function CommonReviewItemContainerPage(props) {
  console.log(props);
  return <CommonReviewItem fetchBoardsData={props.el} />;
}
