import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  z-index: 9999;
`;

export const SearchBox = styled.div`
  margin: 40px auto;
  width: 500px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#ff6e30, #ffa230);
`;
export const SearchInnerBox = styled.div`
  width: 494px;
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
`;
