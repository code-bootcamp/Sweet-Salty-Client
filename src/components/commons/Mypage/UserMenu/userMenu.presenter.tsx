import * as S from "./userMenu.styles";

export default function UserMenuPresenter(props: any) {
  return (
    <>
      {/* 마이페이지 */}
      {props.User?.userEmail === props.loginUser?.userEmail && (
        <S.MypageMenuBox>
          <S.MypageMenu onClick={props.onClickMypage} ismypage={props.ismypage}>
            마이 단짠 게시글
          </S.MypageMenu>
          <S.MypageMenu
            onClick={props.onClickMypageLike}
            ismypageLike={props.ismypageLike}
          >
            좋아요 한 단짠 게시글
          </S.MypageMenu>
          <S.MypageMenu
            onClick={props.onClickMypagePoint}
            ismypageLike={props.ismypagePoint}
          >
            포인트 상세내역
          </S.MypageMenu>
        </S.MypageMenuBox>
      )}

      {/* 다른 유저 프로필 */}
      {props.User?.userEmail !== props.loginUser?.userEmail && (
        <S.MyprofileMenuBox>
          <S.MyprofileMenu
            onClick={props.onClickMyProfile}
            ismypage={props.ismypage}
          >
            단짠 피드
          </S.MyprofileMenu>
          <S.MyprofileMenu
            onClick={props.onClickMyProfileLike}
            ismypageLike={props.ismypageLike}
          >
            좋아요 한 단짠 게시글
          </S.MyprofileMenu>
        </S.MyprofileMenuBox>
      )}
    </>
  );
}
