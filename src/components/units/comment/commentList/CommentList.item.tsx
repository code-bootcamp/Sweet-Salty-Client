// 여기는 댓글 아이템 페이지 입니다.

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { DELETE_COMMENT } from "./CommentList.queries";


export default function CommentItemPage() {
  const [deleteComment] = useMutation(DELETE_COMMENT);
  const router = useRouter();

  
  return <CommentItemPage />;
}
