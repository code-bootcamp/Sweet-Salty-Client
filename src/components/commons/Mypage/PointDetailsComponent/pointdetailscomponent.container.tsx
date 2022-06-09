// 결제 상세내역 Component container ---김치훈

import { useMutation } from "@apollo/client";
import { FETCH_PAYMENT_HISTORY } from "../../../units/mypage/mypagepoint/MypagePoint.queries";
import PointComponentPresenter from "./pointdetailscomponent.presenter";
import { CANCEL_POINT_TRANSACTION } from "./pointdetailscomponent.queries";
import { Modal } from 'antd';

export default function PointComponentContainer(props: any) {
  const [cancelPointTransaction] = useMutation(CANCEL_POINT_TRANSACTION);

  const onClickPointCancel = async () => {
    try {
      await cancelPointTransaction({
        variables: {
          impUid: String(props.el.impUid),
          amount: 0,
          reason: "내 맘!!!",
        },
        refetchQueries: [{ query: FETCH_PAYMENT_HISTORY }],
      });
      Modal.success({
        content: '취소 완료!',
      });
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <PointComponentPresenter
      el={props.el}
      onClickPointCancel={onClickPointCancel}
    />
  );
}
