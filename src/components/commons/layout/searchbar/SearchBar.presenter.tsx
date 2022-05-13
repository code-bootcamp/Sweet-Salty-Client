import * as S from "./SearchBar.styles";

export default function SearchBarPresenter() {
  return (
    <S.Wrapper>
      <S.SearchBox>
        <S.SearchInnerBox>
          <S.SearchBar
            type="text"
            placeholder="지역, 음식 또는 식당명을 입력하세요."
          />
          <S.SearchIcon />
        </S.SearchInnerBox>
      </S.SearchBox>
    </S.Wrapper>
  );
}
