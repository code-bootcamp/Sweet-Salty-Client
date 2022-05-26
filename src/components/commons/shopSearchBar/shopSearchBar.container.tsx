// searchbar Container === 김치훈

import { useRef, useState } from "react";
import StoreSearchBarPresenter from "./shopSearchBar.presenter";

export default function StoreSearchBarContainerPage(props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const conditionRef = useRef<HTMLInputElement>(null);
  const [searchCondition, setSearchCondition] = useState("");

  const onChangeSearchCondition = (event) => {
    setSearchCondition(event.target.value);
  };

  const onClickSearchKeyWord = () => {
    if (conditionRef.current.value === "seller") {
      props.setTitleSearch("");
      props.setSellerSearch(inputRef.current.value);
    } else {
      props.setSellerSearch("");
      props.setTitleSearch(inputRef.current.value);
    }
  };
  const onKeyUpInput = (event) => {
    if (conditionRef.current.value === "seller" && event.keyCode === 13) {
      props.setTitleSearch("");
      props.setSellerSearch(event.target.value);
    } else if (conditionRef.current.value === "title" && event.keyCode === 13) {
      props.setSellerSearch("");
      props.setTitleSearch(event.target.value);
    }
  };

  return (
    <StoreSearchBarPresenter
      onClickSearchKeyWord={onClickSearchKeyWord}
      onChangeSearchCondition={onChangeSearchCondition}
      onKeyUpInput={onKeyUpInput}
      inputRef={inputRef}
      conditionRef={conditionRef}
    />
  );
}
