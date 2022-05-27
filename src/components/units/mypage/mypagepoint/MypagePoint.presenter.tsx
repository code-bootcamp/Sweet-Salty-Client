// MypagePoint presenter --- 김치훈

import MyPageMenuContainer from "../../../commons/Mypage/UserMenu/userMenu.container";
import MypageUserInfoContainer from "../../../commons/Mypage/UserInfo/userInfo.container";
import TopButton from "../../../commons/topbutton";
import * as S from "./MypagePoint.styled";
import PointComponentContainer from "../../../commons/Mypage/PointComponent/pointcomponent.container";
import ChargeComponentContainer from "../../../commons/Mypage/ChargeComponent/chargecomponent.container";

export default function MypagePointPresenter(props: any) {
  return (
    <S.Wrapper>
      <S.Title>마이페이지</S.Title>
      
      {/* mypage 유저 정보 박스 */}
      <MypageUserInfoContainer />

      {/* mypage 메뉴 */}
      <MyPageMenuContainer />

      <S.MypageSectionBox>

        <PointComponentContainer />

        <S.Hr/>

        <ChargeComponentContainer />

        <S.Hr/>
      
      </S.MypageSectionBox>
      <S.TopButtonBox>
        <TopButton/>
      </S.TopButtonBox>
    </S.Wrapper>
  );
}
