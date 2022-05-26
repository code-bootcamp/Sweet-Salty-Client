// 마이페이지 이미지 업로드 queries --- 김치훈

import { gql } from "@apollo/client";

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;


export const UPDATE_IMAGE = gql`
  mutation updateImage ($image: String!){
    updateImage(image: $image){
      userId
      userImage
    }
  }
`

export const FETCH_USER_LOGGED_IN =gql`
query fetchUserLoggedIn{
    fetchUserLoggedIn{
      userImage
    }
  }
`;