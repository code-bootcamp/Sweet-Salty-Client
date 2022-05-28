import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ShopDetailPresenterPage from "./ShopDetail.presenter";
import { FETCH_SHOP, FETCH_USER_LOGGED_IN } from "./ShopDetail.queries";

export default function ShopDetailContainerPage(props) {
  const router = useRouter();
  const [buyAmount, setBuyAmount] = useState(0);

  const { data: fetchUserLoggedInData } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: fetchShopData } = useQuery(FETCH_SHOP, {
    variables: { shopId: String(router.query.shopId) },
  });
  console.log("0", fetchShopData);
  // 수량 * 가격
  const [amountPoint, setAmountPoint] = useState(
    fetchShopData?.fetchShop.shopDisCountPrice
  );
  console.log(
    "여기ㅁㄶㄴㅇ",
    fetchUserLoggedInData?.fetchUserLoggedIn.userPoint - amountPoint
  );
  // 잔여포인트
  const [remainPoint, setRemainPoint] = useState(
    fetchUserLoggedInData?.fetchUserLoggedIn.userPoint - amountPoint
  );

  // 수량 * 가격
  useEffect(() => {
    setAmountPoint(buyAmount * fetchShopData?.fetchShop.shopDisCountPrice);
  }, [buyAmount]);

  // 잔여 포인트
  useEffect(() => {
    setRemainPoint(
      fetchUserLoggedInData?.fetchUserLoggedIn.userPoint - amountPoint
    );
  }, [amountPoint]);

  // 수량 증가 감소 함수
  const buyAmountPlus = () => {
    if (buyAmount >= fetchShopData.fetchShop.shopStock) return;
    setBuyAmount((prev) => prev + 1);
  };
  const buyAmountMinus = () => {
    if (buyAmount <= 0) return;
    setBuyAmount((prev) => prev - 1);
  };

  return (
    <ShopDetailPresenterPage
      fetchUserLoggedIn={fetchUserLoggedInData}
      fetchShop={fetchShopData}
      buyAmountPlus={buyAmountPlus}
      buyAmount={buyAmount}
      buyAmountMinus={buyAmountMinus}
      amountPoint={amountPoint}
      remainPoint={remainPoint}
    />
  );
}
