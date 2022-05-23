// 공지사항 write Container --- 김치훈

import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import NoticeWritePresenterPage from "./NoticeWrite.presenter";
import { CREATE_NOTICE } from "./NoticeWrite.queries";

export default function NoticeWriteContainerPage() {

  const { register, handleSubmit, setValue, trigger, getValues } = useForm({
    mode: "onChange",
  });

  const [contents, SetContents] = useState("");

  // 에디터
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const [createNotice] = useMutation(CREATE_NOTICE);

  const onClickNoticeWrite = async (data: any) => {
    try {
      await createNotice({
        variables: {
          createNoticeInput: {
            noticeTitle: data.title,
            noticeContents: contents,
            noticeCategory: data.category,
            url: ["굿바이"],
          },
        },
      });
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <NoticeWritePresenterPage
      onClickNoticeWrite={onClickNoticeWrite}
      handleSubmit={handleSubmit}
      register={register}
      getValues={getValues}
      onChangeContents={onChangeContents}
      SetContents={SetContents}
    />
  );
}
