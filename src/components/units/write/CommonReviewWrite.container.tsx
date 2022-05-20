import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import CommonReviewWritePresenter from "./CommonReviewWrite.presenter";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./CommonReviewWrite.queries";

const schema =yup.object({
  boardTitle: yup.string().required("제목을 입력해주세요."),
  boardSugar: yup.string().required("단맛(장점)을 입력해주세요."),
  boardSalt: yup.string().required("짠맛(단점)을 입력해주세요."),
boardContents: yup.string().required("리뷰를 입력해주세요.")
})
const nonSchema = yup.object({});
export default function CommonReviewWriteContainer(props){
  const router = useRouter()
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [subCategoryName, setSubCategoryName ] = useState("");
  const [boardTagMenu, setBoardTagMenu] = useState([]);
  const [moodHashTag, setMoodHashTag] = useState([]);
  const {
    register,
    handleSubmit,
    formState,
    setValue,
    trigger,
    getValues,
    reset,
  } = useForm({
    resolver: yupResolver(props.isEdit ? nonSchema : schema),
    mode: "onChange",
  });
  const onChangeContents = (value: string) => {
    setValue("boardContents", value === "<p><br></p>" ? "" : value);
    trigger("boardContents");
  };
  const onClickCategory = (event)=>{
setSubCategoryName(event.target.id)
  }
  const onClickMenu =(event)=>{
    const temp = [event.target.id]
    setBoardTagMenu(temp)
  }
  const checker = ()=>{
        console.log(boardTagMenu)
  }
  const onClickCancel =() =>{
    router.back();
  }
const onClickSubmit = async(data)=>{
  try{
    if(moodHashTag.length>3){
      alert("분위기는 3개까지 선택이 가능합니다.")
      return
    }
const result = await createBoard({
    variables : {
      createBoardInput:{
        boardTitle : data.boardTitle,
        boardSugar : data.boardSugar,
        boardSalt : data.boardSalt,
        boardContents : data.boardContents,
        subCategoryName
      },
      boardTagsInput:{
        boardTagMenu,
        boardTagMood: moodHashTag,
        boardTagRegion: ["구로구"]
      }
    }
  })
  alert("등록 완료")
  }
  catch(error:any){
    alert(error.message)
  }
}
  return (
  <CommonReviewWritePresenter
    // onClickReviewDetail={onClickReviewDetail}
    onClickCancel={onClickCancel}
    onClickCategory={onClickCategory}
    onClickMenu={onClickMenu}
    moodHashTag={moodHashTag}
    setMoodHashTag={setMoodHashTag}
    onClickSubmit={onClickSubmit}
    checker={checker}
    getValues={getValues}
    setValue={setValue}
    register={register}
    handleSubmit={handleSubmit}
    formState={formState}
  />
  )
}