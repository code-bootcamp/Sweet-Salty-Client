// 일반리뷰 Write 페이지
import { useRouter } from "next/router";
import CommonReviewWriteContainer from "../../../../src/components/units/board/commonReview/write/CommonReviewWrite.container";

export default function CommonReviewWritePage() {
  const router = useRouter();
  const checkPage = router.query.checkPage;
  const wishId = router.query?.wishId;
  console.log("일반리뷰wirte", checkPage);

  return (
    <CommonReviewWriteContainer
      isEdit={false}
      checkPage={checkPage}
      wishId={wishId}
    />
  );
}
