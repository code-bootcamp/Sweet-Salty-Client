// 일반리뷰 등록 Container --- 김치훈

import { useState } from "react";
import CommonReviewWritePresenter from "./CommonReviewWrite.presenter";

export default function CommonReviewWriteContainer(){



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
    onChangeFileUrls={onChangeFileUrls}
  />
  )
}