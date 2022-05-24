import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_COMMENT_LIKE, DELETE_COMMENT, FETCH_COMMENTS, FETCH_USER_LOGGED_IN } from "./CommentList.queries";

export default function CommentItemPage(props) {
  const [deleteComment] = useMutation(DELETE_COMMENT);
  const [createCommentLike] =useMutation(CREATE_COMMENT_LIKE);
  const router = useRouter();
  // const [isEdit, setIsEdit] = useState(false);
  const {data : loggedInData} =useQuery(FETCH_USER_LOGGED_IN);
  const loggedInNickname = loggedInData?.fetchUserLoggedIn?.userNickname
  const onClickDelete = (id)=> async ()=> {
    await deleteComment({
      variables: {
        commentId : String(id)
      },
      refetchQueries :[
        {
          query : FETCH_COMMENTS,
          variables:{ 
            boardId : String(router.query.boardId)
          }
        }
      ]
    })
    alert("댓글삭제완료")
  }
  const onClickLike = (id)=> async ()=>{
   try{await createCommentLike({
      variables:{
        commentId : String(id),
      },
      refetchQueries:[
        {
          query : FETCH_COMMENTS,
          variables:{ 
            boardId : String(router.query.boardId)
          }
        }
      ]
    })}catch(error:any) {alert(error.message)}
  }
  console.log(props?.el, "w")
  const url = "https://storage.googleapis.com/"+props.el?.userImage
  const showDelete = props.el?.userNickname === loggedInNickname
  
  return (
    <div>
      <div>작성자 : {props.el?.userNickname}</div>
      <div>작성자프로필 : <img src= {url} /></div>
      
      <div>내용 : {props.el?.commentContents}</div>
      <div>좋아요개수 : {props.el?.commentLikeCount}</div>
      <div>작성일 : {props.el?.commentCreateAt}</div>
      <div onClick={onClickLike(props.el?.commentId)}>좋아요버튼</div>
      {showDelete &&(<div onClick={onClickDelete(props.el?.commentId)}>(본인댓글일경우)삭제버튼</div>)}
    </div>
  )
}
