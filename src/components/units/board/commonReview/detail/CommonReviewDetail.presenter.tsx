// 일반리뷰 상세보기 Presenter  - 김치훈

import Hits from "../../../../commons/hits";
import { getDate } from "../../../../commons/libraries/date";
import LikeButton from "../../../../commons/like";
import ToastViewerPage from "../../../../commons/toast/viewer";
import TopButton from "../../../../commons/topbutton";
import * as S from "./CommonReviewDetail.styles";

export default function ReviewDetailPresenter(props: any) {
  console.log(props.data?.boardTitle)
  return (
    <S.Wrapper>
      <S.Title>단짠 게시판 <S.RightOutline /> 단짠 리뷰</S.Title>
      <S.ReviewBox>
        <S.Header>
          <S.HeaderBox>
            <S.BoardTitle>
              {props.data?.boardTitle}
            </S.BoardTitle>
            <S.RightBox>
              <LikeButton onClick={props.onClickLike}/>{props.data?.boardLikeCount}
              <Hits />{props.data?.boardHit}
            </S.RightBox>
          </S.HeaderBox>

          <S.UserNameBox>
            <S.UserName>{(props.data?.boardWriter) || "푸딩"}</S.UserName> 단짝님
          </S.UserNameBox>
          <S.P>|</S.P>
          <S.CreateAt>{getDate(props.data?.createAt)}</S.CreateAt>
        </S.Header>

        <S.Section>
          <S.SectionLeft>
            <S.ShopNameBox>
              <S.ShopName>가게명</S.ShopName>{props.data?.place?.placeName}
            </S.ShopNameBox>
            <S.MenuNameBox>
              <S.MenuName>주소</S.MenuName>{props.data?.place?.placeAddress}
            </S.MenuNameBox>
            <S.ProsBox>
              <S.Pros>단맛</S.Pros>{props.data?.boardSugar}
            </S.ProsBox>
            <S.ConsBox>
              <S.Cons>짠맛</S.Cons>{props.data?.boardSalt}
            </S.ConsBox>
          </S.SectionLeft>

          <S.SectionRight>
            <S.DetailedReview>세부 리뷰</S.DetailedReview>
            <S.DetailedReviewText>
            <ToastViewerPage contents={props.data?.boardContents} />
            </S.DetailedReviewText>
          </S.SectionRight>
        </S.Section>

        <S.ImageBox>
          <S.AddBt>→</S.AddBt>
        </S.ImageBox>

        <S.Tags>
          {props.data?.boardSides.map((el, idx)=>(
            <S.Tag key={idx}>{el.boardTags.boardTagName}</S.Tag>
            
            ))}
          
        </S.Tags>

        <S.Buttons>
          <S.Button onClick={props.onClickCommonReviewList}>목록으로</S.Button>
          <S.Button>수정하기</S.Button>
          <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
        </S.Buttons>

        <S.ReviewHr />

        <S.CommentBox>
          <S.CommentTitle>단짠 리뷰에 대한 댓글</S.CommentTitle>
          <S.CommentWrite>
            <S.CommentInput
              type="text"
              placeholder="이곳에 댓글을 입력하세요."
            />
            <S.CommentWriteBt>등록</S.CommentWriteBt>
            <S.WriteUserPhoto></S.WriteUserPhoto>
          </S.CommentWrite>
          <S.CommentList>
            <S.CommentUserPhoto></S.CommentUserPhoto>
            <S.Comment>
              너무 맛있어보이네요! 다음에 저도 한 번 가보려구요!
              <S.CommentCreatAt>1일전</S.CommentCreatAt>
            </S.Comment>
          </S.CommentList>
          <S.CommentList>
            <S.CommentUserPhoto></S.CommentUserPhoto>
            <S.Comment>
              다른 메뉴는 어땠나요?
              <S.CommentCreatAt>4일전</S.CommentCreatAt>
            </S.Comment>
          </S.CommentList>
        </S.CommentBox>
      </S.ReviewBox>

      <S.TopButtonBox>
        <TopButton />
      </S.TopButtonBox>
    </S.Wrapper>
  );
}
