// 가주세요! 등록 Container --- 김치훈

import { useRouter } from "next/router";
import WishWritePresenter from "./WishWrite.presenter";

export default function WishWriteContainer(){
  const router = useRouter()

  const onClickWishDetail =() =>{
    alert("등록되었습니다.")
    router.push("/reviews/wish/detail")
  }
  const onClickBack = ()=>{
    router.back()
  }

  return (
  <WishWritePresenter
  onClickWishDetail={onClickWishDetail}
    onClickBack={onClickBack}
  />
  )
}