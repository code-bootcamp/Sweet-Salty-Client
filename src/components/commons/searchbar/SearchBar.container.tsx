// searchbar Container === 김치훈

import { useRouter } from "next/router";
import SearchBarPresenter from "./SearchBar.presenter";

export default function SearchBarPage() {
  const router = useRouter();

  const CommonReviewList = ["/reviews/commonReview/list"];
  const isCommonReviewList = CommonReviewList.includes(router.asPath);
  
  const TesterReview = ["/reviews/testerReview/list"];
  const isTesterReview = TesterReview.includes(router.asPath);
  
  const WishList = ["/reviews/wish/list"];
  const isWishList = WishList.includes(router.asPath);

  const NoticeList = ["/notice/list"];
  const isNoticeList = NoticeList.includes(router.asPath);

  const onClickReviewDetail = () => {
    router.push("/reviews/commonReview/write");
  };
  const onClickWishDetail = () => {
    router.push("/reviews/wish/write");
  };

  const onClickNoticeList = () => {
    router.push("/notice/write");
  };

  return (
    <SearchBarPresenter
      isCommonReviewList={isCommonReviewList}
      isTesterReview={isTesterReview}
      isWishList={isWishList}
      isNoticeList={isNoticeList}
      onClickReviewDetail={onClickReviewDetail}
      onClickWishDetail={onClickWishDetail}
      onClickNoticeList={onClickNoticeList}
    />
  );
}
