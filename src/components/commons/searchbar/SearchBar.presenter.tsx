// searchbar Presenter === 김치훈

import * as S from "./SearchBar.styles";

export default function SearchBarPresenter(props: any) {
  return (
    <S.Wrapper isReviewList={props.isReviewList} isNoticeList={props.isNoticeList}>
      <S.SearchBox>
        <S.SearchInnerBox>
          <S.SearchBar
            type="text"
            placeholder="지역, 음식 또는 식당명을 입력하세요."
          />
          <S.SearchIcon />
        </S.SearchInnerBox>
      </S.SearchBox>

      {props.isReviewList && (
        <S.ReviewWriteBox>
          <S.ReviewWrite onClick={props.onClickReviewDetail}>
            <S.WriteIcon />
            단짠 리뷰 작성하기
          </S.ReviewWrite>
        </S.ReviewWriteBox>
      )}
      {props.isNoticeList && (
        <S.ReviewWriteBox>
          <S.ReviewWrite onClick={props.onClickNoticeList}>
            <S.WriteIcon />
              공지사항 작성하기
          </S.ReviewWrite>
        </S.ReviewWriteBox>
      )}
    </S.Wrapper>
  );
}
