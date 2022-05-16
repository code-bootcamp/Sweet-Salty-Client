// 여기는 회원가입페이지 입니다.
import { useRouter } from "next/router";
import SignUpPresenterPage from "./Signup.presenter";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CREATE_USER } from "./Signup.queries";

const schema = yup.object({
  userEmail: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
    userPassword: yup
    .string()
    .min(8, "영문 대문자, 소문자, 숫자, 특수문자 조합 8~16자리의 비밀번호를 입력해주세요.")
    .max(16, "영문 대문자, 소문자, 숫자, 특수문자 조합 8~16자리의 비밀번호를 입력해주세요.")
    .required("영문 대문자, 소문자, 숫자, 특수문자 조합 8~16자리의 비밀번호를 입력해주세요."),
    confirmUserPassword: yup
      .string()
      .oneOf([yup.ref("userPassword"), null], "비밀번호가 일치하지 않습니다."),
  userName: yup
    .string()
    .min(2, "이름은 2자리 이상 입력해 주세요.")
    .required("이름은 필수 입력 사항입니다."),
    userPhone : yup
    .string()
    .min(10,"휴대전화번호를 확인해주세요.")
    .max(11,"휴대전화번호를 확인해주세요.")
    .required("휴대전화번호를 입력해주세요."),
    userNickname : yup
    .string()
    .min(2, "2~6자리 닉네임을 입력해 주세요.")
    .max(6, "2~6자리 닉네임을 입력해 주세요.")
    .required("닉네임을 입력해주세요."),
  });

export default function SignUpContainerPage() {
  const router = useRouter();
const [createUser] = useMutation(CREATE_USER);
const { register, handleSubmit, formState } = useForm({
  resolver: yupResolver(schema),
  mode: "onChange",
});
const onClickSignUp = async (signupData :any) => {
  const { confirmUserPassword, ...data } = signupData;
  // 가입하기
  try {
    await createUser({
      variables: {
        createUserInput: { ...data },
      },
    });
    alert("회원가입에 성공하였습니다.");
    router.push("/");
  } catch (error : any) {
    alert(error.message);
  }
};
const onClickBack=()=>{
  router.back()}
  return <SignUpPresenterPage 
      onClickSignUp={onClickSignUp}
      onClickBack={onClickBack}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
  />;
}
