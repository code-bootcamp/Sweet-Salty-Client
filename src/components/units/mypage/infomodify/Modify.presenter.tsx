import * as S from "./Modify.styles";

export default function ModifyPresenterPage(props: any) {
  return (
    <S.Wrapper>
      <S.Title>회원 정보 수정</S.Title>
      <form onSubmit={props.handleSubmit(props.onClickModify)}>
        <S.NoticeBox>
          <S.WriteTitle style={{ paddingTop: "0px" }}>닉네임</S.WriteTitle>
          <S.FlexBox>
            <S.InputBox
              type="text"
              placeholder="닉네임을 수정하세요."
              {...props.register("userNickname")}
            />
          </S.FlexBox>
          <S.WriteTitle>비밀번호</S.WriteTitle>
          <S.FlexBox>
            <S.InputBox
              type="password"
              placeholder="비밀번호를 수정하세요."
              {...props.register("userPassword")}
            />
          </S.FlexBox>
          <S.WriteTitle>휴대폰번호</S.WriteTitle>
          <S.FlexBox>
            <S.InputBox
              type="text"
              placeholder="휴대폰번호를 입력하세요(-제외)"
              {...props.register("userPhone")}
            />
          </S.FlexBox>

          <S.WriteTitle>성별</S.WriteTitle>
          <S.FlexBox>
            <S.Category>
              {props.genderData.map((el, idx) => (
                <label className="checkbox" key={el.key}>
                  <input
                    type="checkbox"
                    id={String(idx)}
                    onChange={props.onChangeCheckGender(el)}
                    checked={Boolean(el.checked)}
                  />
                  <span className="checkbox_text">{el.name}</span>
                </label>
              ))}
            </S.Category>
          </S.FlexBox>

          <S.WriteTitle>연령대</S.WriteTitle>
          <S.FlexBox>
            <S.Category>
              {props.ageData.map((el, idx) => (
                <label className="checkbox" key={el.key}>
                  <input
                    type="checkbox"
                    id={String(idx)}
                    onChange={props.onChangeCheckAge(el)}
                    checked={Boolean(el.checked)}
                  />
                  <span className="checkbox_text">{el.name}</span>
                </label>
              ))}
            </S.Category>
          </S.FlexBox>

          <S.WriteTitle style={{ paddingBottom: "10px" }}>
            선호 카테고리
          </S.WriteTitle>
          <S.FlexBox>
            <S.Category>
              {props.menuData.map((el, idx) => (
                <label className="checkbox" key={el.key}>
                  <input
                    type="checkbox"
                    id={String(idx)}
                    onChange={props.onChangeCheckMenu(el)}
                    checked={Boolean(el.checked)}
                  />
                  <span className="checkbox_text">{el.value}</span>
                </label>
              ))}
            </S.Category>
          </S.FlexBox>

          <S.MoodBox></S.MoodBox>
          <S.ButtonBox>
            <S.CompleteButton type="submit">수정 완료</S.CompleteButton>
            <S.CompleteButton type="button" onClick={props.onClickBack}>
              취소
            </S.CompleteButton>
          </S.ButtonBox>
        </S.NoticeBox>
      </form>
    </S.Wrapper>
  );
}
