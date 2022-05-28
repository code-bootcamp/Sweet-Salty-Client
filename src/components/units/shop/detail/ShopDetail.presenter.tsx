import DetailMapPage from "../../../commons/detailMap/DetailMap.index";
import * as S from "./ShopDetail.styled";

export default function ShopDetailPresenterPage(props) {
  console.log("이얏호", props.fetchShop?.fetchShop.place.lat.length);
  return (
    <S.Page>
      {/* 타이틀 */}
      <S.TitleSection>
        단짝 스토어 <S.RightOutline />{" "}
        {props.fetchShop?.fetchShop.shopProductName} ㅣ{" "}
        {props.fetchShop?.fetchShop.shopSeller}
      </S.TitleSection>
      <S.Main>
        <S.Padding>
          {/* 메인페이지 */}
          <S.MainSection>
            {/* 좌측 */}
            <S.MainLeftSection>
              {/* 상단 사진, Info */}
              <S.LeftTopInfoArticle>
                {/* 프로필 사진 */}
                <S.Thumbnail
                  style={{
                    backgroundImage: `url(${props.fetchShop?.fetchShop.thumbnail})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    objectFit: "cover",
                    overflow: "hidden",
                  }}
                ></S.Thumbnail>
                {/* Info */}
                <S.InfoSection>
                  {/* 식당명 */}
                  <S.ShopNameArticle>
                    {props.fetchShop?.fetchShop.shopProductName} ㅣ{" "}
                    {props.fetchShop?.fetchShop.shopSeller} 식사권
                  </S.ShopNameArticle>
                  {/* 상품설명 */}
                  <S.ShopDescriptionArticle>
                    {props.fetchShop?.fetchShop.shopDescription}
                  </S.ShopDescriptionArticle>
                  {/* 가격 */}
                  <S.PriceArticle>
                    {/* 원가 */}
                    <S.OriginalPriceArticle>
                      {props.fetchShop?.fetchShop.shopOriginalPrice}원
                    </S.OriginalPriceArticle>
                    {/* 할인 */}
                    <S.DiscountedPriceSection>
                      <S.DiscountedRate>
                        {props.fetchShop?.fetchShop.shopDisCount}%
                      </S.DiscountedRate>
                      <S.DiscountedPrice>
                        {props.fetchShop?.fetchShop.shopDisCountPrice}
                      </S.DiscountedPrice>
                      <S.DiscountedPriceWon>원</S.DiscountedPriceWon>
                    </S.DiscountedPriceSection>
                  </S.PriceArticle>
                  <S.CountButtonArticle>
                    {/* 수량 */}
                    <S.CountButton onClick={props.buyAmountMinus}>
                      -
                    </S.CountButton>
                    <S.Count>{props.buyAmount}</S.Count>
                    <S.CountButton onClick={props.buyAmountPlus}>
                      +
                    </S.CountButton>
                  </S.CountButtonArticle>
                  <S.StockArticle>
                    {/* 재고 */}
                    <S.StockText>재고 현황 : </S.StockText>
                    <S.StockText>
                      {props.fetchShop?.fetchShop.shopStock}개
                    </S.StockText>
                  </S.StockArticle>
                  {/* TMI */}
                  <S.GuideMessageSection>
                    본 식사권은 구매 후 마이페이지의 포인트 상세 내역에서
                    바코드를 받을 수 있습니다.
                  </S.GuideMessageSection>
                </S.InfoSection>
              </S.LeftTopInfoArticle>
              {/* 하단 설명 */}
              <S.LeftBottomInfoArticle>
                <div>
                  {/* 설명탭 */}
                  {/* 이용 안내 */}
                  <S.ProductSmallSection>
                    <S.DetailProductTitleSection>
                      이용안내
                    </S.DetailProductTitleSection>

                    <S.ProductSmallContentsArticle>
                      <S.DetailProductInfoSection>
                        <S.ProductSmallContents>
                          {" "}
                          &#91;사용처&#93;{" "}
                        </S.ProductSmallContents>
                        <S.ProductSmallContents>
                          - 해당 지역 음식점
                        </S.ProductSmallContents>
                      </S.DetailProductInfoSection>

                      <S.DetailProductInfoSection>
                        <S.ProductSmallContents>
                          &#91;유의사항&#93;
                        </S.ProductSmallContents>
                        <S.ProductSmallContents>
                          - 본 식사권은 가게에서 이용 시 통신사 할인 및 적립이
                          불가능합니다.
                        </S.ProductSmallContents>
                        <S.ProductSmallContents>
                          - 본 식사권은 기타 할인쿠폰과 같이 사용이
                          불가능합니다.
                        </S.ProductSmallContents>
                        <S.ProductSmallContents>
                          - 본 식사권은 현금과 교환되지 않습니다.
                        </S.ProductSmallContents>
                        <S.ProductSmallContents>
                          - 사용 후 잔액은 상품권 유효기간 내 사용 가능합니다.
                        </S.ProductSmallContents>
                      </S.DetailProductInfoSection>

                      <S.DetailProductInfoSection>
                        <S.ProductSmallContents>
                          &#91;결제방법&#93;
                        </S.ProductSmallContents>
                        <S.ProductSmallContents>
                          - 메뉴 바코드 스캔 &gt; 식사권 바코드 스캔 &gt;
                          결제완료
                        </S.ProductSmallContents>
                        <S.ProductSmallContents>
                          - 바코드 인식이 안될 경우, 바코드 하단의 번호를
                          입력하여 결제 가능합니다.
                        </S.ProductSmallContents>
                      </S.DetailProductInfoSection>

                      <S.DetailProductInfoSection>
                        <S.ProductSmallContents>
                          &#91;이용 관련 문의처&#93;
                        </S.ProductSmallContents>
                        <S.ProductSmallContents>
                          - 단짠맛집 고객센터: 010-0000-0000
                        </S.ProductSmallContents>
                        <S.ProductSmallContents>
                          &#8251;운영시간 : 평일 10:00 ~ 18:00 &#40;주말 및
                          공휴일 상담 불가&#41;
                        </S.ProductSmallContents>
                      </S.DetailProductInfoSection>
                    </S.ProductSmallContentsArticle>
                  </S.ProductSmallSection>
                </div>
              </S.LeftBottomInfoArticle>
              {/* 지도 */}
              <S.MapSection>
                <S.MapTitleArticle>이용 식당 위치</S.MapTitleArticle>
                <S.MapArticle>
                  {props.fetchShop?.fetchShop.place.lat.length ? (
                    <DetailMapPage address={props?.fetchShop?.fetchShop} />
                  ) : (
                    <div>잠시만요</div>
                  )}
                </S.MapArticle>
              </S.MapSection>
            </S.MainLeftSection>
            {/* 우측 */}
          </S.MainSection>
        </S.Padding>

        <S.MainRightSection>
          {/* 타이틀 */}
          <S.RightTitleArticle>포인트 결제 상세</S.RightTitleArticle>
          {/* 결제 상세 */}
          <div>
            {/* 보유포인트 */}
            <S.RightSection>
              <div>
                <S.UserNameSection>
                  <S.UserName>주혜&nbsp;</S.UserName>
                  <S.RightText>단짝님의</S.RightText>
                </S.UserNameSection>
                <S.RightText>현재 보유 포인트</S.RightText>
              </div>
              <S.RightTextOrange>
                {props.fetchUserLoggedIn?.fetchUserLoggedIn.userPoint}
              </S.RightTextOrange>
            </S.RightSection>
            {/* 상품 금액 */}
            <S.RightSection>
              <S.RightText>식사권 금액</S.RightText>
              <S.PriceText>
                {props.fetchShop?.fetchShop.shopDisCountPrice}
              </S.PriceText>
            </S.RightSection>
            {/* 선택 수량 */}
            <S.RightSection>
              <S.RightText>선택한 수량</S.RightText>
              <S.AmountText>{props.buyAmount} 개</S.AmountText>
            </S.RightSection>
            {/* 차감될 포인트 */}
            <S.RightSection>
              <S.RightText>차감될 포인트</S.RightText>
              <S.AmountPoint>
                {props.amountPoint ? (
                  -props.amountPoint
                ) : (
                  <div>수량을 선택해주세요</div>
                )}
              </S.AmountPoint>
            </S.RightSection>
            {/* 잔여 포인트 */}
            <S.RightSection>
              {props.remainPoint < 0 ? (
                <S.RightText>필요한 포인트</S.RightText>
              ) : (
                <S.RightText>잔여 포인트</S.RightText>
              )}
              <S.RemainPoint>
                {props.remainPoint !==
                  props.fetchUserLoggedIn?.fetchUserLoggedIn.userPoint ||
                props.remainPoint <= 0 ? (
                  props.remainPoint
                ) : (
                  <div>수량을 선택해주세요</div>
                )}
              </S.RemainPoint>
            </S.RightSection>

            {/* 구매하기 버튼 */}
            <S.BuyButonSection>
              {props.remainPoint >= 0 && props.buyAmount !== 0 ? (
                <S.BuyButton
                  amountPoint={props.amountPoint}
                  disabled={props.amountPoint === 0}
                >
                  <S.ButtonImage src="/images/Bag.png" />
                  구매하기
                </S.BuyButton>
              ) : (
                <S.ChargeButton>
                  <S.ButtonImage src="/images/Point.png" />
                  포인트 충전하기
                </S.ChargeButton>
              )}
            </S.BuyButonSection>
          </div>
        </S.MainRightSection>
      </S.Main>
    </S.Page>
  );
}
