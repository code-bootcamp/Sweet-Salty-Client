import * as S from "./Store.styled";
import TopButton from "../../commons/topbutton";
import SearchBarPage from "../../commons/searchbar/SearchBar.container";
import StoreItem from "../../commons/card/StoreCard/StoreItem.presenter";
import FilterContainer from "../../commons/filter/filter.container";

export default function StorePresenterPage() {
  return (
    //   전체페이지
    <S.Page>
      {/* 메인 */}
      <S.Main>
        {/* 타이틀 */}
        <S.TitleSection>단짝 스토어</S.TitleSection>
        {/* 검색바 */}
        <S.SearchSection>
          <SearchBarPage />
        </S.SearchSection>
        {/* 내용 */}
        <S.ContentsSection>
          {/* 필터 */}
          <div>
            <FilterContainer />
          </div>
          {/* 베스트게시글 */}
          <S.BestContentsSection>
            {/* 베스트게시글타이틀 */}
            <S.BestContentsTitleArticle>
              <S.BestContentsTitleTop>실시간</S.BestContentsTitleTop>
              <S.BestContentsTitleBottom>TOP 3</S.BestContentsTitleBottom>
            </S.BestContentsTitleArticle>
            {/* 베스트게시글 */}
            <StoreItem />
            <div>베스트게시글</div>
            <div>베스트게시글</div>
          </S.BestContentsSection>
          {/* 메인게시글 */}
          <S.StoreContentsSection>메인게시글</S.StoreContentsSection>
        </S.ContentsSection>
        {/* 위로가기 버튼 */}
        <S.UpBtnSection>
          <TopButton />
        </S.UpBtnSection>
      </S.Main>
    </S.Page>
  );
}
