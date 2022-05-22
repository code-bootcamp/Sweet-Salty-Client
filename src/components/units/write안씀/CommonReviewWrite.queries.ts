import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
mutation createBoard($createBoardInput: CreateBoardInput!, $boardTagsInput: BoardTagsInput!){
    createBoard(createBoardInput:$createBoardInput, boardTagsInput:$boardTagsInput){
        boardId
    }
}
`;

export const UPDATE_BOARD = gql`
mutation updateBoard($boardId:String! ,$updateBoardInput: UpdateBoardInput!)
{updateBoard(boardId:$boardId, updateBoardInput:$updateBoardInput){
    boardId
}}
`;

export const FETCH_TAGS = gql`
query fetchTags($refName: String!){
    fetchTags(refName : $refName){
        boardTagName
    }
}
`;