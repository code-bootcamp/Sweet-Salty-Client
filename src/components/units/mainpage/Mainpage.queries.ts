import { gql } from "@apollo/client";

export const FETCH_RECENT_BOARDS = gql`
  query fetchRecentBoards($category: BOARD_SUB_CATEGORY_NAME_ENUM!) {
    fetchRecentBoards(category: $category) {
      boardId
      boardTitle
      boardWriter
      boardLikeCount
      boardHit
      boardSubject
      thumbnail
      createAt
      user {
        userNickname
        userImage
      }
      place {
        placeName
        placeAddress
      }
      boardSides {
        boardTags {
          boardTagName
        }
      }
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      userImage
      userNickname
    }
  }
`;

export const REAL_TIME_SHOP = gql`
  query realTimeShop {
    realTimeShop {
      shopId
      shopProductName
      shopSeller
      shopDisCount
      shopDisCountPrice
      shopOriginalPrice
      thumbnail
    }
  }
`;

export const FETCH_PREFER_BOARDS = gql`
  query fetchPreferBoards {
    fetchPreferBoards {
      boardId
      boardTitle
      boardWriter
      boardLikeCount
      boardHit
      boardSubject
      thumbnail
      createAt
      user {
        userNickname
        userImage
      }
      place {
        placeName
        placeAddress
      }
    }
  }
`;
