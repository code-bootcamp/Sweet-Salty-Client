import { useRef, useState } from "react";
import StoreSearchBarPresenter from "./shopSearchBar.presenter";

export default function StoreSearchBarContainerPage(props: any) {
  const inputRef = useRef<HTMLInputElement>(null);
  const conditionRef = useRef<HTMLInputElement>(null);
  const [, setSearchCondition] = useState("");

  const onChangeSearchCondition = (event: any) => {
    setSearchCondition(event.target.value);
  };

  const onClickSearchKeyWord = () => {
    if (conditionRef.current?.value === "seller") {
      props.setTitleSearch("");
      props.setSellerSearch(inputRef.current?.value);
    } else {
      props.setSellerSearch("");
      props.setTitleSearch(inputRef.current?.value);
    }
  };
  const onKeyUpInput = (event: any) => {
    if (conditionRef.current?.value === "seller" && event.keyCode === 13) {
      props.setTitleSearch("");
      props.setSellerSearch(event.target.value);
    } else if (
      conditionRef.current?.value === "title" &&
      event.keyCode === 13
    ) {
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
