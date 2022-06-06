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

// boardWriter 없이 등록된 글이 있어 주석처리해놓음
export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      boardId
      boardTitle
      boardSugar
      boardSalt
      boardContents
      boardWriter
      boardLikeCount
      boardHit
      boardSubject
      createAt
      subCategory {
        subCategoryName
      }
      place {
        placeName
        placeAddress
        lat
        lng
      }
      boardSides {
        boardTags {
          boardTagName
          boardTagRefName
        }
      }
      user {
        userId
        userNickname
        userImage
        userEmail
      }
    }
  }
`;



export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: String!) {
    deleteBoard(boardId: $boardId)
  }
`;
export const CREATE_BOARD_LIKE = gql`
  mutation createBoardLike($boardId: String!) {
    createBoardLike(boardId: $boardId)
  }
`;
