import * as S from "./MoodFilter.styles";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { searchMoodTags } from "../../store";

export default function MoodFilterPage(props) {
  const [menuIsClick, setMenuIsClick] = useState(false);
  const [moodtags, setMoodTags] = useRecoilState(searchMoodTags);
  const onClickIsClick = () => {
    setMenuIsClick(!menuIsClick);
    setMoodTags(props.el.boardTagName);
  };
  return (
    <S.OpenTag onClick={onClickIsClick} menuIsClick={menuIsClick}>
      {props.el.boardTagName}
    </S.OpenTag>
  );
}
