import * as S from "./LocationFilter.style";

export default function LocationFilterPage(props : any) {
  const locationData = [
    { key: "0", value: "강남구", checked: false, index: 0 },
    { key: "1", value: "강동구", checked: false, index: 1 },
    { key: "2", value: "강북구", checked: false, index: 2 },
    { key: "3", value: "강서구", checked: false, index: 3 },
    { key: "4", value: "관악구", checked: false, index: 4 },
    { key: "5", value: "광진구", checked: false, index: 5 },
    { key: "6", value: "구로구", checked: false, index: 6 },
    { key: "7", value: "금천구", checked: false, index: 7 },
    { key: "8", value: "노원구", checked: false, index: 8 },
    { key: "9", value: "도봉구", checked: false, index: 9 },
    { key: "10", value: "동대문구", checked: false, index: 10 },
    { key: "11", value: "동작구", checked: false, index: 11 },
    { key: "12", value: "마포구", checked: false, index: 12 },
    { key: "13", value: "서대문구", checked: false, index: 13 },
    { key: "14", value: "서초구", checked: false, index: 14 },
    { key: "15", value: "성동구", checked: false, index: 15 },
    { key: "16", value: "성북구", checked: false, index: 16 },
    { key: "17", value: "송파구", checked: false, index: 17 },
    { key: "18", value: "양천구", checked: false, index: 18 },
    { key: "19", value: "영등포구", checked: false, index: 19 },
    { key: "20", value: "용산구", checked: false, index: 20 },
    { key: "21", value: "은평구", checked: false, index: 21 },
    { key: "22", value: "종로구", checked: false, index: 22 },
    { key: "23", value: "중구", checked: false, index: 23 },
    { key: "24", value: "중랑구", checked: false, index: 24 },
  ];

  const onChangeLocation = (checked : any, item : any) => {
    if (checked) {
      props.setLocationTagCheckList([item]);
      props.setLocationHashTag([item]);
    } else if (!checked) {
      props.setLocationHashTag(
        props.locationHashTag.filter((el : any) => el !== item)
      );
      props.setLocationTagCheckList(
        props.locationTagCheckList.filter((el : any) => el !== item)
      );
    }
  };

  return (
    <S.OpenTag>
      {locationData.map((el) => (
        <label className="checkbox" key={el.key}>
          <input
            type="checkbox"
            value={el.value}
            onChange={(e) => {
              onChangeLocation(e.target.checked, e.target.value);
            }}
            checked={
              props.locationTagCheckList.includes(el.value)
            }
          />
          <span className="checkbox_text">{el.value}</span>
        </label>
      ))}
    </S.OpenTag>
  );
}
