import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router"
import ReceivedMessageListPresenterPage from "./receivedMessageList.presenter";
import {MouseEvent} from "react"
import { DELETE_RECEIVED_MESSAGE, FETCH_RECEIVED_MESSAGES, FETCH_RECEIVED_MESSAGES_COUNT } from "./receivedMessageList.queries";

export default function ReceivedMessageListContainerPage(){
    const router = useRouter();
    const [deleteReceivedMessage] =useMutation(DELETE_RECEIVED_MESSAGE);
    const {data : dataReceivedMessages, refetch : refetchReceivedMessages} = useQuery(FETCH_RECEIVED_MESSAGES);
    const {data : dataReceivedMessagesCount, refetch : refetchReceivedMessagesCount} = useQuery(FETCH_RECEIVED_MESSAGES_COUNT);

    const onClickWriteMessage = ()=>{
        router.push("/message/write")
    }
    const onClickMessageDetail = (event: MouseEvent<HTMLDivElement>)=>{
        if (event.target instanceof Element)
      router.push(`/message/received/${event.target.id}`);
    }
    const onClickDeleteMessage = (id)=> async(event: MouseEvent<HTMLDivElement>)=>{
       try{ await deleteReceivedMessage({
           variables: { messageInfoId : String(id)
           }
       })
       alert("삭제 완료")
    }
       
       catch(error: any){alert(error.message);}
    }
    return(
        <ReceivedMessageListPresenterPage
        onClickWriteMessage={onClickWriteMessage}
        onClickMessageDetail={onClickMessageDetail}
        onClickDeleteMessage={onClickDeleteMessage}
        dataReceivedMessages={dataReceivedMessages}
        refetchReceivedMessages={refetchReceivedMessages}
        dataReceivedMessagesCount={dataReceivedMessagesCount?.fetchReceivedMessagesCount}
        refetchReceivedMessagesCount={refetchReceivedMessagesCount}
        />
    )
}