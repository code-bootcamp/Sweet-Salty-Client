import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
mutation createBoard($createBoardInput: CreateBoardInput!, $createBoardTagsInput: CreateBoardTagsInput!){
    createBoard(createBoardInput:$createBoardInput, createBoardTagsInput:$createBoardTagsInput){
boardId
    }
}
`;

export const UPDATE_BOARD = gql`
mutation updateBoard($boardId:String! ,$updateBoardInput: UpdateBoardInput)
{updateBoard(boardId:$boardId, updateBoardInput:$updateBoardInput){
    boardId
}}
`;