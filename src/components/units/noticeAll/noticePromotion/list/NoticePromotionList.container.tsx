import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import NoticePromitionListPresenterPage from "./NoticePromotionList.presenter";
import {
  FETCH_NOTICE_COUNT,
  FETCH_NOTICE_CATEGORY_PICK,
} from "./NoticePromotionList.queries";

export default function NoticePromitionListContainerPage() {
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

  const Notice = ["/noticeAll/noticePromotion"];
  const isNotice = Notice.includes(router.asPath);

  const { data, refetch } = useQuery(FETCH_NOTICE_CATEGORY_PICK, {
    variables: {
      category: "PROMOTION",
    },
  });
  const { data: NoticePagecount } = useQuery(FETCH_NOTICE_COUNT, {
    variables: {
      category: "PROMOTION",
    },
  });

  const onClickMoveNoticeDetail = (event: any) => {
    router.push(`/noticeAll/${event.target.id}`);
  };

  return (
    <NoticePromitionListPresenterPage
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
