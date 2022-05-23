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

export const CREATE_COMMENT = gql`
mutation createComment($boardId: String!, $contents: String!){
    createComment(boardId:$boardId, contents:$contents){
        commentId
    }
}
`;