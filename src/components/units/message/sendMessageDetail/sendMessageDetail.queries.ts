import { gql } from "@apollo/client";
export const DELETE_SEND_MESSAGE = gql`
  mutation deleteSendMessage($messageInfoId: String!) {
    deleteSendMessage(messageInfoId: $messageInfoId)
  }
`;
export const FETCH_SEND_MESSAGE = gql`
  query fetchSendMessage($messageInfoId: String!) {
    fetchSendMessage(messageInfoId: $messageInfoId) {
      messageId
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
