import CommonReviewItemPresenterPage from "./ReviewItem.presenter";
import { MouseEvent } from "react";
import { useRouter } from "next/router";
export default function CommonReviewItemContainerPage(props: any) {
  const router = useRouter();
  const onClickDetailPage = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) {
      router.push(`/reviews/commonReview/${event.currentTarget.id}`);
    }
  };

  return (
    <CommonReviewItemPresenterPage
      id={props.id}
      onClickDetailPage={onClickDetailPage}
      fetchBoardsData={props.el}
    />
  );
}
