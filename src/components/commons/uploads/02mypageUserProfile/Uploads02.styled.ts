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
  cursor: pointer;
  object-fit: cover;
  border-radius: 50%;
  background: linear-gradient(#ff6e30, #ffa230);
  display: flex;
  justify-content: end;
  align-items: end;
`;

export const UploadButton = styled.button`
img {
  width: 24px;
  transition: 0.1s;
  &:hover{
    width: 28px;
  }
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #C9C9C9;
  transform: translate(-20px,0);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
