// 공지사항 Promotion Detail Container --- 김치훈

import { useRouter } from "next/router";
import NoticePromotionDetailPresenter from "./NoticePromotionDetail.presenter";
import { useQuery} from "@apollo/client";
import { FETCH_NOTICE } from "./NoticePromotionDetail.queries";

export default function NoticePromotionDetailContainer(){
  const router = useRouter()

  const {data} = useQuery(FETCH_NOTICE, {
    variables: {noticeId: router.query.noticeId}
    }
  )

  const onClickNoticeList =()=>{
    router.back()
  }


  return <NoticePromotionDetailPresenter
    data={data}
    onClickNoticeList={onClickNoticeList}
  />
}