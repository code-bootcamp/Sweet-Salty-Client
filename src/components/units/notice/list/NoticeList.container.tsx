// 여기는 공지사항 list === 김치훈

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import NoticeListPresenterPage from "./NoticeList.presenter";

const FETCH_NOTICE_ALL = gql`
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
const FETCH_NOTICE_COUNT = gql`
  query fetchNoticeCount ($category: NOTICE_SUB_CATEGORY_NAME_ENUM!){
    fetchNoticeCount(category: $category)
  }
`


export default function NoticeListContainerPage() {
  const router = useRouter();

  const {data} = useQuery(FETCH_NOTICE_ALL)
  const {data: count} = useQuery(FETCH_NOTICE_COUNT, {
    variables: {
      category: "ALL"
    }
  })

  const onClickMoveNoticeDetail = (event: any) => {
    router.push(`/notice/${event.target.id}`)
  }

  return <NoticeListPresenterPage
  data={data}
  count={count}
  onClickMoveNoticeDetail={onClickMoveNoticeDetail} />;
}
