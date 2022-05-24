import { MouseEvent } from "react";
import { useRouter } from "next/router";
import SearchCategoryItemPresenterPage from "./CategorySearchReviewCard.presenter";

export default function SearchCategoryItemContainerPage(props) {
  const router = useRouter();
  const onClickDetailPage = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) {
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
