// 일반리뷰 top3랑 연결되있음
import * as S from "./BestCommunityCard.styles";

export default function BestCommunityCardPresenterPage() {
  return (
    <S.ItemMainDiv>
      <S.ItemImg></S.ItemImg>
      <S.ItemInfoDiv>
        <S.ItemInfoTopDiv>
          <S.ItemInfoLeftDiv>
            <S.ItemInfoTitleDiv>제목</S.ItemInfoTitleDiv>
          </S.ItemInfoLeftDiv>
        </S.ItemInfoTopDiv>

        <S.ItemInfoMidDiv>
          <S.MidStoreInfoDiv>
            <S.ItemInfoStoreName>식당명</S.ItemInfoStoreName>
            <S.ItemInfoBarDiv>|</S.ItemInfoBarDiv>
            <S.ItemInfoLocationDiv>위치명</S.ItemInfoLocationDiv>
          </S.MidStoreInfoDiv>
          <S.ItemInfoUserDiv>푸딩 단짝님</S.ItemInfoUserDiv>
        </S.ItemInfoMidDiv>

        <S.ItemInfoBottomDiv>
          <S.ItemInfoLeftDiv>
            <S.ItemInfoLeftDiv>
              <S.ItemInfoImg src="/images/likeCount.png" alt="하트" />
              <S.ItemInfoCountDiv>99999</S.ItemInfoCountDiv>
            </S.ItemInfoLeftDiv>
            <S.ItemInfoLeftDiv>
              <S.ItemInfoImg src="/images/viewCount.png" alt="뷰" />
              <S.ItemInfoCountDiv>99999</S.ItemInfoCountDiv>
            </S.ItemInfoLeftDiv>
          </S.ItemInfoLeftDiv>
          <S.IteminfoDateDiv>2022.05.10</S.IteminfoDateDiv>
        </S.ItemInfoBottomDiv>
      </S.ItemInfoDiv>
    </S.ItemMainDiv>
  );
}
