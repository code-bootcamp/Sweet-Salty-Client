import * as S from "./Header.styles";

export default function LayoutHeaderUI() {
  return (
    <S.HeaderWrapper>
      <S.HeaderBox>
        <S.HeaderLogo></S.HeaderLogo>
        <S.HeaderRightBox>
          <S.HeaderMenuBox>
            <S.HeaderMenu>단짠 맛집 소개</S.HeaderMenu>
            <S.HeaderMenu>단짠 게시판</S.HeaderMenu>
            <S.HeaderMenu>단짠 스토어</S.HeaderMenu>
            <S.HeaderMenu>공지사항</S.HeaderMenu>
            <S.HeaderMenu>자주하는 질문</S.HeaderMenu>
          </S.HeaderMenuBox>
          <S.HeaderToggleBox></S.HeaderToggleBox>
        </S.HeaderRightBox>
      </S.HeaderBox>
    </S.HeaderWrapper>
  );
}
