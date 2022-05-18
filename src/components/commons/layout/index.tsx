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
  // const MainPage = ["/"];
  const LoginPage = ["/login"];
  const ReviewDetail = ["/reviews/reviewdetail"];
  const ReviewList = ["/reviews/reviewlist"];
  const NoticeList = ["/notice/list"];
  const NoticeDetail = ["/notice/detail"];
  // const JoinPage = ["/join"];
  // const MarketDetail = [`/markets/${router.query.useditemId}`];
  // const MarketEdit = [`/markets/${router.query.useditemId}/edit`];
  // const Mypage = ["/mypage"];

  // const isMainPage = MainPage.includes(router.asPath);
  const isLoginPage = LoginPage.includes(router.pathname);
  const isReviewDetail = ReviewDetail.includes(router.asPath);
  const isReviewList = ReviewList.includes(router.asPath);
  const isNoticeList = NoticeList.includes(router.asPath);
  const isNoticeDetail = NoticeDetail.includes(router.asPath);
  // const isMarketEdit = MarketEdit.includes(router.asPath);
  return (
    <Wrapper>
      <LayoutHeader />

      {!isLoginPage && 
      !isReviewDetail && 
      !isReviewList && 
      !isNoticeList && 
      !isNoticeDetail && 
      <LayoutBanner />}

      <Body>{props.children}</Body>

      <LayoutFooter />
    </Wrapper>
  );
}
