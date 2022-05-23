import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CREATE_COMMENT, FETCH_COMMENT } from "./CommentWrite.queries";

export default function CommentWriteContainerPage(props) {
  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });
  const router = useRouter();
  const [createComment] = useMutation(CREATE_COMMENT);

  const onClickSubmit = async (data)=>{
if(!data.contents) return alert("댓글을 입력해주세요.");
try{
  await createComment({
    variables: {
      boardId: String(router.query.boardId),
      contents: data.contents,
    },
    refetchQueries:[
      {
        query:FETCH_COMMENT,
        variables: {
          boardId: String(router.query.boardId),
        }
      }
    ]
  });
  setValue("contents", "");
      alert("댓글이 등록되었습니다.");
}
catch(error:any){alert(error.message)}
  }
  return (<div>
  <form onSubmit={handleSubmit(onClickSubmit)}>
  
    <input type="text"
    {...register("contents")}  
    maxLength={100}
    // defaultValue={props.el?.contents}
    />
    <button type="submit">작성하기</button>
  </form>
</div>)
  
}
