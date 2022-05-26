// mypage presenter --- 김치훈

import TopButton from "../../commons/topbutton";
import * as S from "./Mypage.styled";
import MypageUserInfoContainer from "../../commons/UserInfo/userInfo.container";
import UserMenuContainer from "../../commons/UserMenu/userMenu.container";
import MyreviewCardContainer from "../../commons/card/MyreviewCard/MyreviewCard.container";

export default function MyPagePresenter(props: any) {
  return (
    <S.Wrapper>
      <S.Title>마이페이지</S.Title>
      
      {/* mypage 유저 정보 박스 */}
      <MypageUserInfoContainer />

      {/* mypage 메뉴 */}
      <UserMenuContainer data={props.data}/>

      <S.MypageSectionBox>

        {/* <MyreviewCardContainer/> */}

      </S.MypageSectionBox>
      <S.TopButtonBox>
        <TopButton/>
      </S.TopButtonBox>
    </S.Wrapper>
  );
}
