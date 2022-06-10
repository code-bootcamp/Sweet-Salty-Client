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
  query fetchUser($userNickname: String!) {
    fetchUser(userNickname: $userNickname) {
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

export const FETCH_PICKED_BOARDS = gql`
  query fetchPickedBoards($userNickname: String!) {
    fetchPickedBoards(userNickname: $userNickname) {
      boardId
      boardTitle
      boardWriter
      boardLikeCount
      boardHit
      thumbnail
      boardSubject
      createAt
      user {
        userImage
      }
      place {
        placeId
        placeName
        placeAddress
      }
    }
  }
`;
