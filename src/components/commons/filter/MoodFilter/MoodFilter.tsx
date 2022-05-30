import * as S from "./MoodFilter.styles";

export default function MoodFilterPage(props: any) {
  const moodData = [
    { key: "0", value: "가족들과", checked: false, index: 0 },
    { key: "1", value: "동창회자리로좋은", checked: false, index: 0 },
    { key: "2", value: "부모님과함께", checked: false, index: 0 },
    { key: "3", value: "소개팅", checked: false, index: 0 },
    { key: "4", value: "술자리로좋은", checked: false, index: 0 },
    { key: "5", value: "썸타는사람과", checked: false, index: 0 },
    { key: "6", value: "애인과함께", checked: false, index: 0 },
    { key: "7", value: "친구와함께", checked: false, index: 0 },
    { key: "8", value: "혼밥하기좋은", checked: false, index: 0 },
    { key: "9", value: "혼술하기좋은", checked: false, index: 0 },
    { key: "10", value: "회식자리로좋은", checked: false, index: 0 },
  ];

  const onChangeMood = (checked: any, item: any) => {
    if (checked) {
      props.setMoodHashTag([...props.moodHashTag, item]);
    } else if (!checked) {
      props.setMoodHashTag(props.moodHashTag.filter((el: any) => el !== item));
    }
  };

  return (
    <S.OpenTag>
      {moodData.map((el) => (
        <label className="checkbox" key={el.key}>
          <input
            type="checkbox"
            value={el.value}
            onChange={(e) => {
              onChangeMood(e.target.checked, e.target.value);
            }}
            checked={props.moodHashTag.includes(el.value)}
          />
          <span className="checkbox_text">
            <img className="check_icon" src="/images/check.png" />
            {el.value}
          </span>
        </label>
      ))}
    </S.OpenTag>
  );
}
