// 여기는 시식단 리뷰 List Presenter 입니다.

import FilterContainer from "../../../../commons/filter/filter.container";
import ReviewMenuPage from "../../../../commons/reviewMenu";
import SearchBarPage from "../../../../commons/searchbar/SearchBar.container";
import TopButton from "../../../../commons/topbutton";
import * as S from "./TesterReviewList.styled";

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
          {/* filter 공동컴포넌트 */}
          <FilterContainer />
        </S.CommonReviewInnerBox>
      </S.CommonReviewOutBox>
      <S.TopButtonArticle>
        <TopButton />
      </S.TopButtonArticle>
    </S.CommonReviewWrapper>
  );
}
