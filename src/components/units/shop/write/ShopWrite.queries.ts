import { gql } from "@apollo/client";

export const CREATE_SHOP = gql`
  mutation createShop($createShopInput: CreateShopInput!) {
    createShop(createShopInput: $createShopInput)
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;
