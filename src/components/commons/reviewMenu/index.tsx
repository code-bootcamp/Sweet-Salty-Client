import styled from "@emotion/styled";
import { useRouter } from "next/router";

export const ReviewMenuBox = styled.div`
  margin: 0 auto;
  width: 1338px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ReviewMenu = styled.div`
  width: 299px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 20px 20px 0 0;
  font-weight: 700;
  font-size: 20px;
  color:${(props: any)=> 
    props.isCommonReviewList ||
    props.isVisited ||
    props.isWishList 
    ? "#fff"
    : "#7b7b7b" 
  };
  background: ${(props: any)=> 
    props.isCommonReviewList ||
    props.isVisited ||
    props.isWishList 
    ? "linear-gradient(#ff6e30, #ffa230)"
    : "#fff" 
  };
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: linear-gradient(#ff6e30, #ffa230);
    color: #fff;
  }
`;

export default function MainMenuPage(props) {
  const router = useRouter();

  // 단짠리뷰 
  const CommonReviewList = ["/reviews/commonReview"];
  const isCommonReviewList = CommonReviewList.includes(router.asPath);
  // 가봤어요! 리뷰
  const VisitedReview = ["/reviews/visitedReview"];
  const isVisited = VisitedReview.includes(router.asPath);
  // 가주세요! 리뷰
  const WishList = ["/reviews/wish"];
  const isWishList = WishList.includes(router.asPath);


  return (
    <>
      <ReviewMenuBox>
        <ReviewMenu onClick={props.onClickCetegory} value="REVIEW" isCommonReviewList={isCommonReviewList}>단짠 리뷰</ReviewMenu>
        <ReviewMenu onClick={props.onClickCetegory} value="REQUEST" isWishList={isWishList}>가주세요!</ReviewMenu>
        <ReviewMenu onClick={props.onClickCetegory} value="VISITED" isisVisited={isVisited}>가봤어요!</ReviewMenu>
      </ReviewMenuBox>
    </>
  );
}
