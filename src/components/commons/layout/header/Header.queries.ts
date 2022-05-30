import { gql } from "@apollo/client";

export const LOGOUT = gql`
mutation logout{logout}
`;

export const FETCH_USER_LOGGED_IN =gql`
query fetchUserLoggedIn{
  fetchUserLoggedIn{
    userId
    userState
    userEmail
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

// 쪽지함 안 본 쪽지 갯수
export const FETCH_UNREAD_MESSAGE_COUNT =gql`
  query fetchUnreadMessageCount {
    fetchUnreadMessageCount
  }
` 