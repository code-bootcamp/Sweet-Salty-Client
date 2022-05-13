import ListBox from "../../commons/listbox";
import * as S from "./MainPage.styles";

export default function MainpageUI() {
  return (
    <S.MainPageWrapper>
      <S.MainPageBody>
        <S.MainPageSearchBox>
          <S.MainPageSearch
            type="text"
            placeholder="지역, 음식 또는 식당명을 입력하세요."
          ></S.MainPageSearch>
          <S.SearchIcon />
        </S.MainPageSearchBox>

        <S.MainPageCategory>
          <S.MainPageCategoryBox>
            <S.MainPageMenu>단짠 카테고리</S.MainPageMenu>
            <S.MainPageMenu>시식단 리뷰</S.MainPageMenu>
            <S.MainPageMenu>가주세요!</S.MainPageMenu>
            <S.MainPageMenu>가봤어요!</S.MainPageMenu>
          </S.MainPageCategoryBox>

          <S.MainPageReview>
            <S.MainPageReviewTitle> 최신 단짠 리뷰 </S.MainPageReviewTitle>
            <S.MainPageReviewBox>
              <ListBox />
              <ListBox />
              <ListBox />
              <ListBox />
              <ListBox />
              <ListBox />
              <ListBox />
            </S.MainPageReviewBox>
          </S.MainPageReview>
        </S.MainPageCategory>
      </S.MainPageBody>
    </S.MainPageWrapper>
  );
}
