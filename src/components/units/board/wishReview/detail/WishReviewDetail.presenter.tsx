// 가봤어요! Detail Presenter -김치훈

import Hits from "../../../../commons/hits";
import LikeButton from "../../../../commons/like";
import TopButton from "../../../../commons/topbutton";
import * as S from "./WishReviewDetail.styled";

export default function WishReviewDetailPresenterPage(props: any) {
  return (

    <S.Wrapper>
    <S.Title>단짠 게시판 <S.RightOutline />가봤어요!</S.Title>

    <S.ReviewWriteBox>
      <S.Header>
        <S.HeaderBox>
          <S.HeaderLeft>
            <S.Category>가봤어요!</S.Category>
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

      

      <S.Section>
          <S.ProsBox>
            <S.Pros>장점</S.Pros> 내부가 깨끗하고 음식이 맛있었어요!
          </S.ProsBox>
          <S.ConsBox>
            <S.Cons>단점</S.Cons> 딱히 없어요.
          </S.ConsBox>
          
          <S.SelectCategoryBox>
            <S.SelectCategory>양식</S.SelectCategory>
            <S.SelectCategory>서울특별시</S.SelectCategory>
            <S.SelectCategory>송파구</S.SelectCategory>
            <S.SelectCategory>데이트</S.SelectCategory>
          </S.SelectCategoryBox>
      </S.Section>

      <S.SectionBox>
        {/* 내용 들어갈 자리 */}
      </S.SectionBox>

      <S.KakaoMap>
        <S.KakaoMapTitle>가게위치</S.KakaoMapTitle>
        <S.KakaoMapMap></S.KakaoMapMap>

      </S.KakaoMap>

      <S.ButtonBox>
        <S.Button onClick={props.onClickCommonReviewList}>목록으로</S.Button>
        <S.RightBox>
          <S.Button>수정하기</S.Button>
          <S.Button>삭제하기</S.Button>
        </S.RightBox>
      </S.ButtonBox>
    </S.ReviewWriteBox>

    <S.TopButtonBox>
      <TopButton/>
    </S.TopButtonBox>
  </S.Wrapper>
  );
}
