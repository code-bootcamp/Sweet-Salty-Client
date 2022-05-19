// 단짠 게시판 페이지-필터-박스 Presenter === 김치훈

import * as S from "./filter.styles";
import MenuFilterPage from "./MenuFilter/MenuFilter";
import MoodFilterPage from "./MoodFilter/MoodFilter";

export default function FilterPresenter(props: any) {
  return (
    <>
      {props.isOpen ? (
        <S.Wrapper>
          <S.FilterBox>
            <S.FilterTitle>메뉴</S.FilterTitle>
            <S.TagBox>{/* 태그 올리는 곳 */}</S.TagBox>
          </S.FilterBox>
          <S.VerticalLine />

          <S.FilterBox>
            <S.FilterTitle>분위기</S.FilterTitle>
            <S.TagBox>{/* 태그 올리는 곳 */}</S.TagBox>
          </S.FilterBox>
          <S.FilerIcon
            onClick={props.onClickFilterOpen}
            src="../images/filter.png"
          />
        </S.Wrapper>
      ) : (
        // filter 선택하는 박스
        <S.OpenFilter>
          <S.OpenFilterBox>
            <S.FilterTitle>메뉴</S.FilterTitle>
            <S.OpenTagBox>
              {/* filter open 태그 올리는 곳 */}

              {props.menuData?.fetchTags.map((el, index) => (
                <MenuFilterPage key={index} el={el} />
              ))}
            </S.OpenTagBox>
          </S.OpenFilterBox>

          <S.HorizontalLine />

          <S.OpenFilterBox>
            <S.FilterTitle>분위기</S.FilterTitle>
            <S.OpenTagBox>
              {/* filter open 태그 올리는 곳 */}
              {props.moodData?.fetchTags.map((el, i) => (
                <MoodFilterPage key={i} el={el} />
              ))}
            </S.OpenTagBox>
          </S.OpenFilterBox>

          <S.ButtonBox>
            <S.Button>다시하기</S.Button>
            <S.Button onClick={props.onClickFilterOpen}>적용하기</S.Button>
          </S.ButtonBox>
        </S.OpenFilter>
      )}
    </>
  );
}
