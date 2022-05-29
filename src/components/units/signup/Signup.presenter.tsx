import SignupInput from "./Signup.input";
import * as S from "./Signup.styled";

export default function SignUpPresenterPage(props: any) {
  return (
    <S.Wrapper>
    <S.LogoImg src="/images/whitelogo.png"/>
    <S.Title>회원가입</S.Title>
    <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
      
    <S.SignupForm>
      <S.Text style={{padding: 0}}>이메일</S.Text>
        <SignupInput
        type="text"
        placeholder="이메일을 입력해주세요."
        register={props.register("userEmail")}
        />
        <S.ErrorTxt>{props.formState.errors.userEmail?.message}</S.ErrorTxt>

      <S.PasswordBox>
        <S.ColumnBox>
          <S.Text>비밀번호</S.Text>
          <SignupInput
          type="password"
          placeholder="비밀번호를 입력해주세요."
          register={props.register("userPassword")}
          />
          <S.ErrorTxt>{props.formState.errors.userPassword?.message}</S.ErrorTxt>
        </S.ColumnBox>

        
        <S.ColumnBox>
          <S.Text>비밀번호 확인</S.Text>

          <SignupInput
          type="password"
          placeholder="비밀번호를 한 번 더 입력해주세요."
          register={props.register("confirmUserPassword")}
          />
          <S.ErrorTxt>{props.formState.errors.confirmUserPassword?.message}</S.ErrorTxt>
        </S.ColumnBox>
      </S.PasswordBox>
      
      <S.Text>성별</S.Text>
      <div>
        <select onChange={props.onChangeGender}>
          <option selected disabled>성별 선택</option>
          <option value="MALE">남성</option>
          <option value="FEMALE">여성</option>

          <option value="PRIVATE">선택 안함</option>

        </select>
      </div>
      <S.Text>연령대</S.Text>
      <div>
        <select onChange={props.onChangeAge}>
        <option selected disabled>연령대 선택</option>
          <option value="NONE">선택 안함</option>
          <option value="TEN">10대</option>
          <option value="TWENTY">20대</option>
          <option value="THIRTY">30대</option>
          <option value="FORTY">40대</option>
          <option value="FIFTY">50대</option>
          <option value="SIXTY">60대</option>
        </select>
      </div>
      
      <S.Text>닉네임</S.Text>
      <SignupInput
      type="text"
      placeholder="닉네임을 입력해주세요."
      register={props.register("userNickname")}
      />
      <S.ErrorTxt>{props.formState.errors.userNickname?.message}</S.ErrorTxt>
      
      <S.Text>휴대전화</S.Text>
      <S.PhoneInputBox>
        <SignupInput
        type="text"
        placeholder="전화번호를 입력해주세요."
        onChange={props.onChangePhoneNumber}
        // register={props.register("userPhone")}
        />
        <S.ErrorTxt>{props.formState.errors.userPhone?.message}</S.ErrorTxt>
        
        <S.InputButton type="button" onClick={props.onClickGetNumber}>인증번호 받기</S.InputButton>
      </S.PhoneInputBox>

      
      <S.Text>인증번호</S.Text>
      <SignupInput type="text" placeholder="인증번호를 입력하세요." onChange={props.onChangeSerialNumber}></SignupInput>
      <S.OutputButton  type="button" onClick={props.onClickCheckNumber}>인증확인</S.OutputButton>

      <S.WriteTitle style={{paddingBottom: "0px"}}>선호 카테고리</S.WriteTitle>
      <S.SubWriteTitle>메뉴 선택<S.Span>(여러개 선택 가능)</S.Span></S.SubWriteTitle>
        
      <S.CategoryBox>
        <S.Category onClick={props.onClickMenu} id="양식">양식</S.Category>
        <S.Category onClick={props.onClickMenu} id="한식">한식</S.Category>
        <S.Category onClick={props.onClickMenu} id="중식">중식</S.Category>
        <S.Category onClick={props.onClickMenu} id="일식">일식</S.Category>
        <S.Category onClick={props.onClickMenu} id="아시안푸드">아시안푸드</S.Category>
        <S.Category onClick={props.onClickMenu} id="할랄">할랄</S.Category>
        <S.Category onClick={props.onClickMenu} id="비건">비건</S.Category>
      </S.CategoryBox>
      
      <S.ButtonBox>
        <S.SubmitBtn type="submit">가입하기</S.SubmitBtn>
      </S.ButtonBox>

      <S.GoLoginTxt>이미 아이디가 있으신가요? <S.GoLoginA href="/login">로그인 하기</S.GoLoginA></S.GoLoginTxt>
    
      </S.SignupForm>
    </form>
    </S.Wrapper>
  );
}
