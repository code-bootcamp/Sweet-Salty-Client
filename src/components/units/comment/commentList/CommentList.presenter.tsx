import InfiniteScroll from "react-infinite-scroller";
import CommentItemPage from "./CommentList.item";
import { v4 as uuidv4 } from "uuid";
import * as S from "./CommentList.styled";

export default function CommentListPresenterPage(props) {
  const dataForMap = props.fetchCommentsData
  console.log(dataForMap,"ss")
  return (
    <div>
      <S.TestDiv>이곳은 댓글리스트 페이지입니다.</S.TestDiv>
      <div style={{ height: "auto", overflow: "auto" }}>
            <InfiniteScroll
              pageStart={0}
              loadMore={props.loadMore}
              hasMore={false}
              useWindow={false}
            >
              <div>
                {dataForMap?.map((el:any)=>
                <CommentItemPage
                el={el}
                key={uuidv4()}
                id={el.commentId}
                />
                )}
              </div>
            </InfiniteScroll>
            </div>
    </div>
  );
}

