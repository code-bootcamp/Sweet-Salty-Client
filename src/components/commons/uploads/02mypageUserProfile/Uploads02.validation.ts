// 마이페이지 이미지 업로드 file 용량체크 --- 김치훈

import { Modal } from "antd";

export function checkValidationImage(file: any) {
  if (!file?.size) {
    Modal.error({ content: "파일이 없습니다." });
    return false;
  }
  if (file.size > 5 * 1024 * 1024) {
    Modal.error({ content: "파일이 너무 큽니다.(제한 5MB" });
    return false;
  }
  if (!file.type.includes("png") && !file.type.includes("jpeg")) {
    Modal.error({
      content: "파일 확장자가 올바르지 않습니다. (png, jpeg만 가능)",
    });
    return false;
  }
  return file;
}
