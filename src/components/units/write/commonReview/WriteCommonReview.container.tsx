import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./WriteCommonReview.queries"
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import WriteCommonReviewPresenter from "./WriteCommonReview.presenter"
import { useEffect } from "react";

const schema =yup.object({
    boardTitle: yup.string().required("한줄 리뷰를 입력해주세요."),
    boardSugar: yup.string().required("단맛(장점)을 입력해주세요."),
    boardSalt: yup.string().required("짠맛(단점)을 입력해주세요."),
boardContents: yup.string().required("리뷰를 입력해주세요.")
})
const nonSchema = yup.object({});
export default function WriteCommonReviewContainer (props){
    const router = useRouter();
const [createBoard] = useMutation(CREATE_BOARD);
const [updateBoard] = useMutation(UPDATE_BOARD);
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

  
// 에디터 입력 값 form으로 넘기기
const onChangeContents = (value: string) => {
    setValue("boardContents", value === "<p><br></p>" ? "" : value);
    trigger("boardContents");
  };
  
  const onClickSubmit = async (data) =>{
    try{
      const result =await createBoard({
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
      await updateBoard({
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
  
    return(
<WriteCommonReviewPresenter 
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
  />
)
}