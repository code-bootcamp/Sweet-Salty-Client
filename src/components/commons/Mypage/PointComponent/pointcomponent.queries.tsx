// 결제 상세내역 Component queries ---김치훈

import { gql } from "@apollo/client"


export const FETCH_PAYMENT_HISTORY = gql`
  query fetchPaymentHistory {
    fetchPaymentHistory{
      paymentHistoryId
      payStatus
      productStatus
      supplier
      paymentAmount
      stock
      barcode
      createdAt
    }
  }
`

