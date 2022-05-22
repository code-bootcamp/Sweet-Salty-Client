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
    props.isReviewList || 
    props.isCommonReviewList ||
    props.isTesterReview ||
    props.isWishList 
    ? "#fff"
    : "#7b7b7b" 
  };
  background: ${(props: any)=> 
    props.isReviewList || 
    props.isCommonReviewList ||
    props.isTesterReview ||
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

export default function ReviewMenuPage() {
  const router = useRouter();

  
  // 전체리뷰 
  const ReviewList = ["/reviews"];
  const isReviewList = ReviewList.includes(router.asPath);
  // 단짠리뷰 
  const CommonReviewList = ["/reviews/commonReview/list"];
  const isCommonReviewList = CommonReviewList.includes(router.asPath);
  // 시식단리뷰
  const TesterReview = ["/reviews/testerReview/list"];
  const isTesterReview = TesterReview.includes(router.asPath);
  // 거주세요! 리뷰
  const WishList = ["/reviews/wish/list"];
  const isWishList = WishList.includes(router.asPath);

  const onClickCommunityList = () => {
    router.push("/reviews");
  };

  const onClickCommonReviewList = () => {
    router.push("/reviews/commonReview/list");
  };
  const onClickTasterReviewList = () => {
    router.push("/reviews/testerReview/list");
  };
  const onClickWishReviewList = () => {
    router.push("/reviews/wish/list");
  };

  return (
    <>
      <ReviewMenuBox>
        <ReviewMenu onClick={onClickCommunityList} isReviewList={isReviewList}>전체</ReviewMenu>
        <ReviewMenu onClick={onClickCommonReviewList} isCommonReviewList={isCommonReviewList}>단짠 리뷰</ReviewMenu>
        <ReviewMenu onClick={onClickTasterReviewList} isTesterReview={isTesterReview}>시식단 리뷰</ReviewMenu>
        <ReviewMenu onClick={onClickWishReviewList} isWishList={isWishList}>가주세요!</ReviewMenu>
      </ReviewMenuBox>
    </>
  );
}
