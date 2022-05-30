// 마이 단짠 게시글 카드 Container ---김치훈

import MyreviewCardPresenter from "./MyreviewCard.presenter";

export default function MyreviewCardContainer(props: any) {
  return <MyreviewCardPresenter 
    el={props.el} 
    data={props.data} 
    onClickMoveMyReviewDetail={props.onClickMoveMyReviewDetail}
  />;
}
