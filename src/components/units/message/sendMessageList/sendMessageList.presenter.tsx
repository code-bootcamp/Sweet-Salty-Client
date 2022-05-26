import { v4 as uuidv4 } from "uuid";
export default function SendMessageListPresenterPage(props){
    return(
    <div>
        {props.dataSendMessages?.fetchSendMessages.map((el:any)=>(
            <div key={uuidv4()}>
                <div>받는사람{el.messageReceivedUser}</div>
                <div>{el.sendAt}</div>
                <div>{el.messageInfo?.messageInfoContents}</div>
                
            </div>
        ))}
    </div>
        )
}