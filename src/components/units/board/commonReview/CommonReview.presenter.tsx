// 일반리뷰페이지 presenter === 김치훈

import FilterContainer from "../../../commons/filter/filter.container";
import TopButton from "../../../commons/topbutton";
import * as S from "./CommonReview.styles";
import SearchBarPage from "../../../commons/searchbar/SearchBar.container";
import BestReviewItemContainerPage from "../../../commons/card/BestReviewCard/BestReviewItem.container";
import CommonReviewItemContainerPage from "../../../commons/card/ReviewCard/ReviewItem.container";

export default function CommonReviewPresenterPage(props: any) {
  return (
    <S.CommonReviewWrapper>
      <S.Title>단짠 게시판</S.Title>
      <S.CommonReviewOutBox>
        <S.SearchbarBox>
          <SearchBarPage />
        </S.SearchbarBox>
        <S.ReviewMenuBox>
          <S.ReviewMenu onClick={props.onClickCommonReview}>
            단짠 리뷰
          </S.ReviewMenu>
          <S.ReviewMenu>시식단 리뷰</S.ReviewMenu>
          <S.ReviewMenu>가주세요!</S.ReviewMenu>
        </S.ReviewMenuBox>

        <S.CommonReviewInnerBox>
          {/* filter 공동컴포넌트 */}
          <FilterContainer />

          <S.TopThreeBox>
            <S.TopThreeTitle>
              <S.TopDiv>실시간</S.TopDiv>
              <S.BottomDiv>Top 3</S.BottomDiv>
            </S.TopThreeTitle>

            <S.ReviewSection>
              {/* 베스트리뷰3개 */}
              <BestReviewItemContainerPage />
            </S.ReviewSection>
          </S.TopThreeBox>

          <S.CommonReviewHr />

          <S.ReviewList>
            {/* 리뷰리스트 */}
            <CommonReviewItemContainerPage />
          </S.ReviewList>
        </S.CommonReviewInnerBox>
      </S.CommonReviewOutBox>
      <S.TopButtonArticle>
        <TopButton />
      </S.TopButtonArticle>
    </S.CommonReviewWrapper>
  );
}
