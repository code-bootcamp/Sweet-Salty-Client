import * as S from "./Store.styled";

export default function StorePresenterPage() {
  return (
    // 전체 페이지
    <S.Page>
      {/* 바디 */}
      <S.Main>
        {/* 제목 */}
        <S.TitleSection>
          <div>단짝 스토어</div>
        </S.TitleSection>
        {/* 검색바 공통컴포넌트로 작업할 거 */}
        <div>이곳은 검색바가 들어올 자리입니다.</div>
        {/* 메인페이지 */}
        <S.MainContentsSection>
          {/* 상단 태그선택 공통컴포넌트로 작업할 거 */}
          <div></div>
          {/* 실시간 TOP3 */}
          <div>
            <div>
              <div>실시간</div>
              <div>TOP 3</div>
            </div>
            <div></div>
          </div>
          {/* 상품목록들 무한스크롤 */}
          <div></div>
          {/* 위로 올라가기 버튼 */}
          <div></div>
        </S.MainContentsSection>
      </S.Main>
    </S.Page>
  );
}
