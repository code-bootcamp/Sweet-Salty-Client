import styled from "@emotion/styled";


export const UploadImage = styled.img`
  width: 210px;
  height: 210px;
  cursor: pointer;
  object-fit: cover;
  border-radius: 20px;
`;

export const UploadButton = styled.button`
  width: 210px;
  height: 210px;
  background: #dbdbdb;
  border-radius: 20px;
  outline: none;
  font-size: 16px;
  border: none;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  transition: .2s;
  &:hover {
    color: #FF9A31;
    font-size: 20px;
  }
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
