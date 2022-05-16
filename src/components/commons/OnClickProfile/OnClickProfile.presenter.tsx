import * as S from "./OnClickProfile.styles";

export default function OnClickProfile(){
    return(
        <S.MainDiv>
            <S.NameDiv><S.NameSpan>주혜</S.NameSpan>단짝님</S.NameDiv>
            <S.PointDiv><S.PointSpan>1,000,000</S.PointSpan>포인트</S.PointDiv>
            <S.LinkTxtDiv>마이페이지</S.LinkTxtDiv>
            <S.LinkTxtDiv>쪽지함</S.LinkTxtDiv>
            <S.LinkTxtDiv>로그아웃</S.LinkTxtDiv>
        </S.MainDiv>
    )
}