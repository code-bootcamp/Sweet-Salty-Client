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
  const {data : recentBoardsTasterData } =useQuery(FETCH_RECENT_BOARDS,{
    variables: { category : "TASTER"}
  });
  const {data: recentShopData} = useQuery(REAL_TIME_SHOP)
  const loggedInNickname = loggedInData?.fetchUserLoggedIn?.userNickname
  console.log("리센트",category, recentBoardsData)
  console.log("테이스터", recentBoardsTasterData)
  // console.log("샵",recentShopData)
  const onClickCommonReview = () => {
    router.push("/reviews/");
  };
const onClickCetegory =(event)=>{
  setCategory(event.currentTarget.id)
}
const onClickDetailPage =(id)=>()=>{
  if(category==="REVIEW")
  router.push(`/reviews/commonReview/${id}`)
  if(category==="REQUEST")
  router.push(`/reviews/wish/${id}`)
  if(category==="VISITED")
  router.push(`/reviews/wishreview/${id}`)
  if(category==="TASTER")
  router.push(`/reviews/tasterReview/${id}`)
}

  // 단짠리뷰 
  const CommonReviewList = ["/reviews/commonReview"];
  const isCommonReviewList = CommonReviewList.includes(router.asPath);
  // 가봤어요! 리뷰
  const VisitedReview = ["/reviews/visitedReview"];
  const isVisited = VisitedReview.includes(router.asPath);
  // 가주세요! 리뷰
  const WishList = ["/reviews/wish"];
  const isWishList = WishList.includes(router.asPath);

  return <MainpagePresenter
          onClickCommonReview={onClickCommonReview}
          loggedInNickname={loggedInNickname}
          onClickCetegory={onClickCetegory}
          onClickDetailPage={onClickDetailPage}
          isCommonReviewList={isCommonReviewList}
          isVisited={isVisited}
          isWishList={isWishList}
          recentBoardsData={recentBoardsData}
          recentShopData={recentShopData}
          recentBoardsTasterData={recentBoardsTasterData}
          />;
}
