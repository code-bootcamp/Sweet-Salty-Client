import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import { useRouter } from "next/router";
import CommonReviewWritePresenter from "./CommonReviewWrite.presenter";
import { useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./CommonReviewWrite.queries";
import { Editor } from "@toast-ui/react-editor";
// const schema =yup.object({
//   boardTitle: yup.string().required("제목을 입력해주세요."),
//   boardSugar: yup.string().required("단맛(장점)을 입력해주세요."),
//   boardSalt: yup.string().required("짠맛(단점)을 입력해주세요."),
//   boardContents: yup.string().required("리뷰를 입력해주세요.")
// })
// const nonSchema = yup.object({});
export default function CommonReviewWriteContainer(props) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [subCategoryName, setSubCategoryName] = useState("");
  const [boardTagMenu, setBoardTagMenu] = useState();
  const [moodHashTag, setMoodHashTag] = useState([]);
  const [boardContents, setBoardContents] = useState("");
  const [address, setAddress] = useState();

  // 메뉴 태그 데이터 테이블
  const [menuTagData, setMenuTagData] = useState([
    { key: "0", value: "비건", checked: false, index: 0 },
    { key: "1", value: "아시안푸드", checked: false, index: 1 },
    { key: "2", value: "양식", checked: false, index: 2 },
    { key: "3", value: "일식", checked: false, index: 3 },
    { key: "4", value: "중식", checked: false, index: 4 },
    { key: "5", value: "한식", checked: false, index: 5 },
    { key: "6", value: "할랄", checked: false, index: 6 },
  ]);
  // 분위기 태그 데이터 테이블
  const [moodTagData, setMoodTagData] = useState([
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
  ]);

  // 상단 카테고리 데이터 테이블
  const [categoryData, setCategoryData] = useState([
    { key: "0", value: "REVIEW", name: "단짠리뷰", checked: false, index: 0 },
    {
      key: "1",
      value: "TASTER",
      name: "시식단 리뷰",
      checked: false,
      index: 1,
    },
    {
      key: "2",
      value: "WISH",
      name: "가주세요",
      checked: false,
      index: 2,
    },
  ]);

  // 메뉴 태그 체크되었는지 확인
  const onChangeCheckMenu = (el) => (event) => {
    const select = menuTagData.map((el, idx) => {
      return { ...el, checked: idx === Number(event.target.id) };
    });
    setMenuTagData(select);

    setBoardTagMenu([el.value]);
  };
  // 분위기 태그 체크되었는지 확인
  const onChangeCheckMood = (checked, item) => (event) => {
    if (checked) {
      setMoodHashTag([...moodHashTag, item]);
    } else if (!checked) {
      setMoodHashTag(moodHashTag.filter((el) => el !== item));
    }
  };
  // 카테고리 태그 체크되었는지 확인
  const onChangeCheckCategory = (el) => (event) => {
    const select = categoryData.map((el, idx) => {
      return { ...el, checked: idx === Number(event.target.id) };
    });
    setCategoryData(select);

    setSubCategoryName(el.value);
  };

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    getValues,
    formState,
    reset,
  } = useForm({
    // resolver: yupResolver(props.isEdit ? nonSchema : schema),
    mode: "onChange",
  });
  // const onChangeContents = (value: string) => {
  //   setValue("boardContents", value === "<p><br></p>" ? "" : value);
  //   trigger("boardContents");
  // };

  const onClickCancel = () => {
    router.back();
  };

  const onClickSubmit = async (data) => {
    if (moodHashTag.length > 3) {
      alert("분위기는 3개까지 선택이 가능합니다.");
    } else {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              boardTitle: data.boardTitle,
              boardSugar: data.boardSugar,
              boardSalt: data.boardSalt,
              boardContents,
              subCategoryName,
              place: {
                placeName: address.place_name,
                placeAddress: address.road_address_name,
                placeUrl: address.place_url,
                lat: address.x,
                lng: address.y,
              },
            },
            boardTagsInput: {
              boardTagMenu,
              boardTagMood: moodHashTag,
              boardTagRegion: ["구로구"],
            },
          },
        });
        console.log(result);
        alert("등록 완료");
      } catch (error: any) {
        alert(error.message);
      }
    }
  };
  return (
    <CommonReviewWritePresenter
      onClickCancel={onClickCancel}
      moodHashTag={moodHashTag}
      setMoodHashTag={setMoodHashTag}
      onClickSubmit={onClickSubmit}
      getValues={getValues}
      setValue={setValue}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      setBoardContents={setBoardContents}
      setAddress={setAddress}
      menuTagData={menuTagData}
      setMenuTagData={setMenuTagData}
      onChangeCheckMenu={onChangeCheckMenu}
      moodTagData={moodTagData}
      setMoodTagData={setMoodTagData}
      onChangeCheckMood={onChangeCheckMood}
      categoryData={categoryData}
      setCategoryData={setCategoryData}
      onChangeCheckCategory={onChangeCheckCategory}
      checkPage={props.checkPage}
    />
  );
}
