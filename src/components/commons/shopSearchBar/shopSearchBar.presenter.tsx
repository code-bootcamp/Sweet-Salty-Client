// searchbar Presenter === 김치훈

import * as S from "./shopSearchBar.styles";

export default function StoreSearchBarPresenter(props: any) {
  return (
    <S.Wrapper>
      {/* 공지사항 페이지 검색창 */}

      <S.SearchBox>
        <S.SearchInnerBox>
          <S.Select id="searchSelect">
            <option value="메뉴명">메뉴명</option>
            <option value="가게명">가게명</option>
          </S.Select>
          <S.SearchBar type="text" placeholder="검색어를 입력하세요." />
          <S.SearchIcon />
        </S.SearchInnerBox>
      </S.SearchBox>
    </S.Wrapper>
  );
}
