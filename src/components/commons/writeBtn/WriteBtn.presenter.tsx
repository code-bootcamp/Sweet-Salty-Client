import * as S from "./WriteBtn.styles";

export default function WriteBtnPresenterPage(props) {
  return (
    <S.ReviewWriteBox>
      <S.ReviewWrite onClick={props.onClickWrite}>
        <S.WriteIcon />
        {props.checkPage === "community" && (
          <S.WriteText>리뷰 작성하기</S.WriteText>
        )}
        {props.checkPage === "common" && (
          <S.WriteText>단짠 리뷰 작성하기</S.WriteText>
        )}
        {props.checkPage === "taster" && (
          <S.WriteText>시식단 리뷰 작성하기</S.WriteText>
        )}
        {props.checkPage === "wish" && (
          <S.WriteText>가주세요 작성하기</S.WriteText>
        )}
      </S.ReviewWrite>
    </S.ReviewWriteBox>
  );
}
