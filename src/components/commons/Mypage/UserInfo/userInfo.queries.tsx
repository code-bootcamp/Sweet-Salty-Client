// 마이페이지 유저 정보 queries ---김치훈

import { gql } from "@apollo/client";


// 로그인 유저 정보
export const FETCH_USER_LOGGED_IN =gql`
query fetchUserLoggedIn{
    fetchUserLoggedIn{
      userId
      userState
      userEmail
      userName
      userNickname
      userImage
      userProfile
      userPhone
      userPoint
      ageGroup
      gender
      createAt
      updateAt
    }
  }
`;

// 팔로워 버튼
export const FOLLOW =gql`
  mutation follow ($followerNickname: String!){
    followCount(followerNickname: $followerNickname)
  }
`
// 팔로워, 팔로잉 숫자
export const FOLLOW_COUNT =gql`
  query followCount ($followerNickname: String!){
    followCount(followerNickname: $followerNickname)
  }
` 
// 마이 단짠 숫자
export const FETCH_BOARD_COUNT =gql`
  query fetchBoardCount {
    fetchBoardCount
  }
` 
// 쪽지함 받은 쪽지 갯수
export const FETCH_RECEIVED_MESSAGES_COUNT =gql`
  query fetchReceivedMessagesCount {
    fetchReceivedMessagesCount
  }
` 
// 쪽지함 안 본 쪽지 갯수
export const FETCH_UNREAD_MESSAGE_COUNT =gql`
  query fetchUnreadMessageCount {
    fetchUnreadMessageCount
  }
` 

// 프로필 한줄 소개 수정
export const UPDATE_PROFILE = gql`
  mutation updateProfile ($profile: String!){
    updateProfile(profile: $profile){
      userId
      userProfile
    }
  }
`



// 게시글 작성 유저 정보
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


// 포인트 충전
export const CREATE_POINT_TRANSACTION = gql`
  mutation createPointTransaction($impUid: String!, $amount: Float!){
    createPointTransaction(impUid: $impUid, amount: $amount){
      id
  }
}
`