// 가주세요! Detail Container -김치훈

import { useRouter } from "next/router";
import WishDetailPresenterPage from "./WishDetail.presenter";


export default function WishDetailContainerPage() {
  const router = useRouter()

  const onClickList =()=>{
    router.push("/reviews/wish/list")
  }
  const onClickWishReviewWrite =()=>{
    router.push("/reviews/wishreview/write")
  }


  return <WishDetailPresenterPage
    onClickList={onClickList}
    onClickWishReviewWrite={onClickWishReviewWrite}
  />;
}
