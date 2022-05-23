// 공지사항 list Presenter === 김치훈

import { getDateDot } from "../../../commons/libraries/date";
import SearchBarPage from "../../../commons/searchbar/SearchBar.container";
import * as S from "./NoticeList.styled";

export default function NoticeListPresenterPage(props: any) {
  return (
    <S.Wrapper>
      <S.Title>공지사항</S.Title>
      <S.SearchBarBox>
        <SearchBarPage />
      </S.SearchBarBox>
      <S.NoticeBox>
        <S.NoticeTh>
          <S.NoticeThNumber>번호</S.NoticeThNumber>
          <S.NoticeThCategory>카테고리</S.NoticeThCategory>
          <S.NoticeThTitle>제목</S.NoticeThTitle>
          <S.NoticeThCreateAt>작성일</S.NoticeThCreateAt>
          <S.NoticeThHits>조회</S.NoticeThHits>
        </S.NoticeTh>

        <S.NoticeThHr />
        
        {props.data?.fetchNoticeAll.map((el: any, index: any) => (
          <>
            <S.NoticeTd key={el.noticeId}>
            <S.NoticeTdNumber>
              {el.noticeId}
            </S.NoticeTdNumber>
            <S.NoticeTdCategory>
              {el?.subCategory?.subCategoryName === "TASTING" && "시식단 리뷰"}
              {el?.subCategory?.subCategoryName === "NOTICE" && "공지"}
              {el?.subCategory?.subCategoryName === "EVENT" && "이벤트"} 
              {el?.subCategory?.subCategoryName === "PROMOTION" && "프로모션"}
            </S.NoticeTdCategory>
            <S.NoticeTdTitle id={el.noticeId} onClick={props.onClickMoveNoticeDetail}>
              {el.noticeContents}
            </S.NoticeTdTitle>
            <S.NoticeTdCreateAt>
              {getDateDot(el.createAt)}
            </S.NoticeTdCreateAt>
            <S.NoticeTdHits>
              {el.noticeHit}
            </S.NoticeTdHits>
          </S.NoticeTd>
          <S.NoticeTdHr />
        </>
        ))}
      </S.NoticeBox>

      <S.PagenationBox>
      <S.Pagenation>
          <S.Prev>←</S.Prev>
          <S.Num>1</S.Num>
          <S.Num>2</S.Num>
          <S.Num>3</S.Num>
          <S.Num>4</S.Num>
          <S.Num>5</S.Num>
          <S.Next>→</S.Next>
      </S.Pagenation>
      </S.PagenationBox>
    </S.Wrapper>
  );
}
