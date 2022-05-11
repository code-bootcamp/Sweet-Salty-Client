import { useEffect, useState } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage(props) {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=5c7f2a4ed139b34fb703d663cc6f45a2&autoload=false&libraries=services";
    // ? & === 쿼리스트링
    document.head.appendChild(script);

    // script가 로드가 되면?
    script.onload = () => {
      // .onload === ~라는 함수를 내가 다시 재정의한다!!!
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const mapOption = {
          // 지도를 생성할 때 필요한 기본 옵션
          // window.kakao === window에서 kakao를 찾게끔 만들어줬습니다.
          center: new window.kakao.maps.LatLng(
            37.484820882502504,
            126.89621040296032
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        // 담지 않아도 되는데 map에 담은 이유는 나중에 map을 가지고 스타일 등등을 관리하기 위해 담아놓겠습니다.
        const map = new window.kakao.maps.Map(container, mapOption); // 지도 생성 및 객체 리턴
      });
    };
  }, []);

  return (
    <>
      <div id="map" style={{ width: 1000, height: 700 }}></div>
    </>
  );
}
