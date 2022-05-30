import styled from "@emotion/styled";

export const Page = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 1338px;
`;

export const TitleSection = styled.div`
  font-size: 40px;
  font-weight: 700;
  padding: 100px 0px;
`;

export const SearchSection = styled.div`
  padding: 0px 0px 46px 0px;
`;

export const ContentsSection = styled.div`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  border-radius: 20px;
  padding: 24px;
  width: 100%;
`;

export const BestContentsSection = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dadada;
  display: flex;
  padding: 30px 0px;
`;

export const BestContentsTitleArticle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 130px 0px 0px;
`;

export const BestContentsTitleTop = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: #ff9a31;
`;

export const BestContentsTitleBottom = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: #ff9a31;
`;

export const StoreContentsSection = styled.div`
  padding: 30px 0px 0px 0px;
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: 25% 25% 25% 25%;
`;

export const UpBtnSection = styled.div`
  padding: 50px 0px;
`;
