// MypageLike presenter --- 김치훈

import MyPageMenuContainer from "../../../commons/Mypage/UserMenu/userMenu.container";
import MypageUserInfoContainer from "../../../commons/Mypage/UserInfo/userInfo.container";
import TopButton from "../../../commons/topbutton";
import * as S from "./MypageLike.styled";
import { v4 as uuidv4 } from "uuid";
import LikeReviewCardContainer from "../../../commons/card/LikeReviewCard/LikeReviewCard.container";
// import InfiniteScroll from 'react-infinite-scroller';

export default function MypageLikePresenter(props: any) {
  return (
    <S.Wrapper>
      <S.Title>마이페이지</S.Title>
      
      {/* mypage 유저 정보 박스 */}
      <MypageUserInfoContainer />

      {/* mypage 메뉴 */}
      <MyPageMenuContainer />

      <S.MypageSectionBox>

        {/* <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true} useWindow={true}> */}
          <S.TableTop>
            {props?.data?.fetchPickedBoards.map((el: any)=>
              <S.MypageBoardsOfUser key={uuidv4()}>
                <LikeReviewCardContainer 
                  el={el}
                  data={props.data}
                  onClickMoveLikeReviewDetail={props.onClickMoveLikeReviewDetail} 
                />
              </S.MypageBoardsOfUser>
            )}
          </S.TableTop>
        {/* </InfiniteScroll> */}

      </S.MypageSectionBox>
      <S.TopButtonBox>
        <TopButton/>
      </S.TopButtonBox>
    </S.Wrapper>
  );
}
