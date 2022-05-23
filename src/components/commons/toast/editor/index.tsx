import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useRef } from "react";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

import { gql, useMutation } from "@apollo/client";
// import { useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;

export default function WriteToast(props) {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const editorRef = useRef<Editor>(null);

  const onChangeContents = () => {
    const editorInstance = editorRef.current.getInstance();
    props.setBoardContents(editorInstance.getMarkdown());

    if (props.defaultValue)
      props.setBoardContents(editorInstance.getMarkdown());
  };

  const onUploadImage = async (blob, callback) => {
    const url = await uploadFile({
      variables: { file: blob },
    });
    const urldata = url?.data.uploadFile;
    const result = "https://storage.googleapis.com/" + urldata;
    callback(result, "");
  };

  return (
    <>
      <Editor
        hooks={{
          addImageBlobHook: onUploadImage,
        }}
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol"],
          ["table", "image", "link"],
        ]}
        initialEditType="wysiwyg"
        previewStyle="tab"
        plugins={[colorSyntax]}
        onChange={onChangeContents}
        initialValue="사진을 드래그&드롭 해보세요."
        ref={editorRef}
      />
    </>
  );
}
