import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_SHOP } from "../../../../src/components/units/shop/detail/ShopDetail.queries";
import ShopWriteContainerPage from "../../../../src/components/units/shop/write/ShopWrite.container";

export default function ShopEditPage() {
  const router = useRouter();

  const { data: fetchShop } = useQuery(FETCH_SHOP, {
    variables: {
      shopId: String(router.query.shopId),
    },
  });
  return (
    <ShopWriteContainerPage isEdit={true} fetchShop={fetchShop?.fetchShop} />
  );
}
