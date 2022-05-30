import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($userEmail: String!, $userPassword: String!) {
    login(userEmail: $userEmail, userPassword: $userPassword) {
      accessToken
    }
  }
`;
