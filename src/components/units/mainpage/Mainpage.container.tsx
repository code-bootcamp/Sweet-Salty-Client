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
  const loggedInNickname = loggedInData?.fetchUserLoggedIn?.userNickname;
  const categoryData = [
    { key: "0", id:"REVIEW",  title: "단짠 리뷰", checked: false, index: 0 },
    { key: "1", id:"REQUEST", title: "가주세요!", checked: false, index: 1 },
    { key: "2", id:"VISITED", title: "가봤어요!", checked: false, index: 2 },
  ]
  
  const onChangeCategory = (checked, id) => {
    if(checked) {
      setCategory(id)
    } 

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
      onChangeCategory={onChangeCategory}
      onClickLogin={onClickLogin}
      onClickSignUp={onClickSignUp}
      loggedInNickname={loggedInNickname}
      recentBoardsData={recentBoardsData}
      recentShopData={recentShopData}
      recentBoardsTasterData={recentBoardsTasterData}
      preferData={preferData}
      category={category}
      categoryData={categoryData}

    />
  );
}
