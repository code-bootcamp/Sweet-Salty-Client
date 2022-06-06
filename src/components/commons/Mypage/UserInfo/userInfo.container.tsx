import UserInfoPresenter from "./userInfo.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  FOLLOW,
  FOLLOW_COUNT,
  FETCH_BOARD_COUNT,
  FETCH_UNREAD_MESSAGE_COUNT,
  UPDATE_PROFILE,
  CREATE_POINT_TRANSACTION,
} from "./userInfo.queries";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FETCH_USER_LOGGED_IN } from "../../../units/mypage/Mypage.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function UserInfoContainer(props: any) {
  const router = useRouter();
  
  // 프로필 이미지 업로드
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

  // 자기소개 업로드
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
  
  // 팔로워, 팔로우
  const [isFollow] = useState(true);
  const [follow] = useMutation(FOLLOW);

  const onClickFollow = async () => {
    try {
      await follow({
        variables: {
          followerNickname: props.User?.fetchUser?.userNickname,
        },
        refetchQueries: [
          {
            query: FOLLOW_COUNT,
            variables: {
              followerNickname: String(props.User?.fetchUser?.userNickname),
            },
          },
        ],
      });
      
      // if (result.data.follow === "팔로우") {
      //   setIsFollow(false);
      // } else if (result.data.follow === "언팔로우") {
      //   setIsFollow(true);
      // }
    } catch (error: any) {
      alert(error.message);
    }
  };
  
  const { data: fetchBoardCountData } = useQuery(FETCH_BOARD_COUNT);
  const { data: fetchUnreadMessageCountData } = useQuery(
    FETCH_UNREAD_MESSAGE_COUNT
  );

  const { data: followCountData } = useQuery(FOLLOW_COUNT, {
    variables: {
      followerNickname: String(props.User?.fetchUser?.userNickname),
    },
  });
  const onClickMyReview = () => {
    router.push(`/${router.query.userNickname}`);
  };
  const onClickMyPoint = () => {
    router.push(`/${router.query.userNickname}/point`);
  };
  const onClickModify = () => {
    router.push(`/${router.query.userNickname}/infomodify`);
  };

  // 쪽지 보내기
  const onClickMessageWrite = () => {
    router.push("/message/write");
  };
  // 쪽지함 이동
  const onClickMessagePage = () => {
    router.push("/message/received");
  };
  

  // 포인트 충전하기
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

  return (
    <UserInfoPresenter
      data={props.User}
      loginUser={props.loginUser}
      isUpdate={isUpdate}
      isFollow={isFollow}

      // 프사 체인지
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      onChangeProfile={onChangeProfile}
      onClickUpdate={onClickUpdate}
      onClickUpdateProfile={onClickUpdateProfile}

      // 마이단짠 숫자
      fetchBoardCountData={fetchBoardCountData}
      // 마이단짠 게시글 이동
      onClickMyReview={onClickMyReview}

      // 팔로우, 팔로잉 숫자
      followCountData={followCountData}
      // 쪽지함 숫자
      fetchUnreadMessageCountData={fetchUnreadMessageCountData}

      // 회원정보 수정 이동
      onClickModify={onClickModify}

      // 쪽지보내기 이동
      onClickMessageWrite={onClickMessageWrite}

      // 포인트 충전하기
      isPoint={isPoint}
      changePoint={changePoint}
      register={register}
      handleSubmit={handleSubmit}
      onClickMyPoint={onClickMyPoint}
      onChangePoint={onChangePoint}
      onClickPointCharge={onClickPointCharge}
      onClickPoint={onClickPoint}

      // 쪽지함 이동
      onClickMessagePage={onClickMessagePage}
      // 팔로워, 팔로우 버튼
      onClickFollow={onClickFollow}
    />
  );
}
