// searchbar Container === 김치훈

import { useRouter } from "next/router";
import SearchBarPresenter from "./SearchBar.presenter";

export default function SearchBarPage() {
  const router = useRouter();

  const ReviewList = ["/reviews/list"];
  const isReviewList = ReviewList.includes(router.asPath);

  const NoticeList = ["/notice/list"];
  const isNoticeList = NoticeList.includes(router.asPath);

  const onClickReviewDetail = () => {
    router.push("/reviews/write");
  };

  const onClickNoticeList = () => {
    router.push("/notice/write");
  };

  return (
    <SearchBarPresenter
      isReviewList={isReviewList}
      isNoticeList={isNoticeList}
      onClickReviewDetail={onClickReviewDetail}
      onClickNoticeList={onClickNoticeList}
    />
  );
}
