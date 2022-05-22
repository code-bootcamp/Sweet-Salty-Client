import {gql} from "@apollo/client"

export const FETCH_BOARD = gql`
query fetchBoard($boardId:String!){
    fetchBoard(boardId:$boardId){
        boardTitle
        boardSugar
        boardSalt
        boardContents
        boardWriter
        boardLikeCount
        boardHit
        boardSubject
        createAt
        subCategory {subCategoryName}
        place
        boardSides { boardTags { boardTagName boardTagRefName }}
    }
}
`;