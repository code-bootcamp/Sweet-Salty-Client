// 여기는 가주세요 List styles 입니다.

import styled from "@emotion/styled";

export const CommonReviewWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  padding: 100px 0;
`;
export const CommonReviewOutBox = styled.div`
  /* margin: 0 auto 40px auto; */
  width: 1338px;
`;

export const SearchbarBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 46px;
`;

export const CommonReviewInnerBox = styled.div`
  position: relative;
  box-shadow: 10px 0px 10px #dbdbdb;
  margin: 0 auto;
  padding: 24px;
  width: 1338px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

export const TopThreeBox = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;
export const TopThreeTitle = styled.div`
  display: flex;
  flex-direction: column;
  cursor: default;
  color: #ff9a31;
`;
export const TopDiv = styled.div`
  font-size: 20px;
  font-weight: 700;
  cursor: default;
`;

export const BottomDiv = styled.div`
  font-size: 30px;
  font-weight: 800;
`;

export const ReviewSection = styled.div`
  width: 1072px;
  display: flex;
  align-items: center;
`;

export const CommonReviewHr = styled.div`
  margin-bottom: 30px;
  width: 1290px;
  height: 2px;
  background: #dadada;
`;

export const ReviewList = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: 25% 25% 25% 25%;
`;

export const TopButtonArticle = styled.div`
  padding: 50px 0px;
`;
