import { useRouter } from "next/router";
import WriteBtnPresenterPage from "./WriteBtn.presenter";

export default function WriteBtnContainerPage(props: any) {
  const router = useRouter();

  const onClickWrite = () => {
    router.push({
      pathname: "/reviews/commonReview/write",
      query: {
        checkPage: props.checkPage,
        wishId: props.wishId,
        communityCheckPage: props.communityCheckPage,
      },
    });
  };
  return (
    <WriteBtnPresenterPage
      onClickWrite={onClickWrite}
      checkPage={props.checkPage}
      communityCheckPage={props.communityCheckPage}
    />
  );
}
