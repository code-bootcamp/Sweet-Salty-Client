// Mainpage 메인페이지 presenter - 김치훈

import TopButton from "../../commons/topbutton";
import * as S from "./MainPage.styles";
import { v4 as uuidv4 } from "uuid";
import StoreItemContainerPage from "../../commons/card/StoreCard/StoreItem.container";
import MainReviewItemContainerPage from "../../commons/card/MainReviewCard/ReviewItem.container";
import CommonReviewItemPresenterPage from "../../commons/card/ReviewCard/ReviewItem.presenter";
export default function MainpagePresenter(props: any) {

console.log(props.preferData,"프리퍼")
  return (
    <S.MainPageWrapper>
      <S.MainPageOutBox>
      <S.ReviewMenuBox>
        <S.ReviewMenu onClick={props.onClickCetegory} id="REVIEW" isCommonReviewList={props.isCommonReviewList}>단짠 리뷰</S.ReviewMenu>
        <S.ReviewMenu onClick={props.onClickCetegory} id="REQUEST" isWishList={props.isWishList}>가주세요!</S.ReviewMenu>
        <S.ReviewMenu onClick={props.onClickCetegory} id="VISITED" isisVisited={props.isVisited}>가봤어요!</S.ReviewMenu>
      </S.ReviewMenuBox>
        <S.MainPageInnerBox>
          <S.ReviewHeader>
            <S.ReviewTitle>{props.category==="REVIEW"?"최신 단짠 리뷰":(props.category==="REQUEST"?"가주세요! 최신 글":"가봤어요! 최신 글")}</S.ReviewTitle>
            <S.ReviewArrow onClick={props.onClickReview}>→</S.ReviewArrow>
          </S.ReviewHeader>
          <S.ReviewSection>
            {/* 리뷰 공동컴포넌트 올리는 곳 */}
            {props.recentBoardsData?.fetchRecentBoards.map((el)=>(
              <S.CardBoxDiv  key={uuidv4()}>
              <MainReviewItemContainerPage subject={el.boardSubject} id={el.boardId} el={el}/>
              </S.CardBoxDiv>
            ))}
            </S.ReviewSection>
        </S.MainPageInnerBox>
      </S.MainPageOutBox>

      <S.MainPageOutBox>
        <S.MainPageInnerBox>
          <S.ReviewHeader>
            <S.ReviewTitle>광고(시식단) 단짠 리뷰</S.ReviewTitle>
            <S.ReviewArrow onClick={props.onClickTasterPage}>→</S.ReviewArrow>
          </S.ReviewHeader>
          <S.ReviewSection>
            {/* 리뷰 공동컴포넌트 올리는 곳 */}
            {props.recentBoardsTasterData?.fetchRecentBoards.map((el)=>(
             <S.CardBoxDiv  key={uuidv4()}>
              <MainReviewItemContainerPage subject={el.boardSubject} id={el.boardId} el={el} />
              </S.CardBoxDiv>
            ))}
          </S.ReviewSection>
        </S.MainPageInnerBox>
      </S.MainPageOutBox>
<div>
      <S.MainPageOutBox>
        <S.MainPageInnerBox>
          <S.ReviewHeader>
            <S.ReviewTitle>단짝님을 위한 리뷰</S.ReviewTitle>
            <S.ReviewArrow></S.ReviewArrow>
          </S.ReviewHeader>
          <S.ReviewSection>
            {/* 리뷰 공동컴포넌트 올리는 곳 */}
            {!props.loggedInNickname && <CommonReviewItemPresenterPage/>}
            {props.preferData?.fetchPreferBoards.map((el)=>(
             <S.CardBoxDiv  key={uuidv4()}>
              <MainReviewItemContainerPage subject={el.boardSubject} id={el.boardId} el={el} />
              </S.CardBoxDiv>
            ))}
          </S.ReviewSection>
        </S.MainPageInnerBox>
        {!props.loggedInNickname && <S.MainPageLoginOutBox>
        {/* 공동컴포넌트에 width와 height를 다시 줘야합니다. merge하고 조정하겠음 */}
        <S.MainPageLoginInnerBox>
          <S.MainPageInnerText>
            단짝님이 선호하는 맛집 리뷰를 보고싶다면?
          </S.MainPageInnerText>
          <S.FlexBox>
            <S.Login onClick={props.onClickLogin}>로그인</S.Login>
            <S.P>|</S.P>
            <S.Signup onClick={props.onClickSignUp}>회원가입</S.Signup>
          </S.FlexBox>
        </S.MainPageLoginInnerBox>
      </S.MainPageLoginOutBox>}
      </S.MainPageOutBox>


      </div>
      <S.MainPageOutBox>
        <S.MainPageInnerBox>
          <S.ReviewHeader>
            <S.ReviewTitle>단짝 샵</S.ReviewTitle>
            <S.ReviewArrow onClick={props.onClickShopPage}>→</S.ReviewArrow>
          </S.ReviewHeader>
          <S.ReviewSection>
            {/* 리뷰 공동컴포넌트 올리는 곳 */}
          {props.recentShopData?.realTimeShop.map((el)=>(
           <S.CardBoxDiv  key={uuidv4()}>
            <StoreItemContainerPage id={el.shopId} el={el}/>
            </S.CardBoxDiv>
          ))}
          </S.ReviewSection>
        </S.MainPageInnerBox>
      </S.MainPageOutBox>

      <S.TopButtonBox>
        <TopButton />
      </S.TopButtonBox>
    </S.MainPageWrapper>
  );
}
