import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { SEND_MESSAGE } from "./writeMessage.queries";
import * as S from "./writeMessage.styled";
export default function WriteMessagePage() {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });
  const router = useRouter();
  const [sendMessage] = useMutation(SEND_MESSAGE);

  const onClickCancel = () => {
    router.push("/message/received");
  };
  const onClickSubmit = async (data: any) => {
    try {
      await sendMessage({
        variables: {
          sendMessageInput: {
            contents: data.contents,
            receiveUser: data.receiveUser,
          },
        },
      });
      alert(`${data.receiveUser}님께 쪽지가 전송되었습니다.`);
      window.close();
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <S.MessageBoxDiv>
      <S.Title>
        쪽지함 <S.RightOutline />
        쪽지보내기
      </S.Title>
      <S.Wrapper>
        <form onSubmit={handleSubmit(onClickSubmit)}>
          <S.MenuTxt>받는 단짝님</S.MenuTxt>
          <S.ReceiveUserInput
            {...register("receiveUser")}
            type="text"
            placeholder="쪽지를 받는 단짝님의 닉네임을 작성하세요."
          />

          <S.MessageHr />

          <S.MenuTxt>내용</S.MenuTxt>
          <S.MessageTextarea
            {...register("contents")}
            placeholder="안녕하세요, 단짠 맛집의 단짝님! &#13;&#10;단짝 스토어에서 원하는 메뉴를 처음 구매 시, 100 포인트를 적립할 수 있는 이벤트를 진행하고 있습니다. &#13;&#10;많은 관심 부탁드립니다. 감사합니다 :)"
          />
          <S.BtnBoxDiv>
            <S.SendBtn type="submit">보내기</S.SendBtn>
            <S.CancelBtn type="button" onClick={onClickCancel}>
              취소하기
            </S.CancelBtn>
          </S.BtnBoxDiv>
        </form>
      </S.Wrapper>
    </S.MessageBoxDiv>
  );
}
