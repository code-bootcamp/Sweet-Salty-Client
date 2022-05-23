// 공지사항 list Styles === 김치훈

import styled from "@emotion/styled";
import { RightOutlined } from "@ant-design/icons"

export const Wrapper = styled.div`
  padding: 100px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  padding-bottom: 100px;
  font-size: 40px; 
  font-weight: 700;
  display: flex;
  align-items: center;
`
export const RightOutline = styled(RightOutlined)`
  padding: 0 15px;
`
export const SearchBarBox = styled.div`
  padding-bottom: 46px;
`;



export const ReviewMenuBox = styled.div`
  margin: 0 auto;
  width: 1120px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ReviewMenu = styled.div`
  width: 200px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 20px 20px 0 0;
  font-weight: 700;
  font-size: 20px;
  background: ${(props: any)=> props.isNotice ? "linear-gradient(#ff6e30, #ffa230)" : "#fff"};
  color: ${(props: any)=> props.isNotice ? "#fff" : "#7B7B7B"};
  
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: linear-gradient(#ff6e30, #ffa230);
    color: #fff;
  }
`;

export const NoticeBox = styled.div`
  width: 1120px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 10px 10px 10px #dbdbdb;
`;
export const NoticeTh = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #676767;
  font-weight: 700;
  text-align: center;
`;
export const NoticeThCategory = styled.div`
  width: 180px;
  cursor: default;
  font-size: 18px;
`;
export const NoticeThTitle = styled.div`
  width: 480px;
  cursor: default;
  font-size: 18px;
`;
export const NoticeThCreateAt = styled.div`
  width: 280px;
  cursor: default;
  font-size: 18px;
`;
export const NoticeThHits = styled.div`
  width: 140px;
  cursor: default;
  font-size: 18px;
`;

export const NoticeThHr = styled.div`
  width: 1072px;
  height: 2px;
  border-radius: 50px;
  background: #FF9A31;
  `;
  export const NoticeTdHr = styled.div`
  width: 1072px;
  height: 1px;
  border-radius: 50px;
  background: #DADADA;
`;

export const NoticeTd = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: #2C2C2C;
  font-weight: 700;
`;
export const NoticeTdCategory = styled.div`
  width: 180px;
  cursor: default;
  font-size: 16px;
`;
export const NoticeTdTitle = styled.div`
  width: 480px;
  text-align: start;
  cursor: pointer;
  font-size: 16px;
`;
export const NoticeTdCreateAt = styled.div`
  width: 280px;
  cursor: default;
  font-size: 16px;
`;
export const NoticeTdHits = styled.div`
width: 140px;
  cursor: default;
  font-size: 16px;
`;



export const PagenationBox = styled.div`
  padding: 40px 0 ;
`;