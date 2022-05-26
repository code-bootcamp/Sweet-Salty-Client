// 마이페이지 이미지 업로드 Container --- 김치훈

import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { checkValidationImage } from "./Uploads02.validation";
import Uploads02UI from "./Uploads02.presenter";
import { IUploads02Props } from "./Uploads02.types";
import { FETCH_USER_LOGGED_IN, UPDATE_IMAGE, UPLOAD_FILE } from "./Uploads02.queries";
import { Modal } from "antd";

export default function Uploads02(props: IUploads02Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [updateImage] = useMutation(UPDATE_IMAGE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;
    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile, props.index);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickFileUpdate =async () =>{
    try {
      await updateImage({
          variables: {
            image: `${props.fileUrl}`
          },
          refetchQueries: [
            {
              query: FETCH_USER_LOGGED_IN,
            }
          ]
        })
      } catch (error: any) {
        Modal.error({ content: error.message });
      }
  }


  return (
    <Uploads02UI
      data={props.data}
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      onClickFileUpdate={onClickFileUpdate}
    />
  );
}
