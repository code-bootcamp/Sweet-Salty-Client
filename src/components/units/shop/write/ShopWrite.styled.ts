import styled from "@emotion/styled";
import WriteReviewInput from "../../board/commonReview/write/CommonReviewWrite.input";

export const InputBox = styled(WriteReviewInput)`
  padding: 12px 16px;
  width: 445px;
  height: 46px;
  border: 2px solid #dadada;
  border-radius: 10px;
  color: #676767;
  font-size: 14px;
  font-weight: 700;
  outline-color: #676767;
  ::placeholder {
    color: #dbdbdb;
  }
`;
