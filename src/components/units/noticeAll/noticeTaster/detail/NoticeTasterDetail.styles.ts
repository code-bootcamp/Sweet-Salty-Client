// 공지사항 Taster Detail styles --- 김치훈

import styled from "@emotion/styled";
import { RightOutlined } from "@ant-design/icons"


export const Wrapper = styled.div`
  width: 100%;
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
`
export const RightOutline = styled(RightOutlined)`
  padding: 0 15px;
`

export const NoticeDetail = styled.div`
  padding: 40px;
  width: 1338px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`

export const NoticeDetailHeader = styled.div`
  display: flex;
  flex-direction: column;
`
export const NoticeDetailTitleBox = styled.div`
  display: flex;
`
export const NoticeDetailCategory = styled.div`
  padding: 5px 6px;
  font-size: 10px;
  font-weight: 600;
  background: #FF9A31;
  border-radius: 5px;
  color: #fff;
`
export const NoticeDetailTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding: 0 10px;
`



export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`
export const NoticeDetailWriterBox = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`
export const HitsBox = styled.div`
  display: flex;
  justify-content: space-between;
`
export const NoticeDetailWriter = styled.span`
  font-size: 14px;
  color: #2C2C2C;
`
export const VerticalLine = styled.span`
font-size: 14px;
color: #2C2C2C;
`
export const NoticeDetailCreateAt = styled.span`
font-size: 14px;
color: #2C2C2C;
`


export const ViewCount = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: default;
`;
export const ViewIcon = styled.img`
  margin-right: 2px;
  width: 24px;
`;


export const NoticeDetailHr = styled.div`
  margin: 40px 0;
  width: 1258px;
  height: 1px;
  border-radius: 50px;
  background: #dadada;
`
export const ImageBox = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Image = styled.img`
  width: 600px;
  height: 450px;
  object-fit: cover;
  border: none;
  border-radius: 20px;
  background: #dbdbdb;
`
export const Contents = styled.div`
  margin: 82px 0;
  font-size: 16px;
  line-height: 26px;
  `
  export const P = styled.p`
  font-size: 16px;
  color: #676767;
`
export const ListButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`
export const ListButton = styled.div`
  width: 140px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid #DADADA;
  color: #676767;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border: 2px solid #ff9a31;
    color: #ff9a31;
  }
`
export const TopButtonBox = styled.div`
  padding: 50px 0;
`
