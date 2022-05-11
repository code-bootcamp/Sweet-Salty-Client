import * as S from "./Headerstyles";
import { useRouter } from "next/router";

export default function LayoutHeader() {
  const router = useRouter();

  const onClickLogin = () => {
    router.push("/login");
  };
  const onClickJoin = () => {
    router.push("/signup");
  };

  return (
    <S.Wrapper>
      <S.Menu>
        <S.MenuBt onClick={onClickLogin}>로그인</S.MenuBt>
      </S.Menu>
      <S.Menu>
        <S.MenuBt onClick={onClickJoin}>회원가입</S.MenuBt>
      </S.Menu>
    </S.Wrapper>
  );
}
