// NoticeAll Writer queries ---김치훈

import { gql } from "@apollo/client";


export const CREATE_NOTICE = gql`
    mutation createNotice($createNoticeInput: CreateNoticeInput!){
        createNotice(createNoticeInput: $createNoticeInput){
            noticeId
            noticeTitle
            noticeContents
            noticeHit
            noticeSubject
            createAt
            subCategory {
                subCategoryId
            }
            images{
                url
            }
        }
}
`;

// noticeTitle
// noticeContents
// noticeCategory
// url