import styled from "@emotion/styled";
import { RightOutlined } from "@ant-design/icons";

export const Page = styled.div`
  border: 1px solid red;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TitleSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 700;
  padding: 100px 0px;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 1338px;
`;

export const Padding = styled.div`
  padding: 0px 30px 0px 0px;
`;

export const RightOutline = styled(RightOutlined)`
  padding: 0 15px;
  color: #2c2c2c;
`;

export const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 952px;
`;

export const MainLeftSection = styled.div`
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 40px;
`;

export const LeftTopInfoArticle = styled.div`
  display: flex;
  border-bottom: 1px solid #dadada;
  padding: 0px 0px 50px 0px;
`;

export const Thumbnail = styled.div`
  width: 410px;
  height: 340px;
  background-color: red;
  border-radius: 20px;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0px 20px;
`;

export const ShopNameArticle = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding: 0px 0px 30px 0px;
`;

export const ShopDescriptionArticle = styled.div`
  color: #676767;
  font-size: 14px;
  font-weight: 600;
  padding: 0px 0px 30px 0px;
`;

export const CountButtonArticle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  padding: 10px 20px;
  border-radius: 25px;
  border: 2px solid #d8d8d8;
`;

export const CountButton = styled.div`
  font-size: 20px;
  color: #aeaeae;
`;

export const Count = styled.div`
  color: #676767;
  font-size: 20px;
`;

export const StockArticle = styled.div`
  display: flex;
  padding: 30px 0px;
  color: #676767;
  font-weight: 600;
`;

export const StockText = styled.div`
  font-size: 16px;
`;

export const PriceArticle = styled.div`
  padding: 0px 0px 30px 0px;
`;

export const OriginalPriceArticle = styled.div`
  color: #aeaeae;
  font-size: 20px;
  font-weight: 500;
  text-decoration: line-through;
`;

export const DiscountedPriceSection = styled.div`
  display: flex;
`;

export const DiscountedRate = styled.div`
  color: #ff6e30;
  font-weight: 700;
  font-size: 20px;
`;

export const DiscountedPrice = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const DiscountedPriceWon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

export const GuideMessageSection = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const LeftBottomInfoArticle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0px;
  border-bottom: 1px solid #dadada;
`;

export const DetailProductTitleSection = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const ProductSmallSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductSmallTitleArticle = styled.div``;

export const ProductSmallContents = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #676767;
`;

export const ProductSmallContentsArticle = styled.div``;

export const DetailProductInfoSection = styled.div`
  font-size: 14px;
  font-weight: 500;

  padding: 20px 0px 0px 0px;
`;

export const MainRightSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 386px;
  height: 600px;
  border-radius: 20px;
  position: sticky;
  top: 0px;
  bottom: 0px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const MapSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MapTitleArticle = styled.div`
  padding: 40px 0px;
  font-size: 20px;
  font-weight: 700;
`;

export const MapArticle = styled.div`
  width: 100%;
  height: 430px;

  border-radius: 20px;
  background-color: red;
`;

export const RightTitleArticle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
