// 결제 상세내역 Component presenter ---김치훈

import { getDate_ } from "../../libraries/date"
import { PointComma } from "../../libraries/point"
import * as S from "./pointdetailscomponent.styles"
import { Modal, Button } from 'antd';
import { useState } from 'react';

export default function PointComponentPresenter (props: any){
  const [visible, setVisible] = useState(false);
  return (
    <S.Wrapper>
      {props.el?.payStatus ==="상품 결제" &&
        <>
          <S.LeftBox>
            <S.StoreImg>
              <S.StoreContents>

                <S.StoreTopBox>
                  <S.EventName>일일특가</S.EventName>
                  <S.LikeIcon src="/images/WhiteHeartIcon.png" />
                </S.StoreTopBox>

              </S.StoreContents>

            </S.StoreImg>

            <S.StoreComments>
              <S.ContentsBox>
                <S.Stock>결제 완료</S.Stock>
                <S.P></S.P> 
                <S.CreateAt>{getDate_(props.el?.createdAt)}</S.CreateAt>
              </S.ContentsBox>

              <S.PayStatus>{props.el?.payStatus} ({props.el?.stock}개)</S.PayStatus>

              <S.ContentsBox>
                <S.ProductStatus>{props.el?.productStatus}</S.ProductStatus>
                <S.P></S.P> 
                <S.Supplier>{props.el?.supplier}</S.Supplier>
              </S.ContentsBox>

            </S.StoreComments>
          </S.LeftBox>
          <S.RightBox>
            <S.RightTopBox>
              <S.PaymentCancel>결제 취소하기</S.PaymentCancel>
              <S.PaymentPoint>-{PointComma(props.el?.paymentAmount)} 포인트 </S.PaymentPoint>
            </S.RightTopBox>
              <Button type="text" shape="circle" size="small" onClick={() => setVisible(true)}>
                <S.BarcodeBox>
                  <S.BarcodeIcon src="/images/Scan.png"/>
                  <S.BarcodeText>{props.el?.Barcode}바코드 받기</S.BarcodeText>
                </S.BarcodeBox>
              </Button>
          </S.RightBox>
          </>
        }
        {props.el?.payStatus ==="포인트 환불" &&
          <>
            <S.LeftBox>
              <S.PointCancelImg>
                <S.PointIcon src="/images/pointicon.png"/>+ 취소{/* 취소, 충전 글자 */}
              </S.PointCancelImg>

              <S.StoreComments>
                <S.ContentsBox>
                  <S.Stock>취소 완료</S.Stock>
                  <S.P></S.P> 
                  <S.CreateAt>{getDate_(props.el?.createdAt)}</S.CreateAt>
                </S.ContentsBox>

                <S.PayStatus>{props.el?.payStatus}</S.PayStatus>

                <S.ContentsBox>
                  <S.PayName>{props.el?.supplier}</S.PayName>
                </S.ContentsBox>

              </S.StoreComments>
            </S.LeftBox>

            <S.PointChargeRightBox>
              <S.PointCancelPoint>-{PointComma(props.el?.paymentAmount)} 포인트 </S.PointCancelPoint>
            </S.PointChargeRightBox>
          </>
        }

        {props.el?.payStatus ==="포인트 충전" &&
          <>
            <S.LeftBox>
              <S.PointChargeImg>
                <S.PointIcon src="/images/pointicon.png"/>+ 충전{/* 취소, 충전 글자 */}
              </S.PointChargeImg>

              <S.StoreComments>
                <S.ContentsBox>
                  <S.Stock>취소 완료</S.Stock>
                  <S.P></S.P> 
                  <S.CreateAt>{getDate_(props.el?.createdAt)}</S.CreateAt>
                </S.ContentsBox>

                <S.PayStatus>{props.el?.payStatus}</S.PayStatus>

                <S.ContentsBox>
                  <S.PayName>{props.el?.supplier}</S.PayName>
                </S.ContentsBox>

              </S.StoreComments>
            </S.LeftBox>

            <S.PointChargeRightBox>
              <S.PaymentCancel onClick={props.onClickPointCancel}>충전 취소하기</S.PaymentCancel>
              <S.PointChargePoint>+{PointComma(props.el?.paymentAmount)} 포인트 </S.PointChargePoint>
            </S.PointChargeRightBox>
          </>
        }

        
      <Modal
        title=""
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={700}
      >
        <S.Barcode src={`https://storage.googleapis.com/image__data/e553e3b7-2aa0-410d-8455-8f2ead0d8a66.jpg`}></S.Barcode>
      </Modal>


    </S.Wrapper>
  )
}