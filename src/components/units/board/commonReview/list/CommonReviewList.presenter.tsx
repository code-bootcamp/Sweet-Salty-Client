// 일반리뷰 List 페이지 presenter

import * as S from "./CommonReviewList.styles";
import InfiniteScroll from "react-infinite-scroller";
import ReviewMenuPage from "../../../../commons/reviewMenu";
import SearchBarPage from "../../../../commons/searchbar/SearchBar.container";
import FilterContainer from "../../../../commons/filter/filter.container";
import BestReviewItemContainerPage from "../../../../commons/card/BestReviewCard/BestReviewItem.container";
import TopButton from "../../../../commons/topbutton";
import CommunityCardContainerPage from "../../../../commons/card/CommunityCard/CommunityCard.container";

export default function CommonReviewPresenterPage(props: any) {
  return (
    <S.CommonReviewWrapper>
      <S.Title>단짠 게시판</S.Title>
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
              <BestReviewItemContainerPage />
            </S.ReviewSection>
          </S.TopThreeBox>

          <S.CommonReviewHr />

          {/* 리뷰리스트 */}
          <div style={{ overflow: "auto" }}>
            <InfiniteScroll
              pageStart={0}
              loadMore={props.loadMore}
              hasMore={false}
              useWindow={false}
            >
              <S.ReviewList>
                {props.ReviewData?.fetchBoardCategoryPick.map(
                  (el: any, idx) => (
                    <CommunityCardContainerPage key={idx} el={el} />
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
