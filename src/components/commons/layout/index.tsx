import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import LayoutHeader from "./header/Header.container";
import LayoutBanner from "./banner/Banner.container";
import LayoutFooter from "./footer/Footer.container";

const Wrapper = styled.div`
  position: relative;
`;
const Body = styled.div``;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

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

        <Body>{props.children}</Body>

        <LayoutFooter />
      </Wrapper>
    </>
  );
}
