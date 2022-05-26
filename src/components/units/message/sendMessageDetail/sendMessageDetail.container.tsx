import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import SendMessageDetailPresenterPage from "./sendMessageDetail.presenter";
import { DELETE_SEND_MESSAGE, FETCH_SEND_MESSAGE } from "./sendMessageDetail.queries";

export default function SendMessageDetailContainerPage (){
    const router = useRouter();
    const [deleteSendMessage] = useMutation(DELETE_SEND_MESSAGE);
    const {data : sendMessageData} = useQuery(FETCH_SEND_MESSAGE, {
        variables: {messageInfoId:String(router.query.messageInfoId)
        }
    })
    const onClickDeleteMessage = async()=>{
       try{await deleteSendMessage({
            variables: { messageInfoId: String(router.query.messageInfoId)}
        })
        alert("쪽지 삭제 완료")
        router.push("/message/send")}
        catch(error:any){alert(error.message)}
    }
    const onClickSendMessageList =()=>{
        router.push("/message/send")
    }
    return(
        <SendMessageDetailPresenterPage
        data={sendMessageData}
        onClickDeleteMessage={onClickDeleteMessage}
        onClickSendMessageList={onClickSendMessageList}
        />
    )
}