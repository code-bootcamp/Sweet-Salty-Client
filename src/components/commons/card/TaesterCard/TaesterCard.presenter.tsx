import * as S from "./TaesterCard.styles";

export default function TasterCardPresenterPage(props) {
  return (
    <S.ItemMainDiv>
      <S.ItemImg
        style={{
          backgroundImage: `url(https://storage.googleapis.com/${props.fetchBoardsCategoryData?.thumbnail})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <S.ItemProfile></S.ItemProfile>
      </S.ItemImg>
      <S.ItemInfoDiv>
        <S.ItemInfoTopDiv>
          <S.ItemInfoLeftDiv>
            <S.ItemInfoTitleDiv>
              {props.fetchBoardsCategoryData?.boardTitle}
            </S.ItemInfoTitleDiv>
          </S.ItemInfoLeftDiv>
        </S.ItemInfoTopDiv>

        <S.ItemInfoMidDiv>
          <S.MidStoreInfoDiv>
            <S.ItemInfoStoreName>식당명</S.ItemInfoStoreName>
            <S.ItemInfoBarDiv>|</S.ItemInfoBarDiv>
            <S.ItemInfoLocationDiv>구로구</S.ItemInfoLocationDiv>
          </S.MidStoreInfoDiv>
          <S.ItemInfoUserDiv>푸딩 단짝님</S.ItemInfoUserDiv>
        </S.ItemInfoMidDiv>

        <S.ItemInfoBottomDiv>
          <S.ItemInfoLeftDiv>
            <S.ItemInfoLeftDiv>
              <S.ItemInfoImg src="/images/likeCount.png" alt="하트" />
              <S.ItemInfoCountDiv>
                {props.fetchBoardsCategoryData?.boardLikeCount}
              </S.ItemInfoCountDiv>
            </S.ItemInfoLeftDiv>
            <S.ItemInfoLeftDiv>
              <S.ItemInfoImg src="/images/viewCount.png" alt="뷰" />
              <S.ItemInfoCountDiv>
                {props.fetchBoardsCategoryData?.boardHit}
              </S.ItemInfoCountDiv>
            </S.ItemInfoLeftDiv>
          </S.ItemInfoLeftDiv>
          <S.IteminfoDateDiv>
            {props.fetchBoardsCategoryData?.createAt.slice(0, 10)}
          </S.IteminfoDateDiv>
        </S.ItemInfoBottomDiv>
      </S.ItemInfoDiv>
    </S.ItemMainDiv>
  );
}
