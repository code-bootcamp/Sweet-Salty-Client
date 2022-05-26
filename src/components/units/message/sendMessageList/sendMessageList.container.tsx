import { useQuery } from "@apollo/client";
import { useRouter } from "next/router"
import SendMessageListPresenterPage from "./sendMessageList.presenter";
import { FETCH_SEND_MESSAGES, FETCH_SEND_MESSAGES_COUNT } from "./sendMessageList.queries";
import {MouseEvent} from "react"

export default function SendMessageListContainerPage(){
    const router = useRouter();
    const {data : dataSendMessages, refetch : refetchSendMessages} = useQuery(FETCH_SEND_MESSAGES);
    const {data : dataSendMessagesCount, refetch : refetchSendMessagesCount} = useQuery(FETCH_SEND_MESSAGES_COUNT);
console.log(dataSendMessagesCount?.fetchSendMessagesCount)
    const onClickWriteMessage = ()=>{
        router.push("/message/write")
    }
    const onClickMessageDetail = (event: MouseEvent<HTMLDivElement>)=>{
        if (event.target instanceof Element)
      router.push(`/message/send/${event.target.id}`);
    }
    return(
        <SendMessageListPresenterPage
        onClickWriteMessage={onClickWriteMessage}
        onClickMessageDetail={onClickMessageDetail}
        dataSendMessages={dataSendMessages}
        refetchSendMessages={refetchSendMessages}
        dataSendMessagesCount={dataSendMessagesCount?.fetchSendMessagesCount}
        refetchSendMessagesCount={refetchSendMessagesCount}
        />
    )
} 