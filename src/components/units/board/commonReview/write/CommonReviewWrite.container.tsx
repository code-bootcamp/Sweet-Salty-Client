import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import CommonReviewWritePresenter from "./CommonReviewWrite.presenter";
import { useState } from "react";
import { useMutation } from "@apollo/client";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import {
  CREATE_BOARD,
  CREATE_BOARD_REQ,
  CREATE_BOARD_RES,
  UPDATE_BOARD,
} from "./CommonReviewWrite.queries";
// const schema = yup.object({
//   boardTitle: yup.string().max(20).required(),
//   boardSugar: yup.string().max(30).required(),
//   boardSalt: yup.string().max(30).required(),
// });

// const nonSchema = yup.object({});
export default function CommonReviewWriteContainer(props: any) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [createBoardReq] = useMutation(CREATE_BOARD_REQ);
  const [createBoardRes] = useMutation(CREATE_BOARD_RES);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [subCategoryName, setSubCategoryName] = useState(
    String(props.checkPage)
  );
  const [boardTagMenu, setBoardTagMenu] = useState();
  const [moodHashTag, setMoodHashTag] = useState([]);
  const [boardContents, setBoardContents] = useState("");
  const [address, setAddress] = useState({
    place_name: "",
    road_address_name: "",
    place_url: "",
    x: "",
    y: "",
  });

  const [menuTagData, setMenuTagData] = useState([
    { key: "0", value: "비건", checked: false, index: 0 },
    { key: "1", value: "아시안푸드", checked: false, index: 1 },
    { key: "2", value: "양식", checked: false, index: 2 },
    { key: "3", value: "일식", checked: false, index: 3 },
    { key: "4", value: "중식", checked: false, index: 4 },
    { key: "5", value: "한식", checked: false, index: 5 },
    { key: "6", value: "할랄", checked: false, index: 6 },
  ]);
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
      value: "REQUEST",
      name: "가주세요",
      checked: false,
      index: 2,
    },
  ]);

  const onChangeCheckMenu = (el: any) => (event: any) => {
    const select = menuTagData.map((el, idx) => {
      return { ...el, checked: idx === Number(event.target.id) };
    });
    setMenuTagData(select);

    setBoardTagMenu(el.value);
  };
  const onChangeCheckMood = (checked: any, item: any) => (event: any) => {
    if (checked) {
      setMoodHashTag([...moodHashTag, item]);
    } else if (!checked) {
      setMoodHashTag(moodHashTag.filter((el) => el !== item));
    }
  };

  const onChangeCheckCategory = (el: any) => (event: any) => {
    const select = categoryData.map((el, idx) => {
      return { ...el, checked: idx === Number(event.target.id) };
    });
    setCategoryData(select);

    setSubCategoryName(el.value);
  };

  const { register, handleSubmit, setValue, getValues, formState,trigger } = useForm({
    // resolver: yupResolver(props.isEdit ? nonSchema : schema),
    mode: "onChange",
  });

  const onClickCancel = () => {
    router.back();
  };

  const onClickReg = async (data: any) => {
    if (subCategoryName === "REVIEW" || subCategoryName === "TASTER") {
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
                tags: [
                  boardTagMenu,
                  ...moodHashTag,
                  address.road_address_name.split(" ")[1],
                ],
              },
            },
          });
          alert("게시글 등록 완료");
          if (subCategoryName === "REVIEW") {
            router.push(
              `/reviews/commonReview/${result.data?.createBoard.boardId}`
            );
          } else if (subCategoryName === "TASTER") {
            router.push(
              `/reviews/testerReview/${result.data?.createBoard.boardId}`
            );
          }
        } catch (error: any) {
          alert(error.message);
        }
      }
    } else if (subCategoryName === "REQUEST") {
      try {
        const result = await createBoardReq({
          variables: {
            createBoardReqInput: {
              boardTitle: data.boardTitle,
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
          },
        });
        alert("게시글 등록 완료");
        router.push(`/reviews/wish/${result.data?.createBoardReq.boardId}`);
      } catch (error: any) {
        alert(error.message);
      }
    } else if (subCategoryName === "VISITED") {
      try {
        const result = await createBoardRes({
          variables: {
            reqBoardId: props.wishId,
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
              boardTagRegion: [address.road_address_name.split(" ")[1]],
            },
          },
        });
        alert("게시글 등록 완료");
        router.push(
          `/reviews/commonReview/${result.data?.createBoardRes.boardId}`
        );
      } catch (error: any) {
        alert(error.message);
      }
    }
  };

  // const onChangeContents = (value: string) => {
  //   setValue("boardContents", value === "사진을 드래그&드롭 해보세요." ? "" : value);
  //   trigger("boardContents");
  // };

  //
  const onClickUpdate = async (data:any) => {
    try {
      await updateBoard({
        variables: {
          boardId: String(router.query.boardId),
          updateBoardInput: {
            boardTitle: data.boardTitle
              ? data.boardTitle
              : props.updateData?.boardTitle,
            boardSugar: data.boardSugar
              ? data.boardSugar
              : props.updateData?.boardSugar,
            boardSalt: data.boardSalt
              ? data.boardSalt
              : props.updateData?.boardSalt,
            boardContents: boardContents || props.updateData?.boardContents,
            subCategoryName: props.updateData?.subCategoryName,
            tags: props.updateData?.tags,
            place: {
              placeName: props.updateData?.place.placeName,
              placeAddress: props.updateData?.place.placeAddress,
              placeUrl: props.updateData?.place.placeUrl,
              lat: props.updateData?.place.lat,
              lng: props.updateData?.place.lng,
                          }
          },
        },
      });
      alert("수정 완료");
      router.push(`/reviews/commonReview/${router.query.boardId}`);
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <CommonReviewWritePresenter
      onClickCancel={onClickCancel}
      moodHashTag={moodHashTag}
      setMoodHashTag={setMoodHashTag}
      getValues={getValues}
      setValue={setValue}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      // onChangeContents={onChangeContents}
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
      communityCheckPage={props.communityCheckPage}
      onClickReg={onClickReg}
      onClickUpdate={onClickUpdate}
      subCategoryName={subCategoryName}
      updateData={props.updateData}
      isEdit={props.isEdit}
    />
  );
}
