import * as S from "./SearchBar.styles";

export default function SearchBarPresenter(props: any) {
  return (
    <S.Wrapper
      isReviewList={props.isReviewList}
      isCommonReviewList={props.isCommonReviewList}
      isTesterReview={props.isTesterReview}
      isWishList={props.isWishList}
      isNoticeAllList={props.isNoticeAllList}
      isNoticeList={props.isNoticeList}
      isNoticeEventList={props.isNoticeEventList}
      isNoticePromoionList={props.isNoticePromoionList}
      isNoticeTasterList={props.isNoticeTasterList}
    >
      {/* 전체 게시판, 가주세요! 게시판에서 보여줘 */}
      {(props.isReviewList || props.isWishList) && (
        <S.SearchBox>
          <S.SearchInnerBox>
            <S.Select id="searchSelect">
              <option value="제목">제목</option>
              <option value="내용">내용</option>
              <option value="가게명">가게명</option>
            </S.Select>
            <S.SearchBar
              type="text"
              placeholder="지역, 음식 또는 식당명을 입력하세요."
            />
            <S.SearchIcon />
          </S.SearchInnerBox>
        </S.SearchBox>
      )}

      {/* 공지사항 전체 페이지 검색창 */}
      {props.isNoticeAllList && (
        <>
          <S.SearchbarNoticeCount>
            총 <S.Span>{props.NoticeAllPagecountData?.fetchNoticeCount}</S.Span>
            건의 공지사항이 있습니다.
          </S.SearchbarNoticeCount>
        </>
      )}
      {/* 공지사항 단짠리뷰 페이지 검색창 */}
      {props.isNoticeList && (
        <>
          <S.SearchbarNoticeCount>
            총 <S.Span>{props.NoticePagecountData?.fetchNoticeCount}</S.Span>
            건의 공지사항이 있습니다.
          </S.SearchbarNoticeCount>
        </>
      )}
      {/* 공지사항 이벤트 페이지 검색창 */}
      {props.isNoticeEventList && (
        <>
          <S.SearchbarNoticeCount>
            총{" "}
            <S.Span>{props.NoticeEventPagecountData?.fetchNoticeCount}</S.Span>
            건의 공지사항이 있습니다.
          </S.SearchbarNoticeCount>
        </>
      )}
      {/* 공지사항 프로모션 페이지 검색창 */}
      {props.isNoticePromoionList && (
        <>
          <S.SearchbarNoticeCount>
            총{" "}
            <S.Span>
              {props.NoticePromotionPagecountData?.fetchNoticeCount}
            </S.Span>
            건의 공지사항이 있습니다.
          </S.SearchbarNoticeCount>
        </>
      )}
      {/* 공지사항 시식단 모집 페이지 검색창 */}
      {props.isNoticeTasterList && (
        <>
          <S.SearchbarNoticeCount>
            총{" "}
            <S.Span>
              {props.NoticeTastingPagecountData?.fetchNoticeCount}
            </S.Span>
            건의 공지사항이 있습니다.
          </S.SearchbarNoticeCount>
        </>
      )}
      {/* 공지사항 페이지 검색창 */}
      {(props.isNoticeAllList ||
        props.isNoticeList ||
        props.isNoticeEventList ||
        props.isNoticePromoionList ||
        props.isNoticeTasterList) && (
        <S.SearchBox>
          <S.SearchInnerBox>
            <S.Select id="searchSelect">
              <option value="제목">제목</option>
              <option value="내용">내용</option>
            </S.Select>
            <S.SearchBar
              type="text"
              placeholder="검색어를 입력하세요."
              onChange={props.onChangeSearchbar}
            />
            <S.SearchIcon />
          </S.SearchInnerBox>
        </S.SearchBox>
      )}

      {/* 단짠게시판 전페 페이지 작성버튼 */}
      {props.isReviewList && (
        <S.ReviewWriteBox>
          <S.ReviewWrite onClick={props.onClickButtonBox}>
            <S.WriteIcon />
            리뷰 작성하기
          </S.ReviewWrite>
          {props.isButton && (
            <S.UserProfileBox>
              <S.UserProfile>
                <S.TotalReviewWrite onClick={props.onClickReviewDetail}>
                  <S.WriteIcon />
                  단짠 리뷰 작성하기
                </S.TotalReviewWrite>

                <S.TotalReviewWrite onClick={props.onClickReviewDetail}>
                  <S.WriteIcon />
                  시식단 리뷰 작성하기
                </S.TotalReviewWrite>

                <S.TotalReviewWrite onClick={props.onClickWishDetail}>
                  <S.WriteIcon />
                  가주세요! 작성하기
                </S.TotalReviewWrite>
              </S.UserProfile>
              <S.ArrowBox></S.ArrowBox>
            </S.UserProfileBox>
          )}
        </S.ReviewWriteBox>
      )}

      {props.isCommonReviewList && (
        <S.ReviewWriteBox>
          <S.ReviewWrite onClick={props.onClickReviewDetail}>
            <S.WriteIcon />
            단짠 리뷰 작성하기
          </S.ReviewWrite>
        </S.ReviewWriteBox>
      )}
      {props.isTesterReview && (
        <S.ReviewWriteBox>
          <S.ReviewWrite onClick={props.onClickReviewDetail}>
            <S.WriteIcon />
            시식단 리뷰 작성하기
          </S.ReviewWrite>
        </S.ReviewWriteBox>
      )}
      {props.isWishList && (
        <S.ReviewWriteBox>
          <S.ReviewWrite onClick={props.onClickWishDetail}>
            <S.WriteIcon />
            가주세요! 작성하기
          </S.ReviewWrite>
        </S.ReviewWriteBox>
      )}
      {props.isNoticeAllList && (
        <S.ReviewWriteBox isNoticeAllList={props.isNoticeAllList}>
          <S.ReviewWrite onClick={props.onClickNoticeList}>
            <S.WriteIcon />
            공지사항 작성하기
          </S.ReviewWrite>
        </S.ReviewWriteBox>
      )}
    </S.Wrapper>
  );
}
