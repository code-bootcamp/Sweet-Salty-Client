import * as S from "./receivedMessageList.styled"
import { v4 as uuidv4 } from "uuid";
import { messageDate } from "../../../commons/libraries/date";
import Paginations01 from "../../../commons/paginations/paginations/01/Paginations01.container";
export default function ReceivedMessageListPresenterPage(props){


const profileUrl = "https://storage.googleapis.com/"
    return(
        <div>
            <div>총 {props.count}개의 받은 쪽지가 있습니다.</div>
            <div>총 {props.dataUnreadMessageCount}개의 안 읽은 쪽지가 있습니다.</div>
            <button onClick={props.onClickWriteMessage}>쪽지 보내기</button>
            {props.dataReceivedMessages?.fetchReceivedMessages.map((el: any)=>(
                <div key={uuidv4()} >
                    <S.MessageBoxDiv onClick={props.onClickMessageDetail(el.messageInfo?.messageInfoId)}>
                    <S.ProfileImgDiv><S.ProfileImg src={profileUrl+el.messageSendUserImage}/></S.ProfileImgDiv>
                    <div>{el.messageSendUser} 단짝님</div>
                    <S.MessageContents>내용 {el.messageInfo?.messageInfoContents}</S.MessageContents>
                    <div> {messageDate(el.sendAt)}</div>
                    <div>{el.messageState?"읽음":"안읽음"}</div>
                    </S.MessageBoxDiv>
                    <button onClick={props.onClickDeleteMessage(el.messageInfo?.messageInfoId)}>삭제</button>
                </div>
            ))}
            <Paginations01 refetch={props.refetch} count={props.count} />
        </div>
    )
}