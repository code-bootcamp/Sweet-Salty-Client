// MypageLike presenter --- 김치훈

import MyPageMenuContainer from "../../../commons/UserMenu/userMenu.container";
import MypageUserInfoContainer from "../../../commons/UserInfo/userInfo.container";
import TopButton from "../../../commons/topbutton";
import * as S from "./MypageLike.styled";

export default function MypageLikePresenter(props: any) {
  return (
    <S.Wrapper>
      <S.Title>마이페이지</S.Title>
      
      {/* mypage 유저 정보 박스 */}
      <MypageUserInfoContainer />

      {/* mypage 메뉴 */}
      <MyPageMenuContainer />

      <S.MypageSectionBox>
      </S.MypageSectionBox>
      <S.TopButtonBox>
        <TopButton/>
      </S.TopButtonBox>
    </S.Wrapper>
  );
}
