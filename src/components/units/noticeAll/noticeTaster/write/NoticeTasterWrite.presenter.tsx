// 공지사항 Taster Write presenter === 김치훈

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const Editor = dynamic(
  () => import("../../../../commons/minyoungtoasttest/editor"),
  {
    ssr: false,
  }
);

export default function NoticeTasterWritePresenterPage(props: any) {
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
          <Editor SetContents={props.SetContents} />
        </div>
        <button type="submit">등록하기</button>
      </form>
    </div>
  );
}
