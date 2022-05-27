import { gql } from "@apollo/client";

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      userNickname
      userPoint
    }
  }
`;

export const FETCH_SHOP = gql`
  query fetchShop($shopId: String!) {
    fetchShop(shopId: $shopId) {
      shopId
      shopProductName
      shopSeller
      shopDisCount
      shopDisCountPrice
      shopOriginalPrice
      shopDescription
      shopStock
      thumbnail
      place {
        placeId
        placeName
        placeAddress
        placeUrl
        lat
        lng
      }
      createAt
    }
  }
`;
