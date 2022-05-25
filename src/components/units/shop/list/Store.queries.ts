import { gql } from "@apollo/client";

export const FETCH_SHOPS = gql`
  query fetchShops {
    fetchShops {
      shopId
      shopProductName
      shopSeller
      shopDisCount
      shopDisCountPrice
      shopOriginalPrice
      shopDescription
      shopStock
      thumbnail
      createAt
    }
  }
`;

export const FETCH_SHOP_SELLER = gql`
  query fetchShopSeller($seller: String!) {
    fetchShopSeller(seller: $seller)
  }
`;
