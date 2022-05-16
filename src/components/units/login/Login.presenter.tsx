import LoginInput from "./Login.input";
import * as S from "./Login.styled";

export default function LoginPresenterPage(props) {
  return (
      <S.PageDiv>
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
        <div>여기는 로그인 페이지</div>
        <S.LoginForm>
        <LoginInput
          type="text"
          placeholder="이메일을 입력해주세요."
          register={props.register("userEmail")}
        />
        <S.ErrorTxt>{props.formState.errors.userEmail?.message}</S.ErrorTxt>
        <LoginInput
          type="password" 
          placeholder="비밀번호를 입력해주세요."
          register={props.register("userPassword")}
        />
        <S.ErrorTxt>{props.formState.errors.userPassword?.message}</S.ErrorTxt>
        <S.SubmitBtn
            
            type="submit"
          >로그인</S.SubmitBtn>
          <S.GoSignupTxt>아직 계정이 없으신가요? <S.GoSignUpA href="/signup">회원가입</S.GoSignUpA></S.GoSignupTxt>
        </S.LoginForm>
      </form>
      </S.PageDiv>
  );
}
