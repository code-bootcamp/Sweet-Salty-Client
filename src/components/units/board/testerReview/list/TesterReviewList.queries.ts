// 여기는 시식단 리뷰 List queries 입니다.

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
