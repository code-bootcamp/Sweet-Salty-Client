import * as S from "./CategorySearchReviewCard.styles";

export default function SearchCategoryItemPresenterPage(props : any) {
  console.log("ggg", props.fetchTagSearchData.boardsubject);
  return (
    <S.ItemMainDiv
      onClick={props.onClickDetailPage}
      id={props.fetchTagSearchData?.boardid}
    >
      <S.ItemImg
        style={{
          backgroundImage: `url(https://storage.googleapis.com/${props.fetchTagSearchData?.thumbnail})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {props.fetchTagSearchData?.boardsubject === "TASTER" && (
          <S.ItemTitle>시식단 리뷰</S.ItemTitle>
        )}
        {props.fetchTagSearchData?.boardsubject === "REVIEW" && (
          <S.ItemTitle>단짠 리뷰</S.ItemTitle>
        )}
        {props.fetchTagSearchData?.boardsubject === "REQUEST" && (
          <S.ItemTitle>가주세요!</S.ItemTitle>
        )}
        {props.fetchTagSearchData?.boardsubject === "VISITED" && (
          <S.ItemTitle>가봤어요!</S.ItemTitle>
        )}
      </S.ItemImg>
      <S.ItemInfoDiv>
        <S.ItemInfoTopDiv>
          <S.ItemInfoLeftDiv>
            <S.ItemInfoTitleDiv>
              {props.fetchTagSearchData?.boardtitle}
            </S.ItemInfoTitleDiv>
          </S.ItemInfoLeftDiv>
        </S.ItemInfoTopDiv>

        <S.ItemInfoMidDiv>
          <S.MidStoreInfoDiv>
            <S.ItemInfoStoreName>식당명</S.ItemInfoStoreName>
            <S.ItemInfoBarDiv>|</S.ItemInfoBarDiv>
            <S.ItemInfoLocationDiv>구로구</S.ItemInfoLocationDiv>
          </S.MidStoreInfoDiv>
          <S.ItemInfoUserDiv>
            {props.fetchTagSearchData?.boardwriter} 단짝님
          </S.ItemInfoUserDiv>
        </S.ItemInfoMidDiv>

        <S.ItemInfoBottomDiv>
          <S.ItemInfoLeftDiv>
            <S.ItemInfoLeftDiv>
              <S.ItemInfoImg src="/images/likeCount.png" alt="하트" />
              <S.ItemInfoCountDiv>
                {props.fetchTagSearchData?.boardlikecount}
              </S.ItemInfoCountDiv>
            </S.ItemInfoLeftDiv>
            <S.ItemInfoLeftDiv>
              <S.ItemInfoImg src="/images/viewCount.png" alt="뷰" />
              <S.ItemInfoCountDiv>
                {props.fetchTagSearchData?.boardhit}
              </S.ItemInfoCountDiv>
            </S.ItemInfoLeftDiv>
          </S.ItemInfoLeftDiv>
          <S.IteminfoDateDiv>
            {props.fetchTagSearchData?.createat.slice(0, 10)}
          </S.IteminfoDateDiv>
        </S.ItemInfoBottomDiv>
      </S.ItemInfoDiv>
    </S.ItemMainDiv>
  );
}
