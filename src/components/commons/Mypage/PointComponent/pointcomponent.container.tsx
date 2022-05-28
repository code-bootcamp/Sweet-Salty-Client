// 결제 상세내역 Component container ---김치훈

import { useQuery } from "@apollo/client";
import {FETCH_PAYMENT_HISTORY} from "./pointcomponent.queries"
import PointComponentPresenter from "./pointcomponent.presenter";

export default function PointComponentContainer (){

  const {data} = useQuery(FETCH_PAYMENT_HISTORY)

  return <PointComponentPresenter
  data={data}
  />
}