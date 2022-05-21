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
  color: #7b7b7b;
  background: #fff;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: linear-gradient(#ff6e30, #ffa230);
    color: #fff;
  }
`;

export default function ReviewMenuPage() {
  const router = useRouter();

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
        <ReviewMenu onClick={onClickCommunityList}>전체</ReviewMenu>
        <ReviewMenu onClick={onClickCommonReviewList}>단짠 리뷰</ReviewMenu>
        <ReviewMenu onClick={onClickTasterReviewList}>시식단 리뷰</ReviewMenu>
        <ReviewMenu onClick={onClickWishReviewList}>가주세요!</ReviewMenu>
      </ReviewMenuBox>
    </>
  );
}
