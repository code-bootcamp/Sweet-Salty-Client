// 결제 상세내역 Component queries ---김치훈

import { gql } from "@apollo/client";


export const CANCEL_POINT_TRANSACTION=gql`
  mutation cancelPointTransaction ($impUid: String!, $amount: Int!, $reason: String!){
    cancelPointTransaction(impUid: $impUid, amount: $amount, reason: $reason )

  }
` 