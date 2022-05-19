import styled from "@emotion/styled";

interface IRegisterButton {
  aaa: boolean;
}

export const OpenTag = styled.div`
  margin: 0px 20px 0px 0px;
  padding: 7px 20px;
  border-radius: 50px;
  color: #7b7b7b;
  font-weight: 700;
  font-size: 16px;
  border: 2px solid #dbdbdb;
`;

export const RadioLabel = styled.label`
  display: inline-block;

  border-radius: 20px;
`;

export const RadioInput = styled.input`
  display: none;
  &:checked + ${OpenTag} {
    background-color: red;
  }
`;
