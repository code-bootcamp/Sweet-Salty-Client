import styled from "@emotion/styled";

export const UploadImage = styled.img`
  width: 300px;
  height: 210px;
  cursor: pointer;
  object-fit: contain;
  border-radius: 20px;
`;

export const UploadButton = styled.button`
  width: 300px;
  height: 210px;
  margin-right: 20px;
  background: #dbdbdb;
  border-radius: 20px;
  outline: none;
  font-size: 16px;
  border: none;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  transition: 0.2s;
  &:hover {
    color: #ff9a31;
    font-size: 20px;
  }
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
