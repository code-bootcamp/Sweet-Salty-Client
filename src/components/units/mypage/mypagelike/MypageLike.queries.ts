// 좋아요한 단짠 게시글 queries ---김치훈

import { gql } from "@apollo/client";


// 좋아요한 게시글 목록
export const FETCH_PICKED_BOARDS = gql`
  query fetchPickedBoards{
    fetchPickedBoards{
      boardId
      boardTitle
      boardWriter
      boardLikeCount
      boardHit
      thumbnail
      boardSubject
      createAt
      user{
        userImage
      }
      place{
        placeId
        placeName
        placeAddress
      }
    }
  }
`
