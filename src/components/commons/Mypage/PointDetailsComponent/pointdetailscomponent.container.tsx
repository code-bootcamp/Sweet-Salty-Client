// 결제 상세내역 Component container ---김치훈

import { useMutation } from "@apollo/client";
import PointComponentPresenter from "./pointdetailscomponent.presenter";
import { CANCEL_POINT_TRANSACTION } from "./pointdetailscomponent.queries";

export default function PointComponentContainer (props: any){
  console.log(props.el.impUid)

  const [cancelPointTransaction]= useMutation(CANCEL_POINT_TRANSACTION)

  const onClickPointCancel = async ()=>{
    try {
      await cancelPointTransaction ({
        variables: {
          impUid: String(props.el.impUid),
          amount: 0,
          reason: "내 맘!!!"
        }
      })
      alert("취소 완료")  
    }
    catch(error: any){
      alert(error.message)
    }
  }

  return <PointComponentPresenter
    el={props.el}
    onClickPointCancel={onClickPointCancel}
  />
}