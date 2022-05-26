import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router"
import ReceivedMessageListPresenterPage from "./receivedMessageList.presenter";
import { DELETE_RECEIVED_MESSAGE, FETCH_RECEIVED_MESSAGES, FETCH_RECEIVED_MESSAGES_COUNT, FETCH_UNREAD_MESSAGE_COUNT } from "./receivedMessageList.queries";

export default function ReceivedMessageListContainerPage(){
    const router = useRouter();
    const [deleteReceivedMessage] =useMutation(DELETE_RECEIVED_MESSAGE);
    const {data : dataReceivedMessages, refetch : refetchReceivedMessages} = useQuery(FETCH_RECEIVED_MESSAGES);
    const {data : dataReceivedMessagesCount, refetch : refetchReceivedMessagesCount} = useQuery(FETCH_RECEIVED_MESSAGES_COUNT);
    const {data : dataUnreadMessageCount, refetch : refetchUnreadMessageCount} = useQuery(FETCH_UNREAD_MESSAGE_COUNT);
    const onClickWriteMessage = ()=>{
        router.push("/message/write")
    }
    const onClickMessageDetail = (id:String)=>()=>{
      router.push(`/message/received/${id}`);
    }
    const onClickDeleteMessage = (id:String)=> async()=>{
       try{ await deleteReceivedMessage({
           variables: { messageInfoId : String(id)
                    },
                    refetchQueries: [{ query:FETCH_RECEIVED_MESSAGES},{query:FETCH_UNREAD_MESSAGE_COUNT}]
       },
       
       )
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
        refetch ={refetchReceivedMessages}
        count={dataReceivedMessagesCount?.fetchReceivedMessagesCount}
        refetchReceivedMessagesCount={refetchReceivedMessagesCount}
        dataUnreadMessageCount={dataUnreadMessageCount?.fetchUnreadMessageCount}
        />
    )
}