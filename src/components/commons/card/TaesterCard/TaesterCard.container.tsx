import { useRouter } from "next/router";
import TasterCardPresenterPage from "./TaesterCard.presenter";

export default function TasterCardContainerPage(props: any) {
  const router = useRouter();
  const onClickDetailPage = (event: any) => {
    if (event.target instanceof Element) {
      router.push(`/reviews/testerReview/${event.currentTarget.id}`);
    }
  };
  return (
    <TasterCardPresenterPage
      id={props.id}
      onClickDetailPage={onClickDetailPage}
      fetchBoardsData={props.el}
    />
  );
}
