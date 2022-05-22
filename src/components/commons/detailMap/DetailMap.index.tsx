import { useEffect, useState } from "react";
import * as S from "./DetailMap.styled";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function DetailMapPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=f487080ea91748abbd2e3df735d5af4c&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 표시할 div

        const option = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 2, // 지도의 확대 레벨
        };

        const map = new window.kakao.maps.Map(container, option); // 지도를 생성합니다

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        const iwContent =
          '<div style="padding:5px;">Hello World! <br><a href="https://map.kakao.com/link/map/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">큰지도보기</a> </div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        const iwPosition = new window.kakao.maps.LatLng(33.450701, 126.570667); // 인포윈도우 표시 위치입니다

        const infowindow = new window.kakao.maps.InfoWindow({
          position: iwPosition,
          content: iwContent,
        });
        infowindow.open(map, marker);
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };
  }, []);

  return <div id="map" style={{ width: "350px", height: "350px" }}></div>;
}
