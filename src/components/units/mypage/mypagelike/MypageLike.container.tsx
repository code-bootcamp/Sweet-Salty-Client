import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MypageLikePresenter from "./MypageLike.presenter";
import { FETCH_PICKED_BOARDS } from "./MypageLike.queries";

export default function MypageLikeContainer() {
  const router = useRouter();

  const { data, refetch, fetchMore } = useQuery(FETCH_PICKED_BOARDS);

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardsOfUser.length / 5) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardsOfUser)
          return { fetchBoardsOfUser: [...prev.fetchBoardsOfUser] };
        return {
          fetchBoardsOfUser: [
            ...prev.fetchBoardsOfUser,
            ...fetchMoreResult.fetchBoardsOfUser,
          ],
        };
      },
    });
  };

  const onClickMoveLikeReviewDetail = (event: any) => {
    const data = event.target.id;
    const boardId = data.split(/[^0-9]/g)[0];
    const boardSubject = data.split(/[^A-Z]/g).pop();
    if (boardSubject === "REVIEW") {
      router.push(`/reviews/commonReview/${boardId}`);
    } else if (boardSubject === "TASTER") {
      router.push(`/reviews/testerReview/${boardId}`);
    } else if (boardSubject === "REQUEST") {
      router.push(`/reviews/wish/${boardId}`);
    } else if (boardSubject === "VISITED") {
      router.push(`/reviews/wishreview/${boardId}`);
    }
  };

  return (
    <MypageLikePresenter
      data={data}
      refetch={refetch}
      onLoadMore={onLoadMore}
      onClickMoveLikeReviewDetail={onClickMoveLikeReviewDetail}
    />
  );
}
