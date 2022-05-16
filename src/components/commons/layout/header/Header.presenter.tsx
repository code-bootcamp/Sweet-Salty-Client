// Header Presenter === 김치훈

import * as S from "./Header.styles";

export default function LayoutHeaderPresenter(props: any) {
  return (
    <S.HeaderWrapper>
      <S.HeaderBox>
        <S.HeaderLogo onClick={props.onClickHome}></S.HeaderLogo>
        <S.HeaderMenuBox>
          <S.HeaderMenu>단짠 맛집 소개</S.HeaderMenu>
          <S.HeaderMenu isPage={props.isPage} onClick={props.onClickReview}>
            단짠 게시판
          </S.HeaderMenu>
          <S.HeaderMenu>단짠 스토어</S.HeaderMenu>
          <S.HeaderMenu>공지사항</S.HeaderMenu>
          <S.HeaderMenu>자주하는 질문</S.HeaderMenu>
        </S.HeaderMenuBox>

        {/* <S.HeaderNonMembersRightBox>
          <S.HeaderLogin onClick={props.onClickLogin}>로그인</S.HeaderLogin>
          <S.P>|</S.P>
          <S.HeaderSignup>회원가입</S.HeaderSignup>
        </S.HeaderNonMembersRightBox> */}

        {/* 로그인 했을 때 프사 보여주는 곳 */}
        <S.HeaderMemberRightBox>
          <S.Photo onClick={props.onClickPhoto}></S.Photo>

          {props.isClick && (
            <S.UserProfileBox>
              <S.ArrowBox></S.ArrowBox>
              <S.UserProfile>
                <S.UserNameBox>
                  <S.UserName>주혜</S.UserName> 단짝님
                </S.UserNameBox>
                <S.UserPointBox>
                  <S.UserPoint>1,200</S.UserPoint> 포인트
                </S.UserPointBox>
                <S.MyPage>마이페이지</S.MyPage>
                <S.Note>쪽지함</S.Note>
                <S.Logout>로그아웃</S.Logout>
              </S.UserProfile>
            </S.UserProfileBox>
          )}
        </S.HeaderMemberRightBox>
      </S.HeaderBox>
    </S.HeaderWrapper>
  );
}
