// 가주세요! Detail styles -김치훈

import styled from "@emotion/styled";
import { RightOutlined, EditOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100%;
  background: radial-gradient(#ff6e30, #ff9a31);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  padding: 100px 0;
  font-size: 40px;
  font-weight: 700;
  display: flex;
  align-items: center;
  color: #fff;
`;
export const RightOutline = styled(RightOutlined)`
  padding: 0 15px;
  color: #fff;
`;
export const ReviewWriteBox = styled.div`
  padding: 40px;
  width: 1000px;
  background: #fff;
  border-radius: 20px;
`;

export const Header = styled.div`
  padding: 0px 0px 20px 0px;
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
  background: #ff9a31;
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

export const CountBox = styled.div`
  display: flex;
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

// export const Section = styled.div`
//   display: flex;
//   justify-content: center;
//   border: 2px solid #dadada;
//   border-radius: 20px;
//   padding: 60px 194px;
// `;

export const SectionBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 60px 195px;
  width: 920px;
  height: 600px;
  border: 2px solid #dadada;
  border-radius: 20px;
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
export const KakaoMap = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
`;
export const KakaoMapTitle = styled.div`
  padding-bottom: 20px;
  font-size: 16px;
  font-weight: 700;
`;
export const KakaoMapMap = styled.div`
  width: 920px;
  height: 430px;
  border-radius: 20px;
  background: #dbdbdb;
`;

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
  padding: 7px 40px;
  font-size: 16px;
  font-weight: 700;
  border: 2px solid #dadada;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border: 2px solid #ff9a31;
    color: #ff9a31;
  }
`;
export const EditButton = styled.div`
  margin: 0px 10px;
  padding: 7px 40px;
  font-size: 16px;
  font-weight: 700;
  border: 2px solid #dadada;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border: 2px solid #ff9a31;
    color: #ff9a31;
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

export const TopButtonBox = styled.div`
  padding: 50px 0;
`;
