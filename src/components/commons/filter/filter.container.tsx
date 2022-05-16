// 단짠 게시판 페이지-필터-박스 Container === 김치훈

import { useState } from "react";
import FilterPresenter from "./filter.presenter";

export default function FilterContainer() {
  const [isOpen, setIsOpen] = useState(true);

  const onClickFilterOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <FilterPresenter isOpen={isOpen} onClickFilterOpen={onClickFilterOpen} />
  );
}
