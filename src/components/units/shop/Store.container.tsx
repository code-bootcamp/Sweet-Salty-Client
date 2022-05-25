// 여기는 스토어페이지입니다.

import { useQuery } from "@apollo/client";
import { useState } from "react";
import ShopPresenterPage from "./Store.presenter";
import { FETCH_BOARD_WITH_TAGS } from "./Store.queries";

export default function ShopContainerPage() {
  const [commonReviewSearch, setCommonReviewSearch] = useState([]);

  const {
    data: fetchBoardWithTagData,
    fetchMore: TagFetchMore,
    refetch: TagRefetch,
  } = useQuery(FETCH_BOARD_WITH_TAGS, {
    variables: {
      tags: commonReviewSearch,
    },
  });

  return (
    <ShopPresenterPage
      commonReviewSearch={commonReviewSearch}
      setCommonReviewSearch={setCommonReviewSearch}
    />
  );
}
