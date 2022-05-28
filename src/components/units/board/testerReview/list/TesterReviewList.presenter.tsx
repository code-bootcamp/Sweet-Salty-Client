// 여기는 시식단 리뷰 List Presenter 입니다.

import BestTasterItemContainerPage from "../../../../commons/card/BestTaesterCard/BestTasterItem.container";
import ReviewMenuPage from "../../../../commons/reviewMenu";
import SearchBarPage from "../../../../commons/searchbar/SearchBar.container";
import TopButton from "../../../../commons/topbutton";
import * as S from "./TesterReviewList.styled";
import InfiniteScroll from "react-infinite-scroller";
import TasterCardContainerPage from "../../../../commons/card/TaesterCard/TaesterCard.container";
import { v4 as uuidv4 } from "uuid";
import SearchCategoryItemContainerPage from "../../../../commons/card/CategorySearchReviewCard/CategorySearchReviewCard.container";
import FilterContainer from "../../../../commons/filter/filter.container";

export default function TesterReviewPresenterPage(props: any) {
  const dataForCategory = props.fetchBoardsCategoryData?.fetchBoardCategoryPick;
  const dataForTags = props.fetchBoardWithTagData?.fetchBoardWithTags.hits.hits;
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
          <FilterContainer setSearch={props.setSearch} search={props.search} />

          <S.TopThreeBox>
            <S.TopThreeTitle>
              <S.TopDiv>실시간</S.TopDiv>
              <S.BottomDiv>Top 3</S.BottomDiv>
            </S.TopThreeTitle>
            <S.ReviewSection>
              {/* 베스트리뷰3개 */}
              {props.fetchBoardBestData?.fetchBoardBest.map((el: any) => (
                <BestTasterItemContainerPage
                  key={uuidv4()}
                  el={el}
                  id={el.boardId}
                />
              ))}
            </S.ReviewSection>
          </S.TopThreeBox>

          <S.CommonReviewHr />
          {/* 리뷰리스트 */}
          {props.search?.length ? (
            <div style={{ height: "auto", overflow: "auto" }}>
              <InfiniteScroll
                pageStart={0}
                loadMore={props.filterDataLoadMore}
                hasMore={false}
                useWindow={false}
              >
                <S.ReviewList>
                  {dataForTags?.map((el: any) => (
                    <SearchCategoryItemContainerPage
                      el={el._source}
                      key={uuidv4()}
                      id={el._source.boardid}
                    />
                  ))}
                </S.ReviewList>
              </InfiniteScroll>
            </div>
          ) : (
            <div style={{ height: "700px", overflow: "auto" }}>
              <InfiniteScroll
                pageStart={0}
                loadMore={props.categoryDataLoadMore}
                hasMore={false}
                useWindow={false}
              >
                <S.ReviewList>
                  {dataForCategory?.map((el: any) => (
                    <TasterCardContainerPage
                      key={uuidv4()}
                      el={el}
                      id={el.boardId}
                    />
                  ))}
                </S.ReviewList>
              </InfiniteScroll>
            </div>
          )}
        </S.CommonReviewInnerBox>
      </S.CommonReviewOutBox>
      <S.TopButtonArticle>
        <TopButton />
      </S.TopButtonArticle>
    </S.CommonReviewWrapper>
  );
}
