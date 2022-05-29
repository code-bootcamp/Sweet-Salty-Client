import styled from "@emotion/styled";
import { EditOutlined } from "@ant-design/icons";

export const ReviewWriteBox = styled.div`
  width: 180px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#ff6e30, #ffa230);
`;

export const ReviewWrite = styled.div`
  width: 180px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;

  transition: 0.2s;
  background: linear-gradient(#ff6e30, #ffa230);
  color: #fff;
  &:hover {
    background: linear-gradient(#e8662d, #ef982e);
  }
`;

export const WriteIcon = styled(EditOutlined)`
  font-size: 16px;
  margin-right: 5px;
`;

export const WriteText = styled.div`
  font-size: 16px;
  font-weight: 700;
`;
