import LikeReviewCardPresenter from "./LikeReviewCard.presenter";

export default function LikeReviewCardContainer(props: any) {
  return (
    <LikeReviewCardPresenter
      el={props.el}
      data={props.data}
      User={props.User}
      onClickMoveLikeReviewDetail={props.onClickMoveLikeReviewDetail}
    />
  );
}
