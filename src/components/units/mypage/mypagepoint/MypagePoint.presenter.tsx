// 포인트 상세내역 게시글 presenter --- 김치훈

import MyPageMenuContainer from "../../../commons/Mypage/UserMenu/userMenu.container";
import MypageUserInfoContainer from "../../../commons/Mypage/UserInfo/userInfo.container";
import TopButton from "../../../commons/topbutton";
import * as S from "./MypagePoint.styled";
import PointComponentContainer from "../../../commons/Mypage/PointDetailsComponent/pointdetailscomponent.container";
import { v4 as uuidv4 } from "uuid";

export default function MypagePointPresenter(props: any) {
  return (
    <S.Wrapper>
      <S.Title>마이페이지</S.Title>
      
      {/* mypage 유저 정보 박스 */}
      <MypageUserInfoContainer />

      {/* mypage 메뉴 */}
      <MyPageMenuContainer />

      <S.MypageSectionBox>
        {props.data?.fetchPaymentHistory.map((el: any) => (
          <div key={uuidv4()}>
            <PointComponentContainer el={el}/>
            <S.Hr/>
          </div>
        ))}
      
      </S.MypageSectionBox>
      <S.TopButtonBox>
        <TopButton/>
      </S.TopButtonBox>
    </S.Wrapper>
  );
}
