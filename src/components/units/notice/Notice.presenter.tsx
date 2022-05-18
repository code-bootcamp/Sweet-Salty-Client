import SearchBarPage from "../../commons/searchbar/SearchBar.container";
import * as S from "./Notice.styled";

export default function NoticePresenterPage() {
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
        <S.NoticeHr />
        <S.NoticeTd>
          <S.NoticeTdNumber>1</S.NoticeTdNumber>
          <S.NoticeTdCategory>시식단 모집</S.NoticeTdCategory>
          <S.NoticeTdTitle>단짝 스토어에서 첫 선물하고 100 포인트 적립하세요.</S.NoticeTdTitle>
          <S.NoticeTdCreateAt>2022.05.16</S.NoticeTdCreateAt>
          <S.NoticeTdHits>100</S.NoticeTdHits>
        </S.NoticeTd>
      </S.NoticeBox>
    </S.Wrapper>
  );
}
