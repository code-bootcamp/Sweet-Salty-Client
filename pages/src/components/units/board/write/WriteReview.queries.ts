import {gql} from '@apollo/client'

export const CREATE_BOARD = gql`
mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput:$createBoardInput ){
boardId
    }
}
`;

export const UPDATE_BOARD = gql`
mutation updateBoard(boardId: String!,$updateBoardInput: UpdateBoardInput!){
    updateBoard(boardId:$boardId, updateBoardInput:$updateBoardInput){
        boardId
    }
}
`;