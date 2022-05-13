import styled from "@emotion/styled";
import { ReactNode } from "react";
import LayoutHeader from "./header/Header.container";
import LayoutBanner from "./banner/Banner.container";
import SearchBarPage from "./searchbar/SearchBar.container";
import LayoutFooter from "./footer/Footer.container";

const Wrapper = styled.div``;
const Body = styled.div`
  position: relative;
  background: #f3f3f3;
`;
const Circle1 = styled.div`
  position: absolute;
  left: 5%;
  top: 20%;
  width: 50vh;
  height: 50vh;
  border-radius: 50%;
  background: linear-gradient(#ff6e30, #ffa230);
  filter: blur(8px);
`;
const Circle2 = styled.div`
  position: absolute;
  right: 2%;
  bottom: 30%;
  width: 100vh;
  height: 100vh;
  border-radius: 50%;
  background: linear-gradient(#ff6e30, #ffa230);
  filter: blur(8px);
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  // const MainPage = ["/"];
  // const LoginPage = ["/login"];
  // const JoinPage = ["/join"];
  // const MarketWrite = ["/markets/new"];
  // const MarketDetail = [`/markets/${router.query.useditemId}`];
  // const MarketEdit = [`/markets/${router.query.useditemId}/edit`];
  // const Mypage = ["/mypage"];

  // const isMainPage = MainPage.includes(router.asPath);
  // const isLoginPage = LoginPage.includes(router.pathname);
  // const isJoinPage = JoinPage.includes(router.asPath);
  // const isMarketWrite = MarketWrite.includes(router.asPath);
  // const isMarketDetail = MarketDetail.includes(router.asPath);
  // const isMarketEdit = MarketEdit.includes(router.asPath);
  return (
    <>
      <Wrapper>
        <LayoutHeader />

        <LayoutBanner />

        <SearchBarPage />

        <Body>
          <Circle1></Circle1>
          <Circle2></Circle2>
          {props.children}
        </Body>

        <LayoutFooter />
      </Wrapper>
    </>
  );
}
