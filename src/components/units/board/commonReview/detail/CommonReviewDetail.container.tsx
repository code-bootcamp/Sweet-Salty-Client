import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ReviewDetailPresenter from "./CommonReviewDetail.presenter";
import {
  CREATE_BOARD_LIKE,
  DELETE_BOARD,
  FETCH_BOARD,
  FETCH_USER_LOGGED_IN,
} from "./CommonReviewDetail.queries";

export default function ReviewDetailContainer() {
  const router = useRouter();
  
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });
  console.log(data?.fetchBoard,"데이타")
  const { data: loginUser } = useQuery(FETCH_USER_LOGGED_IN);


  const [createBoardLike] = useMutation(CREATE_BOARD_LIKE);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const onClickCommonReviewList = () => {
    router.push("/reviews/commonReview");
  };

  const onClickProfile =()=>{
    router.push(`/${data?.fetchBoard?.user?.userEmail}`)
  }
  const onClickUpdate = ()=>{
    router.push(`/reviews/commonReview/${router.query.boardId}/edit`)
  }
  const onClickDelete = () => {
    try {
      deleteBoard({
        variables: { boardId: String(router.query.boardId) },
      });
      alert("게시글 삭제 완료");
      router.push("/reviews/commonReview");
    } catch (error: any) {
      alert(error.message);
    }
  };
  const onClickLike = () => {
    createBoardLike({
      variables: {
        boardId:
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
    <ReviewDetailPresenter
      data={data?.fetchBoard}
      loginUser={loginUser?.fetchUserLoggedIn}
      onClickCommonReviewList={onClickCommonReviewList}
      onClickDelete={onClickDelete}
      onClickProfile={onClickProfile}
      onClickLike={onClickLike}
      onClickUpdate={onClickUpdate}
    />
  );
}
