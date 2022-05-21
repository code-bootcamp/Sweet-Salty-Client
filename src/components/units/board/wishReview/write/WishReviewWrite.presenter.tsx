// 가봤어요! Write Presenter -김치훈

import * as S from "./WishReviewWrite.styled";

export default function WishReviewWritePresenterPage(props: any) {
  return (<S.Wrapper>
    <S.Title>단짠 게시판 등록 <S.RightOutline /> 가봤어요!</S.Title>

    <S.ReviewWriteBox>
      <S.Header>
        <S.LeftBox>
          <S.WriteTitle>제목</S.WriteTitle>
          <S.InputBox type="text" placeholder="20자 이내로 작성하세요." maxLength={20}/>
          
        </S.LeftBox>
        
        <S.RightBox>
          <S.WriteTitle>카테고리</S.WriteTitle>
          <S.CategoryBox>
            <S.Category>가봤어요!</S.Category>
          </S.CategoryBox>
          
        </S.RightBox>

      </S.Header>
      
      <S.ReviewWriteBoxHr/>

      <S.Section>
        <S.WriteTitle>가게선택</S.WriteTitle>
        <S.Map>
          카카오 맵
        </S.Map>

        <S.ReviewWriteBoxHr/>

        <S.ProsConsBox>
          <S.ProsCons>
          <S.WriteTitle style={{color: "#FF9A31"}}>장점</S.WriteTitle>
          <S.InputBox type="text" placeholder="30자 이내로 작성하세요." maxLength={30} />
          </S.ProsCons>

          <S.ProsCons>
            <S.WriteTitle style={{color: "red"}}>단점</S.WriteTitle>
            <S.InputBox type="text" placeholder="30자 이내로 작성하세요." maxLength={30} />
          </S.ProsCons>
        </S.ProsConsBox>
        
        <S.ReviewWriteBoxHr/>

        <S.WriteTitle>메뉴 유형<S.Span>(1개만 선택 가능)</S.Span></S.WriteTitle>
        
        <S.MenuCategoryBox>
          <S.MenuCategory>양식</S.MenuCategory>
          <S.MenuCategory>한식</S.MenuCategory>
          <S.MenuCategory>중식</S.MenuCategory>
          <S.MenuCategory>일식</S.MenuCategory>
          <S.MenuCategory>아시안푸드</S.MenuCategory>
          <S.MenuCategory>할랄</S.MenuCategory>
          <S.MenuCategory>비건</S.MenuCategory>
        </S.MenuCategoryBox>

        <S.ReviewWriteBoxHr/>
          
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

        <S.ReviewWriteBoxHr/>

        <S.WriteTitle>썸네일 이미지 등록</S.WriteTitle>
        <S.ImageBox>
          <S.ImageText>이미지 선택</S.ImageText>
        </S.ImageBox>

        <S.ReviewWriteBoxHr/>

        <S.WriteTitle>내용</S.WriteTitle>
        <S.TextAreaBox placeholder="200자 이내로 작성하세요." maxLength={200} />

        <S.ButtonBox>
          <S.Button onClick={props.onClickCommonReviewList}>등록하기</S.Button>
          <S.Button onClick={props.onClickBack}>최소하기</S.Button>
        </S.ButtonBox>

      </S.Section>
    </S.ReviewWriteBox>
  </S.Wrapper>
  );
}
