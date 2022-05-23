// 여기는 댓글 리스트 페이지 입니다.

import CommentListPresenterPage from "./CommentList.presenter";
import {useQuery}from "@apollo/client";
import {useRouter} from "next/router";
import { FETCH_COMMENT } from "./CommentList.queries";


export default function CommentListContainerPage() {
  const router = useRouter();
  const {data, fetchMore} = useQuery(FETCH_COMMENT, {
    variables: {
      boardId :"3"
      //  String(router.query.boardId)
    }
  })
  console.log(data?.fetchComment)
  
  

  return <CommentListPresenterPage />;
}
