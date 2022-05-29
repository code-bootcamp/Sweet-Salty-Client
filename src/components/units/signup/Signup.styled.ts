import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding-bottom: 100px;
  width: 100%;
  background: radial-gradient(#ff6e30, #ff9a31);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  padding: 100px 0;
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  cursor: default;
`

export const SignupForm = styled.div`
  width: 800px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.07);
  padding: 40px;
`;

export const Text = styled.div`
  padding: 30px 0 5px 0;
  font-weight: 700;
  font-size: 16px;
  cursor: default;
`
export const ErrorTxt = styled.div`
  color: #ff2900;
`;

export const PasswordBox = styled.div`
  width: 720px;
  display: flex;
  justify-content: space-between;
`
export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`
export const SelectDiv = styled.div`
display: flex;
  flex-wrap: wrap;
  font-weight: 700;
  font-size: 16px;
  justify-content: flex-start;
  // 체크박스 인풋은 숨김처리
  .checkbox input {
    display: none;
  }

  .checkbox {
    display: flex;
    margin-right: 10px;
  }

  .checkbox_text {
    display: flex;
    background-color: #d2d2d2;
    /* margin-left: 10px; */
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
// export const SelectMoodDiv = styled.div`
// display: flex;
//   flex-wrap: wrap;
//   justify-content: flex-start;
//   font-weight: 700;
//   font-size: 16px;

//   // 체크박스 인풋은 숨김처리
//   .checkbox input {
//     display: none;
//   }
//   .checkbox {
//     display: flex;
//     margin: 0px 10px 10px 0px;
//   }
//   .checkbox_text {
//     display: flex;
//     font-size: 16px;
//     color: #d8d8d8;
//     padding: 7px 20px;
//     border-radius: 50px;
//     border: 3px solid #dbdbdb;
//     cursor: pointer;
//     &:hover {
//       color: #ff9a31;
//       border: 3px solid #ff9a31;
//     }
//     .check_icon {
//       display: none;
//       width: 20px;
//       height: 15px;
//       margin: 4px 10px 0px 0px;
//     }
//   }
//   .checkbox_icon {
//     display: flex;
//     background-color: transparent;
//     width: 20px;
//     height: 20px;
//     border: 3px solid #cacaca;
//     border-radius: 2px;
//     position: relative;
//     cursor: pointer;
//   }
//   // 체크되었을 때 설정
//   .checkbox input:checked + .checkbox_text {
//     border: 3px solid #ffa230;
//     color: #ffa230;
//     .check_icon {
//       display: flex;
//     }
//   }
// `;

export const PhoneInputBox = styled.div`
  display: flex;
`
export const InputButton = styled.button`
  margin-left: 10px;
  width: 120px;
  height: 40px;
  background: #fff;
  color: #FF9A31;
  font-weight: 600;
  font-size: 14px;
  border: 2px solid #FF9A31;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
export const OutputButton = styled.button`
  margin-left: 10px;
  width: 120px;
  height: 40px;
  background: #fff;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  background: #FF9A31;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;
`

export const WriteTitle = styled.div`
  padding: 40px 0 10px 0;
  font-size: 16px;
  font-weight: 700;
  cursor: default;
`;

export const SubWriteTitle = styled.div`
  padding: 20px 0 10px 0;
  font-size: 12px;
  font-weight: 700;
  color:#676767;
  cursor: default;
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
export const ButtonBox = styled.div`
  padding: 80px 0 20px 0; 
  width: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SubmitBtn = styled.button`
  background: linear-gradient(#ff6e30, #ffa230);
  width: 350px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
`;

export const GoLoginTxt = styled.div`
  font-weight: 600;
  padding: 0 5px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: #7B7B7B;
  cursor: default;
`;
export const GoLoginA = styled.a`
font-weight: 600;
font-size: 14px;
text-decoration: underline;
color: black;
margin-left: 10px;
&:hover {
  color: #FFA230;
  text-decoration: underline;
}
`;