import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ReviewDetailPresenter from "./CommonReviewDetail.presenter";
import { FETCH_BOARD } from "./CommonReviewDetail.queries";

export default function ReviewDetailContainer() {
  const router = useRouter()
  const {data : fetchBoardData}= useQuery(FETCH_BOARD,{variables: {boardId:34}}) 

console.log(fetchBoardData)
  const onClickCommonReviewList = ()=>{
    router.push("/reviews/commonReview/list")
  }

  return <ReviewDetailPresenter 
  onClickCommonReviewList={onClickCommonReviewList}
  />;
}
