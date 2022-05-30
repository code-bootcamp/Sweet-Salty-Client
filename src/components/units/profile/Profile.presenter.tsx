import TopButton from "../../commons/topbutton";
import * as S from "./Profile.styled";
import UserInfoContainer from "../../commons/Mypage/UserInfo/userInfo.container";
import UserMenuContainer from "../../commons/Mypage/UserMenu/userMenu.container";

export default function ProfilePresenter(props: any) {
  return (
    <S.Wrapper>
      <S.Title>누구누구 프로필</S.Title>

      <UserInfoContainer />

      <UserMenuContainer />

      <S.MypageSectionBox></S.MypageSectionBox>
      <S.TopButtonBox>
        <TopButton />
      </S.TopButtonBox>
    </S.Wrapper>
  );
}
