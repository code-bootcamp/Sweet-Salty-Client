// mypage styled --- 김치훈

import styled from "@emotion/styled";


export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  padding: 100px 0;
  font-weight: 700;
  font-size: 40px;
`;
export const MypageBox = styled.div`
  padding: 40px 40px;
  width: 1120px;
  height: 186px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 10px 10px 10px #dbdbdb;
`;

export const UserLeftBox = styled.div`
  display: flex;
  align-items: center;
`

export const Photo = styled.div`
  width: 106px;
  height: 106px;
  border-radius: 50%;
  background: linear-gradient(#ff6e30, #ffa230);
  display: flex;
  justify-content: end;
  align-items: end;
`;
export const ImgBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #C9C9C9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const UserInfo = styled.div`
  padding: 0 40px;
`
export const UserName = styled.div`
  font-size: 20px;
  font-weight: 700;
`
export const Span = styled.span`
  color: #FF9A31;
`
export const UserSection = styled.div`
  padding-top: 20px;
  display: flex;
  font-size: 16px;
  font-weight: 700;
`
export const UserBox = styled.div`
  text-align: center;
`
export const VerticalLine = styled.div`
  margin: 0 15px;
  width: 1.5px;
  height: 50px;
  border-radius: 50px;
  background: #DADADA;
`
export const UserTitle = styled.div`
  font-size: 16px;
`
export const UserCount = styled.div`
  color: #FF9A31;
  font-size: 16px;
`
export const ButtonBox = styled.div`
  height: 106px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`
export const PointButton = styled.div`
  padding: 10px 15px;
  transition: 0.2s;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  border-radius: 50px;
  background: linear-gradient(#ff6e30, #ffa230);
  cursor: pointer;
  color: #fff;
  &:hover {
  }
`
export const Button = styled.div`
  padding: 10px 15px;
  transition: 0.2s;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  border-radius: 50px;
  background: #C9C9C9;
  cursor: pointer;
  color: #fff;
  &:hover {
  }
`



export const MypageMenuBox = styled.div`
  margin: 46px auto 0 auto;
  width: 1120px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const MypageMenu = styled.div`
  width: 299px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 20px 20px 0 0;
  font-weight: 700;
  font-size: 20px;
  color:${(props: any)=> 
    props.isReviewList || 
    props.isCommonReviewList ||
    props.isTesterReview ||
    props.isWishList 
    ? "#fff"
    : "#7b7b7b" 
  };
  background: ${(props: any)=> 
    props.isReviewList || 
    props.isCommonReviewList ||
    props.isTesterReview ||
    props.isWishList 
    ? "linear-gradient(#ff6e30, #ffa230)"
    : "#fff" 
  };
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: linear-gradient(#ff6e30, #ffa230);
    color: #fff;
  }
`;


export const MypageSectionBox = styled.div`
  padding: 25px;
  width: 1120px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 10px 10px 10px #dbdbdb;
`;





export const TopButtonBox = styled.div`
padding: 40px 0;
`;