import UserInfoContainer from "../../../commons/Mypage/UserInfo/userInfo.container";
import UserMenuContainer from "../../../commons/Mypage/UserMenu/userMenu.container";
import TopButton from "../../../commons/topbutton";
import * as S from "./MypageLike.styled";
import { v4 as uuidv4 } from "uuid";
import LikeReviewCardContainer from "../../../commons/card/LikeReviewCard/LikeReviewCard.container";

export default function MypageLikePresenter(props: any) {
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
        <S.TableTop>
          {props?.data?.fetchPickedBoards.map((el: any) => (
            <S.MypageBoardsOfUser key={uuidv4()}>
              <LikeReviewCardContainer
                el={el}
                data={props.data}
                onClickMoveLikeReviewDetail={props.onClickMoveLikeReviewDetail}
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
