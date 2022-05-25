// searchbar queries === 김치훈

import { gql } from "@apollo/client";

export const FETCH_NOTICE_SEARCH_TITLE = gql`
  query fetchNoticeSearchTitle ($title: String!){
    fetchNoticeSearchTitle(title: $title)
  }
`;
export const FETCH_NOTICE_SEARCH_CONTENTS = gql`
  query fetchNoticeSearchContents ($contents: String!){
    fetchNoticeSearchContents(contents: $contents)
  }
`;


// fetchNoticeSearchTitle
// fetchNoticeSearchContents