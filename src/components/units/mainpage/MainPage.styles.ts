import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const MainPageWrapper = styled.div`
  width: 100%;
  height: 2613px;
  background: #dbdbdb;
`;
export const MainPageBody = styled.div`
  margin: 0 auto;
  width: 1238px;
  height: 2097px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MainPageSearchBox = styled.div`
  margin: 30px auto;
  width: 500px;
  height: 50px;
  background: #fff;
  border: 3px solid #ffa230;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;
export const MainPageSearch = styled.input`
  width: 400px;
  border: none;
  padding: 5px 20px;
  font-weight: 700;
`;
export const SearchIcon = styled(SearchOutlined)`
  margin: 13px 20px;
  font-size: 20px;
  color: #ffa230;
`;
export const MainPageCategory = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 550px;
  background: #ff0;
`;
export const MainPageCategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const MainPageMenu = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin: 0 20px;
  padding: 15px 80px;
  color: #999;
  text-align: center;
  border: 3px solid #ffa230;
  border-bottom: none;
  border-radius: 20px 20px 0 0;
  cursor: pointer;
  background: #fff;
  &: hover {
    background: #ffa230;
    color: #fff;
  }
`;
export const MainPageReview = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 436px;
  background: #fff;
`;
export const MainPageReviewBox = styled.div`
  display: flex;
  background: #fff;
  overflow-x: scroll;
`;
export const MainPageReviewTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin: 0 auto;
`;
