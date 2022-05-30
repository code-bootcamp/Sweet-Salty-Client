import * as S from "./profileInfo.styles";
import Script from "next/script";

export default function ProfileInfoPresenter(props: any) {
  return (
    <>
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></Script>
      <Script
        type="text/javascript"
        src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
      ></Script>

      <S.Wrapper>
        <S.MypageBox>
          <S.UserLeftBox>
            
        <S.UploadImage
          src={`https://storage.googleapis.com/${props.data?.fetchUser?.userImage}`}
        />

            <S.UserInfo>
              <S.UserName>
                <S.Span>{props.data?.fetchUser?.userNickname}</S.Span>{" "}
                단짝님
              </S.UserName>
              <S.userProfile>{props.data?.fetchUser?.userProfile}</S.userProfile>

              <S.UserSection>
                <S.UserBox style={{ paddingLeft: "0px" }}>
                  <S.UserTitle>단짠 피드</S.UserTitle>
                  <S.UserCount >
                    {props.fetchBoardCountData?.fetchBoardCount}
                  </S.UserCount>
                </S.UserBox>

                <S.VerticalLine />

                <S.UserBox>
                  <S.UserTitle>팔로잉</S.UserTitle>
                  <S.UserCount>
                    {props.followCountData?.followCount[3]}
                  </S.UserCount>
                </S.UserBox>

                <S.VerticalLine />

                <S.UserBox>
                  <S.UserTitle>팔로워</S.UserTitle>
                  <S.UserCount>
                    {props.followCountData?.followCount[1]}
                  </S.UserCount>
                </S.UserBox>
              </S.UserSection>
            </S.UserInfo>
          </S.UserLeftBox>

          <S.ButtonBox>
              <S.PointButton onClick={props.onClickMessageWrite}>
                <S.PointImg
                  style={{ width: "24px", marginRight: "6px" }}
                  src="../images/pointicon.png"
                /> 쪽지보내기
                </S.PointButton>
                {props.isFollow 
                ?
                  <S.Button onClick={props.onClickFollow}>
                    <S.PointImg
                      style={{ width: "24px", marginRight: "6px" }}
                      src="../images/Profile_2.png"
                    /> 팔로잉
                  </S.Button>
                :
                  <S.FollowingButton style={{backgroundColor: "#FF6E30"}} onClick={props.onClickFollow}>
                    <S.PointImg
                      style={{ width: "24px", marginRight: "6px" }}
                      src="../images/Profile_2.png"
                    /> 언팔로우
                  </S.FollowingButton>
                }
          </S.ButtonBox>
        </S.MypageBox>
      </S.Wrapper>
    </>
  );
}
