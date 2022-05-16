// searchbar styles === 김치훈

import styled from "@emotion/styled";
import { SearchOutlined, EditOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 1338px;
  display: flex;
  justify-content: ${(props: any) => (props.isReviewList ? "end" : "center")};
  background: #f3f3f3;
`;

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
`;

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
  margin-left: 236px;
  width: 180px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#ff6e30, #ffa230);
`;
export const ReviewWrite = styled.div`
  width: 172px;
  height: 44px;
  line-height: 44px;
  border-radius: 50px;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  background: #fff;
  color: #7b7b7b;
  transition: 0.2s;
  &:hover {
    background: linear-gradient(#ff6e30, #ffa230);
    color: #fff;
  }
`;

export const WriteIcon = styled(EditOutlined)`
  font-size: 16px;
  margin-right: 5px;
`;
