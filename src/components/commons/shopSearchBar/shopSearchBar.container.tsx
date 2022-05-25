// searchbar Container === 김치훈

import { useRouter } from "next/router";
import { useState } from "react";
import StoreSearchBarPresenter from "./shopSearchBar.presenter";

export default function StoreSearchBarPage(props) {
  const router = useRouter();

  const [isButton, setIsButton] = useState(false);

  // 전체리뷰
  const ReviewList = ["/reviews"];
  const isReviewList = ReviewList.includes(router.asPath);
  // 단짠리뷰
  const CommonReviewList = ["/reviews/commonReview"];
  const isCommonReviewList = CommonReviewList.includes(router.asPath);
  // 시식단리뷰
  const TesterReview = ["/reviews/testerReview"];
  const isTesterReview = TesterReview.includes(router.asPath);
  // 거주세요! 리뷰
  const WishList = ["/reviews/wish"];
  const isWishList = WishList.includes(router.asPath);
  // 전체 공지사항
  const NoticeAllList = ["/noticeAll"];
  const isNoticeAllList = NoticeAllList.includes(router.asPath);
  // 단짠 공지 공지사항
  const NoticeList = ["/noticeAll/notice"];
  const isNoticeList = NoticeList.includes(router.asPath);
  // 이벤트 공지사항
  const NoticeEventList = ["/noticeAll/noticeEvent"];
  const isNoticeEventList = NoticeEventList.includes(router.asPath);
  // 프로모션 공지사항
  const NoticePromoionList = ["/noticeAll/noticePromotion"];
  const isNoticePromoionList = NoticePromoionList.includes(router.asPath);
  // 시식단 모집 공지사항
  const NoticeTasterList = ["/noticeAll/noticeTaster"];
  const isNoticeTasterList = NoticeTasterList.includes(router.asPath);

  const onClickReviewDetail = () => {
    router.push("/reviews/commonReview/write");
  };
  const onClickWishDetail = () => {
    router.push("/reviews/wish/write");
  };

  const onClickNoticeList = () => {
    router.push("/noticeAll/write");
  };
  const onClickButtonBox = () => {
    setIsButton((prev) => !prev);
  };

  return (
    <StoreSearchBarPresenter
      isReviewList={isReviewList}
      isCommonReviewList={isCommonReviewList}
      isTesterReview={isTesterReview}
      isWishList={isWishList}
      isNoticeAllList={isNoticeAllList}
      isNoticeList={isNoticeList}
      isNoticeEventList={isNoticeEventList}
      isNoticePromoionList={isNoticePromoionList}
      isNoticeTasterList={isNoticeTasterList}
      onClickReviewDetail={onClickReviewDetail}
      onClickWishDetail={onClickWishDetail}
      onClickNoticeList={onClickNoticeList}
      isButton={isButton}
      onClickButtonBox={onClickButtonBox}
    />
  );
}
