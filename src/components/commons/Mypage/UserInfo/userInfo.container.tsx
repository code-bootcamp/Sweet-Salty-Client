import UserInfoPresenter from "./userInfo.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_POINT_TRANSACTION,
  FETCH_BOARD_COUNT,
  FETCH_UNREAD_MESSAGE_COUNT,
  FETCH_USER_LOGGED_IN,
  FOLLOW_COUNT,
  UPDATE_PROFILE,
} from "./userInfo.queries";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function UserInfoContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const [fileUrls, setFileUrls] = useState([""]);

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const [isUpdate, setIsUpdata] = useState(true);
  const [profile, setProfile] = useState(true);
  const onClickUpdate = () => {
    setIsUpdata(false);
  };
  const onChangeProfile = (event: any) => {
    setProfile(event.target.value);
  };
  const [updateProfile] = useMutation(UPDATE_PROFILE);
  const onClickUpdateProfile = async () => {
    if (!profile) {
      alert("입력해라!");
      setIsUpdata(true);
      return;
    }
    if (profile) {
      try {
        await updateProfile({
          variables: {
            profile,
          },
          refetchQueries: [
            {
              query: FETCH_USER_LOGGED_IN,
            },
          ],
        });
        setIsUpdata(true);
      } catch (error: any) {
        alert(error.message);
      }
    }
  };

  const [isPoint, setIsPoint] = useState(true);
  const [changePoint, setChangePoint] = useState("");

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onClickPointCharge = () => {
    setIsPoint((prev) => !prev);
  };

  const onChangePoint = (event: any) => {
    setChangePoint(event.target.value);
  };

  const [createPointTransaction] = useMutation(CREATE_POINT_TRANSACTION);
  const onClickPoint = () => {
    const IMP = window.IMP;
    IMP.init("imp12511287");
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "포인트 충전",
        amount: changePoint,
        buyer_email: "rlaclgns321@naver.com",
        buyer_name: `김민영`,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      (rsp: any) => {
        if (rsp.success) {
          createPointTransaction({
            variables: {
              impUid: rsp.imp_uid,
              amount: Number(changePoint),
            },
          });
          alert("충전 완료!");
        } else {
          alert(rsp.error_msg);
        }
      }
    );
  };

  const { data: fetchBoardCountData } = useQuery(FETCH_BOARD_COUNT);
  const { data: fetchUnreadMessageCountData } = useQuery(
    FETCH_UNREAD_MESSAGE_COUNT
  );
  const { data: followCountData } = useQuery(FOLLOW_COUNT, {
    variables: {
      followerNickname: String(data?.fetchUserLoggedIn?.userNickname),
    },
  });
  const onClickMyReview = () => {
    router.push("/mypage");
  };
  const onClickMessagePage = () => {
    router.push("/message/received");
  };
  const onClickMyPoint = () => {
    router.push("/mypage/mypagepoint");
  };
  const onClickModify = () => {
    router.push("/mypage/infomodify");
  };

  return (
    <UserInfoPresenter
      data={data}
      followCountData={followCountData}
      fetchBoardCountData={fetchBoardCountData}
      fetchUnreadMessageCountData={fetchUnreadMessageCountData}
      isUpdate={isUpdate}
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      onChangeProfile={onChangeProfile}
      onClickUpdate={onClickUpdate}
      onClickUpdateProfile={onClickUpdateProfile}
      onClickMyReview={onClickMyReview}
      onClickModify={onClickModify}
      onClickMessagePage={onClickMessagePage}
      register={register}
      handleSubmit={handleSubmit}
      onClickMyPoint={onClickMyPoint}
      onChangePoint={onChangePoint}
      changePoint={changePoint}
      isPoint={isPoint}
      onClickPointCharge={onClickPointCharge}
      onClickPoint={onClickPoint}
    />
  );
}
