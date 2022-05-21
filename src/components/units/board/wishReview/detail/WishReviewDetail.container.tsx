// 가봤어요! Detail Container -김치훈

import { useRouter } from "next/router";
import WishReviewDetailPresenterPage from "./WishReviewDetail.presenter";


export default function WishReviewDetailContainerPage() {
  const router = useRouter()

  const onClickCommonReviewList =()=>{
    router.push("/reviews/commonReview/list")
  }

  return <WishReviewDetailPresenterPage
  onClickCommonReviewList={onClickCommonReviewList}
  />;
}
