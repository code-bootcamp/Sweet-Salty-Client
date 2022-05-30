import { useRouter } from "next/router";
import WriteBtnPresenterPage from "./WriteBtn.presenter";

export default function WriteBtnContainerPage(props) {
  console.log("gsadgsdg31414", props);
  const router = useRouter();

  const onClickWrite = () => {
    router.push({
      pathname: "/reviews/commonReview/write",
      query: { checkPage: props.checkPage, wishDetailId: props.wishDetailId },
    });
  };
  return (
    <WriteBtnPresenterPage
      onClickWrite={onClickWrite}
      checkPage={props.checkPage}
    />
  );
}
