import * as S from "./StoreItem.styles";

export default function StoreItemPresenterPage(props) {
  console.log("굿굿", props);
  return (
    <S.ItemMainDiv onClick={props.onClickDetailPage} id={props.id}>
      <S.ItemImg
        style={{
          backgroundImage: `url(${props.fetchShopListData?.thumbnail})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <S.ItemPick />
      </S.ItemImg>
      <S.ItemInfoDiv>
        <S.ItemInfoTopDiv>
          <S.ItemInfoWrapDiv>
            <S.ItemInfoTxtDiv>
              {props.fetchShopListData?.shopProductName}
              <S.ItemInfoBarDiv>|</S.ItemInfoBarDiv>
              {props.fetchShopListData?.shopSeller}
            </S.ItemInfoTxtDiv>
          </S.ItemInfoWrapDiv>
          <S.ItemInfoWrapDiv>
            <S.ItemInfoLikeCount />
            <S.ItemInfoCountDiv>99999</S.ItemInfoCountDiv>
          </S.ItemInfoWrapDiv>
        </S.ItemInfoTopDiv>
        <S.ItemInfoBottomDiv>
          <S.ItemDCRateDiv>
            {props.fetchShopListData?.shopDisCount}%
          </S.ItemDCRateDiv>
          <S.ItemPriceDiv>
            {props.fetchShopListData?.shopDisCountPrice}
          </S.ItemPriceDiv>
          <S.ItemWonDiv>원</S.ItemWonDiv>
          <S.ItemNoDCPriceDiv>
            {props.fetchShopListData?.shopOriginalPrice}원
          </S.ItemNoDCPriceDiv>
        </S.ItemInfoBottomDiv>
      </S.ItemInfoDiv>
    </S.ItemMainDiv>
  );
}
