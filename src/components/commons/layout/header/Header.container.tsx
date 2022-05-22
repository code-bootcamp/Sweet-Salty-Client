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
    router.push("/reviews/commonReview/list");
  };
  const ReviewPage = ["reviews"];
  const isReviewPage = ReviewPage.includes(router.asPath.split("/")[1]);
  
  const onClickStore = () => {
    router.push("/store");
  };
  const StorePage = ["store"];
  const isStorePage = StorePage.includes(router.asPath.split("/")[1]);
  
  const onClickNotice = () => {
    router.push("/notice/list");
  };
  const NoticePage = ["notice"];
  const isNoticePage = NoticePage.includes(router.asPath.split("/")[1]);

  const onClickPhoto = () => {
    setIsClick((prev) => !prev);
  };
  const onClickLogin = () => {
    router.push("/login");
  };

  return (
    <LayoutHeaderPresenter
      onClickHome={onClickHome}
      onClickReview={onClickReview}
      onClickStore={onClickStore}
      onClickNotice={onClickNotice}
      onClickPhoto={onClickPhoto}
      onClickLogin={onClickLogin}
      isClick={isClick}
      isReviewPage={isReviewPage}
      isStorePage={isStorePage}
      isNoticePage={isNoticePage}
    />
  );
}
