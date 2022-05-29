import * as S from "./BestStoreItem.styles";

export default function BestStoreItemPresenterPage(props) {
  return (
    <S.ItemMainDiv>
      <S.ItemImg>
        <S.GifticonDiv>
          <S.GifticonImg></S.GifticonImg>
          <S.GifticonLogoDiv>
            <S.GifiticonLogo src="/images/storelogo.png"></S.GifiticonLogo>
          </S.GifticonLogoDiv>
        </S.GifticonDiv>
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
          <S.ItemDCRateDiv>20%</S.ItemDCRateDiv>
          <S.ItemPriceDiv>12000</S.ItemPriceDiv>
          <S.ItemWonDiv>원</S.ItemWonDiv>
          <S.ItemNoDCPriceDiv>15000원</S.ItemNoDCPriceDiv>
        </S.ItemInfoBottomDiv>
      </S.ItemInfoDiv>
    </S.ItemMainDiv>
  );
}
