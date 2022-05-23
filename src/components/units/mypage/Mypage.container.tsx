// mypage Container --- 김치훈

import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import MyPagePresenterPage from "./Mypage.presenter";
import { CREATE_POINT_TRANSACTION, FETCH_USER } from "./Mypage.queries";


// IMP 타입을 이렇게 지정해줍니다.
declare const window: typeof globalThis & {
  IMP: any;
};


export default function MyPageContainerPage() {
  const [chargePrice] = useState(100);
  const router = useRouter()

  const [createPointTransaction] = useMutation(CREATE_POINT_TRANSACTION);
  const {data} = useQuery(FETCH_USER, {
    variables: {userEmail: "test@test.com"}
  });

  const onClickModify = () =>{
    router.push("/mypage/infomodify")
  }

  
  // 충전
  const onClickPoint = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 예: imp48430943
    // IMP.request_pay(param, callback) // 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "노르웨이 회전 의자",
        amount: chargePrice,
        buyer_email: "rlaclgns321@naver.com",
        buyer_name: `김치훈`,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      }, (rsp:any) => {
        console.log(rsp)
        // callback
        if (rsp.success) {
          createPointTransaction({
            variables: {
              impUid: rsp.imp_uid,
            }
          })
          alert("충전 완료!");
        } else {
          // 결제 실패 시 로직
          alert(rsp.error_msg);
        }
      }
    );
  };


  return <MyPagePresenterPage 
  data={data}
  onClickModify={onClickModify}
  onClickPoint={onClickPoint}
  />;
}
