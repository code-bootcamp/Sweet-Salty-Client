import ProfileInfoContainer from "../../commons/Profile/ProfileInfo/profileInfo.container";
import ProfileMenuContainer from "../../commons/Profile/ProfileMenu/profileMenu.container";
import TopButton from "../../commons/topbutton";
import * as S from "./Profile.styled";

export default function ProfilePresenter(props: any) {
  return (
    <S.Wrapper>
      <S.Title>{props.data?.fetchUser?.userNickname} 프로필</S.Title>
      
      <ProfileInfoContainer data={props.data}/>

      <ProfileMenuContainer/>


      <S.MypageSectionBox></S.MypageSectionBox>
      <S.TopButtonBox>
        <TopButton />
      </S.TopButtonBox>
    </S.Wrapper>
  );
}
