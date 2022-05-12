// 여기는 일반리뷰작성 페이지 입니다.

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import WriteReviewPresenterPage from "./WriteReview.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./WriteReview.queries";
import { useEffect, useState } from "react";

const schema = yup.object({
  boardTitle: yup.string().required("제목을 입력해주세요."),
  boardSugar: yup.string().required("단맛(장점)을 입력해주세요."),
  boardSalt: yup.string().required("짠맛(단점)을 입력해주세요."),
  // 한줄요약 remark 추가되어야 함
  boardContents: yup
  .string()
  .required("음식점에 대한 후기를 입력해주세요."),
  boardTags: yup.string().required("태그를 선택해주세요.")
});

const nonSchema = yup.object({});

export default function WriteReviewContainerPage(props) {
  const router = useRouter();
  const [createReview] = useMutation(CREATE_BOARD);
const [updateReview] = useMutation(UPDATE_BOARD);

const {register, handleSubmit, formState, setValue, getValues, trigger, reset,}=useForm({
  resolver: yupResolver(props.isEdit ? nonSchema : schema)
})
// const [imageUrls, setImageUrls] = useState(["","","","","","","","","",""]);
// 이미지를 본문 안에 url로 삽입하면 필요없음

// 에디터 입력 값 form으로 넘기기
const onChangeContents = (value: string) => {
  setValue("contents", value === "<p><br></p>" ? "" : value);
  trigger("contents");
};

const onClickSubmit = async (data) =>{
  try{
    const result =await createReview({
      variables : {
        createBoardInput:{
          boardTitle : data.boardTitle,
          boardSugar : data.boardSugar,
          boardSalt : data.boardSalt,
          // 한줄요약 remark 추가되어야 함
          boardContents : data.boardContents,
          boardTags : data.boardTags,

        }
      }
    })
    alert("리뷰 등록에 성공하였습니다.");
    router.push(`/reviews/${result.data.createUseditem._id}`)
    // 일반리뷰 페이지 이름 따라 변경할것
  }catch (error:any) {
    alert(error.message);
  }
};
const onClickUpdate = async (data)=>{
  const updateVariables = {
    boardTitle: data.boardTitle? data.boardTitle : props.data?.boardTitle,
    boardSugar: data.boardSugar? data.boardSugar : props.data?.boardSugar,
    boardSalt: data.boardSalt? data.boardSalt : props.data?.boardSalt,
    boardContents: data.boardContents? data.boardContents : props.data?.boardContents,
    boardTags : data.boardTags? data.boardTags : props.data?.boardTags,

  }
  try {
    await updateReview({
      variables:{
        updateReviewInput: updateVariables,
        boardId : String(router.query.boardId)
      }
    })
    alert("리뷰 수정에 성공하였습니다.");
    router.push(`/reviews/${router.query.boardId}`)
    // 일반리뷰 페이지 이름 따라 변경할것
  }catch (error :any) {
    alert(error.message);
  }
}
// 수정 진입시 초기값 설정
useEffect(() => {
  // 후기 내용
  reset({ boardContents: props.data?.boardContents });
 
}, [props.data]);



  return <WriteReviewPresenterPage 
  isEdit={props.isEdit}
  data={props.data}
  register={register}
  handleSubmit={handleSubmit}
  formState={formState}
  onClickSubmit={onClickSubmit}
  onClickUpdate={onClickUpdate}
  onChangeContents={onChangeContents}
  setValue={setValue}
  getValues={getValues}
  />;
}
