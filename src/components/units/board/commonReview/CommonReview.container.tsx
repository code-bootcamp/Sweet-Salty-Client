// 일반리뷰페이지 container === 김치훈

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommonReviewPresenterPage from "./CommonReview.presenter";
import { FETCH_BOARDS } from "./CommonReview.queries";

export default function CommonReviewContainerPage() {
  const { data: fetchBoardsData, fetchMore } = useQuery(FETCH_BOARDS);
  const router = useRouter();


