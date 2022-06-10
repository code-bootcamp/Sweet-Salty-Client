import TopButton from "../../commons/topbutton";
import * as S from "./Mypage.styled";
import UserInfoContainer from "../../commons/Mypage/UserInfo/userInfo.container";
import UserMenuContainer from "../../commons/Mypage/UserMenu/userMenu.container";
import MyreviewCardContainer from "../../commons/card/MyreviewCard/MyreviewCard.container";
import { v4 as uuidv4 } from "uuid";

export default function MyPagePresenter(props: any) {
  return (
    <S.Wrapper>
      {/* 마이페이지 */}
      {props.User?.userNickname === props.loginUser?.userNickname ? (
        <S.Title>마이페이지</S.Title>
      ) : (
        <S.Title>{props.User?.userNickname} 단짝님 프로필</S.Title>
      )}

      <UserInfoContainer User={props.User} loginUser={props.loginUser} />

      <UserMenuContainer User={props.User} loginUser={props.loginUser} />

      <S.MypageSectionBox>
        <S.TableTop>
          {props?.data?.map((el: any) => (
            <S.MypageBoardsOfUser key={uuidv4()}>
              <MyreviewCardContainer
                el={el}
                loginUser={props?.loginUser}
                User={props?.User}
                onClickMoveMyReviewDetail={props.onClickMoveMyReviewDetail}
              />
            </S.MypageBoardsOfUser>
          ))}
        </S.TableTop>
      </S.MypageSectionBox>

      <S.TopButtonBox>
        <TopButton />
      </S.TopButtonBox>
    </S.Wrapper>
  );
}
