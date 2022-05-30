import styled from "@emotion/styled";

export const CommentBox = styled.div`
  padding: 40px 0;
  width: 920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;
export const Input = styled.textarea`
  padding: 11px;
  width: 760px;
  height: 40px;
  min-height: 40px;
  max-height: 80px;
  white-space: nomal;
  word-break: break-all;
  border-radius: 10px;
  border: 2px solid #dadada;
  color: #2c2c2c;
  font-size: 14px;
  outline: none;
  ::placeholder {
    font-size: 14px;
    color: #d2d2d2;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  border: 2px solid #ff9a31;
  border-radius: 10px;
  font-size: 14px;
  color: #ff9a31;
  font-weight: 700;
  background: #fff;
  outline: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #ff9a31;
    color: #fff;
  }
`;
