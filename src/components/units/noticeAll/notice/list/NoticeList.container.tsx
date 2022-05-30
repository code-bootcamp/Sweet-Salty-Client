// 여기는 공지사항 list === 김치훈

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import NoticeListPresenterPage from "./NoticeList.presenter";
import {
  FETCH_NOTICE_COUNT,
  FETCH_NOTICE_CATEGORY_PICK,
} from "./NoticeList.queries";

export default function NoticeListContainerPage() {
  const [, setKeyword] = useState("");

  const router = useRouter();

  const { data, refetch } = useQuery(FETCH_NOTICE_CATEGORY_PICK, {
    variables: {
      category: "NOTICE",
    },
  });

  const { data: NoticePagecount, refetch: refetchNoticeCount } = useQuery(
    FETCH_NOTICE_COUNT,
    {
      variables: {
        category: "NOTICE",
      },
    }
  );

  function onChangeKeyword(value: string) {
    setKeyword(value);
  }

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

  const Notice = ["/noticeAll/notice"];
  const isNotice = Notice.includes(router.asPath);

  const onClickMoveNoticeDetail = (event: any) => {
    router.push(`/noticeAll/${event.target.id}`);
  };

  return (
    <NoticeListPresenterPage
      data={data}
      refetch={refetch}
      onChangeKeyword={onChangeKeyword}
      count={NoticePagecount?.fetchNoticeCount}
      refetchNoticeCount={refetchNoticeCount}
      onClickNoticeAll={onClickNoticeAll}
      onClickNotice={onClickNotice}
      onClickNoticeEvent={onClickNoticeEvent}
      onClickNoticePromotion={onClickNoticePromotion}
      onClickNoticTaster={onClickNoticTaster}
      isNotice={isNotice}
      onClickMoveNoticeDetail={onClickMoveNoticeDetail}
    />
  );
}
