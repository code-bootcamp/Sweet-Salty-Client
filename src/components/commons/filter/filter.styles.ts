// 단짠 게시판 페이지-필터-박스 styles === 김치훈

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1290px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 10px #dbdbdb;
`;
export const FilterBox = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;
export const FilterTitle = styled.div`
  margin-right: 30px;
  font-weight: 700;
`;
export const FilerIcon = styled.img`
  width: 25px;
  object-fit: contain;
  cursor: pointer;
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 80px;
  background: #dbdbdb;
`;

export const TagBox = styled.div`
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
`;
export const Tag = styled.div`
  margin: 5px 5px 5px 0;
  padding: 7px 20px;
  border-radius: 50px;
  color: #7b7b7b;
  font-weight: 700;
  font-size: 16px;
  border: 2px solid #dbdbdb;
`;

export const OpenFilter = styled.div`
  width: 1290px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 10px #dbdbdb;
`;
export const OpenFilterBox = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;
export const SelectBox = styled.div`
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px solid #dbdbdb;
  color: #676767;
  font-size: 16px;
  font-weight: 700;
`;
export const HorizontalLine = styled.div`
  width: 1242px;
  height: 1px;
  background: #dbdbdb;
`;
export const OpenLotationTagBox = styled.div`
  width: 994px;
  display: flex;
  flex-wrap: wrap;
`;
export const OpenTagBox = styled.div`
  width: 1162px;
  display: flex;
  flex-wrap: wrap;
`;
export const OpenTag = styled.div`
  margin: 0px 5px 5px 0;
  padding: 7px 20px;
  border-radius: 50px;
  color: #7b7b7b;
  font-weight: 700;
  font-size: 16px;
  border: 2px solid #dbdbdb;
`;
export const ButtonBox = styled.div`
  margin: 30px 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.div`
  margin: 0 15px;
  padding: 10px 40px;
  color: #7b7b7b;
  border: 2px solid #dbdbdb;
  border-radius: 15px;
  transition: 0.2s;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  &:hover {
    border: 2px solid #ff9a31;
    color: #ff9a31;
  }
`;
