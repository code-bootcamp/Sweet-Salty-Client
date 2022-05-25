import { MouseEvent } from "react";
import { useRouter } from "next/router";
import BestReviewItemPresenterPage from "./BestReviewItem.presenter";

export default function BestReviewItemContainerPage(props) {
  console.log("여기", props);
  const router = useRouter();

  const onClickDetailPage = (event: MouseEvent<HTMLDivElement>) => {
    console.log("?", event);
    if (event.target instanceof Element) {
      router.push(`/reviews/commonReview/${event.currentTarget.id}`);
    }
  };
  return (
    <BestReviewItemPresenterPage
      id={props.id}
      onClickDetailPage={onClickDetailPage}
      fetchBestDetailData={props.el}
    />
  );
}
