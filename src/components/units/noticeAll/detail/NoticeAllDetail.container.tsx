import { useRouter } from "next/router";
import NoticeAllDetailPresenter from "./NoticeAllDetail.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_NOTICE } from "./NoticeAllDetail.queries";

export default function NoticeAllDetailContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_NOTICE, {
    variables: { noticeId: router.query.noticeId },
  });

  const onClickNoticeList = () => {
    router.back();
  };

  return (
    <NoticeAllDetailPresenter
      data={data}
      onClickNoticeList={onClickNoticeList}
    />
  );
}
