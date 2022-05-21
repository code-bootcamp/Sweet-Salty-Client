import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { createRef } from "react";
export default function TestToast(props) {
  const editorRef = createRef();

  const onChange = (event) => {
    console.log(event);
  };

  return (
    <>
      <Editor onChange={onChange} />
    </>
  );
}
