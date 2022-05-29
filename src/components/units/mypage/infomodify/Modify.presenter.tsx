// mypage 회원 정보 변경 Presenter --- 김치훈

import * as S from "./Modify.styles"

export default function ModifyPresenterPage(props: any){

  return (
    <S.Wrapper>
      <S.Title>회원 정보 수정</S.Title>
      <S.NoticeBox>

        <S.WriteTitle style={{paddingTop: "0px"}}>닉네임</S.WriteTitle>
        <S.FlexBox>
          <S.InputBox type="text" placeholder="30자 이내로 작성하세요." />
          <S.Button>수정</S.Button>
        </S.FlexBox>


        <S.WriteTitle>비밀번호</S.WriteTitle>
        <S.FlexBox>
          <S.InputBox type="password" placeholder="비밀번호를 작성하세요." />
          <S.Button>수정</S.Button>
        </S.FlexBox>


        <S.WriteTitle>성별</S.WriteTitle>
        <S.FlexBox>
          <S.Category>여자</S.Category>
          <S.Category>남자</S.Category>
          <S.Button>수정</S.Button>
        </S.FlexBox>

        
        <S.WriteTitle>연령대</S.WriteTitle>
        <S.FlexBox>
          <S.Category>10대</S.Category>
          <S.Category>20대</S.Category>
          <S.Category>30대</S.Category>
          <S.Button>수정</S.Button>
        </S.FlexBox>


      <S.WriteTitle style={{paddingBottom: "0"}}>선호 카테고리</S.WriteTitle>
      <S.SubWriteTitle>메뉴 선택<S.Span>(여러개 선택 가능)</S.Span></S.SubWriteTitle>
        
        <S.CategoryBox>
          <S.Category onClick={props.onClickMenu} id="양식">양식</S.Category>
          <S.Category onClick={props.onClickMenu} id="한식">한식</S.Category>
          <S.Category onClick={props.onClickMenu} id="중식">중식</S.Category>
          <S.Category onClick={props.onClickMenu} id="일식">일식</S.Category>
          <S.Category onClick={props.onClickMenu} id="아시안푸드">아시안푸드</S.Category>
          <S.Category onClick={props.onClickMenu} id="할랄">할랄</S.Category>
          <S.Category onClick={props.onClickMenu} id="비건">비건</S.Category>
        </S.CategoryBox>
        
        <S.MoodBox>
        </S.MoodBox>
        <S.ButtonBox>
          <S.CompleteButton>수정 완료</S.CompleteButton>
          <S.CompleteButton onClick={props.onClickBack}>취소</S.CompleteButton>
        </S.ButtonBox>
          <S.ResignMB>회원탈퇴하기</S.ResignMB>
      </S.NoticeBox>
    </S.Wrapper>)
}