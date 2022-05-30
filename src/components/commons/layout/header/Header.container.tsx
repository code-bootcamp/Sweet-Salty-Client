// Header container === 김치훈

import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../store";
import LayoutHeaderPresenter from "./Header.presenter";
import { LOGOUT, FETCH_USER_LOGGED_IN, FETCH_UNREAD_MESSAGE_COUNT } from "./Header.queries";

export default function LayoutHeader() {
  const router = useRouter();
  const [isClick, setIsClick] = useState(false);
  const [logout] = useMutation(LOGOUT);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data)
  const [, setAccessToken] = useRecoilState(accessTokenState);

  // 쪽지함 안 읽은 쪽지 갯수
  const {data: fetchUnreadMessageCountData} = useQuery(FETCH_UNREAD_MESSAGE_COUNT)

  const onClickHome = () => {
    router.push("/");
  };

  // 단짠 맛집 소개
  const onClickIntro = () => {
    router.push("/Intro");
  };
  const IntroPage = ["Intro"];
  const isIntroPage = IntroPage.includes(router.asPath.split("/")[1]);

  const onClickReview = () => {
    router.push("/reviews");
  };
  const ReviewPage = ["reviews"];
  const isReviewPage = ReviewPage.includes(router.asPath.split("/")[1]);

  const onClickStore = () => {
    router.push("/shop");
  };
  const StorePage = ["shop"];
  const isStorePage = StorePage.includes(router.asPath.split("/")[1]);

  const onClickNotice = () => {
    router.push("/noticeAll");
  };
  const NoticePage = ["noticeAll"];
  const isNoticePage = NoticePage.includes(router.asPath.split("/")[1]);

  const onClickPhoto = () => {
    setIsClick((prev) => !prev);
  };
  const onClickSignup = () => {
    router.push("/signup");
    setIsClick(false);
  };
  const onClickLogin = () => {
    router.push("/login");
    setIsClick(false);
  };
  const onClickMypage = () => {
    router.push("/mypage");
    setIsClick(false);
  };
  const onClickMessage = () => {
    window.open("/message", "_blank", "width=1200, height=1000");
    setIsClick(false);
  };
  const onClickMypagePoint = () => {
    router.push("/mypage/mypagepoint");
    setIsClick(false);
  };
  const onClickLogout = () => {
    try {
      logout();
      setAccessToken("");
      setIsClick(false);
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <LayoutHeaderPresenter
      data={data}
      fetchUnreadMessageCountData={fetchUnreadMessageCountData}
      onClickHome={onClickHome}
      onClickIntro={onClickIntro}
      onClickReview={onClickReview}
      onClickStore={onClickStore}
      onClickNotice={onClickNotice}
      onClickPhoto={onClickPhoto}
      onClickLogin={onClickLogin}
      onClickSignup={onClickSignup}
      onClickMypage={onClickMypage}
      onClickMessage={onClickMessage}
      onClickMypagePoint={onClickMypagePoint}
      onClickLogout={onClickLogout}
      isClick={isClick}
      isIntroPage={isIntroPage}
      isReviewPage={isReviewPage}
      isStorePage={isStorePage}
      isNoticePage={isNoticePage}
    />
  );
}
