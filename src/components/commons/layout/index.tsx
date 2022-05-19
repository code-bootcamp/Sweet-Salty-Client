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
  const LoginPage = ["/login"];
  const ReviewDetail = ["/reviews/commonReview/detail"];
  const ReviewList = ["/reviews/commonReview/list"];
  const ReviewWrite = ["/reviews/commonReview/write"];
  const NoticeList = ["/notice/list"];
  const NoticeDetail = ["/notice/detail"];
  const NoticeWrite = ["/notice/write"];
  // const JoinPage = ["/join"];
  // const MarketDetail = [`/markets/${router.query.useditemId}`];
  // const MarketEdit = [`/markets/${router.query.useditemId}/edit`];
  // const Mypage = ["/mypage"];

  // const isMainPage = MainPage.includes(router.asPath);
  const isLoginPage = LoginPage.includes(router.pathname);
  const isReviewDetail = ReviewDetail.includes(router.asPath);
  const isReviewList = ReviewList.includes(router.asPath);
  const isReviewWrite = ReviewWrite.includes(router.asPath);
  const isNoticeList = NoticeList.includes(router.asPath);
  const isNoticeDetail = NoticeDetail.includes(router.asPath);
  const isNoticeWrite = NoticeWrite.includes(router.asPath);
  return (
    <Wrapper>
      <LayoutHeader />

      {!isLoginPage && 
      !isReviewDetail && 
      !isReviewList && 
      !isReviewWrite &&
      !isNoticeList && 
      !isNoticeDetail && 
      !isNoticeWrite &&
      <LayoutBanner />}

      <Body>{props.children}</Body>

      <LayoutFooter />
    </Wrapper>
  );
}
