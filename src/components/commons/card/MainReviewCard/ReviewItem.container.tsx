import MainReviewItemPresenterPage from "./ReviewItem.presenter";
import { MouseEvent } from "react";
import { useRouter } from "next/router";
export default function MainReviewItemContainerPage(props) {
  const router = useRouter();
  const onClickDetailPage = (event: MouseEvent<HTMLDivElement>) => {
    if(props.category==="REVIEW")
    router.push(`/reviews/commonReview/${event.currentTarget.id}`)
    if(props.category==="REQUEST")
    router.push(`/reviews/wish/${event.currentTarget.id}`)
    if(props.category==="VISITED")
    router.push(`/reviews/wishreview/${event.currentTarget.id}`)
    if(props.category==="TASTER")
    router.push(`/reviews/tasterReview/${event.currentTarget.id}`)
  
};
  
  return (
    <MainReviewItemPresenterPage
    category={props.category}
      id={props.id}
      onClickDetailPage={onClickDetailPage}
      fetchBoardsData={props.el}
    />
  );
}
