import { MouseEvent } from "react";
import { useRouter } from "next/router";

import BestTasterItemPresenterPage from "./BestTasterItem.presenter";

export default function BestTasterItemContainerPage(props) {
  const router = useRouter();

  const onClickDetailPage = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) {
      router.push(`/reviews/testerReview/${event.currentTarget.id}`);
    }
  };

  return (
    <BestTasterItemPresenterPage
      id={props.id}
      onClickDetailPage={onClickDetailPage}
      fetchBestDetailData={props.el}
      idx={props.idx}
    />
  );
}
