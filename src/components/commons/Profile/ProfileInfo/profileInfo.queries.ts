import { gql } from "@apollo/client";




// 팔로잉 팔로워
export const FOLLOW = gql`
  mutation follow($followerNickname: String!) {
    follow(followerNickname: $followerNickname)
  }
`;
// 팔로잉 팔로워 갯수
export const FOLLOW_COUNT = gql`
  query followCount($followerNickname: String!) {
    followCount(followerNickname: $followerNickname)
  }
`;

// 단짠 피드
export const FETCH_BOARD_COUNT = gql`
  query fetchBoardCount {
    fetchBoardCount
  }
`;
