import { useQuery } from "@apollo/client";
import _ from "lodash";
import { useEffect, useState } from "react";

import FilterPresenter from "./filter.presenter";
import { FETCH_TAGS } from "./filter.queries";

export default function FilterContainer(props: any) {
  const [isOpen, setIsOpen] = useState(true);
  const [menuHashTag, setMenuHashTag] = useState([]);
  const [menuTagCheckList, setMenuTagCheckList] = useState([]);
  const [moodHashTag, setMoodHashTag] = useState([]);
  const [locationHashTag, setLocationHashTag] = useState([]);
  const [locationTagCheckList, setLocationTagCheckList] = useState([]);

  const searchTags = _.concat(moodHashTag, menuHashTag, locationHashTag);

  useEffect(() => {
    props.setSearch(searchTags);
  }, [moodHashTag, locationHashTag, menuHashTag]);

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
    setMenuHashTag([]);
    setMoodHashTag([]);
    setLocationHashTag([]);
    setMenuTagCheckList([]);
    setLocationTagCheckList([]);
  };

  return (
    <FilterPresenter
      isOpen={isOpen}
      onClickFilterOpen={onClickFilterOpen}
      menuData={menuData}
      moodData={moodData}
      locationData={locationData}
      menuTagCheckList={menuTagCheckList}
      setMenuTagCheckList={setMenuTagCheckList}
      menuHashTag={menuHashTag}
      setMenuHashTag={setMenuHashTag}
      moodHashTag={moodHashTag}
      setMoodHashTag={setMoodHashTag}
      locationHashTag={locationHashTag}
      setLocationHashTag={setLocationHashTag}
      locationTagCheckList={locationTagCheckList}
      setLocationTagCheckList={setLocationTagCheckList}
      onClickReset={onClickReset}
      onClickFilterApply={onClickFilterApply}
    />
  );
}
