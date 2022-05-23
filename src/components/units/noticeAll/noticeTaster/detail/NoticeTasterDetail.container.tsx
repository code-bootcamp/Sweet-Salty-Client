// 공지사항 Taster Detail Container --- 김치훈

import { useRouter } from "next/router";
import NoticeTasterDetailPresenter from "./NoticeTasterDetail.presenter";
import { useQuery} from "@apollo/client";
import { FETCH_NOTICE } from "./NoticeTasterDetail.queries";

export default function NoticeTasterDetailContainer(){
  const router = useRouter()

  const {data} = useQuery(FETCH_NOTICE, {
    variables: {noticeId: router.query.noticeId}
    }
  )

  const onClickNoticeList =()=>{
    router.back()
  }


  return <NoticeTasterDetailPresenter
    data={data}
    onClickNoticeList={onClickNoticeList}
  />
}