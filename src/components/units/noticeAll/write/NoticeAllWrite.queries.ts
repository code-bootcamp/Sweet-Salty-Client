import { gql } from "@apollo/client";

export const CREATE_NOTICE = gql`
  mutation createNotice($createNoticeInput: CreateNoticeInput!) {
    createNotice(createNoticeInput: $createNoticeInput) {
      noticeId
    }
  }
`;
