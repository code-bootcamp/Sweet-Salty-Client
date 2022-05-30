import CommunityCardPresenterPage from "./CommunityCard.presenter";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function CommunityCardContainerPage(props: any) {
  const router = useRouter();
  const onClickDetailPage = (event: MouseEvent<HTMLDivElement>) => {
    if (props.el.boardSubject === "TASTER") {
      router.push(`/reviews/testerReview/${event.currentTarget.id}`);
    }
    if (props.el.boardSubject === "REVIEW") {
      router.push(`/reviews/commonReview/${event.currentTarget.id}`);
    }
    if (props.el.boardSubject === "REQUEST") {
      router.push(`/reviews/wish/${event.currentTarget.id}`);
    }
    if (props.el.boardSubject === "VISITED") {
      router.push(`/reviews/commonReview/${event.currentTarget.id}`);
    }
  };

  return (
    <CommunityCardPresenterPage
      fetchBoardsCategoryData={props.el}
      id={props.id}
      onClickDetailPage={onClickDetailPage}
    />
  );
}
