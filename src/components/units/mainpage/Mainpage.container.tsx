import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import MainpagePresenter from "./MainPage.presenter";
import {
  FETCH_PREFER_BOARDS,
  FETCH_RECENT_BOARDS,
  FETCH_USER_LOGGED_IN,
  REAL_TIME_SHOP,
} from "./Mainpage.queries";

export default function MainPageList() {
  const router = useRouter();
  const [category, setCategory] = useState("REVIEW");
  const { data: loggedInData } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: recentBoardsData } = useQuery(FETCH_RECENT_BOARDS, {
    variables: { category },
  });
  const { data: recentBoardsTasterData } = useQuery(FETCH_RECENT_BOARDS, {
    variables: { category: "TASTER" },
  });
  const { data: preferData } = useQuery(FETCH_PREFER_BOARDS);
  const { data: recentShopData } = useQuery(REAL_TIME_SHOP);
  //
  // const [tab, setTab] = useState("cur")
  //
  const loggedInNickname = loggedInData?.fetchUserLoggedIn?.userNickname;
  const onClickCetegory = (event) => {
    setCategory(event.currentTarget.id);
  };
  const onClickReview = () => {
    if (category === "REVIEW") router.push(`/reviews/commonReview`);
    if (category === "REQUEST") router.push(`/reviews/wish`);
    if (category === "VISITED") router.push(`/reviews/wishreview`);
  };
  const onClickTasterPage = () => {
    router.push(`/reviews/tasterReview`);
  };
  const onClickShopPage = () => {
    router.push(`/shop`);
  };
  const onClickLogin = () => {
    router.push(`/login`);
  };
  const onClickSignUp = () => {
    router.push(`/signup`);
  };
  return (
    <MainpagePresenter
      onClickReview={onClickReview}
      onClickTasterPage={onClickTasterPage}
      onClickShopPage={onClickShopPage}
      onClickCetegory={onClickCetegory}
      onClickLogin={onClickLogin}
      onClickSignUp={onClickSignUp}
      loggedInNickname={loggedInNickname}
      recentBoardsData={recentBoardsData}
      recentShopData={recentShopData}
      recentBoardsTasterData={recentBoardsTasterData}
      preferData={preferData}
      category={category}
    />
  );
}
