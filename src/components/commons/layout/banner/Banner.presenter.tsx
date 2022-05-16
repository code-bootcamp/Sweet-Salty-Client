// Banner Presenter === 김치훈

import * as S from "./Banner.styles";
import styled from "@emotion/styled";
import Slider from "react-slick";

const Slick = styled(Slider)`
  width: 1120px;
  height: 100%;
  display: flex;
  align-items: center;

  margin: 0 auto;
`;
const settings = {
  // 좌우 화살표 보여주기
  arrows: false,
  // 무제한으로 돌릴꺼야?
  infinite: true,
  // 넘어가는 속도
  speed: 5000,
  // 사진 몇개 보여줄꺼야?
  slidesToShow: 1,
  // 몇 개씩 넘길꺼야?
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "ease",
  // 리스트 모양 보여주기
  dots: false,
};

export default function LayoutBannerUI() {
  return (
    <S.BannerWrapper>
      <Slick {...settings}>
        <S.BannerSlick>
          <S.BannerSlickTitle>단짠님 모집</S.BannerSlickTitle>
          <S.BannerSlickContent>
            단짠 맛집의 <br /> 리뷰를 써보세요!
          </S.BannerSlickContent>
        </S.BannerSlick>
        <S.BannerSlick>
          <S.BannerSlickTitle>단짠 맛집 시식단 모집</S.BannerSlickTitle>
          <S.BannerSlickContent>
            무료 시식단에 참여해 <br /> 단짠 리뷰를 남겨주세요!
          </S.BannerSlickContent>
        </S.BannerSlick>
        <S.BannerSlick>
          <S.BannerSlickTitle>환영!!!</S.BannerSlickTitle>
          <S.BannerSlickContent>
            히히히히힣 <br />
            하하하하하하
          </S.BannerSlickContent>
        </S.BannerSlick>
      </Slick>
    </S.BannerWrapper>
  );
}
