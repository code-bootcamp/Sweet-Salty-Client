// mypage presenter --- 김치훈

import * as S from "./Mypage.styled";

export default function MyPagePresenterPage(props: any) {
  return (
    <>
      <S.TestDiv>이곳은 마이페이지입니다.</S.TestDiv>
      <button onClick={props.onClickModify}>회원정보 수정</button>
    </>
  );
}
