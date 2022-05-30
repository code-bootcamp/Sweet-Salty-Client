// 일반리뷰 Write 페이지
import { useRouter } from "next/router";
import CommonReviewWriteContainer from "../../../../src/components/units/board/commonReview/write/CommonReviewWrite.container";

export default function CommonReviewWritePage() {
  const router = useRouter();
  const checkPage = router.query.checkPage;
  const wishId = router.query?.wishId;
  const communityCheckPage = router.query.communityCheckPage;

  console.log("체크페이지", checkPage);
  console.log("위시아이디", wishId);
  console.log("커뮤니티체크페이지", communityCheckPage);

  return (
    <CommonReviewWriteContainer
      isEdit={false}
      checkPage={checkPage}
      wishId={wishId}
      communityCheckPage={communityCheckPage}
    />
  );
}
