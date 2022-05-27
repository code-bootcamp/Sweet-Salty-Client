// Header container === 김치훈

import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../store";
import LayoutHeaderPresenter from "./Header.presenter";
import { LOGOUT, FETCH_USER_LOGGED_IN } from "./Header.queries";

export default function LayoutHeader() {
  const router = useRouter();
  const [isClick, setIsClick] = useState(false);
  const [logout] = useMutation(LOGOUT);
  const {data} = useQuery(FETCH_USER_LOGGED_IN)
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const onClickHome = () => {
    router.push("/");
  };
  
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
    setIsClick(true);
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
    router.push("/message");
    setIsClick(false);
  };
  const onClickMypagePoint = () => {
    router.push("/mypage/mypagepoint");
    setIsClick(false);
  };
  const onClickLogout =()=>{
    try{
      logout();
      setAccessToken("");
      setIsClick(false);
    }
    catch(error:any){ alert(error.message);}
  }
  return (
    <LayoutHeaderPresenter
      data={data}
      onClickHome={onClickHome}
      onClickReview={onClickReview}
      onClickStore={onClickStore}
      onClickNotice={onClickNotice}
      onClickPhoto={onClickPhoto}
      onClickLogin={onClickLogin}
      onClickMypage={onClickMypage}
      onClickMessage={onClickMessage}
      onClickMypagePoint={onClickMypagePoint}
      onClickLogout={onClickLogout}
      isClick={isClick}
      isReviewPage={isReviewPage}
      isStorePage={isStorePage}
      isNoticePage={isNoticePage}
    />
  );
}
