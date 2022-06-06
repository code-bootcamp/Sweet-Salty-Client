import UserInfoContainer from "../../../commons/Mypage/UserInfo/userInfo.container";
import UserMenuContainer from "../../../commons/Mypage/UserMenu/userMenu.container";
import TopButton from "../../../commons/topbutton";
import * as S from "./MypagePoint.styled";
import PointComponentContainer from "../../../commons/Mypage/PointDetailsComponent/pointdetailscomponent.container";
import { v4 as uuidv4 } from "uuid";

export default function MypagePointPresenter(props: any) {
  return (
    <S.Wrapper>
      <S.Title>마이페이지</S.Title>

      <UserInfoContainer 
        User={props.User}
        loginUser={props.loginUser}
      />

      <UserMenuContainer 
        User={props.User}
        loginUser={props.loginUser}
      />

      <S.MypageSectionBox>
        {props.data?.fetchPaymentHistory.map((el: any) => (
          <div key={uuidv4()}>
            <PointComponentContainer el={el} />
            <S.Hr />
          </div>
        ))}
      </S.MypageSectionBox>
      <S.TopButtonBox>
        <TopButton />
      </S.TopButtonBox>
    </S.Wrapper>
  );
}
