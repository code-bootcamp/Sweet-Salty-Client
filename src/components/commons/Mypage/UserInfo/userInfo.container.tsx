// 마이페이지 유저 정보 container ---김치훈

import UserInfoPresenter from "./userInfo.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_POINT_TRANSACTION, FETCH_BOARD_COUNT, FETCH_RECEIVED_MESSAGES_COUNT, FETCH_UNREAD_MESSAGE_COUNT, FETCH_USER_LOGGED_IN, FOLLOW_COUNT, UPDATE_PROFILE } from "./userInfo.queries";
import { useRouter } from "next/router";
import { useState } from "react";

// IMP 타입을 이렇게 지정해줍니다.
declare const window: typeof globalThis & {
  IMP: any;
};


export default function UserInfoContainer(){
  const [isPoint, setIsPoint] =useState(true)
  const [changePoint, setChangePoint] =useState("")


  const onClickPointCharge =()=>{
    setIsPoint(prev=>(!prev))
  }

  const onChangePoint =(event: any)=>{
    setChangePoint(event.target.value)
  }

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
  // 마이 단짠 숫자
  const {data: fetchBoardCountData} = useQuery(FETCH_BOARD_COUNT)
  // 쪽지함 안 읽은 쪽지 갯수
  const {data: fetchReceivedMessagesCountData} = useQuery(FETCH_RECEIVED_MESSAGES_COUNT)
  // 쪽지함 안 읽은 쪽지 갯수
  const {data: fetchUnreadMessageCountData} = useQuery(FETCH_UNREAD_MESSAGE_COUNT)
  // 팔로잉, 팔로워 숫자
  const {data: followCountData} = useQuery(FOLLOW_COUNT, {
    variables: {
      followerNickname: String(data?.fetchUserLoggedIn?.userNickname)
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
        name: "포인트 충전",
        amount: changePoint,
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
  // 받은 쪽지함 상세내역 이동
  const onClickMessagePage = () =>{
    router.push("/message/received")
  }
  // 포인트 상세내역 이동
  const onClickMyPoint = () =>{
    router.push("/mypage/mypagepoint")
  }
  // 회원정보 수정
  const onClickModify = () =>{
    router.push("/mypage/infomodify")
  }

  return <UserInfoPresenter
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
    onClickMyPoint={onClickMyPoint}
    // onClickFollow={onClickFollow}
    onChangePoint={onChangePoint}
    changePoint={changePoint}
    isPoint={isPoint}
    onClickPointCharge={onClickPointCharge}
    onClickPoint={onClickPoint}
  />
}