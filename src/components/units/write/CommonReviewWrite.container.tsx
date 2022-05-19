// 일반리뷰 등록 Container --- 김치훈

import { useRouter } from "next/router";
import { useState } from "react";
import CommonReviewWritePresenter from "./CommonReviewWrite.presenter";

export default function CommonReviewWriteContainer(){
  const router = useRouter()

  const onClickCancel =() =>{
    router.push("/reviews/list")
  }



  // 이미지
  const [fileUrls, setFileUrls] = useState(["", "", "", ""]);

  const onChangeFileUrls = (fileUrl:any, index:any) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  return (
  <CommonReviewWritePresenter
    fileUrls={fileUrls}
    onClickCancel={onClickCancel}
    onChangeFileUrls={onChangeFileUrls}
  />
  )
}