import StoreCardContainerPage from "../../commons/card/storeCard/StoreCard.container";
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
          <div>여기는 상단태그 선택하는 공통컨포넌트가 들어갈 자리입니다.</div>
          {/* 실시간 TOP3 */}
          <S.BestContentsSection>
            <S.BestContentsTitleArticle>
              <S.BestContentsTopArticle>실시간</S.BestContentsTopArticle>
              <S.BestContentsBottomArticle>TOP 3</S.BestContentsBottomArticle>
            </S.BestContentsTitleArticle>
            <S.BestContentsArticleTest>
              <StoreCardContainerPage />
              <StoreCardContainerPage />
              <StoreCardContainerPage />
            </S.BestContentsArticleTest>
          </S.BestContentsSection>
          {/* 상품목록들 무한스크롤 */}
          <div></div>
        </S.MainContentsSection>
      </S.Main>
      {/* 위로 올라가기 버튼 */}
      <div>하이</div>
    </S.Page>
  );
}
