import { gql } from "@apollo/client";

export const FETCH_RECEIVED_MESSAGES = gql`
  query fetchReceivedMessages($page: Int) {
    fetchReceivedMessages(page: $page) {
      messageSendUser
      messageSendUserImage
      messageState
      messageInfo {
        messageInfoId
        messageInfoContents
      }
      sendAt
    }
  }
`;
export const DELETE_RECEIVED_MESSAGE = gql`
  mutation deleteReceivedMessage($messageInfoId: String!) {
    deleteReceivedMessage(messageInfoId: $messageInfoId)
  }
`;

export const FETCH_RECEIVED_MESSAGES_COUNT = gql`
  query fetchReceivedMessagesCount {
    fetchReceivedMessagesCount
  }
`;

export const FETCH_UNREAD_MESSAGE_COUNT = gql`
  query fetchUnreadMessageCount {
    fetchUnreadMessageCount
  }
`;
