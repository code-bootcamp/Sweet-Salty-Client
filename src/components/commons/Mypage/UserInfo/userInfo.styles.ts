import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MypageBox = styled.div`
  padding: 40px 40px;
  width: 1120px;
  height: 186px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 10px 10px 10px #dbdbdb;
`;

export const UserLeftBox = styled.div`
  display: flex;
  align-items: center;
`;

export const UploadImage = styled.img`
  position: relative;
  width: 106px;
  height: 106px;
  cursor: default;
  object-fit: cover;
  border-radius: 50%;
  background: ${(props: any) =>
    props.data?.fetchUserLoggedIn?.userId
      ? "linear-gradient(#ff6e30, #ffa230)"
      : "#D2D2D2"};
  display: flex;
  justify-content: end;
  align-items: end;
  src {
    width: 24px;
  }
`;


export const ImgBox = styled.div`
  width: 146px;
  height: 106px;
  display: flex;
  justify-content: end;
  align-items: end;
`;
export const UserImage = styled.img`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(#ff6e30, #ffa230);
  display: flex;
  justify-content: end;
  align-items: end;
`;
export const ImgUpdate = styled.div`
  img {
    width: 24px;
    transition: 0.1s;
    display: none;
    &:hover {
      width: 28px;
    }
  }
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #c9c9c9;
  transform: translate(-20px, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const UserInfo = styled.div`
  padding: 0 20px;
`;
export const UserName = styled.div`
  font-size: 20px;
  font-weight: 700;
  cursor: default;
`;
export const Span = styled.span`
  color: #ff9a31;
  cursor: default;
`;
export const userProfileBox = styled.div`
  display: flex;
  align-items: center;
`;
export const userProfile = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #7b7b7b;
  cursor: default;
`;
export const userProfileInput = styled.input`
  width: 330px;
  outline: none;
  border: none;
  font-size: 14px;
  font-weight: 700;
  color: #7b7b7b;
  cursor: default;
  ::placeholder {
    color: #dadada;
  }
`;
export const userProfileUpdate = styled.div`
  cursor: pointer;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 700;
  color: #7b7b7b;
  text-decoration: underline;
`;
export const userProfileComplete = styled.div`
  cursor: pointer;
  margin-left: 5px;
  font-size: 14px;
  font-weight: 700;
  color: #ff9a31;
  text-decoration: underline;
`;
export const UserSection = styled.div`
  padding-top: 20px;
  display: flex;
  font-size: 16px;
  font-weight: 700;
`;
export const UserBox = styled.div`
  text-align: center;
`;
export const VerticalLine = styled.div`
  margin: 0 15px;
  width: 1.5px;
  height: 50px;
  border-radius: 50px;
  background: #dadada;
`;
export const UserTitle = styled.div`
  cursor: default;
  font-size: 16px;
`;
export const UserCount = styled.div`
  cursor: pointer;
  color: #ff9a31;
  font-size: 16px;
`;
export const ButtonBox = styled.div`
  cursor: default;
  height: 106px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;
export const PointButton = styled.div`
  cursor: default;
  padding: 10px 15px;
  transition: 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  border-radius: 50px;
  background: linear-gradient(#ff6e30, #ffa230);
  color: #fff;
  &:hover {
  }
`;
export const MessageButton = styled.div`
  cursor: pointer;
  padding: 10px 15px;
  font-weight: 700;
  font-size: 16px;
  border-radius: 50px;
  color: #fff;
  transition: 0.2s;
  background: linear-gradient(#ff6e30, #ffa230);
  &:hover {
    background: linear-gradient(#E8662D, #EF982E);
  }
`;
export const PointCharge = styled.div`
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
`;
export const PointImg = styled.img`
  cursor: pointer;
  margin-right: 6px;
  width: 24px;
  transition: 0.2s;
  &:hover {
  }
`;
export const MessageImg = styled.img`
  margin-right: 6px;
  width: 24px;
`;
export const Text = styled.div`
  cursor: pointer;
  margin: 0 10px 0 0;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
`;
export const Input = styled.input`
  color: #2c2c2c;
  background: transparent;
  border: none;
  color: #fff;
  font-weight: 700;
  outline: none;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::placeholder {
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const Button = styled.div`
  padding: 10px 15px;
  transition: 0.2s;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  border-radius: 50px;
  background: #c9c9c9;
  cursor: pointer;
  color: #fff;
  transition: 0.2s;
  &:hover {
    background: #b3b3b3;
  }
`;

export const FollowingButton = styled.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  border-radius: 50px;
  background: #FF6E30;
  cursor: pointer;
  color: #fff;
`;