// 전체 공지사항 list queries --- 김치훈

import { gql } from "@apollo/client";


export const FETCH_NOTICE_ALL = gql`
  query fetchNoticeAll ($page: Int){
    fetchNoticeAll(page: $page) {
      noticeId
      noticeTitle
      noticeContents
      createAt
      noticeHit
      subCategory{
        subCategoryName
      }
    }
  }
`
export const FETCH_NOTICE_COUNT = gql`
  query fetchNoticeCount ($category: NOTICE_SUB_CATEGORY_NAME_ENUM!){
    fetchNoticeCount(category: $category)
  }
`