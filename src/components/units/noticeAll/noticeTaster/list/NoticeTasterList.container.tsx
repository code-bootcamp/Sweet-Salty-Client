import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import NoticeTasterListPresenterPage from "./NoticeTasterList.presenter";
import {
  FETCH_NOTICE_COUNT,
  FETCH_NOTICE_CATEGORY_PICK,
} from "./NoticeTasterList.queries";

export default function NoticeTasterListContainerPage() {
  const router = useRouter();

  const onClickNoticeAll = () => {
    router.push("/noticeAll");
  };

  const onClickNotice = () => {
    router.push("/noticeAll/notice");
  };
  const onClickNoticeEvent = () => {
    router.push("/noticeAll/noticeEvent");
  };
  const onClickNoticePromotion = () => {
    router.push("/noticeAll/noticePromotion");
  };
  const onClickNoticTaster = () => {
    router.push("/noticeAll/noticeTaster");
  };

  const Notice = ["/noticeAll/noticeTaster/"];
  const isNotice = Notice.includes(router.asPath);

  const { data, refetch } = useQuery(FETCH_NOTICE_CATEGORY_PICK, {
    variables: {
      category: "TASTING",
    },
  });
  const { data: NoticePagecount } = useQuery(FETCH_NOTICE_COUNT, {
    variables: {
      category: "TASTING",
    },
  });

  const onClickMoveNoticeDetail = (event: any) => {
    router.push(`/noticeAll/${event.target.id}`);
  };

  return (
    <NoticeTasterListPresenterPage
      onClickNoticeAll={onClickNoticeAll}
      onClickNotice={onClickNotice}
      onClickNoticeEvent={onClickNoticeEvent}
      onClickNoticePromotion={onClickNoticePromotion}
      onClickNoticTaster={onClickNoticTaster}
      isNotice={isNotice}
      data={data}
      refetch={refetch}
      count={NoticePagecount?.fetchNoticeCount}
      onClickMoveNoticeDetail={onClickMoveNoticeDetail}
    />
  );
}
