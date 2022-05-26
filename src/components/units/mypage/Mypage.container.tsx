// mypage Container --- 김치훈

import { useQuery } from "@apollo/client";
import MyPagePresenter from "./Mypage.presenter";
import { FETCH_BOARDS_OF_USER, FETCH_USER_LOGGED_IN } from "./Mypage.queries";



export default function MyPageContainer() {

  const {data: loggedIn} = useQuery(FETCH_USER_LOGGED_IN)

  const {data} =useQuery(FETCH_BOARDS_OF_USER, {
    variables: {
      userNickname: String(loggedIn?.fetchUserLoggedIn?.userNickname)
    }
  })

  

  return <MyPagePresenter
    data={data}
  />;
}
