// 여기는 로그인 페이지 입니다.
import {useRouter} from "next/router";
import LoginPresenterPage from "./Login.presenter";
// import { accessTokenState } from "../../../commons/store";
// import { useRecoilState } from "recoil";
// 리코일, 글로벌스테이트 적용 후 주석해제
import {  OperationVariables, useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LOGIN,FETCH_USER_LOGGED_IN } from "./Login.queries";

const schema =yup.object({
  userEmail : yup.string().email("이메일 아이디를 @까지 정확하게 입력해주세요.")
  .required("이메일 아이디를 @까지 정확하게 입력해주세요."),
  userPassword : yup.string().min(8, "영문 대문자, 소문자, 숫자, 특수문자 조합 8~16자리의 비밀번호를 입력해주세요.")
  .max(16, "영문 대문자, 소문자, 숫자, 특수문자 조합 8~16자리의 비밀번호를 입력해주세요.")
  .required("영문 대문자, 소문자, 숫자, 특수문자 조합 8~16자리의 비밀번호를 입력해주세요."),
})

export default function LoginContainerPage() {
  // const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const {data : loggedInData} = useQuery(FETCH_USER_LOGGED_IN);
const [login] = useMutation(LOGIN);
const { register, handleSubmit, formState } = useForm({
  resolver: yupResolver(schema),
  mode: "onChange",
});
const onClickLogin = async (data: OperationVariables | undefined) => {
  // 로그인하기
  try {
    const result = await login({
      variables: {
        ...data,
      },
    });
    // const accessToken = result.data.login.accessToken;
    // setAccessToken(accessToken);
// console.log(accessToken);

router.push("/");
console.log(result, loggedInData)
  } catch (error : any) {
    alert(error.message);
  }
};
const onClickSignUp =()=>{
  router.push("/signup");
}

  return(
  <LoginPresenterPage
    onClickLogin={onClickLogin}
    register={register}
    handleSubmit={handleSubmit}
    formState={formState}
    onClickSignUp={onClickSignUp}
  />
  );
}
