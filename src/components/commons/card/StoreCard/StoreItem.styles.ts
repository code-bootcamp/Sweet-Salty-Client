import styled from "@emotion/styled";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";

export const ItemInfoWrapDiv = styled.div`
  display: flex;
`;
export const ItemMainDiv = styled.div`
  cursor: pointer;
  height: 342px;
  width: 300px;
  margin: 0px 0px 30px 0px;
  position: relative;
`;
export const ItemImg = styled.div`
  background-color: #f3f3f3;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  height: 250px;
  justify-content: flex-end;
  padding: 70px 39px 60px 39px;
  width: 300px;
`;

export const GifticonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 222px;
  height: 119px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #ffffff;
`;

export const GifticonImg = styled.div`
  width: 75%;
  height: 100%;
  border-radius: 10px 0px 0px 10px;
  background-color: #c4c4c4;
`;

export const GifticonLogoDiv = styled.div`
  display: flex;
  padding: 8px 8px 0px 0px;
`;

export const GifiticonLogo = styled.img`
  width: 31px;
  height: 7px;
`;

export const ImageTitle = styled.div`
  position: absolute;
  top: 13px;
  left: 16px;
  font-size: 16px;
  font-weight: 700;
  color: #ff9a31;
`;

export const ItemPick = styled(FavoriteRoundedIcon)`
  && {
    color: #ffffff;
    font-size: 40px;
  }
`;
export const ItemInfoDiv = styled.div`
  height: 92px;
  margin: 10px 0;
  width: 300px;
`;
export const ItemInfoTopDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 0px 10px 0px;
`;

export const ItemInfoTxtDiv = styled.div`
  color: #676767;
  display: flex;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  text-align: center;
`;
export const ItemInfoBarDiv = styled.div`
  color: #676767;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  padding: 0 5px;
`;
export const ItemInfoUserDiv = styled.div`
  color: #2c2c2c;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
`;
export const ItemInfoMidDiv = styled.div`
  color: #676767;
  font-size: 14px;
  line-height: 16px;
  padding: 10px 0;
`;
export const ItemInfoBottomDiv = styled.div`
  padding: 5px 0;
  display: flex;
  justify-content: flex-start;
`;
export const ItemInfoLikeCount = styled(FavoriteBorderRoundedIcon)`
  && {
    font-size: 24px;
    color: #ffa230;
  }
`;
export const ItemInfoCountDiv = styled.div`
  color: #2c2c2c;
  font-size: 14px;
  line-height: 24px;
  padding: 0 5px;
`;
export const ItemDCRateDiv = styled.div`
  color: #ff6e30;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  padding-right: 5px;
`;
export const ItemPriceDiv = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
`;
export const ItemWonDiv = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;
export const ItemNoDCPriceDiv = styled.div`
  color: #aeaeae;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  padding: 2px 5px 0;
  text-decoration: line-through;
`;
