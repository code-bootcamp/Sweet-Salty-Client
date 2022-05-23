// 공지사항 write queries --- 김치훈

import { gql } from "@apollo/client";

export const CREATE_NOTICE = gql`
  mutation createNotice($createNoticeInput: CreateNoticeInput!) {
    createNotice(createNoticeInput: $createNoticeInput) {
      noticeId
    }
  }
`;
