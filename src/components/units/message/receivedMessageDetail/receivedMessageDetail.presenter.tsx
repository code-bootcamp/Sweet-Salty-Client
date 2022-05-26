import { messageDate } from "../../../commons/libraries/date"
import * as S from "./receivedMessageDetail.styled"
export default function ReceivedMessageDetailPresenterPage(props){
    const propsdata = props.data?.fetchReceivedMessage
    const profileUrl = "https://storage.googleapis.com/"
    return(
        <S.MessageBoxDiv>
            <div>보낸 단짝</div>
            <S.ProfileImgDiv><S.ProfileImg src={profileUrl+propsdata?.messageSendUserImage}/></S.ProfileImgDiv>
            <div>{propsdata?.messageSendUser} 단짝님</div>
            <div>{propsdata?.messageInfo.messageInfoContents}</div>
            <div>{messageDate(propsdata?.sendAt)}</div>
            <button onClick={props.onClickReceivedMessageList}>목록으로</button>
            <button onClick={props.onClickDeleteMessage}>삭제</button>
        </S.MessageBoxDiv>
    )
}