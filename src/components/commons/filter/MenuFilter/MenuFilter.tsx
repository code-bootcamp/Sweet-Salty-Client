import * as S from "./MenuFilter.styles";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { searchMenuTags } from "../../store";

export default function MenuFilterPage(props) {
  const [menuIsClick, setMenuIsClick] = useState(false);
  const [menutags, setMenuTags] = useRecoilState(searchMenuTags);
  const onClickIsClick = () => {
    setMenuIsClick(!menuIsClick);
    setMenuTags(props.el.boardTagName);
  };

  return (
    <div onClick={onClickIsClick} menuIsClick={menuIsClick}>
      <S.RadioButton type="radio" name="menu" />
      <label>{props.el.boardTagName}</label>
    </div>
  );
}
