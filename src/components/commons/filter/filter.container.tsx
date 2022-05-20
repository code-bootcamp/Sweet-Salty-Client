// 단짠 게시판 페이지-필터-박스 Container === 김치훈

import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { searchMenuTags } from "../store";

import FilterPresenter from "./filter.presenter";
import { FETCH_TAGS } from "./filter.queries";

export default function FilterContainer() {
  const [isOpen, setIsOpen] = useState(true);
  const [menutags, setMenuTags] = useRecoilState(searchMenuTags);
  const [hashTag, setHashTag] = useState();

  const { data: menuData } = useQuery(FETCH_TAGS, {
    variables: { refName: "MENU" },
  });
  const { data: moodData } = useQuery(FETCH_TAGS, {
    variables: { refName: "MOOD" },
  });
  const onClickIsClick = (event) => {
    setMenuTags(event.target.value);
  };

  const onClickFilterOpen = () => {
    setIsOpen((prev) => !prev);
  };
  console.log(menuData);
  return (
    <FilterPresenter
      isOpen={isOpen}
      onClickFilterOpen={onClickFilterOpen}
      menuData={menuData}
      moodData={moodData}
      onClickIsClick={onClickIsClick}
      hashTag={hashTag}
      setHashTag={setHashTag}
    />
  );
}
