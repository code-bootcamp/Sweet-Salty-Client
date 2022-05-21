import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
// const Editor = dynamic(
//   () => import("../../../../components/commons/toast/editor"),
//   {
//     ssr: false,
//   }
// );

const Editor = dynamic(
  () => import("../../../../components/commons/minyoungtoasttest/editor"),
  {
    ssr: false,
  }
);

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
export default function NoticeWritePresenterPage(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit(props.onClickNoticeWrite)}>
        <div>
          <div>제목</div>
          <input type="text" {...props.register("title")} />
        </div>
        <div>
          <div>카테고리</div>
          <input type="text" {...props.register("category")} />
        </div>
        <div>
          {/* <ReactQuill
            onChange={props.onChangeContents}
            value={props.getValues("contents") || ""}
          /> */}

          <Editor SetAaa={props.SetAaa} />
        </div>
        <button type="submit">등록하기</button>
      </form>
    </div>
  );
}
