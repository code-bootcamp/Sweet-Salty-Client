// 공지사항 list Styles === 김치훈

import styled from "@emotion/styled";
import {LeftOutlined,RightOutlined} from "@ant-design/icons"

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
  width: 1338px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 10px 10px 10px #dbdbdb;
`;
export const NoticeTh = styled.div`
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #676767;
  font-weight: 700;
  text-align: center;
`;
export const NoticeThNumber = styled.div`
  width: 133.8px;
  cursor: default;
`;
export const NoticeThCategory = styled.div`
  width: 200.7px;
  cursor: default;
`;
export const NoticeThTitle = styled.div`
  width: 602.1px;
  cursor: default;
`;
export const NoticeThCreateAt = styled.div`
  width: 267.6px;
  cursor: default;
`;
export const NoticeThHits = styled.div`
  width: 133.8px;
  cursor: default;
`;

export const NoticeThHr = styled.div`
  width: 1290px;
  height: 2px;
  border-radius: 50px;
  background: #FF9A31;
  `;
  export const NoticeTdHr = styled.div`
  width: 1290px;
  height: 1px;
  border-radius: 50px;
  background: #DADADA;
`;

export const NoticeTd = styled.div`
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: #2C2C2C;
  font-weight: 700;
`;
export const NoticeTdNumber = styled.div`
  width: 133.8px;
  cursor: default;
`;
export const NoticeTdCategory = styled.div`
  width: 200.7px;
  cursor: default;
`;
export const NoticeTdTitle = styled.div`
  width: 602.1px;
  text-align: start;
  cursor: pointer;
`;
export const NoticeTdCreateAt = styled.div`
  width: 267.6px;
  cursor: default;
`;
export const NoticeTdHits = styled.div`
  width: 133.8px;
  cursor: default;
`;



export const PagenationBox = styled.div`
  padding: 40px 0 ;
`;
export const Pagenation = styled.div`
  width: 150px;
  height: 40px;
  background: #fff;
  border-radius: 50px;
  box-shadow: 5px 5px 5px #dbdbdb;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 12px;
`;
export const Prev = styled(LeftOutlined)`
  font-size: 12px;
  cursor: pointer;
  &:hover {
    color: #FF9A31;
  }
  `;
export const Num = styled.div`
  cursor: pointer;
  &:hover {
    color: #FF9A31;
  }
`;
export const Next = styled(RightOutlined)`
font-size: 12px;
  cursor: pointer;
  &:hover {
    color: #FF9A31;
}
`;