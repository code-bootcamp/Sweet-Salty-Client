import * as S from "./StoreSearchItem.styles";

export default function StoreSearchItemPresenterPage(props: any) {
  return (
    <S.ItemMainDiv onClick={props.onClickDetailPage} id={props.id}>
      <S.ItemImg
        style={{
          backgroundImage: `url(${props.el?.thumbnail})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          overflow: "hidden",
          backgroundPosition: "center",
        }}
      >
        <S.ImageTitle>일일특가</S.ImageTitle>
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
