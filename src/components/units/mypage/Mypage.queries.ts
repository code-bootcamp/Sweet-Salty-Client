import { gql } from "@apollo/client";


export const CREATE_POINT_TRANSACTION = gql`
  mutation createPointTransaction($impUid: String!){
  createPointTransaction(impUid: $impUid){
    id
    impUid
    amount
  }
}
`

export const FETCH_USER = gql`
  query fetchUser($userEmail: String!){
    fetchUser(userEmail: $userEmail){
      userId
      userState
      userEmail
      userName
      userNickname
      userPhone
      userAddress
      userPoint
      ageGroup
      gender
      createAt
    }
  }
`