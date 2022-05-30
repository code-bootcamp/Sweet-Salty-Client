import { gql } from "@apollo/client";

export const FETCH_SEND_MESSAGES = gql`
  query fetchSendMessages($page: Int) {
    fetchSendMessages(page: $page) {
      messageReceivedUser
      messageReceivedUserImage
      messageInfo {
        messageInfoId
        messageInfoContents
      }
      sendAt
    }
  }
`;

export const DELETE_SEND_MESSAGE = gql`
  mutation deleteSendMessage($messageInfoId: String!) {
    deleteSendMessage(messageInfoId: $messageInfoId)
  }
`;

export const FETCH_SEND_MESSAGES_COUNT = gql`
  query fetchSendMessagesCount {
    fetchSendMessagesCount
  }
`;
