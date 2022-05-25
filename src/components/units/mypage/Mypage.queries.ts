import { gql } from "@apollo/client";


export const CREATE_POINT_TRANSACTION = gql`
  mutation createPointTransaction($impUid: String!, $amount: Float!){
    createPointTransaction(impUid: $impUid, amount: $amount){
      id
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
      userPoint
      ageGroup
      gender
      createAt
    }
  }
`