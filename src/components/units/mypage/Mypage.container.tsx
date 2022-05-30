import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MyPagePresenter from "./Mypage.presenter";
import { FETCH_BOARDS_OF_USER, FETCH_USER_LOGGED_IN } from "./Mypage.queries";

export default function MyPageContainer() {
  const router = useRouter();

  const { data: loggedIn } = useQuery(FETCH_USER_LOGGED_IN);

  const { data, refetch, fetchMore } = useQuery(FETCH_BOARDS_OF_USER, {
    variables: {
      userNickname: String(loggedIn?.fetchUserLoggedIn?.userNickname),
    },
  });

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

  const onClickMoveMyReviewDetail = (event: any) => {
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
    <MyPagePresenter
      data={data}
      refetch={refetch}
      onLoadMore={onLoadMore}
      onClickMoveMyReviewDetail={onClickMoveMyReviewDetail}
    />
  );
}
