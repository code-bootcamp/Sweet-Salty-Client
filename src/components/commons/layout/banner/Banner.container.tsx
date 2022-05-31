import * as S from "./Banner.styles";
import styled from "@emotion/styled";
import Slider from "react-slick";

const Slick = styled(Slider)`
  width: 100%;
  .slick-list {
    width: 100%;
  }
  .slick-slide div {
  }
  .slick-dots {
    display: flex;
    justify-content: center;
    width: 100%;
    bottom: 20px;
  }
  .slick-track {
  }
  .slick-dots li.slick-active button:before {
    width: 13px;
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
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
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
        <img src="/images/Banner/Banner_1.png" />

        <img src="/images/Banner/Banner_2.png" />

        <img src="/images/Banner/Banner_3.png" />

        <img src="/images/Banner/Banner_4.png" />
      </Slick>
    </S.BannerWrapper>
  );
}
