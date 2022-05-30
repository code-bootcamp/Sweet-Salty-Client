import { gql } from "@apollo/client";

export const FETCH_TAGS = gql`
  query fetchTags($refName: String!) {
    fetchTags(refName: $refName) {
      boardTagName
    }
  }
`;
