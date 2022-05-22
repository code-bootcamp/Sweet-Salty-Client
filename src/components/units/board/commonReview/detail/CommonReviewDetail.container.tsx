import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ReviewDetailPresenter from "./CommonReviewDetail.presenter";
import { CREATE_BOARD_LIKE, DELETE_BOARD, FETCH_BOARD } from "./CommonReviewDetail.queries";

export default function ReviewDetailContainer() {
  const router = useRouter()
  const {data}= useQuery(FETCH_BOARD,{variables: {boardId:String(router.query.boardId)}}) 
  const [createBoardLike] = useMutation(CREATE_BOARD_LIKE);
  const [deleteBoard] = useMutation(DELETE_BOARD);
console.log("생성일",data?.fetchBoard?.createAt)
console.log("데이타",data)

  const onClickCommonReviewList = ()=>{
    router.push("/reviews/commonReview/list")
  }
  const onClickDelete = () => {
    deleteBoard({
      variables: { boardId: String(router.query.boardId) },
    });
    alert("게시글 삭제 완료");
    router.push("/reviews/commonReview");
  };
  const onClickLike = ()=>{
    createBoardLike({
      variables: { boardId: 
        // String(router.query.boardId)
        String(router.query.boardId)
      },
      refetchQueries: [
        {query : FETCH_BOARD, variables:{ boardId:
          //  String(router.query.boardId)
          String(router.query.boardId)
          }}
      ]
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
    })
  }
  return <ReviewDetailPresenter
  data={data?.fetchBoard}
  onClickCommonReviewList={onClickCommonReviewList}
  onClickDelete={onClickDelete}
  onClickLike={onClickLike}
  />;
}
