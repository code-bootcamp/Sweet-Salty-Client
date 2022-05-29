import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  CREATE_BOARD_LIKE,
  DELETE_BOARD,
  FETCH_BOARD,
} from "../../commonReview/detail/CommonReviewDetail.queries";

import TesterDetailPresenter from "./TesterReview.presenter";

export default function TesterDetailContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });
  const [createBoardLike] = useMutation(CREATE_BOARD_LIKE);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const onClickCommonReviewList = () => {
    router.push("/reviews/testerReview");
  };

  const onClickDelete = () => {
    try {
      deleteBoard({
        variables: { boardId: String(router.query.boardId) },
      });
      alert("게시글 삭제 완료");
      router.push("/reviews/testerReview");
    } catch (error: any) {
      alert(error.message);
    }
  };
  const onClickLike = () => {
    createBoardLike({
      variables: {
        boardId:
          // String(router.query.boardId)
          String(router.query.boardId),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.boardId) },
        },
      ],
      // optimisticResponse:{
      //   createBoardLike : (data?.fetchBoard?.boardLikeCount || 0) +1,
      // },
      // update(cache, {data}){
      //   cache.writeQuery({
      //     query:FETCH_BOARD,
      //     variables: { boardId:
      //       "2"
      //       // String(router.query.boardId)
      //     },
      //     data : {
      //       fetchBoard : {
      //         boardId :
      //         // router.query.boardId
      //         "2",
      //         __typename: "Board",
      //         boardLikeCount :data.fetchBoard.boardLikeCount
      //       }
      //     }
      //   })
      // }
    });
  };
  return (
    <TesterDetailPresenter
      data={data?.fetchBoard}
      onClickCommonReviewList={onClickCommonReviewList}
      onClickDelete={onClickDelete}
      onClickLike={onClickLike}
    />
  );
}
