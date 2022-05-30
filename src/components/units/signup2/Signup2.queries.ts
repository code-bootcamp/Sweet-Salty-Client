import {gql} from '@apollo/client'

export const CREATE_USER= gql`
mutation createUser($createUserInput: CreateUserInput!){
    createUser(createUserInput:$createUserInput){
        userNickname
    }
}
`;
export const SIGNUP_GET_TOKEN=gql`
mutation signUpGetToken($phone: String!){
  signUpGetToken(phone:$phone)
}
`;
export const SIGNUP_CHECK_TOKEN=gql`
mutation signUpCheckToken($phone: String!, $token:String!){
  signUpCheckToken(phone: $phone, token: $token)
}
`;

export const OVERLAP_EMAIL = gql`
mutation overlapEmail($email:String!){
  overlapEmail(email:$email)
}
`;
export const OVERLAP_NICKNAME = gql`
mutation overlapNickname($nickname:String!){
  overlapNickname(nickname:$nickname)
}
`;