import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      boardId
      boardTitle
      boardContents
      boardLikeCount
      CreateAt
    }
  }
`;
export const FETCH_BOARDS = gql`
  query fetchBoards($search: String!) {
    fetchBoards(search: $search) {
      boardId
      boardWriter
      boardContents
      boardTitle
    }
  }
`;
