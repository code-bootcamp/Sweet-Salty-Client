// Header Styles === 김치훈

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
  cursor: pointer;
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
  transition: 0.2s;
  &: hover {
    border-bottom: 8px solid #ffa230;
  }
  border-bottom: ${(props: any) =>
    props.isPage ? "8px solid #ffa230" : "none"};
`;
export const HeaderNonMembersRightBox = styled.div`
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
export const P = styled.div`
  font-size: 16px;
  cursor: default;
  color: #7b7b7b;
`;
export const HeaderSignup = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin: 0 20px;
  cursor: pointer;
  color: #7b7b7b;
`;

export const HeaderMemberRightBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Photo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(#ff6e30, #ffa230);
  cursor: pointer;
`;
export const UserProfileBox = styled.div`
  position: absolute;
  top: -60px;
  z-index: 1;
  width: 180px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(0, 120px);
`;
export const ArrowBox = styled.div`
  width: 0px;
  height: 0px;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid #fff;
`;
export const UserProfile = styled.div`
  width: 180px;
  height: 210px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 2px 2px 7px #999;
`;
export const UserNameBox = styled.div`
  margin-bottom: 8px;
  color: #7b7b7b;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border-bottom: 3px solid #ffa230;
  }
`;
export const UserName = styled.span`
  color: #ffa230;
`;
export const UserPointBox = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #676767;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border-bottom: 3px solid #ffa230;
  }
`;
export const UserPoint = styled.span`
  font-size: 16px;
  color: #ffa230;
  cursor: pointer;
`;
export const MyPage = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  color: #7b7b7b;
  font-weight: 700;
  z-index: 1;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border-bottom: 2px solid #ffa230;
  }
`;
export const Note = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  color: #7b7b7b;
  font-weight: 700;
  z-index: 1;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border-bottom: 2px solid #ffa230;
  }
`;
export const Logout = styled.div`
  font-size: 16px;
  color: #7b7b7b;
  font-weight: 700;
  cursor: pointer;
  z-index: 1;
  transition: 0.2s;
  &:hover {
    border-bottom: 2px solid #ffa230;
  }
`;
