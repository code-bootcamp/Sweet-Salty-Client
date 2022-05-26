// userInfo Presenter ---김치훈

import * as S from "./userInfo.styles"
import Script from "next/script";
import { SettingOutlined } from "@ant-design/icons";

export default function MypageUserInfoPresenter(props: any){

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
          <S.Photo>
            <S.ImgBox><img src="../images/gallery.png" style={{width: "24px"}}/></S.ImgBox>
          </S.Photo>

          <S.UserInfo>
            <S.UserName>안녕하세요. <S.Span>{props.data?.fetchUser?.userNickname}</S.Span> 단짝님</S.UserName>

            <S.UserSection>
              <S.UserBox style={{paddingLeft: "0px"}}>
                <S.UserTitle>마이 단짠</S.UserTitle>
                <S.UserCount>
                  {/* 마이 단짠 숫자 */}
                </S.UserCount>
              </S.UserBox>

              <S.VerticalLine />

              <S.UserBox>
                <S.UserTitle>팔로잉</S.UserTitle>
                <S.UserCount>
                  {/* 팔로잉 숫자 */}
                </S.UserCount>
              </S.UserBox>

              <S.VerticalLine />
              
              <S.UserBox>
                <S.UserTitle>팔로워</S.UserTitle>
                <S.UserCount>
                  {/* 팔로워 숫자 */}
                </S.UserCount>
              </S.UserBox>

              <S.VerticalLine />

              <S.UserBox>
                <S.UserTitle>쪽지함</S.UserTitle>
                <S.UserCount>
                  {/* 쪽지함 숫자 */}
                </S.UserCount>
              </S.UserBox>

              <S.VerticalLine />

              <S.UserBox>
                <S.UserTitle>포인트</S.UserTitle>
                <S.UserCount>
                  {props.data?.fetchUser?.userPoint}
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