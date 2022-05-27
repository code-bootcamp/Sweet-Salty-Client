import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ShopDetailPresenterPage from "./ShopDetail.presenter";
import { FETCH_SHOP, FETCH_USER_LOGGED_IN } from "./ShopDetail.queries";

export default function ShopDetailContainerPage(props) {
  const router = useRouter();
  const { data: fetchUserLoggedInData } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: fetchShopData } = useQuery(FETCH_SHOP, {
    variables: { shopId: String(router.query.shopId) },
  });
  console.log("다그다", fetchShopData);
  return (
    <ShopDetailPresenterPage
      fetchUserLoggedIn={fetchUserLoggedInData}
      fetchShop={fetchShopData}
    />
  );
}
