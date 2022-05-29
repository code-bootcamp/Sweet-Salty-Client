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
  margin : 0 15px;
  color:${(props: any)=> 
    props.isReceived || 
    props.isSend 
    ? "#fff"
    : "#7b7b7b" 
  };
  background: ${(props: any)=> 
    props.isReceived || 
    props.isSend 
    ? "linear-gradient(#ff6e30, #ffa230)"
    : "#fff" 
  };
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: linear-gradient(#ff6e30, #ffa230);
    color: #fff;
  }
`;

export default function MessageMenuPage() {
  const router = useRouter();

  
  // 받은쪽지 
  const Received = ["/message/received"];
  const isReceived = Received.includes(router.asPath);
  // 보낸쪽지 
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
        <MessageMenu onClick={onClickReceived} isReceived={isReceived}>받은 쪽지함</MessageMenu>
        <MessageMenu onClick={onClickSend} isSend={isSend}>보낸 쪽지함</MessageMenu>
      </MessageMenuBox>
    </>
  );
}
