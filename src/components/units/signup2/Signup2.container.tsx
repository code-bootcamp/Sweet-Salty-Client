import { useMutation } from "@apollo/client";
import { useState } from "react";
import Signup2Presenter from "./Signup2.presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CREATE_USER,
  OVERLAP_EMAIL,
  OVERLAP_NICKNAME,
  SIGNUP_CHECK_TOKEN,
  SIGNUP_GET_TOKEN,
} from "./Signup2.queries";
import { useRouter } from "next/router";
const schema = yup.object({
  userEmail: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
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
  confirmUserPassword: yup
    .string()
    .oneOf([yup.ref("userPassword"), null], "비밀번호가 일치하지 않습니다."),
 
  userPhone: yup
    .string()
    .min(10, "휴대전화번호를 확인해주세요.")
    .max(11, "휴대전화번호를 확인해주세요.")
    .required("휴대전화번호를 입력해주세요."),
  userNickname: yup
    .string()
    .min(2, "2~6자리 닉네임을 입력해 주세요.")
    .max(6, "2~6자리 닉네임을 입력해 주세요.")
    .required("닉네임을 입력해주세요."),
});

export default function Signup2Container() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  // const [userPhone, setUserPhone] = useState("");
  // const [serialNumber, setSerialNumber] = useState("");
  const [numberChecked, setNumberChecked] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);
  const [nicknameChecked, setNicknameChecked] = useState(false);
  const [timer, setTimer] = useState(false);
  const [getNumber] = useMutation(SIGNUP_GET_TOKEN);
  const [checkNumber] = useMutation(SIGNUP_CHECK_TOKEN);
  const [overlapEmail] = useMutation(OVERLAP_EMAIL);
  const [overlapNickname] = useMutation(OVERLAP_NICKNAME);
  const [gender, setGender] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [menuPrefer, setMenuPrefer] = useState("");
  const { register, handleSubmit, formState, getValues } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const genderData = [
    { key: "0", id: "MALE", title: "남성", checked: false, index: 0 },
    { key: "1", id: "FEMALE", title: "여성", checked: false, index: 1 },
    { key: "2", id: "PRIVATE", title: "선택 안함", checked: false, index: 2 },
  ];
  function onChangeGender(checked, id) {
    if (checked) {
      setGender(id);
    }
  }
  const ageData = [
    { key: "0", id: "TEN", title: "10대", checked: false, index: 0 },
    { key: "1", id: "TWENTY", title: "20대", checked: false, index: 1 },
    { key: "2", id: "THIRTY", title: "30대", checked: false, index: 2 },
    { key: "3", id: "FORTY", title: "40대", checked: false, index: 3 },
    { key: "4", id: "FIFTY", title: "50대 이상", checked: false, index: 4 },
    { key: "5", id: "NONE", title: "선택 안함", checked: false, index: 5 },
  ];
  function onChangeAge(checked, id) {
    if (checked) setAgeGroup(id);
  }
  const menuData = [
    { key: "0", id: "비건", checked: false, index: 0 },
    { key: "1", id: "아시안푸드", checked: false, index: 1 },
    { key: "2", id: "양식", checked: false, index: 2 },
    { key: "3", id: "일식", checked: false, index: 3 },
    { key: "4", id: "중식", checked: false, index: 4 },
    { key: "5", id: "한식", checked: false, index: 5 },
    { key: "6", id: "할랄", checked: false, index: 6 },
  ];
  function onChangeMenu(checked, id) {
    if (checked) setMenuPrefer(id);
  }

  const onClickGetNumber = async () => {
    const { userPhone } = getValues();
    setTimer(false);
    try {
      await getNumber({
        variables: {
          phone: userPhone,
        },
      });
      setTimer(true);
      alert("인증번호가 발송되었습니다.");
    } catch (error: any) {
      alert(error.message);
    }
  };
  const onClickCheckNumber = async () => {
    if (numberChecked) {
      alert("이미 인증이 완료되었습니다.");
      return;
    }
    const { userPhone, serialNumber } = getValues();
    // console.log(userPhone, serialNumber)
    const result = await checkNumber({
      variables: { phone: userPhone, token: serialNumber },
    });
    if (!result.data.signUpCheckToken) {
      alert("인증번호를 확인해주세요.");
      return;
    }
    setNumberChecked(true);
    setTimer(false)
    alert("인증완료");

  };

  // function onChangePhoneNumber(event) {
  //   setUserPhone(event.target.value);
  // // }
  // function onChangeSerialNumber(event) {
  //   setSerialNumber(event.target.value);
  // }
  const onClickLogin = () => {
    router.push("/login");
  };
  const onClickEmailCheck = async () => {
    setEmailChecked(false);
    const { userEmail } = getValues();

    const emailChecker = await overlapEmail({
      variables: { email: userEmail },
    });
    // console.log(userEmail,emailChecker.data?.overlapEmail);
    if (emailChecker.data?.overlapEmail) {
      setEmailChecked(true);
      alert("사용 가능한 이메일입니다.");
    } else {
      alert("이미 사용중인 이메일입니다.");
    }
  };
  const onClickNicknameCheck = async () => {
    setNicknameChecked(false);
    const { userNickname } = getValues();
    const nicknameChecker = await overlapNickname({
      variables: { nickname: userNickname },
    });
    if (nicknameChecker.data?.overlapNickname) {
      setNicknameChecked(true);
      alert("사용 가능한 닉네임입니다.");
    } else {
      alert("이미 사용중인 닉네임입니다.");
    }
  };
  const onClickSignup = async (signupData) => {
    console.log(signupData);
    if (!emailChecked) {
      alert("이메일 중복확인이 되지 않았습니다.");
      return;
    }
    if (!nicknameChecked) {
      alert("닉네임 중복확인이 되지 않았습니다.");
      return;
    }

    if (!numberChecked) {
      // 가입하기
      alert("휴대폰 인증이 되지 않았습니다.");
      return;
    }
    try {
      await createUser({
        variables: {
          createUserInput: {
            userEmail: signupData.userEmail,
            userPassword: signupData.userPassword,
            userPhone: signupData.userPhone,
            userNickname: signupData.userNickname,
            gender,
            ageGroup,
            prefer: [menuPrefer],
          },
        },
      });
      alert(`${signupData.userNickname}님 가입완료`);
      onClickLogin();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Signup2Presenter
      onClickSignup={onClickSignup}
      onClickGetNumber={onClickGetNumber}
      onClickCheckNumber={onClickCheckNumber}
      onClickLogin={onClickLogin}
      // onChangePhoneNumber={onChangePhoneNumber}
      // onChangeSerialNumber={onChangeSerialNumber}
      onChangeGender={onChangeGender}
      onChangeAge={onChangeAge}
      onChangeMenu={onChangeMenu}
      numberChecked={numberChecked}
      gender={gender}
      genderData={genderData}
      ageGroup={ageGroup}
      ageData={ageData}
      menuData={menuData}
      timer={timer}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      menuPrefer={menuPrefer}
      setMenuPrefer={setMenuPrefer}
      onClickEmailCheck={onClickEmailCheck}
      onClickNicknameCheck={onClickNicknameCheck}
    />
  );
}
