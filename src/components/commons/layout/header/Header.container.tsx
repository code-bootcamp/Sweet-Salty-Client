// Header container === 김치훈

import { useRouter } from "next/router";
import { useState } from "react";
import LayoutHeaderPresenter from "./Header.presenter";

export default function LayoutHeader() {
  const router = useRouter();
  const [isClick, setIsClick] = useState(false);

  
  const onClickHome = () => {
    router.push("/");
  };
  
  const onClickReview = () => {
    router.push("/reviews");
  };
  const ReviewPage = ["reviews"];
  const isReviewPage = ReviewPage.includes(router.asPath.split("/")[1]);
  
  const onClickStore = () => {
    router.push("/store");
  };
  const StorePage = ["store"];
  const isStorePage = StorePage.includes(router.asPath.split("/")[1]);
  
  const onClickNotice = () => {
    router.push("/noticeAll");
  };
  const NoticePage = ["noticeAll"];
  const isNoticePage = NoticePage.includes(router.asPath.split("/")[1]);

  const onClickPhoto = () => {
    setIsClick((prev) => !prev);
  };
  const onClickLogin = () => {
    router.push("/login");
  };
  const onClickMypage = () => {
    router.push("/mypage");
  };

  return (
    <LayoutHeaderPresenter
      onClickHome={onClickHome}
      onClickReview={onClickReview}
      onClickStore={onClickStore}
      onClickNotice={onClickNotice}
      onClickPhoto={onClickPhoto}
      onClickLogin={onClickLogin}
      onClickMypage={onClickMypage}
      isClick={isClick}
      isReviewPage={isReviewPage}
      isStorePage={isStorePage}
      isNoticePage={isNoticePage}
    />
  );
}
