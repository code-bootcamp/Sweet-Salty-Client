// 가주세요! 등록 Presenter --- 김치훈

import * as S from "./WishWrite.styles"

export default function WishWritePresenter(props:any){

  return (
  <S.Wrapper>
    <S.Title>가주세요! 글 등록</S.Title>

    
    <S.ReviewWriteBox>
      <S.Header>
        <S.LeftBox>
          <S.WriteTitle>가게선택</S.WriteTitle>
          <S.Map>
            카카오 맵
          </S.Map>
        </S.LeftBox>

        <S.RightBox>
          <S.WriteTitle>카테고리<S.Span>(1개만 선택 가능)</S.Span></S.WriteTitle>
          <S.CategoryBox>
            <S.Category>가주세요!</S.Category>
          </S.CategoryBox>

          <S.RightBoxHr/>

          <S.WriteTitle>제목</S.WriteTitle>
          <S.InputBox type="text" placeholder="20자 이내로 작성하세요." maxLength={20}/>

          <S.RightBoxHr/>

        </S.RightBox>
      </S.Header>
      
      <S.Section>

        <S.SectionHr/>

        <S.WriteTitle>내용</S.WriteTitle>
        <S.TextAreaBox placeholder="200자 이내로 작성하세요." maxLength={200} />

        <S.ButtonBox>
          <S.Button onClick={props.onClickReviewDetail}>등록하기</S.Button>
          <S.Button onClick={props.onClickBack}>최소하기</S.Button>
        </S.ButtonBox>

      </S.Section>
    </S.ReviewWriteBox>
  </S.Wrapper>
  )
}