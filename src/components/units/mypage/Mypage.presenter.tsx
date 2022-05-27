// mypage presenter --- 김치훈

import TopButton from "../../commons/topbutton";
import * as S from "./Mypage.styled";
import MypageUserInfoContainer from "../../commons/UserInfo/userInfo.container";
import UserMenuContainer from "../../commons/UserMenu/userMenu.container";
import MyreviewCardContainer from "../../commons/card/MyreviewCard/MyreviewCard.container";
import { v4 as uuidv4 } from "uuid";
// import InfiniteScroll from 'react-infinite-scroller';

export default function MyPagePresenter(props: any) {
  console.log(props.data?.fetchBoardsOfUser)
  return (
    <S.Wrapper>
      <S.Title>마이페이지</S.Title>
      
      {/* mypage 유저 정보 박스 */}
      <MypageUserInfoContainer />

      {/* mypage 메뉴 */}
      <UserMenuContainer />


      <S.MypageSectionBox>
        {/* <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true} useWindow={true}> */}
          <S.TableTop>
            {props?.data?.fetchBoardsOfUser.map((el: any)=>
              <S.MypageBoardsOfUser key={uuidv4()}>
                <MyreviewCardContainer el={el} data={props.data}/>
              </S.MypageBoardsOfUser>
            )}
          </S.TableTop>
        {/* </InfiniteScroll> */}
      </S.MypageSectionBox>

      {/* <S.MypageSectionBox>
        {props?.data?.fetchBoardsOfUser.map((el: any)=>
          <S.MypageBoardsOfUser key={uuidv4()}>
            <MyreviewCardContainer el={el} data={props.data}/>
          </S.MypageBoardsOfUser>
        )}
      </S.MypageSectionBox> */}
      <S.TopButtonBox>
        <TopButton/>
      </S.TopButtonBox>
    </S.Wrapper>
  );
}
