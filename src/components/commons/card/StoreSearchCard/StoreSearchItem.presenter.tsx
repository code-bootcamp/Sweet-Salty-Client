import * as S from "./StoreSearchItem.styles";

export default function StoreSearchItemPresenterPage(props) {
  return (
    <S.ItemMainDiv>
      <S.ItemImg
        style={{
          backgroundImage: `url(https://storage.googleapis.com/${props.el?.thumbnail})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <S.ItemPick />
      </S.ItemImg>
      <S.ItemInfoDiv>
        <S.ItemInfoTopDiv>
          <S.ItemInfoWrapDiv>
            <S.ItemInfoTxtDiv>
              {props.el?.shopproductname}
              <S.ItemInfoBarDiv>|</S.ItemInfoBarDiv>
              {props.el?.shopseller}
            </S.ItemInfoTxtDiv>
          </S.ItemInfoWrapDiv>
          <S.ItemInfoWrapDiv>
            <S.ItemInfoLikeCount />
            <S.ItemInfoCountDiv>좋아요</S.ItemInfoCountDiv>
          </S.ItemInfoWrapDiv>
        </S.ItemInfoTopDiv>
        <S.ItemInfoBottomDiv>
          <S.ItemDCRateDiv>{props.el?.shopdiscount}%</S.ItemDCRateDiv>
          <S.ItemPriceDiv>{props.el?.shopdiscountprice}</S.ItemPriceDiv>
          <S.ItemWonDiv>원</S.ItemWonDiv>
          <S.ItemNoDCPriceDiv>
            {props.el?.shoporiginalprice}원
          </S.ItemNoDCPriceDiv>
        </S.ItemInfoBottomDiv>
      </S.ItemInfoDiv>
    </S.ItemMainDiv>
  );
}
