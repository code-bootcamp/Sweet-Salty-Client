import { useEffect, useState } from "react";
import * as S from "./DetailMap.styled";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function DetailMapPage(props) {
  console.log("이거다", props.address);
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    setIsLoad(true);
  }, [props.address]);

  useEffect(() => {
    if (!isLoad) return;
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=f487080ea91748abbd2e3df735d5af4c&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 표시할 div

        const option = {
          center: new window.kakao.maps.LatLng(
            Number(props.address.place.lng),
            Number(props.address.place.lat)
          ), // 지도의 중심좌표
          level: 2, // 지도의 확대 레벨
        };

        const map = new window.kakao.maps.Map(container, option); // 지도를 생성합니다

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          Number(props.address.place.lng),
          Number(props.address.place.lat)
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        const iwContent = `<div style="padding:5px;">
        ${props.address.place.placeName}
        </div>`;
        const iwPosition = new window.kakao.maps.LatLng(
          Number(props.address.place.lng),
          Number(props.address.place.lat)
        ); // 인포윈도우 표시 위치입니다

        const infowindow = new window.kakao.maps.InfoWindow({
          position: iwPosition,
          content: iwContent,
        });
        infowindow.open(map, marker);
      });
    };
  }, [props.address]);

  return (
    <div
      id="map"
      style={{ width: "100%", height: "100%", borderRadius: "20px" }}
    ></div>
  );
}
