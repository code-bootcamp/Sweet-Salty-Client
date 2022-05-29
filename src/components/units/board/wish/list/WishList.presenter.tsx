// 여기는 가주세요 List Presenter 입니다.

import BestTasterItemContainerPage from "../../../../commons/card/BestTaesterCard/BestTasterItem.container";
import ReviewMenuPage from "../../../../commons/reviewMenu";
import TopButton from "../../../../commons/topbutton";
import WriteBtnContainerPage from "../../../../commons/writeBtn/WriteBtn.container";
import * as S from "./WishList.styled";
import { v4 as uuidv4 } from "uuid";
import InfiniteScroll from "react-infinite-scroller";
import WishCardPage from "../../../../commons/card/WishCard/WishCard";

export default function WishPresenterPage(props) {
  const dataForCategory = props.fetchBoardsCategoryData?.fetchBoardCategoryPick;
  return (
    <S.CommonReviewWrapper>
      <S.Title>가주세요! 게시판</S.Title>
      <S.CommonReviewOutBox>
        <S.SearchbarBox>
          <WriteBtnContainerPage checkPage={props.checkPage} />
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
              {props.fetchBoardBestData?.fetchBoardBest.map((el: any) => (
                <BestTasterItemContainerPage
                  key={uuidv4()}
                  el={el}
                  id={el.boardId}
                />
              ))}
            </S.ReviewSection>
          </S.TopThreeBox>
          <div style={{ height: "auto", overflow: "auto" }}>
            <InfiniteScroll
              pageStart={0}
              loadMore={props.categoryDataLoadMore}
              hasMore={false}
              useWindow={false}
            >
              <S.ReviewList>
                {dataForCategory?.map((el: any) => (
                  <WishCardPage key={uuidv4()} el={el} id={el.boardId} />
                ))}
              </S.ReviewList>
            </InfiniteScroll>
          </div>
          <S.CommonReviewHr />
        </S.CommonReviewInnerBox>
      </S.CommonReviewOutBox>
      <S.TopButtonArticle>
        <TopButton />
      </S.TopButtonArticle>
    </S.CommonReviewWrapper>
  );
}
