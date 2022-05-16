// layout === 김치훈

import styled from "@emotion/styled";
import { ReactNode } from "react";
import LayoutHeader from "./header/Header.container";
import LayoutBanner from "./banner/Banner.container";
import SearchBarPage from "./searchbar/SearchBar.container";
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
  // const JoinPage = ["/join"];
  // const MarketDetail = [`/markets/${router.query.useditemId}`];
  // const MarketEdit = [`/markets/${router.query.useditemId}/edit`];
  // const Mypage = ["/mypage"];

  // const isMainPage = MainPage.includes(router.asPath);
  const isLoginPage = LoginPage.includes(router.pathname);
  const isReviewDetail = ReviewDetail.includes(router.asPath);
  const isReviewList = ReviewList.includes(router.asPath);
  // const isJoinPage = JoinPage.includes(router.asPath);
  // const isMarketDetail = MarketDetail.includes(router.asPath);
  // const isMarketEdit = MarketEdit.includes(router.asPath);
  return (
    <Wrapper>
      <LayoutHeader />

      {!isLoginPage && !isReviewDetail && !isReviewList && <LayoutBanner />}

      {!isLoginPage && !isReviewDetail && <SearchBarPage />}

      <Body>{props.children}</Body>

      <LayoutFooter />
    </Wrapper>
  );
}
