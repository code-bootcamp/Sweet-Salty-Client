// 공지사항 Event Write queries --- 김치훈

import { gql } from "@apollo/client";

export const CREATE_NOTICE = gql`
  mutation createNotice($createNoticeInput: CreateNoticeInput!) {
    createNotice(createNoticeInput: $createNoticeInput) {
      noticeId
    }
  }
`;
