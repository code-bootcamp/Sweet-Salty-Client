import CommentListPresenterPage from "./CommentList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_COMMENTS } from "./CommentList.queries";

export default function CommentListContainerPage() {
  const router = useRouter();
  const { data: fetchCommentsData, fetchMore } = useQuery(FETCH_COMMENTS, {
    variables: {
      boardId: String(router.query.boardId),
    },
  });
  const loadMore = () => {
    if (!fetchCommentsData) return;

    fetchMore({
      variables: {
        page: Math.ceil(fetchCommentsData.fetchComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchComments)
          return { fetchComments: [...prev.fetchComments] };
        return {
          fetchComments: [
            ...prev.fetchComments,
            ...fetchMoreResult?.fetchComments,
          ],
        };
      },
    });
  };

  return (
    <CommentListPresenterPage
      loadMore={loadMore}
      fetchCommentsData={fetchCommentsData?.fetchComments}
    />
  );
}
