import { useRouter } from "next/router";
import StoreItemPresenterPage from "./StoreItem.presenter";
import { MouseEvent } from "react";

export default function StoreItemContainerPage(props: any) {
  const router = useRouter();

  const onClickDetailPage = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) {
      router.push(`/shop/${event.currentTarget.id}`);
    }
  };
  return (
    <StoreItemPresenterPage
      onClickDetailPage={onClickDetailPage}
      id={props.id}
      fetchShopListData={props.el}
    />
  );
}
