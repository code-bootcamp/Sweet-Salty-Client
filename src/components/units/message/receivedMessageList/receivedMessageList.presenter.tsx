import { v4 as uuidv4 } from "uuid";
export default function ReceivedMessageListPresenterPage(props){


const profileUrl = "https://storage.googleapis.com/"
    return(
        <div>
            {props.dataReceivedMessages?.fetchReceivedMessages.map((el: any)=>(
                <div key={uuidv4()}>
                    <div>보낸사람{el.messageSendUser}</div>
                    <div>보낸사람사진<img src={profileUrl+el.messageSendUserImage}/></div>
                    <div>내용{el.messageInfo?.messageInfoContents}</div>
                    <div>시간{el.sendAt}</div>
                    <button onClick={props.onClickDeleteMessage(el.messageInfo?.messageInfoId)}>삭제</button>
                </div>
            ))}
        </div>
    )
}