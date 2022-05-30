// Banner Container === 김치훈

import * as S from "./Banner.styles";
import styled from "@emotion/styled";
import Slider from "react-slick";

const Slick = styled(Slider)`
  width: 100%;
  .slick-list {
  }
  .slick-slide div{
  }
  .slick-dots {
    bottom: 20px;
  }
  .slick-track {
  }
  .slick-dots li.slick-active button:before {
    width: 25px;
    height: 13px;
    background: #fff;
    border-radius: 50px;
    color: transparent;
  }
  .slick-dots li button:before {
    width: 13px;
    height: 13px;
    background: #fff;
    border-radius: 50px;
    color: transparent;
  }
`;
const settings = {
  // 좌우 화살표 보여주기
  arrows: false,
  // 무제한으로 돌릴꺼야?
  infinite: true,
  // 넘어가는 속도
  speed: 500,
  // 사진 몇개 보여줄꺼야?
  slidesToShow: 1,
  // 몇 개씩 넘길꺼야?
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "ease",

};

export default function LayoutBanner() {
  return (
    <S.BannerWrapper>
      <Slick {...settings}>
        <img src="/images/banner/Banner_1.png"/>

        <img src="/images/banner/Banner_2.png"/>

        <img src="/images/banner/Banner_3.png"/>

        <img src="/images/banner/Banner_4.png"/>
      </Slick>
    </S.BannerWrapper>
  );
}
