// 여기는 공지사항 list === 김치훈

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import NoticeListPresenterPage from "./NoticeList.presenter";
import { FETCH_NOTICE_COUNT,FETCH_NOTICE_CATEGORY_PICK } from "./NoticeList.queries";



export default function NoticeListContainerPage() {
  const router = useRouter();
  
  const {data, refetch} = useQuery(FETCH_NOTICE_CATEGORY_PICK, {
    variables: {
      category: "NOTICE"
    }
  })
  const {data: NoticePagecount} = useQuery(FETCH_NOTICE_COUNT, {
    variables: {
      category: "NOTICE"
    }
  })

  const onClickNoticeAll = ()=>{
    router.push("/noticeAll")
  }

  const onClickNotice = ()=>{
    router.push("/noticeAll/notice")
  }
  const onClickNoticeEvent = ()=>{
    router.push("/noticeAll/noticeEvent")
  }
  const onClickNoticePromotion = ()=>{
    router.push("/noticeAll/noticePromotion")
  }
  const onClickNoticTaster = ()=>{
    router.push("/noticeAll/noticeTaster")
  }

  const Notice = ["/noticeAll/notice"]
  const isNotice = Notice.includes(router.asPath)

  const onClickMoveNoticeDetail = (event: any) => {
    router.push(`/noticeAll/${event.target.id}`)
  }

  return <NoticeListPresenterPage
  data={data}
  count={NoticePagecount?.fetchNoticeCount}
  onClickNoticeAll={onClickNoticeAll}
  onClickNotice={onClickNotice}
  onClickNoticeEvent={onClickNoticeEvent}
  onClickNoticePromotion={onClickNoticePromotion}
  onClickNoticTaster={onClickNoticTaster}
  isNotice={isNotice}
  refetch={refetch}
  onClickMoveNoticeDetail={onClickMoveNoticeDetail} />;
}
