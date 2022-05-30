import DetailMapPage from "../../../../commons/detailMap/DetailMap.index";
import Hits from "../../../../commons/hits";
import { getDate } from "../../../../commons/libraries/date";
import LikeButton from "../../../../commons/like";
import ToastViewerPage from "../../../../commons/toast/viewer";
import TopButton from "../../../../commons/topbutton";
import WriteBtnContainerPage from "../../../../commons/writeBtn/WriteBtn.container";
import CommentListContainerPage from "../../../comment/commentList/CommentList.container";
import CommentWriteContainerPage from "../../../comment/commentWrite/CommentWrite.presenter";
import * as S from "./WishDetail.styled";

export default function WishDetailPresenterPage(props: any) {
  return (
    <S.Wrapper>
      <S.Title>
        단짠 게시판 <S.RightOutline />
        가주세요!
      </S.Title>

      <S.ReviewWriteBox>
        <S.Header>
          <S.HeaderBox>
            <S.HeaderLeft>
              <S.Category>가주세요!</S.Category>
              <S.BoardTitle>{props.data?.boardTitle}</S.BoardTitle>
            </S.HeaderLeft>

            <S.HeaderRight>
              <S.CountBox onClick={props.onClickLike}>
                <LikeButton />
                {props.data?.boardLikeCount}
              </S.CountBox>
              <S.CountBox>
                <Hits />
                {props.data?.boardHit}
              </S.CountBox>
            </S.HeaderRight>
          </S.HeaderBox>

          <S.UserNameBox>
            <S.UserName>{props.data?.boardWriter || "푸딩"}</S.UserName> 단짝님
          </S.UserNameBox>
          <S.P>|</S.P>
          <S.CreateAt>{getDate(props.data?.createAt)}</S.CreateAt>
        </S.Header>

        <S.SectionBox>
          <S.DetailedReview>세부 리뷰</S.DetailedReview>
          <S.DetailedReviewText>
            <ToastViewerPage contents={props.data?.boardContents} />
          </S.DetailedReviewText>
        </S.SectionBox>

        <S.KakaoMap>
          <S.KakaoMapTitle>가게위치</S.KakaoMapTitle>
          <S.KakaoMapMap>
            {props.data?.place.lat.length ? (
              <DetailMapPage address={props.data} />
            ) : (
              <div>잠시만요</div>
            )}
          </S.KakaoMapMap>
        </S.KakaoMap>

        <S.ButtonBox>
          <S.LeftButton>
            <S.Button onClick={props.onClickWishList}>목록으로</S.Button>
            <S.EditButton>수정하기</S.EditButton>
            <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
          </S.LeftButton>
          <S.LeftButton>
            <WriteBtnContainerPage
              checkPage={props.checkPage}
              wishId={props.wishId}
            />
          </S.LeftButton>
        </S.ButtonBox>

        <S.ReviewHr />

        <S.CommentBox>
          <S.CommentTitle>댓글</S.CommentTitle>
          <CommentWriteContainerPage />
          <CommentListContainerPage />
        </S.CommentBox>
      </S.ReviewWriteBox>

      <S.TopButtonBox>
        <TopButton />
      </S.TopButtonBox>
    </S.Wrapper>
  );
}
