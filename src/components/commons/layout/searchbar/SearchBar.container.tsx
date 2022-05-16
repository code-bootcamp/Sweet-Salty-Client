// searchbar Container === 김치훈

import { useRouter } from "next/router";
import SearchBarPresenter from "./SearchBar.presenter";

export default function SearchBarPage() {
  const router = useRouter();

  const ReviewList = ["/reviews/reviewlist"];
  const isReviewList = ReviewList.includes(router.asPath);

  const onClickReviewDetail = () => {
    router.push("/reviews/reviewdetail");
  };

  return (
    <SearchBarPresenter
      isReviewList={isReviewList}
      onClickReviewDetail={onClickReviewDetail}
    />
  );
}
