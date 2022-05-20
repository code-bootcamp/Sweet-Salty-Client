// 일반리뷰 상세보기 style  - 김치훈

import styled from "@emotion/styled";
import { RightOutlined } from "@ant-design/icons"

export const Wrapper = styled.div`
  padding: 40px 0 0 0;
  width: 100%;
  background: radial-gradient(#ff6e30, #ff9a31);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  padding: 100px 0;
  font-size: 40px; 
  font-weight: 700;
  display: flex;
  align-items: center;
  color: #fff;
`
export const RightOutline = styled(RightOutlined)`
  padding: 0 15px;
  color: #fff;
`
export const ReviewBox = styled.div`
  padding: 40px;
  width: 1000px;
  background: #fff;
  border-radius: 20px;
`;
export const Header = styled.div`
  margin-bottom: 64px;
`;
export const HeaderBox = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;
export const BoardTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
export const RightBox = styled.div`
  display: flex;
  align-items: center;
`;

export const UserNameBox = styled.span`
  font-size: 14px;
`;
export const P = styled.span`
  margin: 0 5px;
  font-size: 14px;
`;
export const UserName = styled.span`
  font-size: 14px;
`;
export const CreateAt = styled.span`
  font-size: 14px;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SectionLeft = styled.div``;
export const ShopNameBox = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 700;
  color: #2c2c2c;
`;
export const ShopName = styled.span`
  margin-right: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #676767;
`;
export const MenuNameBox = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 700;
  color: #2c2c2c;
`;
export const MenuName = styled.span`
  margin-right: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #676767;
`;
export const ProsBox = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 700;
  color: #2c2c2c;
`;
export const Pros = styled.span`
  margin-right: 24px;
  font-size: 16px;
  font-weight: 700;
  color: #ff9a31;
`;
export const ConsBox = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #2c2c2c;
`;
export const Cons = styled.span`
  margin-right: 24px;
  font-size: 16px;
  font-weight: 700;
  color: #ff6e30;
`;

export const SectionRight = styled.div`
  width: 532px;
`;
export const DetailedReview = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 16px;
  color: #676767;
`;
export const DetailedReviewText = styled.div`
  font-size: 16px;
  color: #676767;
`;

export const ImageBox = styled.div`
  position: relative;
  margin: 50px 0 20px 0;
  border-radius: 20px;
  width: 920px;
  height: 250px;
  background: #dbdbdb;
`;
export const AddBt = styled.div`
  font-size: 20px;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background: #fff;
    border-radius: 50%;
  }
`;

export const Tags = styled.div``;
export const Tag = styled.span`
  margin: 0 10px 0 0;
  padding: 5px 19px;
  border-radius: 50px;
  border: 2px solid #ffa230;
  color: #ffa230;
  font-size: 14px;
  font-weight: 700;
  cursor: default;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
  padding: 10px 42px;
  margin: 40px 20px;
  font-size: 16px;
  color: #676767;
  border-radius: 15px;
  border: 2px solid #dadada;
  font-weight: 700;
  background: transparent;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border: 2px solid #ff9a31;
    color: #ff9a31;
  }
`;
export const ReviewHr = styled.div`
  width: 920px;
  height: 1px;
  background: #dadada;
`;

export const CommentBox = styled.div`
  padding: 40px 0;
`;
export const CommentTitle = styled.div`
  font-weight: 700;
`;
export const CommentWrite = styled.div`
  padding: 40px 0;
  display: flex;
  justify-content: end;
`;
export const CommentInput = styled.input`
  padding: 12px 16px;
  font-size: 14px;
  color: #2c2c2c;
  border: 2px solid #dadada;
  border-radius: 50px;
  font-weight: 700;
  outline: none;
`;
export const CommentWriteBt = styled.button`
  outline: none;
  background: transparent;
  border: none;
  color: #ff9a31;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
`;
export const WriteUserPhoto = styled.div`
  margin-right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0px 0px 3px #999;
  background: #ff9a31;
`;
export const CommentList = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  margin: 10px 0;
`;
export const CommentUserPhoto = styled.div`
  margin-right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0px 0px 3px #999;
  background: #dbdbdb;
`;

export const Comment = styled.div`
  padding: 12px 16px;
  font-size: 14px;
  color: #2c2c2c;
  border: 2px solid #dadada;
  border-radius: 50px;
  font-weight: 700;
`;
export const CommentCreatAt = styled.span`
  margin-left: 10px;
  font-size: 12px;
  color: #676767;
`;

export const TopButtonBox = styled.div`
  padding: 50px 0;
`
