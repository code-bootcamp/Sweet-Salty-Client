import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ReviewDetailPresenter from "./CommonReviewDetail.presenter";
import { FETCH_BOARD } from "./CommonReviewDetail.queries";

export default function ReviewDetailContainer() {
  const router = useRouter()
  const {data : fetchBoardData}= useQuery(FETCH_BOARD,{variables: {boardId:"2"}}) 

// console.log("타이틀",fetchBoardData?.fetchBoard?.boardTitle)
// console.log("슈가",fetchBoardData?.fetchBoard?.boardSugar)
// console.log("솔트",fetchBoardData?.fetchBoard?.boardSalt)
// console.log("내용",fetchBoardData?.fetchBoard?.boardContents)
// console.log("좋아요",fetchBoardData?.fetchBoard?.boardLikeCount)
// console.log("조회",fetchBoardData?.fetchBoard?.boardHit)
// console.log("주제",fetchBoardData?.fetchBoard?.boardSubject)
console.log("생성일",fetchBoardData?.fetchBoard?.createAt)
// console.log("서브카테",fetchBoardData?.fetchBoard?.subCategory?.subCategoryName)
// console.log("장소",fetchBoardData?.fetchBoard?.place)
// console.log("태그",fetchBoardData?.fetchBoard?.boardSides)
console.log("태그맵",fetchBoardData?.fetchBoard?.boardSides.map((el)=>(el.boardTags.boardTagName)))

  const onClickCommonReviewList = ()=>{
    router.push("/reviews/commonReview/list")
  }

  return <ReviewDetailPresenter
  data={fetchBoardData?.fetchBoard}
  onClickCommonReviewList={onClickCommonReviewList}
  />;
}
