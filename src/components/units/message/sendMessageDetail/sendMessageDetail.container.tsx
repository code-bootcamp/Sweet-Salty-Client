import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import SendMessageDetailPresenterPage from "./sendMessageDetail.presenter";
import { DELETE_SEND_MESSAGE, FETCH_SEND_MESSAGE } from "./sendMessageDetail.queries";

export default function SendMessageDetailContainerPage (){
    const router = useRouter();
    const [deleteSendMessage] = useMutation(DELETE_SEND_MESSAGE);
    const {data : sendMessageData} = useQuery(FETCH_SEND_MESSAGE, {
        variables: {messageInfoId:
            // String(router.query.messageInfoId)
            "f29a8046-6c14-4de7-9582-8f4e31e3896e"
        }
    })
    const onClickDeleteMessage = ()=>{
        deleteSendMessage({
            variables: { messageInfoId: String(router.query.messageInfoId)}
        })
        alert("쪽지 삭제 완료")
        router.push("/message/send")
    }
    const onClickSendList =()=>{
        router.push("/message/send")
    }
    console.log(sendMessageData)
    return(
        <SendMessageDetailPresenterPage
        onClickDeleteMessage={onClickDeleteMessage}
        onClickSendList={onClickSendList}
        />
    )
}