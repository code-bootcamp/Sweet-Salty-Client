// 리뷰 상세보기 Container  - 김치훈

import { useRouter } from "next/router";
import ReviewDetailPresenter from "./CommonReviewDetail.presenter";

export default function ReviewDetailContainer() {
  const router = useRouter()

  const onClickCommonReviewList = ()=>{
    router.push("/reviews/commonReview/list")
  }

  return <ReviewDetailPresenter 
  onClickCommonReviewList={onClickCommonReviewList}
  />;
}
