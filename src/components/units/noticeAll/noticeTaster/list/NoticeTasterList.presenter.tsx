// 공지사항 Taster list Presenter === 김치훈

import { getDateDot } from "../../../../commons/libraries/date";
import Paginations01 from "../../../../commons/paginations/paginations/01/Paginations01.container";
import SearchBarPage from "../../../../commons/searchbar/SearchBar.container";
import * as S from "./NoticeTasterList.styled";
import { v4 as uuidv4 } from "uuid";

export default function NoticeTasterListPresenterPage(props: any) {
  return (
    <S.Wrapper>
      <S.Title>공지사항 <S.RightOutline /> 시식단 모집</S.Title>
      <S.SearchBarBox>
        <SearchBarPage />
      </S.SearchBarBox>

      <S.ReviewMenuBox>
        <S.ReviewMenu onClick={props.onClickNoticeAll}>전체</S.ReviewMenu>
        <S.ReviewMenu onClick={props.onClickNotice}>단짠 공지</S.ReviewMenu>
        <S.ReviewMenu onClick={props.onClickNoticeEvent}>이벤트</S.ReviewMenu>
        <S.ReviewMenu onClick={props.onClickNoticePromotion}>프로모션</S.ReviewMenu>
        <S.ReviewMenu isNotice={props.isNotice}>시식단 모집</S.ReviewMenu> 
      </S.ReviewMenuBox>
      
      <S.NoticeBox>
        <S.NoticeTh>
          <S.NoticeThCategory>카테고리</S.NoticeThCategory>
          <S.NoticeThTitle>제목</S.NoticeThTitle>
          <S.NoticeThCreateAt>작성일</S.NoticeThCreateAt>
          <S.NoticeThHits>조회</S.NoticeThHits>
        </S.NoticeTh>

        <S.NoticeThHr />
        
        {props.data?.fetchNoticeCategoryPick.map((el: any, index: any) => (
          <S.Notice key={uuidv4()}>
            <S.NoticeTd>
            <S.NoticeTdCategory>
              {el?.subCategory?.subCategoryName === "TASTING" && "시식단 모집"}
              {el?.subCategory?.subCategoryName === "NOTICE" && "공지"}
              {el?.subCategory?.subCategoryName === "EVENT" && "이벤트"} 
              {el?.subCategory?.subCategoryName === "PROMOTION" && "프로모션"}
            </S.NoticeTdCategory>
            <S.NoticeTdTitle id={el.noticeId} onClick={props.onClickMoveNoticeDetail}>
              {el.noticeTitle}
            </S.NoticeTdTitle>
            <S.NoticeTdCreateAt>
              {getDateDot(el.createAt)}
            </S.NoticeTdCreateAt>
            <S.NoticeTdHits>
              {el.noticeHit}
            </S.NoticeTdHits>
          </S.NoticeTd>
          <S.NoticeTdHr />
        </S.Notice>
        ))}
      </S.NoticeBox>

      
      <S.PagenationBox>
        <Paginations01 refetch={props.refetch} count={props.count} />
      </S.PagenationBox>
    </S.Wrapper>
  );
}
