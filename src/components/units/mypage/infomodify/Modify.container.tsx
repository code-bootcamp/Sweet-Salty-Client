import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ModifyPresenterPage from "./Modify.presenter";
import { UPDATE_USER } from "./Modify.queries";

export default function ModifyContainerPage() {
  const [updateUser] = useMutation(UPDATE_USER);
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [menu, setMenu] = useState([]);

  const router = useRouter();
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const [genderData, setGenderData] = useState([
    { key: "0", value: "PRIVATE", checked: false, index: 0, name: "비공개" },
    { key: "1", value: "MALE", checked: false, index: 1, name: "남성" },
    { key: "2", value: "FEMALE", checked: false, index: 2, name: "여성" },
  ]);
  const [ageData, setAgeData] = useState([
    { key: "0", value: "NONE", checked: false, index: 0, name: "비공개" },
    { key: "1", value: "TEN", checked: false, index: 1, name: "10대" },
    { key: "2", value: "TWENTY", checked: false, index: 2, name: "20대" },
    { key: "3", value: "THIRTY", checked: false, index: 3, name: "30대" },
    { key: "4", value: "FORTY", checked: false, index: 4, name: "40대" },
    { key: "5", value: "FIFTY", checked: false, index: 5, name: "50대 이상" },
  ]);
  const [menuData, setMenuData] = useState([
    { key: "0", value: "비건", checked: false, index: 0 },
    { key: "1", value: "아시안푸드", checked: false, index: 1 },
    { key: "2", value: "양식", checked: false, index: 2 },
    { key: "3", value: "일식", checked: false, index: 3 },
    { key: "4", value: "중식", checked: false, index: 4 },
    { key: "5", value: "한식", checked: false, index: 5 },
    { key: "6", value: "할랄", checked: false, index: 6 },
  ]);

  const onChangeCheckGender = (el: any) => (event: any) => {
    const select = genderData.map((el, idx) => {
      return { ...el, checked: idx === Number(event.target.id) };
    });
    setGenderData(select);

    setGender(el.value);
  };

  const onChangeCheckAge = (el: any) => (event: any) => {
    const select = ageData.map((el, idx) => {
      return { ...el, checked: idx === Number(event.target.id) };
    });
    setAgeData(select);

    setAge(el.value);
  };

  const onChangeCheckMenu = (el: any) => (event: any) => {
    const select = menuData.map((el, idx) => {
      return { ...el, checked: idx === Number(event.target.id) };
    });
    setMenuData(select);

    setMenu([el.value]);
  };

  const onClickModify = async (data: any) => {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            userPassword: data.userPassword,
            userPhone: data.userPhone,
            userNickname: data.userNickname,
            gender,
            ageGroup: age,
            prefer: menu,
          },
        },
      });
      alert("회원 정보가 수정되었습니다.");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onClickBack = () => {
    router.back();
  };

  return (
    <ModifyPresenterPage
      onClickBack={onClickBack}
      onClickModify={onClickModify}
      handleSubmit={handleSubmit}
      register={register}
      genderData={genderData}
      onChangeCheckGender={onChangeCheckGender}
      ageData={ageData}
      onChangeCheckAge={onChangeCheckAge}
      menuData={menuData}
      onChangeCheckMenu={onChangeCheckMenu}
    />
  );
}
