// 일반리뷰 등록 Presenter --- 김치훈

import * as S from "./CommonReviewWrite.styles"

export default function CommonReviewWritePresenter(props:any){

  return (
  <S.Wrapper>
    <S.Title>단짠 게시판 글 등록</S.Title>

    
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
            <S.Category>단짠리뷰</S.Category>
            <S.Category>시식단 리뷰</S.Category>
          </S.CategoryBox>

          <S.RightBoxHr/>

          <S.WriteTitle>한 줄 리뷰</S.WriteTitle>
          <S.InputBox type="text" placeholder="20자 이내로 작성하세요." maxLength={20}/>

          <S.RightBoxHr/>

          <S.WriteTitle>메뉴명</S.WriteTitle>
          <S.InputBox type="text" placeholder="20자 이내로 작성하세요." maxLength={20} />

          <S.RightBoxHr/>

          <S.WriteTitle style={{color: "#FF9A31"}}>장점</S.WriteTitle>
          <S.InputBox type="text" placeholder="30자 이내로 작성하세요." maxLength={30} />

          <S.RightBoxHr/>

          <S.WriteTitle style={{color: "red"}}>단점</S.WriteTitle>
          <S.InputBox type="text" placeholder="30자 이내로 작성하세요." maxLength={30} />

        </S.RightBox>
      </S.Header>
      
      <S.Section>
        <S.WriteTitle>메뉴 선택<S.Span>(1개만 선택 가능)</S.Span></S.WriteTitle>
        
        <S.CategoryBox>
          <S.Category>양식</S.Category>
          <S.Category>한식</S.Category>
          <S.Category>중식</S.Category>
          <S.Category>일식</S.Category>
          <S.Category>아시안푸드</S.Category>
          <S.Category>할랄</S.Category>
          <S.Category>비건</S.Category>
        </S.CategoryBox>

        <S.SectionHr/>
          
        <S.WriteTitle>분위기 선택<S.Span>(여러개 선택 가능)</S.Span></S.WriteTitle>
        
        <S.MoodBox>
          <S.Mood>혼박하기 좋은</S.Mood>
          <S.Mood>친구랑</S.Mood>
          <S.Mood>가족이랑</S.Mood>
          <S.Mood>부모님과</S.Mood>
          <S.Mood>소개팅</S.Mood>
          <S.Mood>데이트</S.Mood>
          <S.Mood>애인이랑</S.Mood>
          <S.Mood>혼술하기 좋은</S.Mood>
          <S.Mood>회식</S.Mood>
          <S.Mood>동창회</S.Mood>
          <S.Mood>모임</S.Mood>
        </S.MoodBox>

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