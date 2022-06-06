import { useRouter } from "next/router";
import UserMenuPresenter from "./userMenu.presenter";

export default function UserMenuContainer(props: any) {
  const router = useRouter();
  
  const mypage = [`/${router.query.userNickname}`];
  const ismypage = mypage.includes(router.asPath);
  const mypageLike = [`/${router.query.userNickname}/like/`];
  const ismypageLike = mypageLike.includes(router.asPath);
  const mypagePoint = [`/${router.query.userNickname}/point/`];
  const ismypagePoint = mypagePoint.includes(router.asPath);

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
      data={props.User}
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
