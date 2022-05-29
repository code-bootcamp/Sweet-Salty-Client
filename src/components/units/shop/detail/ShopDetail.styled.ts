import styled from "@emotion/styled";
import { RightOutlined } from "@ant-design/icons";

interface IBuyButton {
  amountPoint: number;
}

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0px 0px 100px 0px;
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
  background-color: #ffffff;
`;

export const LeftTopInfoArticle = styled.div`
  display: flex;
  border-bottom: 1px solid #dadada;
  padding: 0px 0px 50px 0px;
`;

export const Thumbnail = styled.div`
  width: 410px;
  height: 340px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px;
  border-radius: 20px;
`;

export const ThumbnailTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: #ff9a31;
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
  border-radius: 30px;
  border: 2px solid #d8d8d8;
`;

export const CountButton = styled.button`
  font-size: 20px;
  color: #aeaeae;
  border: none;
  background-color: transparent;
  cursor: pointer;
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
  height: 484px;
  border-radius: 20px;
  position: sticky;
  top: 0px;

  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
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
  padding: 0px 0px 40px 0px;
`;

export const RightText = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const RightTextOrange = styled.div`
  font-size: 20px;
  color: #ff9a31;
  font-weight: 600;
`;

export const RightSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 25px 0px;
`;

export const PriceText = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
export const AmountText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #676767;
`;

export const AmountPoint = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #ff6e30;
`;

export const RemainPoint = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #ff9a31;
`;

export const UserNameSection = styled.div`
  display: flex;
`;

export const UserName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #ff9a31;
`;

export const BuyButonSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonImage = styled.img`
  width: 30px;
  height: 24px;
  padding: 0px 6px 0px 0px;
`;

export const BuyButton = styled.button`
  display: flex;
  justify-content: center;
  width: 147px;
  border: none;
  border-radius: 25px;
  padding: 10px 15px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  ${(props: IBuyButton) =>
    props.amountPoint === 0
      ? "background: #AEAEAE"
      : "background: linear-gradient(#ff6e30, #ffa230)"};
`;
export const ChargeButton = styled.button`
  display: flex;
  justify-content: center;
  width: 161px;
  border: none;
  border-radius: 25px;
  padding: 10px 15px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  background: linear-gradient(#ff6e30, #ffa230);
`;
