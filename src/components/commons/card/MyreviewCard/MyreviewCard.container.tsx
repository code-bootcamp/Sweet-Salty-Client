import MyreviewCardPresenter from "./MyreviewCard.presenter";

export default function MyreviewCardContainer(props: any) {
  return (
    <MyreviewCardPresenter
      el={props.el}
      loginUser={props.loginUser}
      onClickMoveMyReviewDetail={props.onClickMoveMyReviewDetail}
    />
  );
}
