import * as S from "./MenuFilter.styles";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { searchMenuTags } from "../../store";

export default function MenuFilterPage(props) {
  const [menutags, setMenuTags] = useRecoilState(searchMenuTags);
  // const [aaa, setAaa] = useState(false);

  const onClickIsClick = (event) => {
    setMenuTags(event.target.value);

    // setAaa(event.target.checked);
  };

  console.log(menutags);

  return (
    <S.OpenTag>
      <S.RadioInput
        id={props.el.boardTagName}
        onClick={onClickIsClick}
        type="radio"
        name="menu"
        value={props.el.boardTagName}
      />
      <S.RadioLabel htmlFor={props.el.boardTagName}>
        {props.el.boardTagName}
      </S.RadioLabel>
    </S.OpenTag>
  );
}
