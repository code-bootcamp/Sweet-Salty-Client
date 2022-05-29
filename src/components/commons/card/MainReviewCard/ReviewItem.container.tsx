import MainReviewItemPresenterPage from "./ReviewItem.presenter";
import { MouseEvent } from "react";
import { useRouter } from "next/router";
export default function MainReviewItemContainerPage(props: any) {
  const router = useRouter();
  const onClickDetailPage = (event: MouseEvent<HTMLDivElement>) => {
    if (props.subject === "REVIEW")
      router.push(`/reviews/commonReview/${event.currentTarget.id}`);
    if (props.subject === "REQUEST")
      router.push(`/reviews/wish/${event.currentTarget.id}`);
    if (props.subject === "VISITED")
      router.push(`/reviews/wishreview/${event.currentTarget.id}`);
    if (props.subject === "TASTER")
      router.push(`/reviews/testerReview/${event.currentTarget.id}`);
  };
  return (
    <MainReviewItemPresenterPage
      subject={props.subject}
      id={props.id}
      onClickDetailPage={onClickDetailPage}
      fetchBoardsData={props.el}
    />
  );
}
