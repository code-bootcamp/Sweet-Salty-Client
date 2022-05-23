// searchbar Container === 김치훈

import { useRouter } from "next/router";
import { useState } from "react";
import SearchBarPresenter from "./SearchBar.presenter";

export default function SearchBarPage() {
  const router = useRouter();

  const [isButton, setIsButton] = useState(false)


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
  // 공지사항
  const NoticeList = ["/notice"];
  const isNoticeList = NoticeList.includes(router.asPath);

  const onClickReviewDetail = () => {
    router.push("/reviews/commonReview/write");
  };
  const onClickWishDetail = () => {
    router.push("/reviews/wish/write");
  };

  const onClickNoticeList = () => {
    router.push("/notice/write");
  };
  const onClickButtonBox = () => {
    setIsButton((prev) => !prev);
  };

  return (
    <SearchBarPresenter
      isReviewList={isReviewList}
      isCommonReviewList={isCommonReviewList}
      isTesterReview={isTesterReview}
      isWishList={isWishList}
      isNoticeList={isNoticeList}
      onClickReviewDetail={onClickReviewDetail}
      onClickWishDetail={onClickWishDetail}
      onClickNoticeList={onClickNoticeList}
      isButton={isButton}
      onClickButtonBox={onClickButtonBox}
    />
  );
}
