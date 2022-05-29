import styled from "@emotion/styled";


export const Wrapper = styled.div`
  padding-bottom: 100px;
  width: 100%;
  background: radial-gradient(#ff6e30, #ff9a31);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoImg = styled.img`
  padding-top: 100px;
  width: 350px;
`

export const Title = styled.div`
  padding: 100px 0;
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  cursor: default;
`


export const LoginForm = styled.div`
  width: 430px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.07);
  padding: 40px;
`;
export const Text = styled.div`
  padding-bottom: 10px;
  font-weight: 700;
  font-size: 16px;
  cursor: default;
`
export const InputBox = styled.div`
  padding-bottom: 30px;
`

export const ErrorTxt = styled.div`
  idth: 350px;
  font-size: 14px;
  color: #ff2900;
  cursor: default;
  
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const OrText = styled.div`
  padding-bottom: 30px;
  color: #7B7B7B;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  cursor: default;
`;
export const KakaoLoginButton = styled.div`
  width: 350px;
  height: 50px;
  font-size: 14px;
  font-weight: 700;
  background: #FBE54D;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const Kakaoimg = styled.img`
  margin-right: 10px;
  width: 20px;
`;
export const Googleimg = styled.img`
  margin-right: 10px;
  width: 16px;
`;
export const GoogleLoginButton = styled.div`
  margin-top: 30px;
  width: 350px;
  height: 50px;
  font-size: 14px;
  font-weight: 700;
  color: #7B7B7B;
  border: 2px solid #DADADA;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;


export const SubmitBtn = styled.button`
  margin-top: 80px; 
  width: 350px;
  height: 50px;
  background: linear-gradient(#ff6e30, #ffa230);
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  padding: 0 8px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const GoSignupTxt = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin-top: 25px;
  width: 100%;
  text-align: center;
  color: #7B7B7B;
  cursor: default;
`;
export const GoSignUpA = styled.a`
  font-weight: 600;
  font-size: 14px;
  text-decoration: underline;
  color: black;
  margin-left: 10px;
  color: #2C2C2C;
  &:hover {
    color: #FFA230;
    text-decoration: underline;
  }
`;