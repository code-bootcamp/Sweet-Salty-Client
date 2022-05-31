import { useRouter } from "next/router";
import LoginPresenterPage from "./Login.presenter";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../commons/store";
import { OperationVariables, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LOGIN } from "./Login.queries";

const schema = yup.object({
  userEmail: yup
    .string()
    .email("이메일 아이디를 @까지 정확하게 입력해주세요.")
    .required("이메일 아이디를 @까지 정확하게 입력해주세요."),
  userPassword: yup
    .string()
    .min(
      8,
      "영문 대문자, 소문자, 숫자, 특수문자 조합 8~16자리의 비밀번호를 입력해주세요."
    )
    .max(
      16,
      "영문 대문자, 소문자, 숫자, 특수문자 조합 8~16자리의 비밀번호를 입력해주세요."
    )
    .required(
      "영문 대문자, 소문자, 숫자, 특수문자 조합 8~16자리의 비밀번호를 입력해주세요."
    ),
});

export default function LoginContainerPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [login] = useMutation(LOGIN);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickLogin = async (data: OperationVariables | undefined) => {
    try {
      const result = await login({
        variables: {
          ...data,
        },
      });
      const accessToken = result.data.login.accessToken;
      setAccessToken(accessToken);
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onClickSocialGoogle = () => {
    router.push("https://project08.site/login/google");
  };
  const onClickSocialKakao = () => {
    router.push("https://project08.site/login/kakao");
  };
  const onClickSocialNaver = () => {
    router.push("https://project08.site/login/naver");
  };

  const onClickSignUp = () => {
    router.push("/signup");
  };

  return (
    <LoginPresenterPage
      onClickLogin={onClickLogin}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSignUp={onClickSignUp}
      onClickSocialGoogle={onClickSocialGoogle}
      onClickSocialKakao={onClickSocialKakao}
      onClickSocialNaver={onClickSocialNaver}
    />
  );
}
