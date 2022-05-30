import * as S from "./sendMessageList.styled";
import { v4 as uuidv4 } from "uuid";
import { messageDate } from "../../../commons/libraries/date";
import Paginations01 from "../../../commons/paginations/paginations/01/Paginations01.container";
import MessageMenuPage from "../../../commons/messageMenu";
export default function SendMessageListPresenterPage(props: any) {
  const profileUrl = "https://storage.googleapis.com/";
  return (
    <div>
      <S.SendWrapper>
        <S.Title>
          쪽지함 <S.RightOutline /> 보낸 쪽지함
        </S.Title>
        <S.SendHead>
          <S.MsgAmountDiv>
            총 <S.MsgAmountSpan>{props.count}</S.MsgAmountSpan>개의 받은 쪽지가
            있습니다.
          </S.MsgAmountDiv>
          <S.WriteBtn onClick={props.onClickWriteMessage}>
            <S.WriteImg src="/images/Send.png" />
            쪽지 보내기
          </S.WriteBtn>
        </S.SendHead>

        <MessageMenuPage />

        <S.MsgListDiv>
          <S.MessageTh>
            <S.MessageThSend>보낸 단짝님</S.MessageThSend>
            <S.MessageThContent>내용</S.MessageThContent>
            <S.MessageThCreateAt>날짜</S.MessageThCreateAt>
            <S.MessageThDelete></S.MessageThDelete>
          </S.MessageTh>

          <S.MessageThHr />
          {props.dataSendMessages?.fetchSendMessages.map((el: any) => (
            <>
              <S.MessageBoxDiv key={uuidv4()}>
                <S.ProfileDiv>
                  <S.ProfileImg
                    src={profileUrl + el.messageReceivedUserImage}
                  />
                  <S.SendUserDiv>{el.messageReceivedUser}</S.SendUserDiv>
                </S.ProfileDiv>

                <S.MessageContents
                  onClick={props.onClickMessageDetail(
                    el.messageInfo?.messageInfoId
                  )}
                >
                  {el.messageInfo?.messageInfoContents}
                </S.MessageContents>
                <S.DateDiv>{messageDate(el.sendAt)}</S.DateDiv>
                <S.DeleteBtn
                  onClick={props.onClickDeleteMessage(
                    el.messageInfo?.messageInfoId
                  )}
                >
                  삭제
                </S.DeleteBtn>
              </S.MessageBoxDiv>
              <S.MessageHr />
            </>
          ))}
        </S.MsgListDiv>

        <S.PaginationBox>
          <Paginations01 refetch={props.refetch} count={props.count} />
        </S.PaginationBox>
      </S.SendWrapper>
    </div>
  );
}
