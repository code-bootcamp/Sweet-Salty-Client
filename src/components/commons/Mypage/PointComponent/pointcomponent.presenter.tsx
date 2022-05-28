// 결제 상세내역 Component presenter ---김치훈

import * as S from "./pointcomponent.styles"
// import { getDate_ } from "../../libraries/date"

export default function PointComponentPresenter (){


  return (
    <S.Wrapper>
      <S.LeftBox>
        <S.StoreImg>
          <S.StoreContents>

            <S.StoreTopBox>
              <S.EventName>일일특가</S.EventName>
              <S.LikeIcon src="/images/heartIcon.png" />
            </S.StoreTopBox>
            
            <S.StoreMidBox>
              <S.PointIcon src="/images/pointicon.png"/>+ 취소{/* 취소, 충전 글자 */}
            </S.StoreMidBox>

          </S.StoreContents>

        </S.StoreImg>

        <S.StoreComments>

          <S.ContentsBox>
            <S.PaymentStatus>취소 완료</S.PaymentStatus>
            <S.P></S.P> 
            <S.CreateAt>2022-05-10{/* 작성일 */}</S.CreateAt>
          </S.ContentsBox>

          <S.PaymentDetails>결제 취소</S.PaymentDetails>

          <S.ContentsBox>
            <S.MenuName>메뉴명{/* 메뉴명 */}</S.MenuName>
            <S.P></S.P> 
            <S.RestaurantName>식당명{/* 식당명 */}</S.RestaurantName>
          </S.ContentsBox>

        </S.StoreComments>
      </S.LeftBox>

      <S.RightBox>
        <S.RightTopBox>
          <S.PaymentCancel>결제 취소하기</S.PaymentCancel>
          <S.PaymentPoint>-12,000{/* 포인트 */} 포인트 </S.PaymentPoint>
        </S.RightTopBox>
        <S.BarcodeBox>
          <S.BarcodeIcon src="/images/Scan.png"/>
          <S.BarcodeText>바코드 받기</S.BarcodeText>
        </S.BarcodeBox>
      </S.RightBox>
    </S.Wrapper>
  )
}