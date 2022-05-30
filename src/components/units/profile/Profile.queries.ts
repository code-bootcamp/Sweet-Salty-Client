import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUser($userEmail: String!) {
    fetchUser(userEmail: $userEmail) {
    userId
    userEmail
    userNickname
    userImage
    userProfile
    }
  }
`;