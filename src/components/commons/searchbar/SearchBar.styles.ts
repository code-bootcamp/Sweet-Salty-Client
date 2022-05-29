// searchbar styles === 김치훈

import styled from "@emotion/styled";
import { SearchOutlined, EditOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: ${(props: any) =>
    props.isNoticeAllList ||
    props.isNoticeList ||
    props.isNoticeEventList ||
    props.isNoticePromoionList ||
    props.isNoticeTasterList
      ? "1120px"
      : "1338px"};
  display: flex;
  justify-content: ${(props: any) =>
    props.isReviewList ||
    props.isCommonReviewList ||
    props.isTesterReview ||
    props.isWishList 
      ? "end"
      : props.isNoticeAllList 
        ? "space-between"
        : "start"
    };
    align-items: center;
    background: #f3f3f3;
`;
export const SearchbarNoticeCount = styled.div`
    margin-right: 99px;
    font-size: 16px;
    font-weight: 600;
    color: #676767;
`
export const Span = styled.span`
    font-size: 16px;
    font-weight: 700;
    color: #FF9A31;
`
export const SearchBox = styled.div`
  width: 500px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#ff6e30, #ffa230);
`;
export const SearchInnerBox = styled.div`
  width: 492px;
  height: 44px;
  border-radius: 50px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  #searchSelect {
    width: 88px;
    transform: translate(12px);
    border: 1px solid #999;
    -moz-appearance: none;
  }
`;
export const Select = styled.select`
  width: 88px;
  height: 32px;
  outline: 2px solid #dadada;
  border-radius: 10px;
  font-size: 16px; 
  font-weight: 700;
  color: #676767
  ::-webkit-appearance: none; /* 네이티브 외형 감추기 */
  ::-moz-appearance: none;
`


export const SearchBar = styled.input`
  padding: 0 20px;
  width: 93%;
  height: 50px;
  font-size: 16px;
  border: none;
  outline: none;
  background: transparent;
`;
export const SearchIcon = styled(SearchOutlined)`
  color: #ffa230;
  transform: translate(-25px);
  cursor: pointer;
`;

export const ReviewWriteBox = styled.div`
  position: relative;
  margin-left: ${(props: any) =>
    props.isNoticeAllList
      ? "120px"
      : "236px"};
  // margin-left: 120px;
  width: 180px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#ff6e30, #ffa230);
`;
export const ReviewWrite = styled.div`
  width: 180px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  transition: 0.2s;
  background: linear-gradient(#ff6e30, #ffa230);
  color: #fff;
  &:hover {
    background: linear-gradient(#E8662D, #EF982E);
  }
`;

export const WriteIcon = styled(EditOutlined)`
  font-size: 16px;
  margin-right: 5px;
`;




export const UserProfileBox = styled.div`
  position: absolute;
  top: -260px;
  right: -170px;
  z-index: 1;
  width: 600px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(0, 120px);
`;
export const ArrowBox = styled.div`
  width: 0px;
  height: 0px;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #fff;
`;
export const UserProfile = styled.div`
  width: 600px;
  height: 100px;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  box-shadow: 2px 2px 7px #999;
`;

export const TotalReviewWrite = styled.div`
width: 180px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50px;
cursor: pointer;
font-size: 16px;
font-weight: 700;
background: linear-gradient(#ff6e30, #ffa230);
color: #fff;
transition: 1s;
  &:hover {
    background: linear-gradient(#E8662D, #EF982E);
  }
`;