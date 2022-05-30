import { useQuery } from "@apollo/client";
import { useState } from "react";
import ShopPresenterPage from "./ShopList.presenter";
import {
  FETCH_SHOPS,
  FETCH_SHOP_SELLER,
  FETCH_SHOP_TITLE,
} from "./ShopList.queries";

export default function ShopContainerPage(props: any) {
  const [sellerSearch, setSellerSearch] = useState("");
  const [titleSearch, setTitleSearch] = useState("");

  const { data: shopListData, fetchMore: shopFetchMoreData } =
    useQuery(FETCH_SHOPS);

  const { data: sellerSearchData, fetchMore: sellerSearchFetchMoreData } =
    useQuery(FETCH_SHOP_SELLER, {
      variables: {
        seller: sellerSearch,
      },
    });

  const { data: titleSearchData, fetchMore: titleSearchFetchMoreData } =
    useQuery(FETCH_SHOP_TITLE, {
      variables: {
        title: titleSearch,
      },
    });

  const shopListDataLoadMore = () => {
    if (!shopListData) return;
    shopFetchMoreData({
      variables: {
        page: Math.ceil(shopListData.fetchShops.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchShops)
          return { fetchShops: [...prev.fetchShops] };
        return {
          fetchShops: [...prev.fetchShops, ...fetchMoreResult?.fetchShops],
        };
      },
    });
  };

  const infiniteSellerSearchArr = sellerSearchData?.fetchShopSeller.hits;

  const sellerSearchDataLoadMore = () => {
    if (!infiniteSellerSearchArr) return;
    sellerSearchFetchMoreData({
      variables: {
        page: Math.ceil(infiniteSellerSearchArr.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.hits) return { hits: [...prev.hits] };
        return {
          hits: [...prev.hits, ...fetchMoreResult?.hits],
        };
      },
    });
  };

  const infiniteTitleSearchArr = titleSearchData?.fetchShopTitles.hits;

  const titleSearchDataLoadMore = () => {
    if (!infiniteTitleSearchArr) return;
    titleSearchFetchMoreData({
      variables: {
        page: Math.ceil(infiniteTitleSearchArr.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.hits) return { hits: [...prev.hits] };
        return {
          hits: [...prev.hits, ...fetchMoreResult?.hits],
        };
      },
    });
  };
  return (
    <ShopPresenterPage
      shopListData={shopListData}
      shopListDataLoadMore={shopListDataLoadMore}
      setSellerSearch={setSellerSearch}
      setTitleSearch={setTitleSearch}
      sellerSearchDataLoadMore={sellerSearchDataLoadMore}
      sellerSearch={sellerSearch}
      sellerSearchData={sellerSearchData}
      titleSearchDataLoadMore={titleSearchDataLoadMore}
      titleSearch={titleSearch}
      titleSearchData={titleSearchData}
    />
  );
}
