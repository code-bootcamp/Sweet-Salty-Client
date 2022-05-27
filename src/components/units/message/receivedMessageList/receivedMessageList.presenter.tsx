import * as S from "./receivedMessageList.styled"
import { v4 as uuidv4 } from "uuid";
import { messageDate } from "../../../commons/libraries/date";
import Paginations01 from "../../../commons/paginations/paginations/01/Paginations01.container";
import MessageMenuPage from "../../../commons/messageMenu";
export default function ReceivedMessageListPresenterPage(props){


const profileUrl = "https://storage.googleapis.com/"
    return(
        <div>
            <S.MsgWrapper>
                <S.TitleTxt>쪽지함</S.TitleTxt>
            <S.MsgHead><S.MsgAmountDiv>총 <S.MsgAmountSpan>{props.count}</S.MsgAmountSpan>개의 받은 쪽지가 있습니다.</S.MsgAmountDiv>
            <S.WriteBtn onClick={props.onClickWriteMessage}>쪽지 보내기</S.WriteBtn></S.MsgHead>
            <MessageMenuPage/>
            <S.MsgListDiv>
            {props.dataReceivedMessages?.fetchReceivedMessages.map((el: any)=>(
                <S.MessageBoxDiv key={uuidv4()} >
                    <S.MessageDataDiv onClick={props.onClickMessageDetail(el.messageInfo?.messageInfoId)}>
                    <S.ProfileDiv><S.ProfileImg src={profileUrl+el.messageSendUserImage}/>
                    <S.SendUserDiv>{el.messageSendUser}</S.SendUserDiv>
                    </S.ProfileDiv>
                    <S.MessageContents isRead={el.messageState}> {el.messageInfo?.messageInfoContents}</S.MessageContents>
                    <S.DateDiv> {messageDate(el.sendAt)}</S.DateDiv>
                    </S.MessageDataDiv>
                    <S.DeleteBtn onClick={props.onClickDeleteMessage(el.messageInfo?.messageInfoId)}>삭제</S.DeleteBtn>
                </S.MessageBoxDiv>
            ))}
            </S.MsgListDiv>
            <Paginations01 refetch={props.refetch} count={props.count} />
            </S.MsgWrapper>
        </div>
    )
}