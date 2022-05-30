import { gql } from "@apollo/client";

export const FETCH_PICKED_BOARDS = gql`
  query fetchPickedBoards {
    fetchPickedBoards {
      boardId
      boardTitle
      boardWriter
      boardLikeCount
      boardHit
      thumbnail
      boardSubject
      createAt
      user {
        userImage
      }
      place {
        placeId
        placeName
        placeAddress
      }
    }
  }
`;
