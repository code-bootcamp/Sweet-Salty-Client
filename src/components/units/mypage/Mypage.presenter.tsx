// mypage presenter --- 김치훈

import { SettingOutlined } from "@ant-design/icons";
import TopButton from "../../commons/topbutton";
import * as S from "./Mypage.styled";

export default function MyPagePresenterPage(props: any) {
  return (
    <S.Wrapper>
      <S.Title>마이페이지</S.Title>
      <S.MypageBox>
        <S.UserLeftBox>
          <S.Photo>
            <S.ImgBox><img src="images/gallery.png" style={{width: "24px"}}/></S.ImgBox>
          </S.Photo>

          <S.UserInfo>
            <S.UserName>안녕하세요. <S.Span>{/* 사용자 이름 */}</S.Span> 단짝님</S.UserName>

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
                  {/* 포인트 숫자 */}
                </S.UserCount>
              </S.UserBox>
            </S.UserSection>
          </S.UserInfo>
        </S.UserLeftBox>
        
        <S.ButtonBox>
          <S.Button><img style={{width: "24px", marginRight: "6px"}} src="images/pointicon.png"/>포인트 충전</S.Button>
          <S.Button onClick={props.onClickModify}><SettingOutlined style={{ marginRight: "6px"}}/>회원정보 수정</S.Button>
        </S.ButtonBox>

      </S.MypageBox>




      <S.MypageMenuBox>
        <S.MypageMenu>마이 단짠 게시글</S.MypageMenu>
        <S.MypageMenu>좋아요 한 단짠 게시글</S.MypageMenu>
        <S.MypageMenu>포인트 상세내역</S.MypageMenu>
      </S.MypageMenuBox>
      <S.MypageSectionBox>
      </S.MypageSectionBox>
      <S.TopButtonBox>
        <TopButton/>
      </S.TopButtonBox>
    </S.Wrapper>
  );
}
