import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_COMMENT_LIKE, DELETE_COMMENT, FETCH_COMMENTS, FETCH_USER_LOGGED_IN } from "./CommentList.queries";
import { timeForToday } from "../../../commons/libraries/date";
import * as S from "./CommentList.item.styled"

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
  const url = "https://storage.googleapis.com/"+props.el?.userImage
  const showDelete = props.el?.userNickname === loggedInNickname
  
  return (
    <S.BoxDiv>
      <S.ProfileImg src= {url} />

      <S.CommentBox>

        <S.ProfileWrapDiv>
          <S.WriterDiv>{props.el?.userNickname} 단짝님</S.WriterDiv>
          
          <S.CreatedAtDiv>{timeForToday(props.el?.commentCreateAt)}</S.CreatedAtDiv>
          
          {showDelete &&(<S.DeleteBtn onClick={onClickDelete(props.el?.commentId)}>삭제</S.DeleteBtn>)}

        </S.ProfileWrapDiv>

        <S.ContentsDiv>{props.el?.commentContents}</S.ContentsDiv>

        <S.LikeBox>
          {props.el?.commentLikeCount === 0 &&
            <S.LikeIcon src="/images/Heart.png" onClick={onClickLike(props.el?.commentId)}/>
          }
          {props.el?.commentLikeCount === 1 &&
            <S.LikeIcon src="/images/HeartFill.png" onClick={onClickLike(props.el?.commentId)}/>
          }
          <S.LikeCount>{props.el?.commentLikeCount}</S.LikeCount>
        </S.LikeBox>
      </S.CommentBox>

    </S.BoxDiv>
  )
}
