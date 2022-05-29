// 결제 상세내역 Component styles ---김치훈

import styled from "@emotion/styled";



export const Wrapper = styled.div`
  width: 1060px;
  height: 132px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LeftBox = styled.div`
  display: flex;
  align-items: center;
`

export const StoreImg = styled.div`
  width: 166px;
  height: 132px;
  border-radius: 10px;
  background: #dbdbdb;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: start;
  cursor: pointer;
`
export const PointChargeImg = styled.div`
  width: 166px;
  height: 132px;
  border-radius: 10px;
  background: #FF6E30;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
`
export const PointCancelImg = styled.div`
  width: 166px;
  height: 132px;
  border-radius: 10px;
  background: #C9C9C9;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
`

export const StoreContents = styled.div`
  width: 166px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const StoreTopBox = styled.div`
  padding: 10px 0;
  width: 146px;
  height: 132px;
  display: flex;
  justify-content: space-between;
`
export const EventName = styled.div`
  font-size: 12px;
  font-weight: 700;
`
export const LikeIcon = styled.img`
  width: 12px;
  height: 12px;
  color: #fff;
`
export const StoreMidBox = styled.div`
  font-size: 16px;
  color: #fff;
`
export const PointIcon = styled.img`
  width: 24px;
`

export const StoreComments = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`
export const ContentsBox = styled.div`
  display: flex;
  align-items: center;
`
export const Stock = styled.div`
  color: #676767;
  font-weight: 700;
  font-size: 16px;
  cursor: default;
`
export const P = styled.div`
  margin: 0 8px;
  width: 1px;
  height: 16px;
  background: #676767;
  cursor: default;
`
export const CreateAt = styled.div`
  color: #676767;
  font-weight: 700;
  font-size: 16px;
  cursor: default;
`


export const PayStatus = styled.div`
  padding: 10px 0;
  color: #2C2C2C;
  font-weight: 700;
  cursor: default;
`
export const ProductStatus = styled.div`
  color: #676767;
  font-weight: 700;
  font-size: 16px;
  cursor: default;
`
export const Supplier = styled.div`
  color: #676767;
  font-weight: 700;
  font-size: 16px;
  cursor: default;
`




export const RightBox = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: end;
`
export const RightTopBox = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
`
export const PaymentCancel = styled.div`
  padding: 0 10px;
  font-size: 16px;
  color: #7B7B7B;
  text-decoration: underline;
  font-weight: 700;
  cursor: pointer;
`

export const PaymentPoint = styled.div`
  color: #FF9A31;
  font-weight: 700;
  cursor: default;
`
export const PointChargePoint = styled.div`
  color: #FF6E30;
  font-weight: 700;
  cursor: default;
`
export const PointCancelPoint = styled.div`
  font-weight: 700;
  color: #AAAAAA;
  cursor: default;
`

export const BarcodeBox = styled.div`
  padding: 14px 20px;
  height: 44px;
  border-radius: 50px;
  background: #FF9A31;
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const BarcodeIcon = styled.img`
  width: 24px;
`
export const BarcodeText = styled.div`
  padding: 0 6px; 
  font-size: 16px;
  font-weight: 700;
  color: #fff;
`


// 포인트 충전 스타일

export const PayName = styled.div`
  color: #676767;
  font-weight: 700;
  font-size: 16px;
`

export const PointChargeRightBox = styled.div`
  display: flex;
  align-items: center;
`



export const Barcode = styled.img`
  width: 600px;
`