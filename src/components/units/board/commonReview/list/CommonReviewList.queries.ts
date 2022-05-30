import { gql } from "@apollo/client";

export const FETCH_BOARD_CATEGORY_PICK = gql`
  query fetchBoardCategoryPick($category: BOARD_SUB_CATEGORY_NAME_ENUM!) {
    fetchBoardCategoryPick(category: $category) {
      boardId
      boardTitle
      boardSugar
      boardWriter
      boardSalt
      boardContents
      boardLikeCount
      boardSubject
      boardHit
      createAt
      thumbnail
      place {
        placeName
        placeAddress
      }
    }
  }
`;

export const FETCH_BOARD_WITH_TAGS = gql`
  query fetchBoardWithTags($tags: [String!]!) {
    fetchBoardWithTags(tags: $tags)
  }
`;

export const FETCH_BOARD_BEST = gql`
  query fetchBoardBest($category: BOARD_SUB_CATEGORY_NAME_ENUM!) {
    fetchBoardBest(category: $category) {
      boardId
      boardTitle
      thumbnail
      boardHit
      boardLikeCount
      boardSubject
      boardWriter
      createAt
      place {
        placeName
        placeAddress
      }
    }
  }
`;
