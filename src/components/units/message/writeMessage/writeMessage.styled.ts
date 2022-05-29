import styled from "@emotion/styled";
import { RightOutlined } from "@ant-design/icons"

export const MessageBoxDiv = styled.div`
  width: 1120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  margin: 0 auto 100px auto;
  padding: 40px;
  width: 1120px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Title = styled.div`
  padding: 100px 0;
  font-size: 40px; 
  font-weight: 700;
  display: flex;
  align-items: center;
  color: #2C2C2C;
`
export const RightOutline = styled(RightOutlined)`
  padding: 0 15px;
  color:
`
export const MenuTxt = styled.div`
padding: 10px 0;
font-size: 16px;
font-weight: 700;
cursor: default;
`;

export const ReceiveUserInput = styled.input`
  border: 2px solid #dadada;
  border-radius: 10px;
  color: #676767;
  font-size: 14px;
  height: 46px;
  line-height:22px;
  padding : 16px;
  width: 300px;
  outline: none;
`;

export const MessageHr = styled.div`
    margin: 20px auto;
    width: 1040px;
    height: 2px;
    border-radius: 50px;
    background: #DADADA;
`;
export const MessageTextarea = styled.textarea`
background: #FFFFFF;
border: 2px solid #DADADA;
border-radius: 10px;
color: #676767;
font-size: 14px;
font-weight: 500;
height: 274px;
line-height: 20px;
padding:16px;
width: 1040px;
outline: none;
`;
export const BtnBoxDiv = styled.div`
  margin-top: 40px;
  width: 1040px;
  display: flex;
  justify-content: end;
`;
export const SendBtn = styled.button`
  margin: 0 20px;
  background: #Ff9a31;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  height: 40px;
  line-height: 16px;
  width: 140px;
  cursor: pointer;
`;
export const CancelBtn = styled.button`
  background: #FFFFFF;
  border: 2px solid #DADADA;
  border-radius: 10px;
  color: #676767;
  font-weight: 700;
  font-size: 16px;
  height: 40px;
  line-height: 16px;
  width: 140px;
  cursor: pointer;
`;