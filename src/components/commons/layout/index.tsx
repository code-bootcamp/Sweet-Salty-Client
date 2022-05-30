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
  const isLoginPage = LoginPage.includes(router.pathname);
  const SignupPage = ["/signup"];
  const isSignupPage = SignupPage.includes(router.pathname);
  const MainPage = ["/"];
  const isMainPage = MainPage.includes(router.pathname);

  return (
    <Wrapper>
      {!isLoginPage && !isSignupPage && <LayoutHeader />}

      {isMainPage && <LayoutBanner />}

      <Body>{props.children}</Body>

      <LayoutFooter />
    </Wrapper>
  );
}
