import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ReceivedMessageDetailPresenterPage from "./receivedMessageDetail.presenter";
import {
  DELETE_RECEIVED_MESSAGE,
  FETCH_RECEIVED_MESSAGE,
} from "./receivedMessageDetail.queries";

export default function ReceivedMessageDetailContainerPage() {
  const router = useRouter();
  const isRecievedTap = true;

  const [deleteReceivedMessage] = useMutation(DELETE_RECEIVED_MESSAGE);
  const { data } = useQuery(FETCH_RECEIVED_MESSAGE, {
    variables: { messageInfoId: String(router.query.messageInfoId) },
  });
  const onClickReceivedMessageList = () => {
    router.push("/message/received");
  };
  const onClickDeleteMessage = async () => {
    try {
      await deleteReceivedMessage({
        variables: { messageInfoId: String(router.query.messageInfoId) },
      });
      alert("삭제 완료");
      router.push("/message/received");
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <ReceivedMessageDetailPresenterPage
      data={data}
      onClickDeleteMessage={onClickDeleteMessage}
      onClickReceivedMessageList={onClickReceivedMessageList}
      isRecievedTap={isRecievedTap}
    />
  );
}
