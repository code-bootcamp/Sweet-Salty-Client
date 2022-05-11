import styled from "@emotion/styled";
import LayoutHeader from "./header/Headercontainer";
import { ReactNode } from "react";

const Wrapper = styled.div``;
const Body = styled.div``;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <Wrapper>
        <LayoutHeader />

        <Body>{props.children}</Body>
      </Wrapper>
    </>
  );
}
