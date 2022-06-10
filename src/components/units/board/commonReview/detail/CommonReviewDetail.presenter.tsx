// 일반리뷰 상세보기 Presenter  - 김치훈

import DetailMapPage from "../../../../commons/detailMap/DetailMap.index";
import Hits from "../../../../commons/hits";
import { getDate } from "../../../../commons/libraries/date";
import LikeButton from "../../../../commons/like";
import ToastViewerPage from "../../../../commons/toast/viewer";
import TopButton from "../../../../commons/topbutton";
import CommentListContainerPage from "../../../comment/commentList/CommentList.container";
import CommentWriteContainerPage from "../../../comment/commentWrite/CommentWrite.presenter";
import * as S from "./CommonReviewDetail.styles";

export default function ReviewDetailPresenter(props: any) {
  return (
    <S.Wrapper>
      {props.data?.boardSubject === "REVIEW" && (
        <S.Title>
          단짠 게시판 <S.RightOutline /> 단짠 리뷰
        </S.Title>
      )}
      {props.data?.boardSubject === "TASTER" && (
        <S.Title>
          단짠 게시판 <S.RightOutline /> 시식단 리뷰
        </S.Title>
      )}
      {props.data?.boardSubject === "VISITED" && (
        <S.Title>
          단짠 게시판 <S.RightOutline /> 가봤어요!
        </S.Title>
      )}

      <S.TotalBox>
        {/* 다른 유저가 작성한 글일때 */}
        {props.data?.user?.userNickname !== props.loginUser?.userNickname && (
          <>
            <S.MemberProfile
              onClick={props.onClickProfile}
              src={
                props.data?.user?.userImage
                  ? `https://storage.googleapis.com/${props.data?.user?.userImage}`
                  : "/images/logo.png"
              }
            />
            <S.ArrowImg
              src="/images/Polygon.png"
              data={props.data}
              loginUser={props.loginUser}
            />
          </>
        )}

        <S.ReviewBox>
          <S.Header>
            <S.HeaderBox>
              <S.BoardTitleArticle>
                {props.data?.boardSubject === "REVIEW" && (
                  <S.BoardReviewCategory>단짠 리뷰</S.BoardReviewCategory>
                )}
                {props.data?.boardSubject === "TASTER" && (
                  <S.BoardTesterCategory>시식단 리뷰</S.BoardTesterCategory>
                )}
                {props.data?.boardSubject === "VISITED" && (
                  <S.BoardTesterCategory>가봤어요!</S.BoardTesterCategory>
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
              <S.UserName onClick={props.onClickProfile}>
                {props.data?.boardWriter || "푸딩"}
              </S.UserName>{" "}
              단짝님
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
              {props.data?.boardSides.map((el: any, idx: any) => (
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
              {props.data?.place.lat.length ? (
                <DetailMapPage address={props.data} />
              ) : (
                <div>잠시만요</div>
              )}
            </S.MapBox>
          </S.MapSection>

          <S.Buttons>
            <S.Button onClick={props.onClickCommonReviewList}>
              목록으로
            </S.Button>
            {props.loginUser?.userEmail === props.data?.user?.userEmail && (
              <div>
                <S.EditButton>수정하기</S.EditButton>
                <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
              </div>
            )}
          </S.Buttons>

          <S.ReviewHr />

          <S.CommentBox>
            <S.CommentTitle>댓글</S.CommentTitle>
            <CommentWriteContainerPage
              data={props.data}
              loginUser={props.loginUser}
            />
            <CommentListContainerPage />
          </S.CommentBox>
        </S.ReviewBox>

        {/* 내가 작성한 글일때 */}
        {props.loginUser?.userEmail === props.data?.user?.userEmail && (
          <>
            <S.ArrowImg
              src="/images/Polygon.png"
              data={props.data}
              loginUser={props.loginUser}
            />
            <S.MemberProfile
              onClick={props.onClickProfile}
              src={
                props.data?.user?.userImage
                  ? `https://storage.googleapis.com/${props.data?.user?.userImage}`
                  : "/images/logo.png"
              }
            />
          </>
        )}
      </S.TotalBox>

      <S.TopButtonBox>
        <TopButton />
      </S.TopButtonBox>
    </S.Wrapper>
  );
}
