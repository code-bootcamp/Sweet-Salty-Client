import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import { Viewer } from "@toast-ui/react-editor";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;
export default function PostView(props: any) {
  return (
    <Wrapper>
      {props.contents && <Viewer initialValue={props.contents} />}
    </Wrapper>
  );
}
