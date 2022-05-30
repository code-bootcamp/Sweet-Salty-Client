import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      boardId
      boardTitle
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
    }
  }
`;
