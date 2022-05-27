// 충전 상세내역 Component presenter ---김치훈

import * as S from "./chargecomponent.styles"
// import { getDate_ } from "../../libraries/date"

export default function ChargeComponentPresenter (){


  return (
    <S.Wrapper>
      <S.LeftBox>
        <S.StoreImg><S.PointIcon src="/images/pointicon.png"/>+ 취소{/* 취소, 충전 글자 */}</S.StoreImg>
        <S.StoreComments>

          <S.ContentsBox>
            <S.PaymentStatus>취소 완료</S.PaymentStatus>
            <S.P></S.P> 
            <S.CreateAt>2022-05-10{/* 작성일 */}</S.CreateAt>
          </S.ContentsBox>

          <S.PaymentDetails>충전 취소</S.PaymentDetails>

          <S.ContentsBox>
            <S.PayName>카카오페이</S.PayName>
          </S.ContentsBox>

        </S.StoreComments>
      </S.LeftBox>

      <S.RightBox>
        <S.PaymentCancel>충전 취소하기</S.PaymentCancel>
        <S.PaymentPoint>+12,000{/* 포인트 */} 포인트 </S.PaymentPoint>
      </S.RightBox>
    </S.Wrapper>
  )
}