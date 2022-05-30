import { useRouter } from "next/router";
import BestStoreItemPresenterPage from "./BestStoreItem.presenter";
import { MouseEvent } from "react";

export default function BestStoreItemContainerPage(props: any) {
  const router = useRouter();

  const onClickDetailPage = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) {
      router.push(`/shop/${event.currentTarget.id}`);
    }
  };

  return (
    <BestStoreItemPresenterPage
      fetchShopBestData={props.el}
      id={props.id}
      onClickDetailPage={onClickDetailPage}
      idx={props.idx}
    />
  );
}
