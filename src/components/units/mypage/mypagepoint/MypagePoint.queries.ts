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
`;
