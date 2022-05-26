// Header Presenter === 김치훈

import * as S from "./Header.styles";

export default function LayoutHeaderPresenter(props: any) {
  return (
    <S.HeaderWrapper>
      <S.HeaderBox>
        <S.HeaderLogo onClick={props.onClickHome}></S.HeaderLogo>
        <S.HeaderMenuBox>
          <S.IntroductionMenu>단짠 맛집 소개</S.IntroductionMenu>
          <S.ReviewMenu isReviewPage={props.isReviewPage} onClick={props.onClickReview}>
            단짠 게시판
          </S.ReviewMenu>
          <S.StoreMenu isStorePage={props.isStorePage} onClick={props.onClickStore}>단짠 스토어</S.StoreMenu>
          <S.NoticeMenu isNoticePage={props.isNoticePage} onClick={props.onClickNotice}>공지사항</S.NoticeMenu>
        </S.HeaderMenuBox>


        {props.data?.fetchUserLoggedIn.userId
        ? 
        // 로그인 했을 때 프사 보여주는 곳
        <S.HeaderMemberRightBox>
          <S.Photo src={props.data?.fetchUserLoggedIn?.userImage
        ? (`https://storage.googleapis.com/${props.data?.fetchUserLoggedIn.userImage}`)
        : "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"} onClick={props.onClickPhoto}></S.Photo>

          {props.isClick && (
            <S.UserProfileBox>
              <S.ArrowBox></S.ArrowBox>
              <S.UserProfile>
                <S.UserNameBox onClick={props.onClickMypage}>
                  <S.UserName>{props.data?.fetchUserLoggedIn.userNickname}</S.UserName> 단짝님
                </S.UserNameBox>
                <S.UserPointBox onClick={props.onClickMypagePoint}>
                  <S.UserPoint>{props.data?.fetchUserLoggedIn.userPoint}</S.UserPoint> 포인트
                </S.UserPointBox>
                <S.MyPage onClick={props.onClickMypage}>마이페이지</S.MyPage>
                <S.Note>쪽지함</S.Note>
                <S.Logout onClick={props.onClickLogout}>로그아웃</S.Logout>
              </S.UserProfile>
            </S.UserProfileBox>
          )}
        </S.HeaderMemberRightBox>
        :
        <S.HeaderNonMembersRightBox>
          <S.HeaderLogin onClick={props.onClickLogin}>로그인</S.HeaderLogin>
          <S.P>|</S.P>
          <S.HeaderSignup>회원가입</S.HeaderSignup>
        </S.HeaderNonMembersRightBox>
        }
      </S.HeaderBox>
    </S.HeaderWrapper>
  );
}
