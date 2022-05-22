// 여기는 시식단 리뷰 List Presenter 입니다.

import BestTasterItemContainerPage from "../../../../commons/card/BestTaesterCard/BestTasterItem.container";
import FilterContainer from "../../../../commons/filter/filter.container";
import ReviewMenuPage from "../../../../commons/reviewMenu";
import SearchBarPage from "../../../../commons/searchbar/SearchBar.container";
import TopButton from "../../../../commons/topbutton";
import * as S from "./TesterReviewList.styled";
import InfiniteScroll from "react-infinite-scroller";
import TasterCardContainerPage from "../../../../commons/card/TaesterCard/TaesterCard.container";

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

          <S.TopThreeBox>
            <S.TopThreeTitle>
              <S.TopDiv>실시간</S.TopDiv>
              <S.BottomDiv>Top 3</S.BottomDiv>
            </S.TopThreeTitle>
            <S.ReviewSection>
              {/* 베스트리뷰3개 */}
              <BestTasterItemContainerPage />
            </S.ReviewSection>
          </S.TopThreeBox>

          <S.CommonReviewHr />

          <div style={{ height: "700px", overflow: "auto" }}>
            <InfiniteScroll
              pageStart={0}
              loadMore={props.loadMore}
              hasMore={false}
              useWindow={false}
            >
              <S.ReviewList>
                {props.fetchBoardsCategoryData?.fetchBoardCategoryPick.map(
                  (el: any, idx) => (
                    <TasterCardContainerPage Page key={idx} el={el} />
                  )
                )}
              </S.ReviewList>
            </InfiniteScroll>
          </div>
        </S.CommonReviewInnerBox>
      </S.CommonReviewOutBox>
      <S.TopButtonArticle>
        <TopButton />
      </S.TopButtonArticle>
    </S.CommonReviewWrapper>
  );
}
