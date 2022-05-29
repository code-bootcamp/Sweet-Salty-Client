// 여기는 회원가입페이지 입니다.
import { useRouter } from "next/router";
import SignUpPresenterPage from "./Signup.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CREATE_USER, OVERLAP_EMAIL, OVERLAP_NICKNAME, SIGNUP_CHECK_TOKEN, SIGNUP_GET_TOKEN } from "./Signup.queries";
import { useState } from "react";

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
    // userPhone : yup
    // .string()
    // .min(10,"휴대전화번호를 확인해주세요.")
    // .max(11,"휴대전화번호를 확인해주세요.")
    // .required("휴대전화번호를 입력해주세요."),
    userNickname : yup
    .string()
    .min(2, "2~6자리 닉네임을 입력해 주세요.")
    .max(6, "2~6자리 닉네임을 입력해 주세요.")
    .required("닉네임을 입력해주세요."),
  });

export default function SignUpContainerPage() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("")
  const [serialNumber, setSerialNumber] = useState("")
  const [checked, setChecked] = useState(false)
  const [createUser] = useMutation(CREATE_USER);
  const [getNumber] = useMutation(SIGNUP_GET_TOKEN);
  const [checkNumber] = useMutation(SIGNUP_CHECK_TOKEN);
  const [gender, setGender] = useState();
  const [ageGroup, setAgeGroup] = useState();
  
  const [prefer, setPrefer] = useState([]);
  
  const { register, handleSubmit, formState } = useForm({
  resolver: yupResolver(schema),
  mode: "onChange",
    });

    const onClickGetNumber = async()=>{
try{
await getNumber({
  variables: {
    phone: phoneNumber
  }
})
alert("인증번호가 발송되었습니다.")
}
catch(error:any){
  alert(error.message);
}
    }

    const onClickCheckNumber = async()=>{
      
  const dogeun =  await checkNumber({
          variables:{ phone: phoneNumber, token:serialNumber}
        })
        if(!dogeun.data.signUpCheckToken){
          alert("인증번호를 확인해주세요.")
          return
      
        }
        setChecked(true)
        alert("인증완료")
      }
      
    
    function onChangePhoneNumber(event){
      setPhoneNumber(event.target.value);
    }
    function onChangeSerialNumber(event){
      setSerialNumber(event.target.value);
    }
    function onChangeGender(event){
      setGender(event.target.value);
    }
    function onChangeAge(event){
      setAgeGroup(event.target.value);
    }
    

    

const onClickSignUp = async (signupData :any) => {
  const { confirmUserPassword, ...data } = signupData;
  const {data:emailCheckData} = useQuery(OVERLAP_EMAIL,{
    variables: {email: data.userEmail}
  })
  const {data:nicknameCheckData} = useQuery(OVERLAP_NICKNAME,{
    variables: {nickname: data.userNickname}
  })
  // 가입하기
  if(!checked){alert("전화번호 인증이 되지 않았습니다.")
  if(!emailCheckData){alert("이메일 중복 확인이 필요합니다.")}
  if(!nicknameCheckData){alert("닉네임 중복 확인이 필요합니다.")}
return}
  try {
    await createUser({
      variables: {
        createUserInput: { ...data, userPhone:phoneNumber,gender,ageGroup ,prefer:["prefer"] },
      },
    });
    alert("회원가입에 성공하였습니다. 로그인 페이지로 이동합니다.");
    router.push("/login");
  } catch (error : any) {
    alert(error.message);
  }
};

const onClickBack=()=>{
  router.back()}
  return <SignUpPresenterPage 
      onClickSignUp={onClickSignUp}
      onClickBack={onClickBack}
      onClickGetNumber={onClickGetNumber}
      onClickCheckNumber={onClickCheckNumber}
      onChangePhoneNumber={onChangePhoneNumber}
      onChangeSerialNumber={onChangeSerialNumber}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      checked={checked}
      onChangeGender={onChangeGender}
      onChangeAge={onChangeAge}
  />;
}
