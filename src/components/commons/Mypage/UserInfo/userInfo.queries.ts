import { gql } from "@apollo/client";

// 팔로잉 팔로워
export const FOLLOW = gql`
  mutation follow($followerNickname: String!) {
    follow(followerNickname: $followerNickname)
  }
`;

// 팔로잉, 팔로워 카운트
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
