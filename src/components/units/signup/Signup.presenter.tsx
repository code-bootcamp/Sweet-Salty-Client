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
      onChange={props.onChangePhoneNumber}
      // register={props.register("userPhone")}
      />
      <S.ErrorTxt>{props.formState.errors.userPhone?.message}</S.ErrorTxt>
      <button type="button" onClick={props.onClickGetNumber}>전화번호인증</button>
      <SignupInput type="text" placeholder="인증번호를 입력하세요." onChange={props.onChangeSerialNumber}></SignupInput>
      <button type="button" onClick={props.onClickCheckNumber}>인증확인</button>
<div>
      <select onChange={props.onChangeGender}>
        <option selected disabled>성별 선택</option>
        <option value="MALE">남성</option>
        <option value="FEMALE">여성</option>
        <option value="PRIVATE">비밀♡</option>
      </select>
      </div>
<div>
      <select onChange={props.onChangeAge}>
      <option selected disabled>연령대 선택</option>
        <option value="NONE">비밀♡</option>
        <option value="TEN">10대</option>
        <option value="TWENTY">20대</option>
        <option value="THIRTY">30대</option>
        <option value="FORTY">40대</option>
        <option value="FIFTY">50대</option>
        <option value="SIXTY">60대</option>
      </select>
      </div>
      <S.SubmitBtn type="submit">회원가입</S.SubmitBtn>
      <S.CancleBtn type="button" onClick={props.onClickBack}>취소</S.CancleBtn>
          <S.GoLoginTxt>이미 아이디가 있으신가요? <S.GoLoginA href="/login">로그인</S.GoLoginA></S.GoLoginTxt>
    </form>
    </S.PageDiv>
  );
}
