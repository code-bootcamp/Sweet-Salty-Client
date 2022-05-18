import { useRouter } from "next/router";
import NoticeDetailPresenter from "./NoticeDetail.presenter";

export default function NoticeDetailContainer(){
  const router = useRouter()

  const onClickNoticeList =()=>{
    router.push("/notice/list")
  }


  return <NoticeDetailPresenter
  onClickNoticeList={onClickNoticeList}
  />
}