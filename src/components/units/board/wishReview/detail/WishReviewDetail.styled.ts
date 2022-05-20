// 가봤어요! Detail styles -김치훈

import styled from "@emotion/styled";
import { RightOutlined } from "@ant-design/icons"


export const Wrapper = styled.div`
  padding-bottom: 100px;
  width: 100%;
  background: radial-gradient(#ff6e30, #ff9a31);
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.div`
  padding: 100px 0;
  font-size: 40px; 
  font-weight: 700;
  display: flex;
  align-items: center;
  color: #fff;
`
export const RightOutline = styled(RightOutlined)`
  padding: 0 15px;
  color: #fff;
`

export const ReviewWriteBox = styled.div`
  padding: 40px;
  width: 1000px;
  background: #fff;
  border-radius: 20px;
`;

export const RightBoxHr = styled.div`
  margin: 20px 0;
  width: 446px;
  height: 1.5px;
  border-radius: 50px;
  background: #DADADA;
`
