import * as S from "./Header.styles";

export default function LayoutHeaderPresenter() {
  return (
    <S.HeaderWrapper>
      <S.HeaderBox>
        <S.HeaderLogo></S.HeaderLogo>
        <S.HeaderMiddleBox>
          <S.HeaderMenuBox>
            <S.HeaderMenu>단짠 맛집 소개</S.HeaderMenu>
            <S.HeaderMenu>단짠 게시판</S.HeaderMenu>
            <S.HeaderMenu>단짠 스토어</S.HeaderMenu>
            <S.HeaderMenu>공지사항</S.HeaderMenu>
            <S.HeaderMenu>자주하는 질문</S.HeaderMenu>
          </S.HeaderMenuBox>

          <S.HeaderRightBox>
            <S.HeaderLogin>로그인</S.HeaderLogin>
            <p>|</p>
            <S.HeaderSignup>회원가입</S.HeaderSignup>
          </S.HeaderRightBox>
        </S.HeaderMiddleBox>
      </S.HeaderBox>
    </S.HeaderWrapper>
  );
}
