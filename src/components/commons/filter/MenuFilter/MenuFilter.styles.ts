import styled from "@emotion/styled";

interface IRegisterButton {
  menuIsClick: boolean;
}

export const OpenTag = styled.div`
  margin: 0px 20px 0px 0px;
  padding: 7px 20px;
  border-radius: 50px;
  color: #7b7b7b;
  font-weight: 700;
  font-size: 16px;
  border: 2px solid #dbdbdb;

  border-color: ${(props: IRegisterButton) =>
    props.menuIsClick ? "#FFA230" : "#D8D8D8"};
`;

export const MenuInput = styled.input`
  display: none;
`;
