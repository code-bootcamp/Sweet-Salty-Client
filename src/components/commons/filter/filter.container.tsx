// 단짠 게시판 페이지-필터-박스 Container === 김치훈

import { useQuery } from "@apollo/client";
import { useState } from "react";

import FilterPresenter from "./filter.presenter";
import { FETCH_TAGS } from "./filter.queries";

export default function FilterContainer(props) {
  const [isOpen, setIsOpen] = useState(true);

  const { data: menuData } = useQuery(FETCH_TAGS, {
    variables: { refName: "MENU" },
  });
  const { data: moodData } = useQuery(FETCH_TAGS, {
    variables: { refName: "MOOD" },
  });
  const { data: locationData } = useQuery(FETCH_TAGS, {
    variables: { refName: "REGION" },
  });

  const onClickFilterOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const onClickFilterApply = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickReset = () => {
    props.setMenuHashTag([]);
    props.setMoodHashTag([]);
    props.setMenuTagCheckList([]);
    props.setMoodTagCheckList([]);
  };

  return (
    <FilterPresenter
      isOpen={isOpen}
      onClickFilterOpen={onClickFilterOpen}
      menuData={menuData}
      moodData={moodData}
      locationData={locationData}
      menuTagCheckList={props.menuTagCheckList}
      setMenuTagCheckList={props.setMenuTagCheckList}
      moodTagCheckList={props.moodTagCheckList}
      setMoodTagCheckList={props.setMoodTagCheckList}
      menuHashTag={props.menuHashTag}
      setMenuHashTag={props.setMenuHashTag}
      moodHashTag={props.moodHashTag}
      setMoodHashTag={props.setMoodHashTag}
      locationHashTag={props.locationHashTag}
      setLocationHashTag={props.setLocationHashTag}
      locationTagCheckList={props.locationTagCheckList}
      setLocationTagCheckList={props.setLocationTagCheckList}
      onClickReset={onClickReset}
      onClickFilterApply={onClickFilterApply}
    />
  );
}
