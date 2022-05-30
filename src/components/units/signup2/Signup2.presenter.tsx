import SignupInput from "./Signup.input";
import * as S from "./Signup2.styled";
export default function Signup2Presenter(props) {
  return (
    <S.Wrapper>
      <S.LogoImg src="/images/whitelogo.png" />
      <S.Title>회원가입</S.Title>
      <form onSubmit={props.handleSubmit(props.onClickSignup)}>
        <S.SignupForm>
          <S.Text style={{ padding: 0 }}>이메일</S.Text>
          <SignupInput
            type="text"
            placeholder="이메일을 입력해주세요."
            {...props.register("userEmail")}
          />
          <S.InputButton type="button" onClick={props.onClickEmailCheck}>
            이메일 중복확인
          </S.InputButton>
          <S.ErrorTxt>{props.formState.errors.userEmail?.message}</S.ErrorTxt>
          <S.PasswordBox>
            <S.ColumnBox>
              <S.Text>비밀번호</S.Text>
              <SignupInput
                type="password"
                placeholder="비밀번호를 입력해주세요."
                {...props.register("userPassword")}
              />
              <S.ErrorTxt>
                {props.formState.errors.userPassword?.message}
              </S.ErrorTxt>
            </S.ColumnBox>
            <S.ColumnBox>
              <S.Text>비밀번호 확인</S.Text>

              <SignupInput
                type="password"
                placeholder="비밀번호를 한 번 더 입력해주세요."
                {...props.register("confirmUserPassword")}
              />
              <S.ErrorTxt>
                {props.formState.errors.confirmUserPassword?.message}
              </S.ErrorTxt>
            </S.ColumnBox>
          </S.PasswordBox>
          
          <S.Text>닉네임</S.Text>
          <SignupInput
            type="text"
            placeholder="닉네임을 입력해주세요."
            {...props.register("userNickname")}
          />
          <S.InputButton type="button" onClick={props.onClickNicknameCheck}>
            닉네임 중복확인
          </S.InputButton>
          <S.ErrorTxt>
            {props.formState.errors.userNickname?.message}
          </S.ErrorTxt>
          <S.Text>휴대전화</S.Text>
      <S.PhoneInputBox>
          <SignupInput type="text" {...props.register("userPhone")} />
          
          <S.InputButton type="button" onClick={props.onClickGetNumber}>
            인증번호받기
          </S.InputButton>
          </S.PhoneInputBox>
          <S.Text>인증번호</S.Text>
          <SignupInput type="text" onChange={props.onChangeSerialNumber} />
          
          <S.OutputButton type="button" onClick={props.onClickCheckNumber}>
          인증확인
          </S.OutputButton>
          <S.Text>성별</S.Text>
          <S.SelectDiv>
            {props.genderData.map((el) => (
              <label className="checkbox" key={el.key}>
                <input
                  type="checkbox"
                  id={el.id}
                  onChange={(e) => {
                    props.onChangeGender(e.target.checked, e.target.id);
                  }}
                  checked={props.gender === el.id}
                />
                <span className="checkbox_text">{el.title}</span>
              </label>
            ))}
          </S.SelectDiv>
          <S.Text>연령대</S.Text>
          <S.SelectDiv>
            {props.ageData.map((el) => (
              <label className="checkbox" key={el.key}>
                <input
                  type="checkbox"
                  id={el.id}
                  onChange={(e) => {
                    props.onChangeAge(e.target.checked, e.target.id);
                  }}
                  checked={props.ageGroup === el.id}
                />
                <span className="checkbox_text">{el.title}</span>
              </label>
            ))}
          </S.SelectDiv>
          <S.WriteTitle style={{ paddingBottom: "0px" }}>
            선호 카테고리
          </S.WriteTitle>
          <S.SubWriteTitle>메뉴 유형</S.SubWriteTitle>
          <S.SelectDiv>
            {props.menuData.map((el) => (
              <label className="checkbox" key={el.key}>
                <input
                  type="checkbox"
                  id={el.id}
                  onChange={(e) => {
                    props.onChangeMenu(e.target.checked, e.target.id);
                  }}
                  checked={props.menu === el.id}
                />
                <span className="checkbox_text">{el.id}</span>
              </label>
            ))}
          </S.SelectDiv>
          <S.ButtonBox>
          <S.SubmitBtn type="submit">가입하기</S.SubmitBtn>
          </S.ButtonBox>
        </S.SignupForm>
      </form>
    </S.Wrapper>
  );
}
