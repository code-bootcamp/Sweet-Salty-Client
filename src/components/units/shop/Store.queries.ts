import { gql } from "@apollo/client";

export const FETCH_BOARD_WITH_TAGS = gql`
  query fetchBoardWithTags($tags: [String!]!) {
    fetchBoardWithTags(tags: $tags)
  }
`;
