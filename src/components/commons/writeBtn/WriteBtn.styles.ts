import styled from "@emotion/styled";
import { EditOutlined } from "@ant-design/icons";

export const ReviewWrite = styled.div`
  padding: 13px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;

  background: linear-gradient(#ff6e30, #ffa230);
  color: #fff;
  transition: .2s;
  &:hover {
    background: linear-gradient(#e8662d, #ef982e);
  }
`;

export const WriteIcon = styled(EditOutlined)`
  font-size: 16px;
  margin-right: 6px;
`;

export const WriteText = styled.div`
  font-size: 16px;
  font-weight: 700;
`;
