import * as S from "./ReviewItem.styles";

export default function MainReviewItemPresenterPage(props) {
  const url = "https://storage.googleapis.com/"
  return (
    <S.ItemMainDiv
      onClick={props.onClickDetailPage}
      id={props.fetchBoardsData?.boardId}
    >
      <div>
        <S.ItemImg
          style={{
            backgroundImage: `url(https://storage.googleapis.com/${props.fetchBoardsData?.thumbnail})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <S.ItemProfile><S.ProfileImg src ={url +props.fetchBoardsData.user?.userImage}/></S.ItemProfile>
        </S.ItemImg>
      </div>
      <S.ItemInfoDiv>
        <S.ItemInfoTopDiv>
          <S.ItemInfoLeftDiv>
            <S.ItemInfoTitleDiv>
              {props.fetchBoardsData?.boardTitle}
            </S.ItemInfoTitleDiv>
          </S.ItemInfoLeftDiv>
        </S.ItemInfoTopDiv>

        <S.ItemInfoMidDiv>
          <S.MidStoreInfoDiv>
            <S.ItemInfoStoreName>{props.fetchBoardsData?.place.placeName}</S.ItemInfoStoreName>
            <S.ItemInfoBarDiv>|</S.ItemInfoBarDiv>
            <S.ItemInfoLocationDiv>{props.fetchBoardsData?.place.placeAddress.split(" ")[1]}</S.ItemInfoLocationDiv>
          </S.MidStoreInfoDiv>
          <S.ItemInfoUserDiv>{props.fetchBoardsData?.boardWriter} 단짝님</S.ItemInfoUserDiv>
        </S.ItemInfoMidDiv>

        <S.ItemInfoBottomDiv>
          <S.ItemInfoLeftDiv>
            <S.ItemInfoLeftDiv>
              <S.ItemInfoImg src="/images/likeCount.png" alt="하트" />
              <S.ItemInfoCountDiv>
                {props.fetchBoardsData?.boardLikeCount}
              </S.ItemInfoCountDiv>
            </S.ItemInfoLeftDiv>
            <S.ItemInfoLeftDiv>
              <S.ItemInfoImg src="/images/viewCount.png" alt="뷰" />
              <S.ItemInfoCountDiv>
                {props.fetchBoardsData?.boardHit}
              </S.ItemInfoCountDiv>
            </S.ItemInfoLeftDiv>
          </S.ItemInfoLeftDiv>
          <S.IteminfoDateDiv>
            {props.fetchBoardsData?.createAt.slice(0, 10)}
          </S.IteminfoDateDiv>
        </S.ItemInfoBottomDiv>
      </S.ItemInfoDiv>
    </S.ItemMainDiv>
  );
}
