// userInfo container ---김치훈

import MypageUserInfoPresenter from "./userInfo.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_POINT_TRANSACTION, FETCH_USER } from "./userInfo.queries";
import { useRouter } from "next/router";
import { useState } from "react";

// IMP 타입을 이렇게 지정해줍니다.
declare const window: typeof globalThis & {
  IMP: any;
};


export default function MypageUserInfoContainer(){
  const [chargePrice] = useState(100);
  const router = useRouter()

  const onClickModify = () =>{
    router.push("/mypage/infomodify")
  }

  
  const [createPointTransaction] = useMutation(CREATE_POINT_TRANSACTION);
  const {data} = useQuery(FETCH_USER, {
    variables: {userEmail: "test@test.com"}
  });

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


  return <MypageUserInfoPresenter
    data={data}
    onClickModify={onClickModify}
    onClickPoint={onClickPoint}
  />
}