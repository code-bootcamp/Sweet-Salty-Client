import * as S from "./MenuFilter.styles";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { searchMenuTags } from "../../store";

export default function MenuFilterPage(props) {
  console.log(props);
  const [menutags, setMenuTags] = useRecoilState(searchMenuTags);
  const [aaa, setAaa] = useState([]);

  const onClickIsClick = (event) => {
    setMenuTags(event.target.value);

    if (event.target.checked) {
      setAaa(event.target.value);
    }
  };

  console.log(menutags);

  return (
    // <S.OpenTag id={props.el.boardTagName}>
    <div>
      <S.RadioInput
        id={props.el.boardTagName}
        onClick={onClickIsClick}
        onChange={onClickIsClick}
        type="radio"
        {...props}
        name="menu"
        value={props.el.boardTagName}
      />
      {props.el.boardTagName}
      {/* <S.RadioLabel htmlFor={props.el.boardTagName}>
        
      </S.RadioLabel> */}
    </div>
    // </S.OpenTag>
  );
}
