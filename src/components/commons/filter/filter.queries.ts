// 단짠 게시판 페이지-필터-박스 queries === 김치훈

import { gql } from "@apollo/client";

export const FETCH_TAGS = gql`
  query fetchTags($refName: String!) {
    fetchTags(refName: $refName) {
      boardTagName
    }
  }
`;
