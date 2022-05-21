import { useEffect, useState } from "react";
import * as S from "./WriteMap.styled";
import { CaretRightFilled, CaretLeftFilled } from "@ant-design/icons";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function WriteMap() {
  // props로 내릴 거임
  const [address, setAddress] = useState();
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=f487080ea91748abbd2e3df735d5af4c&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        // 마커를 담을 배열입니다
        let markers = [];

        // 지도를 표시할 div
        const container = document.getElementById("map");
        const options = {
          // 지도 중심 좌표
          center: new window.kakao.maps.LatLng(38.2313466, 128.2139293),
          // 지도 확대 레벨
          level: 3,
        };
        // 지도 생성
        const map = new window.kakao.maps.Map(container, options);

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          38.2313466,
          128.2139293
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 장소 검색 객체를 생성합니다
        const ps = new window.kakao.maps.services.Places();

        // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
        const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

        const searchForm = document.getElementById("form");
        searchForm.addEventListener("submit", function (e) {
          e.preventDefault();
          // 키워드로 장소를 검색합니다
          searchPlaces();
        });

        // 키워드 검색을 요청하는 함수입니다
        function searchPlaces() {
          const keyword = document.getElementById("keyword").value;

          if (!keyword.replace(/^\s+|\s+$/g, "")) {
            alert("키워드를 입력해주세요!");
            return false;
          }

          // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
          ps.keywordSearch(keyword, placesSearchCB);
        }

        // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
        function placesSearchCB(data, status, pagination) {
          if (status === window.kakao.maps.services.Status.OK) {
            // 정상적으로 검색이 완료됐으면
            // 검색 목록과 마커를 표출합니다
            displayPlaces(data);

            // 페이지 번호를 표출합니다
            displayPagination(pagination);

            const bounds = new window.kakao.maps.LatLngBounds();
            for (let i = 0; i < data.length; i++) {
              displayMarker(data[i]);
              bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
            }

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds);
          } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
            alert("검색 결과가 존재하지 않습니다.");
            return;
          } else if (status === window.kakao.maps.services.Status.ERROR) {
            alert("검색 결과 중 오류가 발생했습니다.");
            return;
          }
        }

        function displayMarker(place) {
          // 마커를 생성하고 지도에 표시합니다
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(place.y, place.x),
          });
          // 마커에 클릭이벤트를 등록합니다
          window.kakao.maps.event.addListener(
            marker,
            "click",
            function (mouseEvent) {
              // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
              setAddress(place);
              infowindow.setContent(`
              <span>
              ${place.place_name}
              </span>
              `);
              infowindow.open(map, marker);
              const moveLatLon = new window.kakao.maps.LatLng(place.y, place.x);
              map.panTo(moveLatLon);
            }
          );
        }

        // 검색 결과 목록과 마커를 표출하는 함수입니다
        function displayPlaces(places) {
          const listEl = document.getElementById("placesList");
          const menuEl = document.getElementById("menu_wrap");
          const fragment = document.createDocumentFragment();
          const bounds = new window.kakao.maps.LatLngBounds();
          const listStr = "";
          // 검색 결과 목록에 추가된 항목들을 제거합니다
          removeAllChildNods(listEl);
          // 지도에 표시되고 있는 마커를 제거합니다
          removeMarker();
          for (let i = 0; i < places.length; i++) {
            // 마커를 생성하고 지도에 표시합니다
            const placePosition = new window.kakao.maps.LatLng(
              places[i].y,
              places[i].x
            );
            const marker = addMarker(placePosition, i);
            const itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            bounds.extend(placePosition);
            // 마커와 검색결과 항목에 mouseover 했을때
            // 해당 장소에 인포윈도우에 장소명을 표시합니다
            // mouseout 했을 때는 인포윈도우를 닫습니다
            (function (marker, title) {
              window.kakao.maps.event.addListener(
                marker,
                "mouseover",
                function () {
                  displayInfowindow(marker, title);
                }
              );

              window.kakao.maps.event.addListener(
                marker,
                "mouseout",
                function () {
                  infowindow.close();
                }
              );

              itemEl.addEventListener("click", function (e) {
                displayInfowindow(marker, title);
                setAddress(places[i]);
                // console.log(places[i]);
                map.panTo(placePosition);
              });
            })(marker, places[i].place_name);

            fragment.appendChild(itemEl);
          }

          // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
          listEl.appendChild(fragment);
          menuEl.scrollTop = 0;

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.panTo(bounds);
        }

        // 검색결과 항목을 Element로 반환하는 함수입니다
        function getListItem(index, places) {
          const el = document.createElement("li");

          let itemStr =
            '<span class="markerbg marker_' +
            (index + 1) +
            '"></span>' +
            '<div class="info">' +
            "   <h5>" +
            places.place_name +
            "</h5>";

          if (places.road_address_name) {
            itemStr +=
              "    <span>" +
              places.road_address_name +
              "</span>" +
              '   <span class="jibun gray">' +
              `<img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_jibun.png">
              </img>` +
              places.address_name +
              "</span>";
          } else {
            itemStr += "    <span>" + places.address_name + "</span>";
          }

          itemStr +=
            '  <span class="tel">' + places.phone + "</span>" + "</div>";

          el.innerHTML = itemStr;
          el.className = "item";

          return el;
        }

        // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
        function addMarker(position, idx) {
          const imageSrc =
            "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png"; // 마커 이미지 url, 스프라이트 이미지를 씁니다
          const imageSize = new window.kakao.maps.Size(36, 37); // 마커 이미지의 크기
          const imgOptions = {
            spriteSize: new window.kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
            spriteOrigin: new window.kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
            offset: new window.kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
          };

          const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imgOptions
          );

          const marker = new window.kakao.maps.Marker({
            position: position, // 마커의 위치
            image: markerImage,
          });

          marker.setMap(map); // 지도 위에 마커를 표출합니다
          markers.push(marker); // 배열에 생성된 마커를 추가합니다

          return marker;
        }

        // 지도 위에 표시되고 있는 마커를 모두 제거합니다
        function removeMarker() {
          for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
          }
          markers = [];
        }

        // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
        function displayPagination(pagination) {
          const paginationEl = document.getElementById("pagination");
          const fragment = document.createDocumentFragment();
          // i;

          // 기존에 추가된 페이지번호를 삭제합니다
          while (paginationEl.hasChildNodes()) {
            paginationEl.removeChild(paginationEl.lastChild);
          }

          for (let i = 1; i <= pagination.last; i++) {
            const el = document.createElement("a");
            el.href = "#";
            el.innerHTML = i;

            if (i === pagination.current) {
              el.className = "on";
            } else {
              el.onclick = (function (i) {
                return function () {
                  pagination.gotoPage(i);
                };
              })(i);
            }

            fragment.appendChild(el);
          }
          paginationEl.appendChild(fragment);
        }

        // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
        // 인포윈도우에 장소명을 표시합니다
        function displayInfowindow(marker, title) {
          const content =
            '<div style="padding:5px;z-index:1;">' + title + "</div>";

          infowindow.setContent(content);
          infowindow.open(map, marker);
        }

        // 검색결과 목록의 자식 Element를 제거하는 함수입니다
        function removeAllChildNods(el) {
          while (el.hasChildNodes()) {
            el.removeChild(el.lastChild);
          }
        }
      });
    };
  }, []);

  // props로 내릴 거임
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const onchangeSearch = (event) => {
    setSearch(event?.target.value);
  };

  const onClickSearchBarOpen = () => {
    setIsOpen(!isOpen);
  };

  console.log(address);
  return (
    <S.MapSection className="map_wrap" isOpen={isOpen}>
      <div id="map"></div>

      <div id="menuDiv">
        <div id="menu_wrap" className="bg_white">
          <div className="option">
            <div>
              <div id="map_title">
                <div>단짠맛집</div>
              </div>

              <form id="form">
                <input
                  type="text"
                  value={search}
                  id="keyword"
                  onChange={onchangeSearch}
                />
                <button id="submit_btn" type="submit">
                  <S.SearchIcon />
                </button>
              </form>
            </div>
          </div>

          <ul id="placesList"></ul>
          <div id="pagination"></div>
        </div>

        <div id="btnDiv">
          {isOpen ? (
            <button id="searchBtn" onClick={onClickSearchBarOpen}>
              <S.LeftDisplayButton />
            </button>
          ) : (
            <button id="searchBtn" onClick={onClickSearchBarOpen}>
              <S.RightDisplayButton />
            </button>
          )}
        </div>
      </div>
    </S.MapSection>
  );
}
