import { messageDate } from "../../../commons/libraries/date";
import MessageMenuPage from "../../../commons/messageMenu";
import * as S from "./sendMessageDetail.styled";
export default function ReceivedMessageDetailPresenterPage(props: any) {
  const propsdata = props.data?.fetchSendMessage;
  const profileUrl = "https://storage.googleapis.com/";
  return (
    <S.Page>
      <S.Main>
        <S.TitleSection>
          쪽지함 &#62; 보낸쪽지함 &#62; {propsdata?.messageReceivedUser} 단짝님
        </S.TitleSection>
        <MessageMenuPage isSendTap={props.isSendTap} />
        <S.MainSection>
          <S.ReceiverInfo>받은 단짝</S.ReceiverInfo>

          <S.ProfileImgDiv>
            <S.ProfileImg
              src={profileUrl + propsdata?.messageReceivedUserImage}
            />
            <S.Receiver>{propsdata?.messageReceivedUser}</S.Receiver>
            <S.DateSection>{messageDate(propsdata?.sendAt)}</S.DateSection>
          </S.ProfileImgDiv>
          <S.ContentsSection>
            <S.ContentsArticle>
              {propsdata?.messageInfo.messageInfoContents}
            </S.ContentsArticle>
          </S.ContentsSection>
          <S.ButtonSection>
            <div>
              <S.Button onClick={props.onClickSendMessageList}>
                목록으로
              </S.Button>
            </div>
            <div>
              <S.Button onClick={props.onClickDeleteMessage}>삭제</S.Button>
            </div>
          </S.ButtonSection>
        </S.MainSection>
      </S.Main>
    </S.Page>
  );
}
