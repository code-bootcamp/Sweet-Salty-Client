import { useQuery } from "@apollo/client";
import MypagePointPresenter from "./MypagePoint.presenter";
import { FETCH_PAYMENT_HISTORY } from "./MypagePoint.queries";

export default function MypagePointContainer() {
  const { data } = useQuery(FETCH_PAYMENT_HISTORY);

  return <MypagePointPresenter data={data} />;
}
