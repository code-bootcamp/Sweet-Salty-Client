import InfiniteScroll from "react-infinite-scroller";
import CommentItemPage from "./CommentList.item";
import { v4 as uuidv4 } from "uuid";

export default function CommentListPresenterPage(props: any) {
  const dataForMap = props.fetchCommentsData;
  return (
    <div>
      <div style={{ height: "auto", overflow: "auto" }}>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.loadMore}
          hasMore={false}
          useWindow={false}
        >
          <div>
            {dataForMap?.map((el: any) => (
              <CommentItemPage el={el} key={uuidv4()} id={el.commentId} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}
