import { MouseEvent } from "react";
import { useRouter } from "next/router";
import BestReviewItemPresenterPage from "./BestReviewItem.presenter";

export default function BestReviewItemContainerPage(props: any) {
  const router = useRouter();

  const onClickDetailPage = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) {
      router.push(`/reviews/commonReview/${event.currentTarget.id}`);
    }
  };
  return (
    <BestReviewItemPresenterPage
      id={props.id}
      onClickDetailPage={onClickDetailPage}
      fetchBestDetailData={props.el}
      idx={props.idx}
    />
  );
}
