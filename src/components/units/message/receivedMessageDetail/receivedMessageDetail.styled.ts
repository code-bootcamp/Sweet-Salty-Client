import styled from "@emotion/styled";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1120px;
  padding: 0px 0px 100px 0px;
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 40px;
  padding: 100px 0px;
`;

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

export const SenderInfo = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #676767;
`;

export const ProfileImgDiv = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50%;
  padding: 10px 0px 40px 0px;
`;
export const ProfileImg = styled.img`
  border-radius: 50%;
  height: 30px;
  width: 30px;
`;

export const Sender = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #ff9a31;
  padding: 0px 10px;
`;

export const DateSection = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #2c2c2c;
`;

export const ContentsSection = styled.div`
  border-top: 2px solid #dadada;
  border-bottom: 2px solid #dadada;
`;

export const ContentsArticle = styled.div`
  padding: 120px 0px;
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 0px;
`;

export const Button = styled.button`
  border: 2px solid #dadada;
  background-color: #ffffff;
  border-radius: 10px;
  color: #676767;
  padding: 12px 42px;
  font-weight: 700;
  font-size: 16px;
  &:hover {
    background-color: #ff9a31;
    color: #ffffff;
  }
  cursor: pointer;
`;

export const ReplyBtn = styled.button`
  border: 2px solid #dadada;
  background-color: #ffffff;
  border-radius: 10px;
  color: #676767;
  padding: 12px 42px;
  font-weight: 700;
  font-size: 16px;
  &:hover {
    background-color: #ff9a31;
    color: #ffffff;
  }
  cursor: pointer;
  margin: 0px 20px 0px 0px;
`;
