// 일반리뷰페이지 container === 김치훈

import { useRouter } from "next/router";
import CommonReviewPresenterPage from "./CommonReview.presenter";

export default function CommonReviewContainerPage() {
  const router = useRouter();

  const onClickCommonReview = () => {
    router.push("/reviews/reviewlist");
  };
  return (
    <CommonReviewPresenterPage onClickCommonReview={onClickCommonReview} />
  );
}
