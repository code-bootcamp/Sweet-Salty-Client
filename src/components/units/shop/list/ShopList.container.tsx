// 여기는 스토어페이지입니다.

import { useQuery } from "@apollo/client";
import { useState } from "react";
import ShopPresenterPage from "./ShopList.presenter";
import {
  FETCH_SHOPS,
  FETCH_SHOP_SELLER,
  FETCH_SHOP_TITLE,
} from "./ShopList.queries";

export default function ShopContainerPage(props) {
  const [sellerSearch, setSellerSearch] = useState("");
  const [titleSearch, setTitleSearch] = useState("");

  // 전체 리스트 데이터
  const {
    data: shopListData,
    fetchMore: shopFetchMoreData,
    refetch: refetchShopListsData,
  } = useQuery(FETCH_SHOPS);

  console.log("seller", sellerSearch);
  console.log("title", titleSearch);

  // 가게이름 검색 데이터
  const {
    data: sellerSearchData,
    fetchMore: sellerSearchFetchMoreData,
    refetch: refetchSearchData,
  } = useQuery(FETCH_SHOP_SELLER, {
    variables: {
      seller: sellerSearch,
    },
  });

  // 메뉴 검색 데이터
  const {
    data: titleSearchData,
    fetchMore: titleSearchFetchMoreData,
    refetch: refetchTitleData,
  } = useQuery(FETCH_SHOP_TITLE, {
    variables: {
      title: titleSearch,
    },
  });

  // 전체 shop 리스트 데이터 무한스크롤
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

  // seller 검색 리스트 데이터 무한스크롤
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

  // title 검색 리스트 데이터 무한스크롤
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
