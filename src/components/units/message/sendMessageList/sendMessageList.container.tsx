import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router"
import SendMessageListPresenterPage from "./sendMessageList.presenter";
import { DELETE_SEND_MESSAGE, FETCH_SEND_MESSAGES, FETCH_SEND_MESSAGES_COUNT } from "./sendMessageList.queries";
import {MouseEvent} from "react"

export default function SendMessageListContainerPage(){
    const router = useRouter();
    const [deleteSendMessage] = useMutation(DELETE_SEND_MESSAGE);
    const {data : dataSendMessages, refetch : refetchSendMessages} = useQuery(FETCH_SEND_MESSAGES);
    const {data : dataSendMessagesCount, refetch : refetchSendMessagesCount} = useQuery(FETCH_SEND_MESSAGES_COUNT);
    const onClickWriteMessage = ()=>{
        router.push("/message/write")
    }
    const onClickMessageDetail = (id:String)=>()=>{
      router.push(`/message/send/${id}`);
    }
    const onClickDeleteMessage = (id:String)=> async()=>{
        try{ await deleteSendMessage({
            variables: { messageInfoId : String(id)
                     },
                     refetchQueries: [{ query:FETCH_SEND_MESSAGES},{query:FETCH_SEND_MESSAGES_COUNT}]
        },
        
        )
        alert("삭제 완료")
     }
        
        catch(error: any){alert(error.message);}
     }
    return(
        <SendMessageListPresenterPage
        onClickWriteMessage={onClickWriteMessage}
        onClickMessageDetail={onClickMessageDetail}
        onClickDeleteMessage={onClickDeleteMessage}
        dataSendMessages={dataSendMessages}
        refetch={refetchSendMessages}
        count={dataSendMessagesCount?.fetchSendMessagesCount}
        refetchSendMessagesCount={refetchSendMessagesCount}
        />
    )
} 