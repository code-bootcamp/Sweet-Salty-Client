import styled from "@emotion/styled";

export const OpenTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: 700;
  font-size: 16px;

  // 체크박스 인풋은 숨김처리
  .checkbox input {
    display: none;
  }

  .checkbox {
    display: flex;
    margin: 0px 30px 10px 0px;
  }

  .checkbox_text {
    display: flex;
    background-color: #d2d2d2;
    margin-left: 10px;
    font-size: 16px;
    color: #ffffff;
    padding: 7px 20px;
    border-radius: 50px;
    cursor: pointer;
    &:hover {
      background-color: #ff9a31;
      color: #ffffff;
    }
  }

  // 체크박스 테두리
  .checkbox_icon {
    display: flex;
    background-color: transparent;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    position: relative;
    cursor: pointer;
  }

  // 체크되었을 때 설정
  .checkbox input:checked + .checkbox_text {
    color: #ffffff;
    background-color: #ffa230;
  }
`;
