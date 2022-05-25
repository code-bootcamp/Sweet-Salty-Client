// mypage presenter --- 김치훈

import TopButton from "../../commons/topbutton";
import * as S from "./Mypage.styled";
import MypageUserInfoContainer from "../../commons/mypageUserInfo/userInfo.container";
import MyPageMenuContainer from "../../commons/mypageMenu/mypageMenu.container";

export default function MyPagePresenter(props: any) {
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
