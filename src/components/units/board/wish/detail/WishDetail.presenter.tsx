// 가주세요! Detail Presenter -김치훈

import Hits from "../../../../commons/hits";
import LikeButton from "../../../../commons/like";
import TopButton from "../../../../commons/topbutton";
import * as S from "./WishDetail.styled";

export default function WishDetailPresenterPage(props: any) {
  return (

      <S.Wrapper>
      <S.Title>단짠 게시판 <S.RightOutline />가주세요!</S.Title>

      <S.ReviewWriteBox>
        <S.Header>
          <S.HeaderBox>
            <S.HeaderLeft>
              <S.Category>가주세요!</S.Category>
              <S.BoardTitle>
                태어나서 먹어본 크림 파스타 중에 제일 맛있어요!
              </S.BoardTitle>
            </S.HeaderLeft>
            
            <S.HeaderRight>
              <LikeButton />
              <Hits />
            </S.HeaderRight>
          </S.HeaderBox>

          <S.UserNameBox>
            <S.UserName>주혜</S.UserName> 단짝님
          </S.UserNameBox>
          <S.P>|</S.P>
          <S.CreateAt>2022년 5월 10일</S.CreateAt>
        </S.Header>

        <S.SectionBox>
          {/* 내용 들어갈 자리 */}
        </S.SectionBox>

        <S.KakaoMap>
          <S.KakaoMapTitle>가게위치</S.KakaoMapTitle>
          <S.KakaoMapMap></S.KakaoMapMap>

        </S.KakaoMap>

        <S.ButtonBox>
          <S.LeftButton>
            <S.Button onClick={props.onClickWishList}>목록으로</S.Button>
            <S.Button>수정하기</S.Button>
            <S.Button>삭제하기</S.Button>
          </S.LeftButton>

          <S.RightButton>
            
            <S.WishReviewWriteBox>
              <S.WishReviewWriteButton 
                onClick={props.onClickWishReviewWrite}
              >
                <S.WriteIcon />
                가봤어요! 작성하기
              </S.WishReviewWriteButton>
            </S.WishReviewWriteBox>
          </S.RightButton>
        </S.ButtonBox>



        <S.ReviewHr />

        <S.CommentBox>
          <S.CommentTitle>댓글</S.CommentTitle>
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
      </S.ReviewWriteBox>

      <S.TopButtonBox>
        <TopButton/>
      </S.TopButtonBox>
    </S.Wrapper>
  );
}
