import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "../../../../../src/components/units/board/commonReview/detail/CommonReviewDetail.queries";
import CommonReviewWriteContainer from "../../../../../src/components/units/board/commonReview/write/CommonReviewWrite.container";

export default function CommonReviewWritePage() {
  const router = useRouter();
  // const checkPage = router.query.checkPage;
  // const wishId = router.query?.wishId;
  // const communityCheckPage = router.query.communityCheckPage;
  const {data : updateData} = useQuery(FETCH_BOARD,{
    variables: {
      boardId: String(router.query.boardId)
    }
  })
  return (
    <CommonReviewWriteContainer
      isEdit={true}
      // checkPage={checkPage}
      // wishId={wishId}
      // communityCheckPage={communityCheckPage}
      updateData={updateData?.fetchBoard}
      updateDatas={updateData}
    />
  );
}
