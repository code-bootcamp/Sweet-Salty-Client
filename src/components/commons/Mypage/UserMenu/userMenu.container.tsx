import { useRouter } from "next/router";
import UserMenuPresenter from "./userMenu.presenter";

export default function UserMenuContainer(props: any) {
  const router = useRouter();
  console.log(String(router.query.userNickname), router);

  const mypage = [`/${router.query.userNickname}/`];
  const ismypage = mypage.includes(String(router.query.userNickname));
  const mypageLike = [`/${router.query.userNickname}/like/`];
  const ismypageLike = mypageLike.includes(String(router.query.userNickname));
  const mypagePoint = [`/${router.query.userNickname}/point/`];
  const ismypagePoint = mypagePoint.includes(String(router.query.userNickname));

  const onClickMypage = () => {
    router.push(`/${router.query.userNickname}`);
  };
  const onClickMypageLike = () => {
    router.push(`/${router.query.userNickname}/like`);
  };
  const onClickMypagePoint = () => {
    router.push(`/${router.query.userNickname}/point`);
  };

  const onClickMyProfile = () => {
    router.push(`/${router.query.userNickname}`);
  };
  const onClickMyProfileLike = () => {
    router.push(`/${router.query.userNickname}/like`);
  };
  return (
    <UserMenuPresenter
      User={props.User}
      loginUser={props.loginUser}
      ismypage={ismypage}
      ismypageLike={ismypageLike}
      ismypagePoint={ismypagePoint}
      onClickMypage={onClickMypage}
      onClickMypageLike={onClickMypageLike}
      onClickMypagePoint={onClickMypagePoint}
      onClickMyProfile={onClickMyProfile}
      onClickMyProfileLike={onClickMyProfileLike}
    />
  );
}
