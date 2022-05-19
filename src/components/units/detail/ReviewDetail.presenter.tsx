// 일반 리뷰 상세보기 Presenter  - 김치훈

import Hits from "../../commons/hits";
import LikeButton from "../../commons/like";
import TopButton from "../../commons/topbutton";
import * as S from "./ReviewDetail.styles";

export default function ReviewDetailPresenter(props: any) {
  return (
    <S.Wrapper>
      <S.ReviewBox>
        <S.Header>
          <S.HeaderBox>
            <S.BoardTitle>
              태어나서 먹어본 크림 파스타 중에 제일 맛있어요!
            </S.BoardTitle>
            <S.RightBox>
              <LikeButton />
              <Hits />
            </S.RightBox>
          </S.HeaderBox>

          <S.UserNameBox>
            <S.UserName>주혜</S.UserName> 단짝님
          </S.UserNameBox>
          <S.P>|</S.P>
          <S.CreateAt>2022년 5월 10일</S.CreateAt>
        </S.Header>

        <S.Section>
          <S.SectionLeft>
            <S.ShopNameBox>
              <S.ShopName>가게명</S.ShopName> 파스타 조아
            </S.ShopNameBox>
            <S.MenuNameBox>
              <S.MenuName>메뉴명</S.MenuName> 크림 파스타
            </S.MenuNameBox>
            <S.ProsBox>
              <S.Pros>장점</S.Pros> 내부가 깨끗하고 음식이 맛있었어요!
            </S.ProsBox>
            <S.ConsBox>
              <S.Cons>단점</S.Cons> 딱히 없어요.
            </S.ConsBox>
          </S.SectionLeft>

          <S.SectionRight>
            <S.DetailedReview>세부 리뷰</S.DetailedReview>
            <S.DetailedReviewText>
              가격 저렴하면서도 맛도 같이 즐기기에 좋은 곳입니다. 평일에
              점심시간 약간 지나서 가니 자리도 비고 편안한 공간속에서 먹을 수
              있어 좋았어요^^ 간단히 파스타 즐기기에 좋은 곳입니다.
            </S.DetailedReviewText>
          </S.SectionRight>
        </S.Section>

        <S.ImageBox>
          <S.AddBt>→</S.AddBt>
        </S.ImageBox>

        <S.Tags>
          <S.Tag>양식</S.Tag>
          <S.Tag>서울특별시</S.Tag>
          <S.Tag>송파구</S.Tag>
          <S.Tag>데이트</S.Tag>
        </S.Tags>

        <S.Buttons>
          <S.Button onClick={props.onClickCommonReviewList}>목록으로</S.Button>
          <S.Button>수정하기</S.Button>
          <S.Button>삭제하기</S.Button>
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
