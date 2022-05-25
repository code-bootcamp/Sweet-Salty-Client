// NoticeAll Writer container ---김치훈

import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import NoticeWritePresenter from "./NoticeAllWrite.presenter";
import { CREATE_NOTICE } from "./NoticeAllWrite.queries";


export default function NoticeAllWriteContainerPage(props: any) {
  const router = useRouter();
  const [createNotice] = useMutation(CREATE_NOTICE);
  const [subCategoryName, setSubCategoryName] = useState("");


  // 취소하기 버튼
  const onClickCancel = () => {
    router.back();
  };

  // 상단 카테고리 데이터 테이블
  const [categoryData, setCategoryData] = useState([
    {key: "0", value: "NOTICE", name: "단짠 공지", checked: false, index: 0 }, 
    {key: "1", value: "EVENT", name: "이벤트", checked: false, index: 1},
    {key: "2", value: "PROMOTION", name: "프로모션", checked: false, index: 2},
    {key: "3", value: "TASTING", name: "시식단 모집", checked: false, index: 3},
  ]);

  // 카테고리 태그 체크되었는지 확인
  const onChangeCheckCategory = (el: any) => (event: any) => {
    const select = categoryData.map((el, idx) => {
      return { ...el, checked: idx === Number(event.target.id) };
    });
    setCategoryData(select);
    setSubCategoryName(el.value);
  };

  const {register, handleSubmit} = useForm({
    mode: "onChange",
  });
  
  // 이미지 업로드
  const [fileUrls, setFileUrls] = useState([""]);

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };


  
  const onClickSubmit = async (data: any) => {
    try {
      const result = await createNotice({
        variables: {
          createNoticeInput: {
            noticeTitle: data.noticeTitle,
            noticeContents: data.noticeContents,
            noticeCategory: subCategoryName,
            url: fileUrls,
          },
        },
      });
      router.push(`./${result.data.createNotice.noticeId}`)
    } catch (error: any) {
      alert(error.message);
    }
};
  return (
    <NoticeWritePresenter
    register={register}
    onClickSubmit={onClickSubmit}

    fileUrls={fileUrls}
    onChangeFileUrls={onChangeFileUrls}
    
    handleSubmit={handleSubmit}
    categoryData={categoryData}
    setCategoryData={setCategoryData}
    onChangeCheckCategory={onChangeCheckCategory}
    onClickCancel={onClickCancel}
    />
  );
}
