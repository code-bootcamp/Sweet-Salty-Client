// 단짠 게시판 페이지-필터-박스 Container === 김치훈

import { useQuery } from "@apollo/client";
import { useState } from "react";

import FilterPresenter from "./filter.presenter";
import { FETCH_TAGS } from "./filter.queries";

export default function FilterContainer() {
  const [isOpen, setIsOpen] = useState(true);
  const [menuHashTag, setMenuHashTag] = useState([]);
  const [moodHashTag, setMoodHashTag] = useState([]);

  const { data: menuData } = useQuery(FETCH_TAGS, {
    variables: { refName: "MENU" },
  });
  const { data: moodData } = useQuery(FETCH_TAGS, {
    variables: { refName: "MOOD" },
  });
  const onClickFilterOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const test = menuHashTag;
  const test2 = moodHashTag;
  const test3 = test.concat(test2);

  console.log(test3);

  return (
    <FilterPresenter
      isOpen={isOpen}
      onClickFilterOpen={onClickFilterOpen}
      menuData={menuData}
      moodData={moodData}
      menuHashTag={menuHashTag}
      setMenuHashTag={setMenuHashTag}
      moodHashTag={moodHashTag}
      setMoodHashTag={setMoodHashTag}
    />
  );
}
