import { useRouter } from "next/router";
import StoreItemPresenterPage from "./StoreItem.presenter";
import { MouseEvent } from "react";

export default function StoreItemContainerPage(props) {
  const router = useRouter();

  //   const onClickDetailPage = (event: MouseEvent<HTMLDivElement>) => {
  //     if (event.target instanceof Element) {
  //       router.push(`/reviews/commonReview/${event.currentTarget.id}`);
  //     }
  //   };

  return <StoreItemPresenterPage id={props.id} fetchShopListData={props.el} />;
}
