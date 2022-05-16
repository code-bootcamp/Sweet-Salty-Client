import {gql} from "@apollo/client"

export const LOGIN =gql`
mutation login($userEmail:String!, $userPassword:String!){
    login(userEmail:$userEmail,userPassword:$userPassword){
        accessToken
    }
}
`;

export const FETCH_USER_LOGGED_IN =gql`
query fetchUserLoggedIn{
    fetchUserLoggedIn{
        userId
        userEmail
        userName
        userNickname
        userPoint
    }
}
`;