import { useMutation } from "@apollo/client"
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { SEND_MESSAGE } from "./writeMessage.queries"
import * as S from "./writeMessage.styled"
export default function WriteMessagePage(){
    const { register, handleSubmit, setValue } = useForm({
        mode: "onChange",
      });
    const router = useRouter();
    const [sendMessage] = useMutation(SEND_MESSAGE);

    const onClickCancel = ()=>{
        router.push("/message/received")  
    }
    const onClickSubmit = async(data)=>{
        console.log(data)
        try{
            await sendMessage({
                variables: {
                    sendMessageInput:{
                        contents: data.contents,
                        receiveUser : data.receiveUser
                    }
                }
            })
            alert(`${data.receiveUser}님께 쪽지가 전송되었습니다.`)
            setValue("contents", "");
            setValue("receiveUser", "");
        } catch(error : any){alert(error.message)}
    }
    return(
        <S.MessageBoxDiv>
            <form onSubmit={handleSubmit(onClickSubmit)}>
            <S.MenuTxt>받는 사람</S.MenuTxt>
            <S.ReceiveUserInput {...register("receiveUser")} type="text" placeholder="쪽지를 받는 단짝님의 닉네임을 작성하세요."/>
            <S.MenuTxt>내용</S.MenuTxt>
            <S.MessageTextarea {...register("contents")}  />
            <S.BtnBoxDiv>
            <S.SendBtn type="submit">보내기</S.SendBtn>
            <S.CancelBtn type="button" onClick={onClickCancel}>취소하기</S.CancelBtn>
            </S.BtnBoxDiv>
            </form>
        </S.MessageBoxDiv>
    )
}