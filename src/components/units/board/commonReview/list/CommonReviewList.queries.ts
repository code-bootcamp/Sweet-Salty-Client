// 일반리뷰 List 페이지 queries

import { gql } from "@apollo/client";

export const FETCH_BOARD_CATEGORY_PICK = gql`
  query fetchBoardCategoryPick($category: BOARD_SUB_CATEGORY_NAME_ENUM!) {
    fetchBoardCategoryPick(category: $category) {
      boardId
      boardTitle
      boardSugar
      boardSalt
      boardContents
      boardLikeCount
      boardHit
      createAt
      thumbnail
    }
  }
`;

export const FETCH_BOARD_WITH_TAGS = gql`
  query fetchBoardWithTags($tags: [String!]!) {
    fetchBoardWithTags(tags: $tags)
  }
`;
