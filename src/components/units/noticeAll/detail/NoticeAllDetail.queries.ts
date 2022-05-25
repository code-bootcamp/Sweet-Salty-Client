// 전체 공지사항 Detail Queries --- 김치훈

import { gql} from "@apollo/client";

export const FETCH_NOTICE = gql`
  query fetchNotice ($noticeId: String!){
    fetchNotice(noticeId: $noticeId) {
      noticeId
      noticeTitle
      noticeContents
      noticeHit
      noticeSubject
      createAt
      images{
        url
      }
    }
  }
`