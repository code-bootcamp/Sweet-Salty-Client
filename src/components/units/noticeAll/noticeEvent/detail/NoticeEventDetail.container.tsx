// 공지사항 Event Detail Container --- 김치훈

import { useRouter } from "next/router";
import NoticeEventDetailPresenter from "./NoticeEventDetail.presenter";
import { useQuery} from "@apollo/client";
import { FETCH_NOTICE } from "./NoticeEventDetail.queries";

export default function NoticeEventDetailContainer(){
  const router = useRouter()

  const {data} = useQuery(FETCH_NOTICE, {
    variables: {noticeId: router.query.noticeId}
    }
  )

  // 목록으로 버튼
  const onClickNoticeList =()=>{
    router.back()
  }


  return <NoticeEventDetailPresenter
    data={data}
    onClickNoticeList={onClickNoticeList}
  />
}