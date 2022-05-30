import { useQuery } from "@apollo/client";
import CommunityListPresenterPage from "./CommunityList.presenter";
import { FETCH_BOARDS } from "./CommunityList.queries";

export default function CommunityListContainerPage() {
  const { data: fetchBoardsData, fetchMore } = useQuery(FETCH_BOARDS);
  const communityCheckPage = "community";
  const loadMore = () => {
    if (!fetchBoardsData) return;
    fetchMore({
      variables: {
        page: Math.ceil(fetchBoardsData.fetchBoards.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult?.fetchBoards],
        };
      },
    });
  };

  return (
    <CommunityListPresenterPage
      fetchBoardsData={fetchBoardsData}
      loadMore={loadMore}
      communityCheckPage={communityCheckPage}
    />
  );
}
