import * as S from "./Footer.styles";

export default function LayoutFooterUI() {
  return (
    <S.FooterWrapper>
      <S.FooterBox>
        <S.FooterText>
          개인정보처리방침｜이용약관｜위치기반 서비스 이용약관
        </S.FooterText>
        <S.FooterText>
          ㈜단짠 맛집｜대표이사 : 김민영｜소재지 : 서울특별시 구로구 디지털로
          300 지밸리 비즈 프라자 12,13층 패스트파이브
        </S.FooterText>
        <S.FooterText>이메일 문의 : danjjanmatjib@gmail.com</S.FooterText>
        <S.FooterText>전화 문의 : 010-0000-0000</S.FooterText>
      </S.FooterBox>
    </S.FooterWrapper>
  );
}
