import { gql } from "@apollo/client";
export const DELETE_RECEIVED_MESSAGE = gql`
  mutation deleteReceivedMessage($messageInfoId: String!) {
    deleteReceivedMessage(messageInfoId: $messageInfoId)
  }
`;
export const FETCH_RECEIVED_MESSAGE = gql`
  query fetchReceivedMessage($messageInfoId: String!) {
    fetchReceivedMessage(messageInfoId: $messageInfoId) {
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
