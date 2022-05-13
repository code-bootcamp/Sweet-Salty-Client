import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  width: 100%;
  background: #fff;
`;
export const HeaderBox = styled.div`
  width: 1120px;
  height: 84px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderLogo = styled.div`
  width: 182px;
  height: 44px;
  background: #dbdbdb;
`;
export const HeaderMiddleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderMenuBox = styled.div`
  margin-right: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderMenu = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin: 0 20px;
  cursor: pointer;
  &:hover {
    border-bottom: 8px solid #ffa230;
  }
`;
export const HeaderRightBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const HeaderLogin = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin: 0 20px;
  cursor: pointer;
  color: #7b7b7b;
`;
export const HeaderSignup = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin: 0 20px;
  cursor: pointer;
  color: #7b7b7b;
`;
