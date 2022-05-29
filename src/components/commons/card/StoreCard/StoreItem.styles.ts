import styled from "@emotion/styled";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";

// 스토어 아이템 부분
// 여러번 사용
export const ItemInfoWrapDiv = styled.div`
  display: flex;
`;
// 여러번 사용 끝
export const ItemMainDiv = styled.div`
  cursor: pointer;
  height: 342px;
  width: 300px;
  margin: 0px 0px 30px 0px;
`;
export const ItemImg = styled.div`
  background-color: #dcdcdc;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  height: 250px;
  justify-content: flex-start;
  padding: 15px;
  width: 300px;
`;

export const ImageTitle = styled.div`
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
// pick 여부 따라서 color  #FF6E30
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
// 스토어 아이템 끝
