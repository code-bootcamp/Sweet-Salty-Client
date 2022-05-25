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
          <button value="google" type="button" onClick={props.onClickSocialGoogle}><img src="/images/google-logo.png"/>구우-글 쇼오-샬 로오-그 인</button>
          <button value="google" type="button" onClick={props.onClickSocialKakao}><img src="/images/kakao-logo.png"/>카카오 쇼오-샬 로오-그 인</button>
          <S.GoSignupTxt>아직 계정이 없으신가요? <S.GoSignUpA href="/signup">회원가입</S.GoSignUpA></S.GoSignupTxt>
        </S.LoginForm>
      </form>
      </S.PageDiv>
  );
}
