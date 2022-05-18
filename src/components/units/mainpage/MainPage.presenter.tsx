// Mainpage 메인페이지 presenter - 김치훈

import SearchBarPage from "../../commons/searchbar/SearchBar.container";
import TopButton from "../../commons/topbutton";
import * as S from "./MainPage.styles";

export default function MainpagePresenter(props: any) {
  return (
    <S.MainPageWrapper>
    <S.SearchbarBox>
      <SearchBarPage />
    </S.SearchbarBox>
      <S.MainPageOutBox>
        <S.ReviewMenuBox>
          <S.ReviewMenu>단짠 리뷰</S.ReviewMenu>
          <S.ReviewMenu>시식단 리뷰</S.ReviewMenu>
          <S.ReviewMenu>가주세요!</S.ReviewMenu>
        </S.ReviewMenuBox>
        <S.MainPageInnerBox>
          <S.ReviewHeader>
            <S.ReviewTitle>최신 단짠 리뷰</S.ReviewTitle>
            <S.ReviewArror onClick={props.onClickCommonReview}>→</S.ReviewArror>
          </S.ReviewHeader>
          <S.ReviewSection>{/* 리뷰 공동컴포넌트 올리는 곳 */}</S.ReviewSection>
        </S.MainPageInnerBox>
      </S.MainPageOutBox>

      <S.MainPageOutBox>
        <S.MainPageInnerBox>
          <S.ReviewHeader>
            <S.ReviewTitle>광고(시식단) 단짠 리뷰</S.ReviewTitle>
            <S.ReviewArror>→</S.ReviewArror>
          </S.ReviewHeader>
          <S.ReviewSection>{/* 리뷰 공동컴포넌트 올리는 곳 */}</S.ReviewSection>
        </S.MainPageInnerBox>
      </S.MainPageOutBox>

      <S.MainPageOutBox>
        <S.MainPageInnerBox>
          <S.ReviewHeader>
            <S.ReviewTitle>단짝님을 위한 리뷰</S.ReviewTitle>
            <S.ReviewArror>→</S.ReviewArror>
          </S.ReviewHeader>
          <S.ReviewSection>{/* 리뷰 공동컴포넌트 올리는 곳 */}</S.ReviewSection>
        </S.MainPageInnerBox>
      </S.MainPageOutBox>

      {/* 공동컴포넌트에 width와 height를 다시 줘야합니다. merge하고 조정하겠음 */}
      <S.MainPageLoginOutBox>
        <S.MainPageLoginInnerBox>
          <S.MainPageInnerText>
            단짠님이 선호하는 맞십 리뷰를 보고싶다면?
          </S.MainPageInnerText>
          <S.FlexBox>
            <S.Login>로그인</S.Login>
            <S.P>|</S.P>
            <S.Signup>회원가입</S.Signup>
          </S.FlexBox>
        </S.MainPageLoginInnerBox>
      </S.MainPageLoginOutBox>

      <S.MainPageOutBox>
        <S.MainPageInnerBox>
          <S.ReviewHeader>
            <S.ReviewTitle>TOP 3 단짠 리뷰</S.ReviewTitle>
            <S.ReviewArror>→</S.ReviewArror>
          </S.ReviewHeader>
          <S.ReviewSection>{/* 리뷰 공동컴포넌트 올리는 곳 */}</S.ReviewSection>
        </S.MainPageInnerBox>
      </S.MainPageOutBox>

      <TopButton />
    </S.MainPageWrapper>
  );
}
