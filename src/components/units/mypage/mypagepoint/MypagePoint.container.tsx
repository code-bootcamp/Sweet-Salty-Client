import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USER, FETCH_USER_LOGGED_IN } from "../Mypage.queries";
import MypagePointPresenter from "./MypagePoint.presenter";
import { FETCH_PAYMENT_HISTORY } from "./MypagePoint.queries";

export default function MypagePointContainer() {
  const router = useRouter();

  // 유저 정보
  const { data: User } = useQuery(FETCH_USER, {
    variables: {
      userNickname: router.query.userNickname,
    },
  });

  // 로그링한 유저 정보
  const { data: loginUser } = useQuery(FETCH_USER_LOGGED_IN);

  const { data } = useQuery(FETCH_PAYMENT_HISTORY);

  return <MypagePointPresenter data={data} User={User} loginUser={loginUser} />;
}
