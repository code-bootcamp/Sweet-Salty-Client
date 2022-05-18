// 공지사항 list Presenter === 김치훈

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
        
        <S.NoticeTd>
          <S.NoticeTdNumber>
            1
          </S.NoticeTdNumber>
          <S.NoticeTdCategory>
            이벤트
          </S.NoticeTdCategory>
          <S.NoticeTdTitle onClick={props.onClickDetail}>
            공지사항 상세보기 이동하기
          </S.NoticeTdTitle>
          <S.NoticeTdCreateAt>
            2022.05.16
          </S.NoticeTdCreateAt>
          <S.NoticeTdHits>
            100
          </S.NoticeTdHits>
        </S.NoticeTd>
        <S.NoticeTdHr />
        <S.NoticeTd>
          <S.NoticeTdNumber>
            {/* 1 */}
          </S.NoticeTdNumber>
          <S.NoticeTdCategory>
            {/* 시식단 모집 */}
          </S.NoticeTdCategory>
          <S.NoticeTdTitle>
            {/* 단짝 스토어에서 첫 선물하고 100 포인트 적립하세요. */}데이터 넣는 공간 (오류아님)
          </S.NoticeTdTitle>
          <S.NoticeTdCreateAt>
            {/* 2022.05.16 */}
          </S.NoticeTdCreateAt>
          <S.NoticeTdHits>
             {/* 100 */}
          </S.NoticeTdHits>
        </S.NoticeTd>
        <S.NoticeTdHr />
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
