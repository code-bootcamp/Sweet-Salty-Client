// 여기는 공지사항 list === 김치훈

import { useRouter } from "next/router";
import NoticeListPresenterPage from "./NoticeList.presenter";

export default function NoticeListContainerPage() {
  const router = useRouter();
  const onClickDetail = () => {
    router.push("/notice/write");
  };

  return <NoticeListPresenterPage onClickDetail={onClickDetail} />;
}
