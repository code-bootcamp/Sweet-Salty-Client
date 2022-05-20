// layout === 김치훈

import styled from "@emotion/styled";
import { ReactNode } from "react";
import LayoutHeader from "./header/Header.container";
import LayoutBanner from "./banner/Banner.container";
import LayoutFooter from "./footer/Footer.container";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  background: #f3f3f3;
`;
const Body = styled.div``;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  
  const MainPage = ["/"];


  // 혹시 몰라 주석처리
  // const LoginPage = ["/login"];
  
  // const CommonReviewDetail = ["/reviews/commonReview/detail"];
  // const CommonReviewList = ["/reviews/commonReview/list"];
  // const CommonReviewWrite = ["/reviews/commonReview/write"];

  // const TesterReviewList = ["/reviews/testerReview/list"];
  
  // const WishList = ["/reviews/wish/list"];
  // const WishWrite = ["/reviews/wish/write"];
  
  // const NoticeList = ["/notice/list"];
  // const NoticeDetail = ["/notice/detail"];
  // const NoticeWrite = ["/notice/write"];
  
// ==================================================================

  const isMainPage = MainPage.includes(router.pathname);

  // 혹시 몰라 주석처리
  // const isLoginPage = LoginPage.includes(router.pathname);
  
  // const isCommonReviewDetail = CommonReviewDetail.includes(router.asPath);
  // const isCommonReviewList = CommonReviewList.includes(router.asPath);
  // const isCommonReviewWrite = CommonReviewWrite.includes(router.asPath);

  // const isTesterReviewList = TesterReviewList.includes(router.asPath);

  // const isWishList = WishList.includes(router.asPath);
  // const isWishWrite = WishWrite.includes(router.asPath);
  
  // const isNoticeList = NoticeList.includes(router.asPath);
  // const isNoticeDetail = NoticeDetail.includes(router.asPath);
  // const isNoticeWrite = NoticeWrite.includes(router.asPath);
  
  return (
    <Wrapper>
      <LayoutHeader />
      
      {isMainPage &&
      <LayoutBanner />}

      <Body>{props.children}</Body>

      <LayoutFooter />
    </Wrapper>
  );
}
