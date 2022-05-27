// userInfo Presenter ---김치훈

import * as S from "./userInfo.styles"
import Script from "next/script";
import { SettingOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import Uploads02 from "../../uploads/02mypageUserProfile/Uploads02.containder";
import { PointComma } from "../../libraries/point";

export default function UserInfoPresenter(props: any){
  return( 
    <>
      <Script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></Script>
        {/* <!-- iamport.payment.js --> */}
      <Script
        type="text/javascript"
        src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
      ></Script>
    
      <S.Wrapper>

      <S.MypageBox>
          <S.UserLeftBox>
            {/* <S.ImgBox> */}

            {props.fileUrls.map((el:any, index:any) => (
              <Uploads02 
                  data={props.data}
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}

            <S.UserInfo>
              <S.UserName>안녕하세요. <S.Span>{props.data?.fetchUserLoggedIn?.userNickname}</S.Span> 단짝님</S.UserName>
              <S.userProfileBox>

              {props.isUpdate 
              ?
              <>
                <S.userProfile>{props.data?.fetchUserLoggedIn?.userProfile}</S.userProfile>
                <S.userProfileUpdate><u onClick={props.onClickUpdate}>수정</u></S.userProfileUpdate>
              </>
              :
              <>
                <S.userProfileInput 
                  type="text"
                  maxLength={40} 
                  placeholder={`${props.data?.fetchUserLoggedIn?.userProfile} (40자 내외로 작성하세요.)`}
                  onChange={props.onChangeProfile}
                ></S.userProfileInput>
                <S.userProfileComplete><u onClick={props.onClickUpdateProfile}>완료</u></S.userProfileComplete>
              </>
              }
              </S.userProfileBox>

              <S.UserSection>
                <S.UserBox style={{paddingLeft: "0px"}}>
                  <S.UserTitle onClick={props.onClickMyReview}>마이 단짠</S.UserTitle>
                  <S.UserCount>
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

                <S.VerticalLine />

                <S.UserBox>
                  <S.UserTitle>쪽지함</S.UserTitle>
                  <S.UserCount onClick={props.onClickLikeAccess}>
                    {props.fetchUnreadMessageCountData?.fetchUnreadMessageCount}
                  </S.UserCount>
                </S.UserBox>

                <S.VerticalLine />

                <S.UserBox>
                  <S.UserTitle>포인트</S.UserTitle>
                  <S.UserCount onClick={props.onClickPointAccess}>
                    {PointComma(props.data?.fetchUserLoggedIn?.userPoint)}
                  </S.UserCount>
                </S.UserBox>
              </S.UserSection>
            </S.UserInfo>
          </S.UserLeftBox>
          
          <S.ButtonBox>
            <S.PointButton onClick={props.onClickPoint}><img style={{width: "24px", marginRight: "6px"}} src="../images/pointicon.png"/>포인트 충전하기</S.PointButton>
            <S.Button onClick={props.onClickModify}><SettingOutlined style={{ marginRight: "6px"}}/>회원정보 수정하기</S.Button>
          </S.ButtonBox>

        </S.MypageBox>

      </S.Wrapper>
    </>
  )
}