// 일반리뷰페이지 queries === 김치훈

import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      boardId
      boardTitle
      boardSugar
      boardSalt
      boardContents
      boardLikeCount
      boardHit
      createAt
    }
  }
`;
