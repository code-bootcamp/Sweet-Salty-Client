// 일반리뷰 등록 Container --- 김치훈

import { useRouter } from "next/router";
import CommonReviewWritePresenter from "./CommonReviewWrite.presenter";

export default function CommonReviewWriteContainer(){
  const router = useRouter()

  const onClickReviewDetail =() =>{
    router.push("/reviews/commonReview/detail")
  }
  const onClickBack = ()=>{
    router.back()
  }

  return (
  <CommonReviewWritePresenter
    onClickReviewDetail={onClickReviewDetail}
    onClickBack={onClickBack}
  />
  )
}