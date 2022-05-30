// searchbar Container === 김치훈

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";
import SearchBarPresenter from "./SearchBar.presenter";
import { FETCH_NOTICE_COUNT } from "./SearchBar.queries";
import _ from "lodash";

export default function SearchBarPage(props: any) {
  const router = useRouter();

  const [isButton, setIsButton] = useState(false);
  const [, setSearchTitle] = useState("");

  const getDebounce = _.debounce((data: string) => {
    props.refetch({ search: data, page: 1 });
    props.refetchNoticeCount({ search: data });
    props.onChangeKeyword(data);
  }, 200);

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  const { data: NoticeAllPagecountData } = useQuery(FETCH_NOTICE_COUNT, {
    variables: {
      category: "ALL",
    },
  });
  const { data: NoticePagecountData } = useQuery(FETCH_NOTICE_COUNT, {
    variables: {
      category: "NOTICE",
    },
  });
  const { data: NoticeEventPagecountData } = useQuery(FETCH_NOTICE_COUNT, {
    variables: {
      category: "EVENT",
    },
  });
  const { data: NoticePromotionPagecountData } = useQuery(FETCH_NOTICE_COUNT, {
    variables: {
      category: "PROMOTION",
    },
  });
  const { data: NoticeTastingPagecountData } = useQuery(FETCH_NOTICE_COUNT, {
    variables: {
      category: "TASTING",
    },
  });

  const onChangeTitle = (event: any) => {
    setSearchTitle(event.target.value);
  };

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
  // 공지사항 전체
  const NoticeAllList = ["/noticeAll"];
  const isNoticeAllList = NoticeAllList.includes(router.asPath);
  // 공지사항 단짠 공지 공지사항
  const NoticeList = ["/noticeAll/notice"];
  const isNoticeList = NoticeList.includes(router.asPath);
  // 공지사항 이벤트 공지사항
  const NoticeEventList = ["/noticeAll/noticeEvent"];
  const isNoticeEventList = NoticeEventList.includes(router.asPath);
  // 공지사항 프로모션 공지사항
  const NoticePromoionList = ["/noticeAll/noticePromotion"];
  const isNoticePromoionList = NoticePromoionList.includes(router.asPath);
  // 공지사항 시식단 모집 공지사항
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
    <SearchBarPresenter
      NoticeAllPagecountData={NoticeAllPagecountData}
      NoticePagecountData={NoticePagecountData}
      NoticeEventPagecountData={NoticeEventPagecountData}
      NoticePromotionPagecountData={NoticePromotionPagecountData}
      NoticeTastingPagecountData={NoticeTastingPagecountData}
      onChangeTitle={onChangeTitle}
      onChangeSearchbar={onChangeSearchbar}
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
