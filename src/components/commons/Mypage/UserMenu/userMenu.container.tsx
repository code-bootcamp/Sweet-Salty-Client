// 마이페이지 게시글 박스 Container --- 김치훈

import { useRouter } from "next/router";
import UserMenuPresenter from "./userMenu.presenter";


export default function UserMenuContainer() {
  const router = useRouter()

  const mypage = ["/mypage"]
  const ismypage = mypage.includes(router.pathname);
  const mypageLike = ["/mypage/mypagelike"]
  const ismypageLike = mypageLike.includes(router.pathname);
  const mypagePoint = ["/mypage/mypagepoint"]
  const ismypagePoint = mypagePoint.includes(router.pathname);

  const onClickMypage =()=>{
    router.push("./../mypage")
  }
  const onClickMypageLike =()=>{
    router.push("./../mypage/mypagelike")
  }
  const onClickMypagePoint =()=>{
    router.push("./../mypage/mypagepoint")
  }
  

  return <UserMenuPresenter
    ismypage={ismypage}
    ismypageLike={ismypageLike}
    ismypagePoint={ismypagePoint}
    onClickMypage={onClickMypage}
    onClickMypageLike={onClickMypageLike}
    onClickMypagePoint={onClickMypagePoint}
  />;
}
