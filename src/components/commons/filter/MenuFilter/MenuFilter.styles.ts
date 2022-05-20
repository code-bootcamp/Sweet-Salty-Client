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
    margin-right: 30px;
  }

  .checkbox_text {
    display: flex;
    margin-left: 10px;
    font-size: 16px;
    color: #d8d8d8;
    padding: 7px 20px;
    border-radius: 50px;
    border: 2px solid #dbdbdb;
    cursor: pointer;
  }

  // 체크박스 테두리
  .checkbox_icon {
    display: flex;
    background-color: transparent;
    width: 20px;
    height: 20px;
    border: 1px solid #cacaca;
    border-radius: 2px;
    position: relative;
    cursor: pointer;
  }

  // 체크되었을 때 설정
  .checkbox input:checked + .checkbox_text {
    border: 2px solid #ffa230;
    color: #ffa230;
  }
`;
