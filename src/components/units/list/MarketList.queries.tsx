// 중고마켓 목록 queries

import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      boardId
      boardWriter
      boardContents
      boardTitle
      boardHit
    }
  }
`;
export const FETCH_FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      boardId
      boardTitle
      boardContents
      boardWriter
      boardHit
    }
  }
`;
