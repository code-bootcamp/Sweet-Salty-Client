// 가봤어요! Write Container -김치훈

import { useRouter } from "next/router";
import WishReviewWritePresenterPage from "./WishReviewWrite.presenter";

export default function WishReviewWriteContainerPage() {
  const router = useRouter()

  const onClickCommonReviewList =() =>{
    alert("가봤어요! 등록되었습니다.")
    router.push("/reviews/wishreview/detail")
  }
  const onClickBack = ()=>{
    router.back()
  }
  return <WishReviewWritePresenterPage
  onClickCommonReviewList={onClickCommonReviewList}
    onClickBack={onClickBack}
  />;
}
