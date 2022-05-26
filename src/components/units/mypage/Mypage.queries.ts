// Mypage queries ---김치훈

import { gql } from "@apollo/client";


export const FETCH_USER_LOGGED_IN =gql`
query fetchUserLoggedIn{
    fetchUserLoggedIn{
      userId
      userState
      userEmail
      userName
      userNickname
      userImage
      userProfile
      userPhone
      userPoint
      ageGroup
      gender
      createAt
      updateAt
    }
  }
`;



// 마이단짠 게시글 목록
export const FETCH_BOARDS_OF_USER = gql`
  query fetchBoardsOfUser ($userNickname: String!) {
      fetchBoardsOfUser (userNickname: $userNickname){
        boardId
        boardTitle
        boardWriter
        boardLikeCount
        boardHit
        thumbnail
        gender
        boardSubject
        createAt
      # boardId
      # boardTitle
      # boardSugar
      # boardSaltn
      # boardContents
      # boardWriter
      # boardLikeCount
      # boardHit
      # thumbnail
      # ageGroup
      # gender
      # boardSubject
      # createAt
      # updateAt
      # place {
      #   placeName
      #   placeAddress
      # }
    }
  }
`
