import styled from "@emotion/styled";
import { useRouter } from "next/router";

export const MessageMenuBox = styled.div`
  margin: 0 auto;
  width: 1120px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MessageMenu = styled.div`
  width: 299px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 20px 20px 0 0;
  font-weight: 700;
  font-size: 20px;
  margin: 0 15px;
  color: ${(props: any) =>
    props.isReceived || props.isSend || props.isRecievedTap || props.isSendTap
      ? "#fff"
      : "#7b7b7b"};
  background: ${(props: any) =>
    props.isReceived || props.isSend || props.isRecievedTap || props.isSendTap
      ? "linear-gradient(#ff6e30, #ffa230)"
      : "#fff"};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: linear-gradient(#ff6e30, #ffa230);
    color: #fff;
  }
`;

export default function MessageMenuPage(props: any) {
  const router = useRouter();

  const Received = ["/message/received"];
  const isReceived = Received.includes(router.asPath);

  const Send = ["/message/send"];
  const isSend = Send.includes(router.asPath);

  const onClickReceived = () => {
    router.push("/message/received");
  };

  const onClickSend = () => {
    router.push("/message/send");
  };

  return (
    <>
      <MessageMenuBox>
        <MessageMenu
          onClick={onClickReceived}
          isReceived={isReceived}
          isRecievedTap={props.isRecievedTap}
        >
          받은 쪽지함
        </MessageMenu>
        <MessageMenu
          onClick={onClickSend}
          isSend={isSend}
          isSendTap={props.isSendTap}
        >
          보낸 쪽지함
        </MessageMenu>
      </MessageMenuBox>
    </>
  );
}
