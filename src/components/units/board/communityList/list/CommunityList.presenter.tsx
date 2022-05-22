import * as S from "./CommunityList.styled";
import InfiniteScroll from "react-infinite-scroller";
import SearchBarPage from "../../../../commons/searchbar/SearchBar.container";
import ReviewMenuPage from "../../../../commons/reviewMenu";
import BestCommunityCardContainerPage from "../../../../commons/card/BestCommunityCard/BestCommunityCard.container";
import CommunityCardContainerPage from "../../../../commons/card/CommunityCard/CommunityCard.container";
import TopButton from "../../../../commons/topbutton";

export default function CommunityListPresenterPage(props) {
  return (
    <S.CommonReviewWrapper>
      <S.Title>전체 게시판</S.Title>
      <S.CommonReviewOutBox>
        <S.SearchbarBox>
          <SearchBarPage />
        </S.SearchbarBox>

        <ReviewMenuPage />

        <S.CommonReviewInnerBox>
          <S.TopThreeBox>
            <S.TopThreeTitle>
              <S.TopDiv>실시간</S.TopDiv>
              <S.BottomDiv>Top 3</S.BottomDiv>
            </S.TopThreeTitle>

            <S.ReviewSection>
              {/* 베스트리뷰3개 */}
              <BestCommunityCardContainerPage />
            </S.ReviewSection>
          </S.TopThreeBox>

          <S.CommonReviewHr />

          {/* 리뷰리스트 */}
          <div style={{ height: "700px", overflow: "auto" }}>
            <InfiniteScroll
              pageStart={0}
              loadMore={props.loadMore}
              hasMore={false}
              useWindow={false}
            >
              <S.ReviewList>
                {props.fetchBoardsData?.fetchBoards.map((el: any) => (
                  <CommunityCardContainerPage key={el.boardId} el={el} />
                ))}
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
