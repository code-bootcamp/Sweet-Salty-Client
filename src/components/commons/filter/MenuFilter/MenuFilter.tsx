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
    <S.OpenTag onClick={onClickIsClick} menuIsClick={menuIsClick}>
      <S.MenuInput type="radio" name="menu" value={props.el.boardTagName} />
      {/* {props.el.boardTagName} */}
    </S.OpenTag>
  );
}
