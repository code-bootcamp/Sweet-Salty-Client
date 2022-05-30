import { gql } from "@apollo/client";

export const FETCH_COMMENTS = gql`
query fetchComments($boardId: String!){
    fetchComments(boardId: $boardId)
    }
`;

export const UPDATE_COMMENT = gql`
mutation updateComment($commentId: String!, $contents: String!){
    updateComment(commentId: $commentId, contents:$contents){
        commentId
    }
}
`;

export const DELETE_COMMENT = gql`
mutation deleteComment($commentId: String!){
    deleteComment(commentId: $commentId)
}
`;

export const CREATE_COMMENT_LIKE = gql`
mutation createCommentLike($commentId: String!){
    createCommentLike(commentId:$commentId)
}
`;
export const FETCH_USER_LOGGED_IN =gql`
query fetchUserLoggedIn{
    fetchUserLoggedIn{
        userImage
        userNickname
    }
}
`;