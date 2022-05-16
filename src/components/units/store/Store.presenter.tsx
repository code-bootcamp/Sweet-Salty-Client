import * as S from "./Store.styled";

export default function StorePresenterPage() {
  return (
    //   전체페이지
    <S.Page>
      {/* 메인 */}
      <S.Main>
        {/* 타이틀 */}
        <S.TitleSection>단짝 스토어</S.TitleSection>
        {/* 검색바 */}
        <S.SearchSection>검색바</S.SearchSection>
        {/* 내용 */}
        <S.ContentsSection>
          {/* 필터 */}
          <div>필터</div>
          {/* 베스트게시글 */}
          <S.BestContentsSection>
            {/* 베스트게시글타이틀 */}
            <S.BestContentsTitleArticle>
              <S.BestContentsTitleTop>실시간</S.BestContentsTitleTop>
              <S.BestContentsTitleBottom>TOP 3</S.BestContentsTitleBottom>
            </S.BestContentsTitleArticle>
            {/* 베스트게시글 */}
            <div>베스트게시글</div>
            <div>베스트게시글</div>
            <div>베스트게시글</div>
          </S.BestContentsSection>
          {/* 메인게시글 */}
          <S.StoreContentsSection>메인게시글</S.StoreContentsSection>
        </S.ContentsSection>
        {/* 위로가기 버튼 */}
        <S.UpBtnSection>
          <button>위로가기</button>
        </S.UpBtnSection>
      </S.Main>
    </S.Page>
  );
}