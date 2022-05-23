import { gql } from "@apollo/client";

export const FETCH_COMMENT = gql`
query fetchComment($boardId: String!){
    fetchComment(boardId: $boardId){
        commentId
        commentContents
        commentLikeCount
    }
}
`;

export const DELETE_COMMENT = gql`
mutation deleteComment($commentId: String!){
    deleteComment(commentId: $commentId)
}
`;

export const CREATE_COMMENT_LIKE = gql`
mutation createCommentLike($boardId: String!,$commentId: String!){
    mutation createCommentLike(boardId:$boardId,commentId:$commentId)
}
`;