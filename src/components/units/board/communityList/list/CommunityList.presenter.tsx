import * as S from "./CommunityList.styled";
import InfiniteScroll from "react-infinite-scroller";
import ReviewMenuPage from "../../../../commons/reviewMenu";
import CommunityCardContainerPage from "../../../../commons/card/CommunityCard/CommunityCard.container";
import TopButton from "../../../../commons/topbutton";
import WriteBtnContainerPage from "../../../../commons/writeBtn/WriteBtn.container";

export default function CommunityListPresenterPage(props) {
  console.log("888888", props);
  return (
    <S.CommonReviewWrapper>
      <S.Title>전체 게시판</S.Title>
      <S.CommonReviewOutBox>
        <S.SearchbarBox>
          <WriteBtnContainerPage checkPage={props.checkPage} />
        </S.SearchbarBox>

        <ReviewMenuPage />

        <S.CommonReviewInnerBox>
          {/* 리뷰리스트 */}
          <div style={{ height: "auto", overflow: "auto" }}>
            <InfiniteScroll
              pageStart={0}
              loadMore={props.loadMore}
              hasMore={false}
              useWindow={false}
            >
              <S.ReviewList>
                {props.fetchBoardsData?.fetchBoards.map((el: any) => (
                  <CommunityCardContainerPage
                    key={el.boardId}
                    el={el}
                    id={el.boardId}
                  />
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
