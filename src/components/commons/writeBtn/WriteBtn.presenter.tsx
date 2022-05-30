import * as S from "./WriteBtn.styles";

export default function WriteBtnPresenterPage(props:any) {
  return (
    <S.ReviewWriteBox>
      <S.ReviewWrite onClick={props.onClickWrite}>
        <S.WriteIcon />
        {props.communityCheckPage === "community" && (
          <S.WriteText>리뷰 작성하기</S.WriteText>
        )}
        {props.checkPage === "REVIEW" && (
          <S.WriteText>단짠 리뷰 작성하기</S.WriteText>
        )}
        {props.checkPage === "TASTER" && (
          <S.WriteText>시식단 리뷰 작성하기</S.WriteText>
        )}
        {props.checkPage === "REQUEST" && (
          <S.WriteText>가주세요 작성하기</S.WriteText>
        )}
        {props.checkPage === "VISITED" && (
          <S.WriteText>가봤어요 작성하기</S.WriteText>
        )}
      </S.ReviewWrite>
    </S.ReviewWriteBox>
  );
}
