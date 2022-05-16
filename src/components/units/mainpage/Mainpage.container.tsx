// Mainpage 메인페이지 container - 김치훈

import { useRouter } from "next/router";
import MainpagePresenter from "./MainPage.presenter";

export default function MainPageList() {
  const router = useRouter();

  const onClickCommonReview = () => {
    router.push("/reviews/reviewlist");
  };

  return <MainpagePresenter onClickCommonReview={onClickCommonReview} />;
}
