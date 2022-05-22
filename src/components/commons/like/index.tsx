import styled from "@emotion/styled";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useState } from "react";

const LikeCount = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: default;
`;
const LikeIcon = styled(HeartOutlined)`
  margin-right: 2px;
  width: 24px;
  cursor: pointer;
  color: #ffa230;
  &:active {
    color: #ffa230;
  }
`;
const LikeIconFill = styled(HeartFilled)`
  margin-right: 2px;
  width: 24px;
  cursor: pointer;
  color: #ffa230;
  &:active {
    color: #ffa230;
  }
`;

export default function LikeButton() {
  const [isLike, setIsLike] = useState(true);

  const onClickLike = () => {
    setIsLike((prev: any) => !prev);
  };

  return (
    <LikeCount>
      {isLike ? (
        <LikeIcon onClick={onClickLike} />
      ) : (
        <LikeIconFill onClick={onClickLike} />
      )}
      
    </LikeCount>
  );
}
