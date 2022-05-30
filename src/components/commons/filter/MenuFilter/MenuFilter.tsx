import * as S from "./MenuFilter.styles";

export default function MenuFilterPage(props: any) {
  const menuData = [
    { key: "0", value: "비건", checked: false, index: 0 },
    { key: "1", value: "아시안푸드", checked: false, index: 1 },
    { key: "2", value: "양식", checked: false, index: 2 },
    { key: "3", value: "일식", checked: false, index: 3 },
    { key: "4", value: "중식", checked: false, index: 4 },
    { key: "5", value: "한식", checked: false, index: 5 },
    { key: "6", value: "할랄", checked: false, index: 6 },
  ];

  const onChangeMenu = (checked: any, item: any) => {
    if (checked) {
      props.setMenuTagCheckList([item]);
      props.setMenuHashTag([item]);
    } else if (!checked) {
      props.setMenuHashTag(props.menuHashTag.filter((el: any) => el !== item));
      props.setMenuTagCheckList(
        props.menuTagCheckList.filter((el: any) => el !== item)
      );
    }
  };
  return (
    <S.OpenTag>
      {menuData.map((el) => (
        <label className="checkbox" key={el.key}>
          <input
            type="checkbox"
            value={el.value}
            onChange={(e) => {
              onChangeMenu(e.target.checked, e.target.value);
            }}
            checked={props.menuTagCheckList.includes(el.value)}
          />
          <span className="checkbox_text">{el.value}</span>
        </label>
      ))}
    </S.OpenTag>
  );
}
