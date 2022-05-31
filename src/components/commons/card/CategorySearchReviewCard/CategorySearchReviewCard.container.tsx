import { MouseEvent } from "react";
import { useRouter } from "next/router";
import SearchCategoryItemPresenterPage from "./CategorySearchReviewCard.presenter";

export default function SearchCategoryItemContainerPage(props: any) {
  const router = useRouter();

  const onClickDetailPage = (event: MouseEvent<HTMLDivElement>) => {
    if (props.el.boardsubject === "TASTER") {
      router.push(`/reviews/testerReview/${event.currentTarget.id}`);
    }
    if (props.el.boardsubject === "REVIEW") {
      router.push(`/reviews/commonReview/${event.currentTarget.id}`);
    }
    if (props.el.boardsubject === "REQUEST") {
      router.push(`/reviews/wish/${event.currentTarget.id}`);
    }
    if (props.el.boardsubject === "VISITED") {
      router.push(`/reviews/commonReview/${event.currentTarget.id}`);
    }
  };
  return (
    <SearchCategoryItemPresenterPage
      id={props.id}
      onClickDetailPage={onClickDetailPage}
      fetchTagSearchData={props.el}
    />
  );
}
