import * as S from "./ShopDetail.styled";

export default function ShopDetailPresenterPage(props) {
  return (
    <div>
      <div>
        {/* 타이틀 */}
        <div>
          단짝 스토어 <S.RightOutline /> 메뉴명 ㅣ 가게명
        </div>
        {/* 메인페이지 */}
        <div>
          {/* 좌측 */}
          <div>
            {/* 상단 사진, Info */}
            <div>
              {/* 프로필 사진 */}
              <div></div>
              {/* Info */}
              <div>
                {/* 식당명 */}
                <div></div>
                {/* 가격 */}
                <div></div>
              </div>
            </div>
          </div>
          {/* 우측 */}
          <div></div>
        </div>
      </div>
    </div>
  );
}
