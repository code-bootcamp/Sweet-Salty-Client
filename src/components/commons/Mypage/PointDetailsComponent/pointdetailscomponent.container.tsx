// 결제 상세내역 Component container ---김치훈

import PointComponentPresenter from "./pointdetailscomponent.presenter";

export default function PointComponentContainer (props: any){


  return <PointComponentPresenter
    el={props.el}
  />
}