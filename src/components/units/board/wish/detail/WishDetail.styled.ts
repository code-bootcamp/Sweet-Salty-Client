// 가주세요! Detail styles -김치훈

import styled from "@emotion/styled";
import { RightOutlined,EditOutlined } from "@ant-design/icons"


export const Wrapper = styled.div`
  padding-bottom: 100px;
  width: 100%;
  background: radial-gradient(#ff6e30, #ff9a31);
  display: flex;
  flex-direction: column;
  align-items: center;
`
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
export const ReviewWriteBox = styled.div`
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
  align-items: center;
`;
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const Category = styled.span`
  margin-right: 10px;
  padding: 5px 6px;
  font-size: 10px;
  font-weight: 700;
  background: #FF9A31;
  color: #fff;
  border-radius: 5px;
`;
export const BoardTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
export const HeaderRight = styled.div`
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

export const SectionBox = styled.div`
  margin: 80px auto 0px auto;
  width: 920px;
  height: 600px;
  border: 2px solid #DADADA;
  border-radius: 20px;
`

export const KakaoMap = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
`
export const KakaoMapTitle = styled.div`
  padding-bottom: 20px;
  font-size: 16px;
  font-weight: 700;
`
export const KakaoMapMap = styled.div`
  width: 920px;
  height: 430px;
  border-radius: 20px;
  background: #dbdbdb;
`


export const ReviewHr = styled.div`
  margin: 40px 0;
  width: 920px;
  height: 1px;
  background: #dadada;
`;


export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LeftButton = styled.div`
  display: flex;
`;
export const WriteIcon = styled(EditOutlined)`
font-size: 16px;
margin-right: 5px;
`;
export const Button = styled.div`
  margin-right: 7px;
  padding: 7px 40px;
  font-size: 16px;
  font-weight: 700;
  border: 2px solid #DADADA;
  border-radius: 10px;
  cursor: pointer;
  transition: .2s;
  &:hover {
    border: 2px solid #FF9A31;
    color: #FF9A31;
  }
`;
export const RightButton = styled.div``;
export const WishReviewWriteBox = styled.div`
  width: 180px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#ff6e30, #ffa230);
`;
export const WishReviewWriteButton = styled.div`
  width: 172px;
  height: 44px;
  line-height: 44px;
  border-radius: 50px;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  background: #fff;
  color: #7b7b7b;
  transition: 0.2s;
  &:hover {
    background: linear-gradient(#ff6e30, #ffa230);
    color: #fff;
  }
`;


export const CommentBox = styled.div`
  padding-bottom: 40px;
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
