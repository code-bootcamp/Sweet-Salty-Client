// 일반리뷰 List 페이지 presenter

import * as S from "./CommonReviewList.styles";
import InfiniteScroll from "react-infinite-scroller";
import ReviewMenuPage from "../../../../commons/reviewMenu";
import SearchBarPage from "../../../../commons/searchbar/SearchBar.container";
import FilterContainer from "../../../../commons/filter/filter.container";
import BestReviewItemContainerPage from "../../../../commons/card/BestReviewCard/BestReviewItem.container";
import TopButton from "../../../../commons/topbutton";
import CommonReviewItemContainerPage from "../../../../commons/card/ReviewCard/ReviewItem.container";
import { v4 as uuidv4 } from "uuid";
import SearchCategoryItemContainerPage from "../../../../commons/card/CategorySearchReviewCard/CategorySearchReviewCard.container";
export default function CommonReviewPresenterPage(props: any) {
  const dataForCategory = props.fetchBoardsCategoryData?.fetchBoardCategoryPick;
  const dataForTags = props.fetchBoardWithTagData?.fetchBoardWithTags.hits.hits;

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
          <FilterContainer
            setCommonReviewSearch={props.setCommonReviewSearch}
            commonReviewSearch={props.commonReviewSearch}
          />

          <S.TopThreeBox>
            <S.TopThreeTitle>
              <S.TopDiv>실시간</S.TopDiv>
              <S.BottomDiv>Top 3</S.BottomDiv>
            </S.TopThreeTitle>

            <S.ReviewSection>
              {/* 베스트리뷰3개 */}
              {props.fetchBoardBestData?.fetchBoardBest.map((el: any) => (
                <BestReviewItemContainerPage
                  key={uuidv4()}
                  el={el}
                  id={el.boardId}
                />
              ))}
            </S.ReviewSection>
          </S.TopThreeBox>

          <S.CommonReviewHr />
          {/* 리뷰리스트 */}
          {props.commonReviewSearch.length ? (
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
            <div style={{ height: "auto", overflow: "auto" }}>
              <InfiniteScroll
                pageStart={0}
                loadMore={props.categoryDataLoadMore}
                hasMore={false}
                useWindow={false}
              >
                <S.ReviewList>
                  {dataForCategory?.map((el: any) => (
                    <CommonReviewItemContainerPage
                      el={el}
                      key={uuidv4()}
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
