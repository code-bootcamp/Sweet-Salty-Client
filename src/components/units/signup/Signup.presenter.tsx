import SignupInput from "./Signup.input";
import * as S from "./Signup.styled";

export default function SignUpPresenterPage(props) {
  return (
    <S.PageDiv>
    <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
      <SignupInput
      type="text"
      placeholder="이메일을 입력해주세요."
      register={props.register("userEmail")}
      />
      <S.ErrorTxt>{props.formState.errors.userEmail?.message}</S.ErrorTxt>
      <SignupInput
      type="password"
      placeholder="비빌번호를 입력해주세요."
      register={props.register("userPassword")}
      />
      <S.ErrorTxt>{props.formState.errors.userPassword?.message}</S.ErrorTxt>
      <SignupInput
      type="password"
      placeholder="비밀번호를 한 번 더 입력해주세요."
      register={props.register("confirmUserPassword")}
      />
      <S.ErrorTxt>{props.formState.errors.confirmUserPassword?.message}</S.ErrorTxt>
      <SignupInput
      type="text"
      placeholder="이름을 입력해주세요."
      register={props.register("userName")}
      />
      <S.ErrorTxt>{props.formState.errors.userName?.message}</S.ErrorTxt>
      <SignupInput
      type="text"
      placeholder="닉네임을 입력해주세요."
      register={props.register("userNickname")}
      />
      <S.ErrorTxt>{props.formState.errors.userNickname?.message}</S.ErrorTxt>
      <SignupInput
      type="text"
      placeholder="전화번호를 입력해주세요."
      register={props.register("userPhone")}
      />
      <S.ErrorTxt>{props.formState.errors.userPhone?.message}</S.ErrorTxt>
      <S.SubmitBtn type="submit">회원가입</S.SubmitBtn>
      <S.CancleBtn type="button" onClick={props.onClickBack}>취소</S.CancleBtn>
          <S.GoLoginTxt>이미 아이디가 있으신가요? <S.GoLoginA href="/login">로그인</S.GoLoginA></S.GoLoginTxt>
    </form>
    </S.PageDiv>
  );
}
