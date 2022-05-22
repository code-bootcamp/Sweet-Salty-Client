// mypage 회원 정보 변경 styles --- 김치훈

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 100px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  padding-bottom: 100px;
  font-weight: 700;
  font-size: 40px;
`;
export const SearchBarBox = styled.div`
  padding-bottom: 46px;
`;
export const NoticeBox = styled.div`
  padding: 44px 40px;
  width: 1100px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 10px #dbdbdb;
`;


export const WriteTitle = styled.div`
  padding: 40px 0 10px 0;
  font-size: 16px;
  font-weight: 700;
`;
export const FlexBox = styled.div`
  display: flex;
`

export const InputBox = styled.input`
  padding: 12px 16px;
  width: 445px;
  height: 46px;
  border: 2px solid #dadada;
  border-radius: 10px;
  color: #676767;
  font-size: 14px;
  font-weight: 700;
  outline-color: #676767;
  ::placeholder {color: #dbdbdb;}
`

export const Button = styled.button`
  margin: 0 9px;
  padding: 7px 30px;
  background: #fff;
  border: 2px solid #DADADA;
  border-radius: 10px;
  color: #676767;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #FF9A31;
    border: 2px solid #FF9A31;
  &:active {
    color: #FFf;
    background: #FF9A31;
  }
`

export const SubWriteTitle = styled.div`
  padding: 20px 0 10px 0;
  font-size: 12px;
  font-weight: 700;
  color:#676767;
`;
export const Span = styled.span`
  margin-left: 4px;
  font-size: 12px;
  font-weight: 500;
`
  export const CategoryBox = styled.div`
    display: flex;
    flex-wrap: wrap;
  `
  export const Category = styled.div`
    margin: 7px 9px 0 0;
    padding: 10px 20px;
    color: #fff;
    transition: 0.2s;
    cursor: pointer;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 700;
    background: #dbdbdb;
    &:hover {
      background: #FF9A31;
    }
    `
    export const SectionHr = styled.div`
      margin: 20px 0;
      width: 920px;
      height: 1.5px;
      border-radius: 50px;
      background: #DADADA;
    `
    export const MoodBox = styled.div`
      display: flex;
      flex-wrap: wrap;
    `

    export const ButtonBox = styled.div`
      padding: 40px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    `
    export const CompleteButton = styled.button`
      margin: 0 9px 32px 9px;
      padding: 7px 40px;
      color: #FFF;
      background: #FF9A31;
      border: none;
      border-radius: 10px;
      font-weight: 700;
      font-size: 16px;
      cursor: pointer;
      }
      
    `
    export const ResignMB = styled.div`
      font-size: 16px;
      cursor: pointer;
    `