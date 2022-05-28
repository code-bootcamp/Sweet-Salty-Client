// Mainpage 메인페이지 presenter - 김치훈

import TopButton from "../../commons/topbutton";
import * as S from "./MainPage.styles";
import { v4 as uuidv4 } from "uuid";
import { getDateDot } from "../../commons/libraries/date";
export default function MainpagePresenter(props: any) {

const url = "https://storage.googleapis.com/"
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
            <S.ReviewTitle>최신 단짠 리뷰</S.ReviewTitle>
            <S.ReviewArrow onClick={props.onClickCommonReview}>→</S.ReviewArrow>
          </S.ReviewHeader>
          <S.ReviewSection>
            {/* 리뷰 공동컴포넌트 올리는 곳 */}
            {props.recentBoardsData?.fetchRecentBoards.map((el)=>(
              <div key ={uuidv4()}  onClick={props.onClickDetailPage(el.boardId)}>
                {/* <div>섬네일<img src={url + el.thumbnail}/></div> */}
                {/* <div>유저이미지<img src={url +el.user?.userImage}/></div> */}
                <div>제목{el.boardTitle}</div>
                <div>식당명{el.place?.placeName}</div>
                <div>식당장소{el.boardSides?.boardTags?.boardTagName}</div>
                <div>작성자{el.boardWriter}</div>
                <div>좋아요{el.boardLikeCount}</div>
                <div>조회수{el.boardHit}</div>
                <div>작성일{getDateDot(el.createAt)}</div>
              </div>
            ))}
            </S.ReviewSection>
        </S.MainPageInnerBox>
      </S.MainPageOutBox>

      <S.MainPageOutBox>
        <S.MainPageInnerBox>
          <S.ReviewHeader>
            <S.ReviewTitle>광고(시식단) 단짠 리뷰</S.ReviewTitle>
            <S.ReviewArrow>→</S.ReviewArrow>
          </S.ReviewHeader>
          <S.ReviewSection>
            {/* 리뷰 공동컴포넌트 올리는 곳 */}
            {props.recentBoardsTasterData?.fetchRecentBoards.map((el)=>(
              <div key ={uuidv4()} onClick={props.onClickDetailPage(el.boardId)}>
                {/* <div>섬네일<img src={url + el.thumbnail}/></div> */}
                {/* <div>유저이미지<img src={url +el.user?.userImage}/></div> */}
                <div>제목{el.boardTitle}</div>
                <div>식당명{el.place?.placeName}</div>
                <div>식당장소{el.boardSides?.boardTags?.boardTagName}</div>
                <div>작성자{el.boardWriter}</div>
                <div>좋아요{el.boardLikeCount}</div>
                <div>조회수{el.boardHit}</div>
                <div>작성일{getDateDot(el.createAt)}</div>
              </div>
            ))}
          </S.ReviewSection>
        </S.MainPageInnerBox>
      </S.MainPageOutBox>

      <S.MainPageOutBox>
        <S.MainPageInnerBox>
          <S.ReviewHeader>
            <S.ReviewTitle>단짝님을 위한 리뷰</S.ReviewTitle>
            <S.ReviewArrow>→</S.ReviewArrow>
          </S.ReviewHeader>
          <S.ReviewSection>{/* 리뷰 공동컴포넌트 올리는 곳 */}</S.ReviewSection>
        </S.MainPageInnerBox>
      </S.MainPageOutBox>

      {/* 공동컴포넌트에 width와 height를 다시 줘야합니다. merge하고 조정하겠음 */}
      <S.MainPageLoginOutBox>
        <S.MainPageLoginInnerBox>
          <S.MainPageInnerText>
            단짠님이 선호하는 맞십 리뷰를 보고싶다면?
          </S.MainPageInnerText>
          <S.FlexBox>
            <S.Login>로그인</S.Login>
            <S.P>|</S.P>
            <S.Signup>회원가입</S.Signup>
          </S.FlexBox>
        </S.MainPageLoginInnerBox>
      </S.MainPageLoginOutBox>

      <S.MainPageOutBox>
        <S.MainPageInnerBox>
          <S.ReviewHeader>
            <S.ReviewTitle>단짝 샵</S.ReviewTitle>
            <S.ReviewArrow>→</S.ReviewArrow>
          </S.ReviewHeader>
          <S.ReviewSection>{/* 리뷰 공동컴포넌트 올리는 곳 */}</S.ReviewSection>
        </S.MainPageInnerBox>
      </S.MainPageOutBox>

      <S.TopButtonBox>
        <TopButton />
      </S.TopButtonBox>
    </S.MainPageWrapper>
  );
}
