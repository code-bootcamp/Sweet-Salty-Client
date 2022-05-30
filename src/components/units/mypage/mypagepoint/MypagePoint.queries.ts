// 포인트 상세내역 게시글 queries ---김치훈

import { gql } from "@apollo/client";


export const FETCH_PAYMENT_HISTORY = gql`
query fetchPaymentHistory {
  fetchPaymentHistory{
    paymentHistoryId
    payStatus
    productStatus
    supplier
    paymentAmount
    impUid
    stock
    barcode
    createdAt
  }
}
`
