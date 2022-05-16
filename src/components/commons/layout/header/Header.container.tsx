// Header container === 김치훈

import { useRouter } from "next/router";
import { useState } from "react";
import LayoutHeaderPresenter from "./Header.presenter";

export default function LayoutHeader() {
  const router = useRouter();
  const [isClick, setIsClick] = useState(false);

  const Page = ["/reviews/reviewlist"];
  const isPage = Page.includes(router.asPath);

  const onClickPhoto = () => {
    setIsClick((prev) => !prev);
  };
  const onClickHome = () => {
    router.push("/");
  };
  const onClickLogin = () => {
    router.push("/login");
  };

  const onClickReview = () => {
    router.push("/reviews/reviewlist");
  };

  return (
    <LayoutHeaderPresenter
      onClickReview={onClickReview}
      onClickPhoto={onClickPhoto}
      onClickHome={onClickHome}
      onClickLogin={onClickLogin}
      isClick={isClick}
      isPage={isPage}
    />
  );
}
