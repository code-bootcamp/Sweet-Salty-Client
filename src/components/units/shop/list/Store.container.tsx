// 여기는 스토어페이지입니다.

import { useQuery } from "@apollo/client";
import ShopPresenterPage from "./Store.presenter";
import { FETCH_SHOPS, FETCH_SHOP_SELLER } from "./Store.queries";

export default function ShopContainerPage(props) {
  const {
    data: shopListData,
    fetchMore: shopListsData,
    refetch: refetchShopListsData,
  } = useQuery(FETCH_SHOPS);

  const { data: sellerSearchData, refetch: refetchSearchData } =
    useQuery(FETCH_SHOP_SELLER);

  const shopListDataLoadMore = () => {
    if (!shopListData) return;
    shopListsData({
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

  return (
    <ShopPresenterPage
      shopListData={shopListData}
      shopListDataLoadMore={shopListDataLoadMore}
    />
  );
}
