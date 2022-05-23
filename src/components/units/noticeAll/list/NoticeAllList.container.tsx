// 전체 공지사항 list Container === 김치훈

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import NoticeAllListPresenterPage from "./NoticeAllList.presenter";
import { FETCH_NOTICE_ALL, FETCH_NOTICE_COUNT } from "./NoticeAllList.queries";

export default function NoticeAllListContainerPage() {
  const router = useRouter();

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

  const Notice = ["/noticeAll"]
  const isNotice = Notice.includes(router.asPath)

  const {data, refetch} = useQuery(FETCH_NOTICE_ALL)
  const {data: NoticePagecount} = useQuery(FETCH_NOTICE_COUNT, {
    variables: {
      category: "ALL"
    }
  })

  const onClickMoveNoticeDetail = (event: any) => {
    router.push(`/noticeAll/${event.target.id}`)
  }

  return <NoticeAllListPresenterPage
  onClickNotice={onClickNotice}
  onClickNoticeEvent={onClickNoticeEvent}
  onClickNoticePromotion={onClickNoticePromotion}
  onClickNoticTaster={onClickNoticTaster}
  isNotice={isNotice}
  data={data}
  refetch={refetch}
  count={NoticePagecount?.fetchNoticeCount}
  onClickMoveNoticeDetail={onClickMoveNoticeDetail} />;
}
