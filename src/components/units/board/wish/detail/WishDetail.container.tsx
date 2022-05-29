// 가주세요! Detail Container -김치훈

import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  CREATE_BOARD_LIKE,
  DELETE_BOARD,
} from "../../commonReview/detail/CommonReviewDetail.queries";
import WishDetailPresenterPage from "./WishDetail.presenter";
import { FETCH_BOARD } from "./WishDetail.queries";

export default function WishDetailContainerPage() {
  const router = useRouter();
  const [createBoardLike] = useMutation(CREATE_BOARD_LIKE);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });

  const onClickWishList = () => {
    router.push("/reviews/wish/list");
  };
  const onClickWishReviewWrite = () => {
    router.push("/reviews/wishreview/write");
  };

  const onClickDelete = () => {
    try {
      deleteBoard({
        variables: { boardId: String(router.query.boardId) },
      });
      alert("게시글 삭제 완료");
      router.push("/reviews/wish");
    } catch (error: any) {
      alert(error.message);
    }
  };
  const onClickLike = () => {
    createBoardLike({
      variables: {
        boardId: String(router.query.boardId),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.boardId) },
        },
      ],
    });
  };
  return (
    <WishDetailPresenterPage
      data={data?.fetchBoard}
      onClickWishList={onClickWishList}
      onClickWishReviewWrite={onClickWishReviewWrite}
      onClickLike={onClickLike}
      onClickDelete={onClickDelete}
    />
  );
}
