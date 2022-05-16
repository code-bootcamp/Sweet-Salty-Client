import { v4 as uuidv4 } from "uuid";
import * as S from "./WriteCommonReview.styles";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";


const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const toolbarOptions = [  [{ header: [1, 2, 3, false] }], ["bold", "italic", "underline", "strike"], ["blockquote"],  [{ color: [] }], [{ align: [] }],["link", "image"], ];
export const formats = [ "header", "font", "size", "bold", "italic", "underline", "strike", "align", "blockquote",  "indent",  "color", "link", "image",  "width", ];
const imageHandler = ()=>{
  console.log("이미지핸들러")
  
}
const modules = { toolbar: { container: toolbarOptions, handlers: {image: imageHandler,} }, }
export default function WriteCommonReviewPresenter (props){
    return(    
    <S.MainDiv>
        <S.Form
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickUpdate : props.onClickSubmit
      )}
    >
         <S.PageTitle>{props.isEdit ? "리뷰 수정" : "리뷰 등록"}</S.PageTitle>
         <div>
         <S.MenuTxt>한줄 리뷰</S.MenuTxt>
         <S.Input
         type="text"
         placeholder="한줄 리뷰를 입력해주세요."
         register={props.register("boardTitle")}
         /></div>
         <div>
         <S.MenuTxt>단맛</S.MenuTxt>
         <S.Input
         type="text"
         placeholder="단맛(장점)을 입력해주세요."
         register={props.register("boardSugar")}
         /></div>
         <div>
         <S.MenuTxt>짠맛</S.MenuTxt>
         <S.Input
         type="text"
         placeholder="짠맛(단점)을 입력해주세요."
         register={props.register("boardSalt")}
         /></div>
         <div>
         <S.MenuTxt>내용</S.MenuTxt>
         <S.ReactQuillDiv>
        <ReactQuill
          placeholder ="상품을 소개해주세요"
          onChange={props.onChangeContents}
          modules={modules}
          theme="snow"
          value={props.getValues("boardContents") || ""}
          />
      </S.ReactQuillDiv></div>
      <S.SubmitBtn
        type="submit"
        // isActive={props.formState.isValid}
        >
        {props.isEdit ? "수정하기" : "등록하기"}</S.SubmitBtn>
      
    </S.Form>
    </S.MainDiv>
    )
}