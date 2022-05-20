// 일반리뷰 등록 Presenter --- 김치훈
import dynamic from "next/dynamic";
import MoodFilterPage from "../../commons/filter/MoodFilter/MoodFilter"
import * as S from "./CommonReviewWrite.styles"

const Editor = dynamic(() => import("../../commons/toast/editor"), { ssr: false });

export default function CommonReviewWritePresenter(props:any){
  return (
  <S.Wrapper>
    <S.Form onSubmit={props.handleSubmit(props.onClickSubmit)}>
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
            <S.Category onClick={props.onClickCategory} id="REVIEW">단짠리뷰</S.Category>
            <S.Category onClick={props.onClickCategory} id="TASTER">시식단 리뷰</S.Category>
          </S.CategoryBox>

          <S.RightBoxHr/>

          <S.WriteTitle>제목</S.WriteTitle>
          <S.InputBox type="text" placeholder="20자 이내로 작성하세요." register={props.register("boardTitle")} maxLength="20"/>

          <S.RightBoxHr/>


          <S.WriteTitle style={{color: "#FF9A31"}}>장점</S.WriteTitle>
          <S.InputBox type="text" placeholder="30자 이내로 작성하세요." register={props.register("boardSugar")} maxLength="30" />

          <S.RightBoxHr/>

          <S.WriteTitle style={{color: "red"}}>단점</S.WriteTitle>
          <S.InputBox type="text" placeholder="30자 이내로 작성하세요." register={props.register("boardSalt")} maxLength="30" />

        </S.RightBox>
      </S.Header>
      
      <S.Section>
        <S.WriteTitle>메뉴 선택<S.Span>(1개만 선택 가능)</S.Span></S.WriteTitle>
        
        <S.CategoryBox>
          <S.Category onClick={props.onClickMenu} id="양식">양식</S.Category>
          <S.Category onClick={props.onClickMenu} id="한식">한식</S.Category>
          <S.Category onClick={props.onClickMenu} id="중식">중식</S.Category>
          <S.Category onClick={props.onClickMenu} id="일식">일식</S.Category>
          <S.Category onClick={props.onClickMenu} id="아시안푸드">아시안푸드</S.Category>
          <S.Category onClick={props.onClickMenu} id="할랄">할랄</S.Category>
          <S.Category onClick={props.onClickMenu} id="비건">비건</S.Category>
        </S.CategoryBox>

        <S.SectionHr/>
          
        <S.WriteTitle>분위기 선택<S.Span>(여러개 선택 가능)</S.Span></S.WriteTitle>
        
        <S.MoodBox>
<MoodFilterPage
moodHashTag={props.moodHashTag}
setMoodHashTag={props.setMoodHashTag}
/>
<button onClick={props.checker}>d</button>
        </S.MoodBox>

        <S.SectionHr/>

        <S.WriteTitle>내용</S.WriteTitle>
        <Editor
        value={props.getValues("boardContents") || ""}/>
        {/* <S.TextAreaBox type="text" placeholder="200자 이내로 작성하세요." maxLength="200" /> */}

        <S.ButtonBox>
          <S.Button type="submit">등록하기</S.Button>
          <S.Button onClick={props.onClickCancel}>취소하기</S.Button>
        </S.ButtonBox>

      </S.Section>
    </S.ReviewWriteBox>
    </S.Form>
  </S.Wrapper>
  )
}