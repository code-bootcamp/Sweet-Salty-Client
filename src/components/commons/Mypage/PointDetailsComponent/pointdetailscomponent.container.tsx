// 결제 상세내역 Component container ---김치훈

import { useMutation } from "@apollo/client";
import PointComponentPresenter from "./pointdetailscomponent.presenter";
import { CANCEL_POINT_TRANSACTION } from "./pointdetailscomponent.queries";

export default function PointComponentContainer (props: any){

  const [cancelPointTransaction]= useMutation(CANCEL_POINT_TRANSACTION)

  const onClickPaymentCancel =async ()=>{
    try {
      await cancelPointTransaction ({
        variables : {
          ImpUid: "",
          amount: 0,
          reason: "내 맘!!!"
        }
      })
    }
    catch(error: any){
      alert(error.message)
    }
  }

  return <PointComponentPresenter
    el={props.el}
    onClickPaymentCancel={onClickPaymentCancel}
  />
}