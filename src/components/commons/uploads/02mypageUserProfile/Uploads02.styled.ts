// 마이페이지 이미지 업로드 styles --- 김치훈

import { CheckCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";



export const ImgBox = styled.div`
  width: 146px;
  height: 106px;
  display: flex;
  justify-content: end;
  align-items: end;
`;
export const UploadImage = styled.img`
  width: 106px;
  height: 106px;
  cursor: default;
  object-fit: cover;
  border-radius: 50%;
  background: linear-gradient(#ff6e30, #ffa230);
  display: flex;
  justify-content: end;
  align-items: end;
`;
export const ButtonBox = styled.div`
  height: 106px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  transform: translate(-20px,0);

`
export const UploadButton = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #C9C9C9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: linear-gradient(#ff6e30, #ffa230);
  }
  img {
    transition: 0.2s;
    width: 24px;
    &:hover {
      width: 28px;
    }
  }
`;
export const UploadButtonLeft = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #C9C9C9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    transform: rotate(360deg);
    background: linear-gradient(#ff6e30, #ffa230);
  }
`;
export const CheckCircle = styled(CheckCircleOutlined)`
  color: #fff;
`

export const UploadFileHidden = styled.input`
  display: none;
`;
