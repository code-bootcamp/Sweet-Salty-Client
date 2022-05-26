import * as S from "./sendMessageList.styled"
import { v4 as uuidv4 } from "uuid";
import { messageDate } from "../../../commons/libraries/date";
import Paginations01 from "../../../commons/paginations/paginations/01/Paginations01.container";
export default function SendMessageListPresenterPage(props){
    console.log(props.dataSendMessages,"프롭스")
    const profileUrl = "https://storage.googleapis.com/"
    return(
    <div>
        {props.dataSendMessages?.fetchSendMessages.map((el:any)=>(
            <div key={uuidv4()}>
                <S.MessageBoxDiv onClick={props.onClickMessageDetail(el.messageInfo?.messageInfoId)}>
                <div>{el.messageReceivedUser} 단짝님</div>
                <S.ProfileImgDiv><S.ProfileImg src={profileUrl+el.messageReceivedUserImage}/></S.ProfileImgDiv>
                <div>보낸시간{messageDate(el.sendAt)}</div>
                <div>내용{el.messageInfo?.messageInfoContents}</div>
                </S.MessageBoxDiv>
                <button onClick={props.onClickDeleteMessage(el.messageInfo?.messageInfoId)}>삭제</button>
            </div>
        ))}
         <Paginations01 refetch={props.refetch} count={props.count} />
    </div>
        )
}