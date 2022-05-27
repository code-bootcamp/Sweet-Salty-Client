// mypage Container --- 김치훈

import { useQuery } from "@apollo/client";
import MyPagePresenter from "./Mypage.presenter";
import { FETCH_BOARDS_OF_USER, FETCH_USER_LOGGED_IN } from "./Mypage.queries";



export default function MyPageContainer() {

  const {data: loggedIn} = useQuery(FETCH_USER_LOGGED_IN)
  
  // 마이단짠 게시글 목록
  const {data, refetch, fetchMore} =useQuery(FETCH_BOARDS_OF_USER, {
    variables: {
      userNickname: String(loggedIn?.fetchUserLoggedIn?.userNickname)
    }
  })

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardsOfUser.length / 5) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        // 받아올 데이터가 없을 경우 return(기존 데이터 보여줘)
        if (!fetchMoreResult?.fetchBoardsOfUser) return { fetchBoardsOfUser: [...prev.fetchBoardsOfUser] };
        return {
          fetchBoardsOfUser: [
            // 이전 뎃글 보여줘
            ...prev.fetchBoardsOfUser,
            // 다음 댓글 보여줘
            ...fetchMoreResult.fetchBoardsOfUser,
          ],
        };
      },
    });
  };
  

  return <MyPagePresenter
    data={data}
    refetch={refetch}
    onLoadMore={onLoadMore}
  />;
}
