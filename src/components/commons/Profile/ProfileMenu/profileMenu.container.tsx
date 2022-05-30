import { useRouter } from "next/router";
import ProfileMenuPresenter from "./profileMenu.presenter";

export default function ProfileMenuContainer() {
  const router = useRouter();

  const mypage = ["/mypage"];
  const ismypage = mypage.includes(router.pathname);
  const mypageLike = ["/mypage/mypagelike"];
  const ismypageLike = mypageLike.includes(router.pathname);
  const mypagePoint = ["/mypage/mypagepoint"];
  const ismypagePoint = mypagePoint.includes(router.pathname);

  const onClickMypage = () => {
    router.push("./../mypage");
  };
  const onClickMypageLike = () => {
    router.push("./../mypage/mypagelike");
  };
  const onClickMypagePoint = () => {
    router.push("./../mypage/mypagepoint");
  };

  return (
    <ProfileMenuPresenter
      ismypage={ismypage}
      ismypageLike={ismypageLike}
      ismypagePoint={ismypagePoint}
      onClickMypage={onClickMypage}
      onClickMypageLike={onClickMypageLike}
      onClickMypagePoint={onClickMypagePoint}
    />
  );
}
