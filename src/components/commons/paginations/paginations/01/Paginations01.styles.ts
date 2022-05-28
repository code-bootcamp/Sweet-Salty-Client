// 페이지네이션 styles --- 김치훈

import styled from "@emotion/styled";

export const Column = styled.span`
  margin: 0px 50px;
`;

interface IPageProps {
  isActive?: boolean;
}
export const Wrapper = styled.div`
  width: 150px;
  height: 40px;
  border-radius: 50px;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Page = styled.span`
  font-size: 12px;
  color: ${(props: IPageProps) => (props.isActive ? "#FF9A31" : "black")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "default" : "pointer")};
`;
