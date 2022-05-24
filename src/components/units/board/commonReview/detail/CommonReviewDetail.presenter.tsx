// 일반리뷰 상세보기 Presenter  - 김치훈

import DetailMapPage from "../../../../commons/detailMap/DetailMap.index";
import Hits from "../../../../commons/hits";
import { getDate } from "../../../../commons/libraries/date";
import LikeButton from "../../../../commons/like";
import ToastViewerPage from "../../../../commons/toast/viewer";
import TopButton from "../../../../commons/topbutton";
import CommentListContainerPage from "../../../comment/commentList/CommentList.container";
import CommentListPresenterPage from "../../../comment/commentList/CommentList.presenter";
import CommentWriteContainerPage from "../../../comment/commentWrite/CommentWrite.presenter";
import * as S from "./CommonReviewDetail.styles";

export default function ReviewDetailPresenter(props: any) {

  return (
    <S.Wrapper>
      <S.Title>
        단짠 게시판 <S.RightOutline /> 단짠 리뷰
      </S.Title>
      <S.ReviewBox>
        <S.Header>
          <S.HeaderBox>
            <S.BoardTitleArticle>
              {props.data?.boardSubject === "REVIEW" ? (
                <S.BoardReviewCategory>단짠 리뷰</S.BoardReviewCategory>
              ) : (
                <S.BoardTesterCategory>시식단 리뷰</S.BoardTesterCategory>
              )}

              <S.BoardTitle>{props.data?.boardTitle}</S.BoardTitle>
            </S.BoardTitleArticle>
            <S.RightBox>
              <S.CountBox onClick={props.onClickLike}>
                <LikeButton />
                {props.data?.boardLikeCount}
              </S.CountBox>
              <S.CountBox>
                <Hits />
                {props.data?.boardHit}
              </S.CountBox>
            </S.RightBox>
          </S.HeaderBox>

          <S.UserNameBox>
            <S.UserName>{props.data?.boardWriter || "푸딩"}</S.UserName> 단짝님
          </S.UserNameBox>
          <S.P>|</S.P>
          <S.CreateAt>{getDate(props.data?.createAt)}</S.CreateAt>
        </S.Header>

        <S.ReviewInfoSection>
          <S.SectionLeft>
            <S.ShopNameBox>
              <S.ShopName>가게명</S.ShopName>
              {props.data?.place?.placeName}
            </S.ShopNameBox>
            <S.MenuNameBox>
              <S.MenuName>주소</S.MenuName>
              {props.data?.place?.placeAddress}
            </S.MenuNameBox>
            <S.ProsBox>
              <S.Pros>단맛</S.Pros>
              {props.data?.boardSugar}
            </S.ProsBox>
            <S.ConsBox>
              <S.Cons>짠맛</S.Cons>
              {props.data?.boardSalt}
            </S.ConsBox>
          </S.SectionLeft>
          <S.Tags>
            {props.data?.boardSides.map((el, idx) => (
              <S.Tag key={idx}>{el.boardTags.boardTagName}</S.Tag>
            ))}
          </S.Tags>
        </S.ReviewInfoSection>

        <S.Section>
          <S.SectionRight>
            <S.DetailedReview>세부 리뷰</S.DetailedReview>
            <S.DetailedReviewText>
              <ToastViewerPage contents={props.data?.boardContents} />
            </S.DetailedReviewText>
          </S.SectionRight>
        </S.Section>

        <S.MapSection>
          <S.MapTitle>가게 위치</S.MapTitle>
          <S.MapBox>
            <DetailMapPage address={props.data} />
          </S.MapBox>
        </S.MapSection>

        <S.Buttons>
          <S.Button onClick={props.onClickCommonReviewList}>목록으로</S.Button>
          <S.Button>수정하기</S.Button>
          <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
        </S.Buttons>

        <S.ReviewHr />

        <S.CommentBox>
          <S.CommentTitle>단짠 리뷰에 대한 댓글</S.CommentTitle>
          <CommentWriteContainerPage />
          <CommentListPresenterPage/>
          <CommentListContainerPage/>
          
        </S.CommentBox>
      </S.ReviewBox>

      <S.TopButtonBox>
        <TopButton />
      </S.TopButtonBox>
    </S.Wrapper>
  );
}
