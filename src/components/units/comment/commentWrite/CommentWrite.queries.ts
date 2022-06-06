import { gql } from "@apollo/client";

export const FETCH_COMMENTS = gql`
  query fetchComments($boardId: String!) {
    fetchComments(boardId: $boardId)
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($boardId: String!, $contents: String!) {
    createComment(boardId: $boardId, contents: $contents) {
      commentId
    }
  }
`;
