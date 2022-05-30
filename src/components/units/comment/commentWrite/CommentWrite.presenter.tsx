import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  CREATE_COMMENT,
  FETCH_COMMENTS,
  FETCH_USER_LOGGED_IN,
} from "./CommentWrite.queries";
import * as S from "./CommentWrite.styled";

export default function CommentWriteContainerPage(props: any) {
  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });
  const router = useRouter();
  const [createComment] = useMutation(CREATE_COMMENT);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data?.fetchUserLoggedIn?.userImage);

  const onClickSubmit = async (data: any) => {
    if (!data.contents) return alert("댓글을 입력해주세요.");
    try {
      await createComment({
        variables: {
          boardId: String(router.query.boardId),
          contents: data.contents,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {
              boardId: String(router.query.boardId),
            },
          },
        ],
      });
      setValue("contents", "");
      alert("댓글이 등록되었습니다.");
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <S.CommentBox>
          <S.UserImage
            src={
              data?.fetchUserLoggedIn?.userImage
                ? `https://storage.googleapis.com/${data?.fetchUserLoggedIn?.userImage}`
                : "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
            }
          />
          <S.Input
            type="text"
            placeholder="댓글을 입력하세요."
            {...register("contents")}
            maxLength={100}
          />
          <S.Button type="submit">등록</S.Button>
        </S.CommentBox>
      </form>
    </>
  );
}
