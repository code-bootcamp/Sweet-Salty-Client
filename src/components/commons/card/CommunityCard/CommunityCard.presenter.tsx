import * as S from "./CommunityCard.styles";

export default function CommunityCardPresenterPage(props) {
  return (
    <S.ItemMainDiv>
      <S.ItemImg>
        <S.ItemProfile></S.ItemProfile>
      </S.ItemImg>
      <S.ItemInfoDiv>
        <S.ItemInfoTopDiv>
          <S.ItemInfoLeftDiv>
            <S.ItemInfoTitleDiv>
              {props.fetchBoardsData?.boardTitle}
            </S.ItemInfoTitleDiv>
            <S.ItemInfoBarDiv>|</S.ItemInfoBarDiv>
            <S.ItemInfoLocationDiv>구로구</S.ItemInfoLocationDiv>
          </S.ItemInfoLeftDiv>
          <S.ItemInfoUserDiv>푸딩 단짝님</S.ItemInfoUserDiv>
        </S.ItemInfoTopDiv>

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
