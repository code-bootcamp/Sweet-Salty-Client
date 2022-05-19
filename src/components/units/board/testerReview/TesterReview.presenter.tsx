import ReviewMenuPage from "../../../commons/reviewMenu";
import SearchBarPage from "../../../commons/searchbar/SearchBar.container";
import TopButton from "../../../commons/topbutton";
import * as S from "./TesterReview.styled";

export default function TesterReviewPresenterPage(props: any) {
  return (
    <S.CommonReviewWrapper>
    <S.Title>시식단 게시판</S.Title>
    <S.CommonReviewOutBox>
      <S.SearchbarBox>
        <SearchBarPage />
      </S.SearchbarBox>
      
      <ReviewMenuPage />

      <S.CommonReviewInnerBox>
      </S.CommonReviewInnerBox>
    </S.CommonReviewOutBox>
    <S.TopButtonArticle>
      <TopButton />
    </S.TopButtonArticle>
  </S.CommonReviewWrapper>
  );
}
