// 마이페이지 게시글 박스 Presenter --- 김치훈

import * as S from "./userMenu.styles"


export default function UserMenuPresenter(props: any) {
  

  return (
    <>
      <S.MypageMenuBox>
        <S.MypageMenu onClick={props.onClickMypage} ismypage={props.ismypage}>마이 단짠 게시글</S.MypageMenu>
        <S.MypageMenu onClick={props.onClickMypageLike} ismypageLike={props.ismypageLike}>좋아요 한 단짠 게시글</S.MypageMenu>
        <S.MypageMenu onClick={props.onClickMypagePoint} ismypageLike={props.ismypagePoint}>포인트 상세내역</S.MypageMenu>
      </S.MypageMenuBox>
    </>
  );
}
