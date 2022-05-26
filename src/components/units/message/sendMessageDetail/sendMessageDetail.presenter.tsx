import { messageDate } from "../../../commons/libraries/date"
import * as S from "./sendMessageDetail.styled";
export default function ReceivedMessageDetailPresenterPage (props){
    const propsdata = props.data?.fetchSendMessage
    const profileUrl = "https://storage.googleapis.com/"
    return(
        <S.MessageBoxDiv>
        <div>받는 단짝</div>
        <S.ProfileImgDiv><S.ProfileImg src={profileUrl+propsdata?.messageReceivedUserImage}/></S.ProfileImgDiv>
        <div>{propsdata?.messageReceivedUser} 단짝님</div>
        <div>{propsdata?.messageInfo.messageInfoContents}</div>
        <div>{messageDate(propsdata?.sendAt)}</div>
        <button onClick={props.onClickSendMessageList}>목록으로</button>
        <button onClick={props.onClickDeleteMessage}>삭제</button>
    </S.MessageBoxDiv>
        )
}