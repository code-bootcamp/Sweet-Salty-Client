import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import NoticeWritePresenterPage from "./NoticeWrite.presenter";
import { CREATE_NOTICE } from "./NoticeWrite.queries";

export default function NoticeWriteContainerPage() {
  const router = useRouter();

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
      const result = await createNotice({
        variables: {
          createNoticeInput: {
            noticeTitle: data.title,
            noticeContents: contents,
            noticeCategory: data.category,
            url: ["굿바이"],
          },
        },
      });
    } catch (error) {
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
