// Profile presenter --- 김치훈

import TopButton from "../../commons/topbutton";
import * as S from "./Profile.styled";
import UserMenuContainer from "../../commons/UserMenu/userMenu.container";
import UserInfoContainer from "../../commons/UserInfo/userInfo.container";

export default function ProfilePresenter(props: any) {
  return (
    <S.Wrapper>
      <S.Title>누구누구 프로필</S.Title>
      
      {/* mypage 유저 정보 박스 */}
      <UserInfoContainer />

      {/* mypage 메뉴 */}
      <UserMenuContainer />

      <S.MypageSectionBox>
      </S.MypageSectionBox>
      <S.TopButtonBox>
        <TopButton/>
      </S.TopButtonBox>
    </S.Wrapper>
  );
}
