import styled from "@emotion/styled";

export const BoxDiv = styled.div`
  width: 920px;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

export const CommentBox = styled.div`
  width: 860px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProfileWrapDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const WriterDiv = styled.div`
  cursor: default;
  color: #2c2c2c;
  font-size: 14px;
  font-weight: 700;
`;
export const CreatedAtDiv = styled.div`
  cursor: default;
  padding: 0 10px;
  line-height: 12px;
  color: #676767;
  font-size: 12px;
  font-weight: 500;
`;
export const DeleteBtn = styled.div`
  cursor: pointer;
  color: #ff6e30;
  font-size: 12px;
  font-weight: 500;
`;

export const ContentsDiv = styled.div`
  cursor: default;
  padding: 8px 0 10px 0;
  width: 860px;
  white-space: nowrap;
  color: #2c2c2c;
  font-size: 14px;
  font-weight: 500;
  white-space: normal;
`;
export const LikeBox = styled.div``;
export const LikeCount = styled.span`
  cursor: default;
  font-size: 14px;
  font-weight: 500;
`;
export const LikeIcon = styled.img`
  cursor: pointer;
  height: 19px;
  padding-right: 5px;
`;
