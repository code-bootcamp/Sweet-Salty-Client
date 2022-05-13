import * as S from "./StoreCard.styles";

export default function StoreCardPresenterPage() {
  return (
    <S.ItemMainDiv>
      <S.ItemImg>
        <S.ItemPick />
      </S.ItemImg>
      <S.ItemInfoDiv>
        <S.ItemInfoTopDiv>
          <S.ItemInfoWrapDiv>
            <S.ItemInfoTxtDiv>
              츄르
              <S.ItemInfoBarDiv>|</S.ItemInfoBarDiv>
              푸딩이네
            </S.ItemInfoTxtDiv>
          </S.ItemInfoWrapDiv>
          <S.ItemInfoWrapDiv>
            <S.ItemInfoLikeCount />
            <S.ItemInfoCountDiv>99999</S.ItemInfoCountDiv>
          </S.ItemInfoWrapDiv>
        </S.ItemInfoTopDiv>
        <S.ItemInfoBottomDiv>
          <S.ItemPriceDiv>15000</S.ItemPriceDiv>
          <S.ItemWonDiv>원</S.ItemWonDiv>
        </S.ItemInfoBottomDiv>
      </S.ItemInfoDiv>
    </S.ItemMainDiv>
  );
}
