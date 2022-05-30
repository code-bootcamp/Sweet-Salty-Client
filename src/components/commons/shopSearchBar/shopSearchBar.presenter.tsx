// searchbar Presenter === 김치훈

import * as S from "./shopSearchBar.styles";

export default function StoreSearchBarPresenter(props: any) {
  return (
    <S.Wrapper>
      {/* 공지사항 페이지 검색창 */}

      <S.SearchBox>
        <S.SearchInnerBox>
          <S.Select
            id="searchSelect"
            onChange={props.onChangeSearchCondition}
            defaultValue="default"
            ref={props.conditionRef}
          >
            <option value="default" disabled>
              선택
            </option>
            <option value="title">메뉴명</option>
            <option value="seller">가게명</option>
          </S.Select>
          <S.SearchBar
            onKeyUp={props.onKeyUpInput}
            type="text"
            placeholder="검색어를 입력하세요."
          />
          <S.SearchIcon type="button" onClick={props.onClickSearchKeyWord} />
        </S.SearchInnerBox>
      </S.SearchBox>
    </S.Wrapper>
  );
}
