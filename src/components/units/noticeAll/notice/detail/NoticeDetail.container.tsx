// 공지사항 Detail Container --- 김치훈

import { useRouter } from "next/router";
import NoticeDetailPresenter from "./NoticeDetail.presenter";
import { useQuery} from "@apollo/client";
import { FETCH_NOTICE } from "./NoticeDetail.queries";

export default function NoticeDetailContainer(){
  const router = useRouter()

  const {data} = useQuery(FETCH_NOTICE, {
    variables: {noticeId: router.query.noticeId}
    }
  )

  // 목록으로 버튼
  const onClickNoticeList =()=>{
    router.back()
  }


  return <NoticeDetailPresenter
    data={data}
    onClickNoticeList={onClickNoticeList}
  />
}