// 여기는 공지사항 list === 김치훈

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import NoticeListPresenterPage from "./NoticeList.presenter";

const FETCH_NOTICE_ALL = gql`
  query fetchNoticeAll ($page: Int!){
    fetchNoticeAll(page: $page) {
      noticeId
      noticeTitle
      noticeContents
      noticeHit
    }
  }
`


export default function NoticeListContainerPage() {
  const {data} = useQuery(FETCH_NOTICE_ALL)
  console.log(data)


  const router = useRouter();
  const onClickDetail = () => {
    router.push("/notice/detail");
  };

  return <NoticeListPresenterPage onClickDetail={onClickDetail} />;
}
