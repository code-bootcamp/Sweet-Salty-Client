// 여기는 가주세요 List Presenter 입니다.

import ReviewMenuPage from "../../../../commons/reviewMenu";
import SearchBarPage from "../../../../commons/searchbar/SearchBar.container";
import TopButton from "../../../../commons/topbutton";
import * as S from "./WishList.styled";

export default function WishPresenterPage() {
  return (
    <S.CommonReviewWrapper>
    <S.Title>가주세요! 게시판</S.Title>
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
