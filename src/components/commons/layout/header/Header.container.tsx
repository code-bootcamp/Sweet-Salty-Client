// Header container === 김치훈

import { useRouter } from "next/router";
import { useState } from "react";
import LayoutHeaderPresenter from "./Header.presenter";

export default function LayoutHeader() {
  const router = useRouter();
  const [isClick, setIsClick] = useState(false);

  
  const onClickPhoto = () => {
    setIsClick((prev) => !prev);
  };
  const onClickHome = () => {
    router.push("/");
  };
  const onClickNotice = () => {
    router.push("/notice/list");
  };
  const NoticePage = ["notice"];
  const isNoticePage = NoticePage.includes(router.asPath.split("/")[1]);

  const onClickLogin = () => {
    router.push("/login");
  };
  
  const onClickReview = () => {
    router.push("/reviews/commonReview/list");
  };
  const ReviewPage = ["reviews"];
  const isReviewPage = ReviewPage.includes(router.asPath.split("/")[1]);

  return (
    <LayoutHeaderPresenter
      onClickHome={onClickHome}
      onClickReview={onClickReview}
      onClickNotice={onClickNotice}
      onClickPhoto={onClickPhoto}
      onClickLogin={onClickLogin}
      isClick={isClick}
      isReviewPage={isReviewPage}
      isNoticePage={isNoticePage}
    />
  );
}
