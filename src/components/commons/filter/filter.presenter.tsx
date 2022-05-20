// 단짠 게시판 페이지-필터-박스 Presenter === 김치훈

import * as S from "./filter.styles";
import MenuFilterPage from "./MenuFilter/MenuFilter";
import MoodFilterPage from "./MoodFilter/MoodFilter";
import { v4 as uuidv4 } from "uuid";
import { Radio } from "antd";

export default function FilterPresenter(props: any) {
  function onChange(e) {
    console.log(e.target.value);
  }

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
            src="/images/filter.png"
          />
        </S.Wrapper>
      ) : (
        // filter 선택하는 박스
        <S.OpenFilter>
          <S.OpenFilterBox>
            <S.FilterTitle>메뉴</S.FilterTitle>
            <S.OpenTagBox>
              {/* filter open 태그 올리는 곳 */}
              {/* <Radio.Group onChange={onChange}>
                <Radio.Button value={props.menuData?.fetchTags[0].boardTagName}>
                  {props.menuData?.fetchTags[0].boardTagName}
                </Radio.Button>
                <Radio.Button value={props.menuData?.fetchTags[1].boardTagName}>
                  {props.menuData?.fetchTags[1].boardTagName}
                </Radio.Button>
                <Radio.Button value={props.menuData?.fetchTags[2].boardTagName}>
                  {props.menuData?.fetchTags[2].boardTagName}
                </Radio.Button>
                <Radio.Button value={props.menuData?.fetchTags[3].boardTagName}>
                  {props.menuData?.fetchTags[3].boardTagName}
                </Radio.Button>
                <Radio.Button value={props.menuData?.fetchTags[4].boardTagName}>
                  {props.menuData?.fetchTags[4].boardTagName}
                </Radio.Button>
                <Radio.Button value={props.menuData?.fetchTags[5].boardTagName}>
                  {props.menuData?.fetchTags[5].boardTagName}
                </Radio.Button>
                <Radio.Button value={props.menuData?.fetchTags[6].boardTagName}>
                  {props.menuData?.fetchTags[6].boardTagName}
                </Radio.Button>
              </Radio.Group> */}

              <MenuFilterPage
                hashTag={props.hashTag}
                setHashTag={props.setHashTag}
              />
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
