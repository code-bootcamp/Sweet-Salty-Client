import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import MainpagePresenter from "./MainPage.presenter";
import { FETCH_RECENT_BOARDS, FETCH_USER_LOGGED_IN, REAL_TIME_SHOP } from "./Mainpage.queries";

export default function MainPageList() {
  const router = useRouter();
  const {data : loggedInData} = useQuery(FETCH_USER_LOGGED_IN);
  const [category , setCategory] = useState("REVIEW")
  const {data : recentBoardsData } =useQuery(FETCH_RECENT_BOARDS,{
    variables: { category}
  });
  const {data: recentShopData} = useQuery(REAL_TIME_SHOP)
  const loggedInNickname = loggedInData?.fetchUserLoggedIn?.userNickname
  console.log("리센트",category, recentBoardsData)
  console.log("샵",recentShopData)
  const test =() =>{
    setCategory("REQUEST")
  }
  const onClickCommonReview = () => {
    router.push("/reviews/");
  };

  return <MainpagePresenter
          onClickCommonReview={onClickCommonReview}
          loggedInNickname={loggedInNickname}
          test ={test}
          />;
}
