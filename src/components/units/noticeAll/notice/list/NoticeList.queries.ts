import { gql } from "@apollo/client";

export const FETCH_NOTICE_COUNT = gql`
  query fetchNoticeCount($category: NOTICE_SUB_CATEGORY_NAME_ENUM!) {
    fetchNoticeCount(category: $category)
  }
`;
export const FETCH_NOTICE_CATEGORY_PICK = gql`
  query fetchNoticeCategoryPick(
    $page: Int
    $category: NOTICE_SUB_CATEGORY_NAME_ENUM!
  ) {
    fetchNoticeCategoryPick(page: $page, category: $category) {
      noticeId
      noticeTitle
      noticeContents
      noticeHit
      noticeSubject
      createAt
      subCategory {
        subCategoryName
      }
    }
  }
`;
