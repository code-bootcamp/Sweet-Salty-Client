// 전체 공지사항 Detail Container --- 김치훈

import { useRouter } from "next/router";
import NoticeAllDetailPresenter from "./NoticeAllDetail.presenter";
import { useQuery} from "@apollo/client";
import { FETCH_NOTICE } from "./NoticeAllDetail.queries";

export default function NoticeAllDetailContainer(){
  const router = useRouter()

  const {data} = useQuery(FETCH_NOTICE, {
    variables: {noticeId: router.query.noticeId}
    }
  )

  // 목록으로 버튼
  const onClickNoticeList =()=>{
    router.back()
  }


  return <NoticeAllDetailPresenter
    data={data}
    onClickNoticeList={onClickNoticeList}
  />
}