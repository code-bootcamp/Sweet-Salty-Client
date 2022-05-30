import { gql } from "@apollo/client";

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
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

export const FETCH_USER = gql`
  query fetchUser($userEmail: String!) {
    fetchUser(userEmail: $userEmail) {
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
`;

export const FOLLOW = gql`
  mutation follow($followerNickname: String!) {
    followCount(followerNickname: $followerNickname)
  }
`;
export const FOLLOW_COUNT = gql`
  query followCount($followerNickname: String!) {
    followCount(followerNickname: $followerNickname)
  }
`;
export const FETCH_BOARD_COUNT = gql`
  query fetchBoardCount {
    fetchBoardCount
  }
`;
export const FETCH_RECEIVED_MESSAGES_COUNT = gql`
  query fetchReceivedMessagesCount {
    fetchReceivedMessagesCount
  }
`;
export const FETCH_UNREAD_MESSAGE_COUNT = gql`
  query fetchUnreadMessageCount {
    fetchUnreadMessageCount
  }
`;

export const UPDATE_PROFILE = gql`
  mutation updateProfile($profile: String!) {
    updateProfile(profile: $profile) {
      userId
      userProfile
    }
  }
`;

export const CREATE_POINT_TRANSACTION = gql`
  mutation createPointTransaction($impUid: String!, $amount: Int!) {
    createPointTransaction(impUid: $impUid, amount: $amount) {
      id
    }
  }
`;
