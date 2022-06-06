import { MouseEvent } from "react";
import { useRouter } from "next/router";
import BestReviewItemPresenterPage from "./BestReviewItem.presenter";

export default function BestReviewItemContainerPage(props: any) {
  const router = useRouter();

  const onClickDetailPage = (event: MouseEvent<HTMLDivElement>) => {
    if (props.el.boardSubject === "TASTER") {
      router.push(`/reviews/testerReview/${event.currentTarget.id}`);
    }
    if (props.el.boardSubject === "REVIEW") {
      router.push(`/reviews/commonReview/${event.currentTarget.id}`);
    }
    if (props.el.boardSubject === "REQUEST") {
      router.push(`/reviews/wish/${event.currentTarget.id}`);
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
