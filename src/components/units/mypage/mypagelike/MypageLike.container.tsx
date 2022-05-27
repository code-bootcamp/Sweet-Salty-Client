// MypageLike Container --- 김치훈

import { useQuery } from "@apollo/client";
import MypageLikePresenter from "./MypageLike.presenter";
import { FETCH_PICKED_BOARDS } from "./MypageLike.queries";


export default function MypageLikeContainer() {

  const {data} = useQuery(FETCH_PICKED_BOARDS)
  console.log(data)

  return <MypageLikePresenter
    data={data}
  />;
}
