// userInfo container ---김치훈

import UserInfoPresenter from "./userInfo.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_POINT_TRANSACTION, FETCH_USER_LOGGED_IN, FOLLOW_COUNT, UPDATE_PROFILE } from "./userInfo.queries";
import { useRouter } from "next/router";
import { useState } from "react";

// IMP 타입을 이렇게 지정해줍니다.
declare const window: typeof globalThis & {
  IMP: any;
};


export default function UserInfoContainer(){
  const router = useRouter()

  const {data} = useQuery(FETCH_USER_LOGGED_IN)

  // 프로필 사진 수정
  const [fileUrls, setFileUrls] = useState([""]);

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };




  // 자기소개 수정
  const [isUpdate, setIsUpdata] = useState(true)
  const [profile, setProfile] = useState(true)
  const onClickUpdate=()=>{
    setIsUpdata(false);
  }
const onChangeProfile =(event: any)=>{
  setProfile(event.target.value)
  }
  const [updateProfile]= useMutation(UPDATE_PROFILE)
  const onClickUpdateProfile =async ()=>{
    try{
      await updateProfile({
        variables: {
          profile
        },
        refetchQueries: [
          {
            query: FETCH_USER_LOGGED_IN,
          }
        ]
      })
      setIsUpdata(true);
    }
    catch(error: any){
      alert(error.message)
    }
  }
  // 팔로잉, 팔로워 숫자
  const {data: followCountData} = useQuery(FOLLOW_COUNT, {
    variables: {
      followerNickname: data?.fetchUserLoggedIn?.userNickname
    }
  });
  // // 언팔, 팔로우
  // const [follow] = useMutation(FOLLOW);
  // const onClickFollow =()=>{
  //   follow({
  //     variables: {
  //       followerNickname: data?.fetchUserLoggedIn?.userNickname
  //     }
  //   })
  // }


  
  

  
  
  const [chargePrice] = useState(100);
  // 충전
  const [createPointTransaction] = useMutation(CREATE_POINT_TRANSACTION);
  // 충전
  const onClickPoint = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp12511287"); // 예: imp48430943
    // IMP.request_pay(param, callback) // 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "충성",
        amount: chargePrice,
        buyer_email: "rlaclgns321@naver.com",
        buyer_name: `김민영`,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      }, (rsp:any) => {
        // callback
        if (rsp.success) {
          createPointTransaction({
            variables: {
              impUid: rsp.imp_uid,
              amount: 100,
            }
          })
          console.log("충전 완료!");
        } else {
          // 결제 실패 시 로직
          alert(rsp.error_msg);
        }
      }
    );
  };



  // 마이단짠게시글 이동(마이페이지)
  const onClickMyReview = () =>{
    router.push("/mypage")
  }
  // 좋아요한 단짠 게시글 이동
  const onClickLikeAccess = () =>{
    router.push("/mypage/mypagelike")
  }
  // 포인트 상세내역 이동
  const onClickPointAccess = () =>{
    router.push("/mypage/mypagepoint")
  }
  const onClickModify = () =>{
    router.push("/mypage/infomodify")
  }

  return <UserInfoPresenter
    data={data}
    followCountData={followCountData}
    isUpdate={isUpdate}
    fileUrls={fileUrls}
    onChangeFileUrls={onChangeFileUrls}
    onChangeProfile={onChangeProfile}
    onClickUpdate={onClickUpdate}
    onClickUpdateProfile={onClickUpdateProfile}
    onClickModify={onClickModify}
    // onClickFollow={onClickFollow}
    onClickPoint={onClickPoint}
    onClickMyReview={onClickMyReview}
    onClickLikeAccess={onClickLikeAccess}
    onClickPointAccess={onClickPointAccess}
  />
}