---
title: "GeolocationCoordinates: longitude 속성"
short-title: longitude
slug: Web/API/GeolocationCoordinates/longitude
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

Geolocation API

GeolocationCoordinates 인터페이스의 읽기 전용 **`longitude`** 속성은 위치의 경도를 십진수 도(°, DD)로 나타낸 숫자입니다. `GeolocationCoordinates` 객체는 측정 시간을 나타내는 밀리초 [Unix 시간](/ko/docs/Glossary/Unix_time)의 타임스탬프와 함께 GeolocationPosition 인터페이스를 구성하며, `GeolocationPosition`은 Geolocation API에서 지리적 위치를 반환하는 함수들의 반환 타입입니다.

## 값

`longitude`의 값은 `Coordinates` 객체가 나타내는 지구상 위치의 경도를 십진수 도(°, DD)로 나타낸 숫자입니다. 이 값은 World Geodetic System 1984 명세 (WGS 84)가 정의합니다.

> [!NOTE]
> 0°의 본초 자오선은 대부분의 사람들이 알고 있는 [그리니치 자오선](https://ko.wikipedia.org/wiki/그리니치_자오선)과 정확히 일치하지는 않습니다. 0°는 [IERS 기준 자오선](https://en.wikipedia.org/wiki/IERS_Reference_Meridian)으로, 그리니치 자오선에서 5.3 [아크초](https://en.wikipedia.org/wiki/Arcseconds)(102미터) 동쪽에 위치합니다. 이 표준은 [GPS](https://ko.wikipedia.org/wiki/GPS)가 사용하는 것과 같습니다.

## 예제

다음의 간단한 예제에서는 사용자의 위치를 가져와서 그 좌표를 출력합니다.

### JavaScript

아래 JavaScript 코드는 사용자가 버튼을 클릭하면 위치 정보를 가져와서 출력하는 이벤트 수신기를 생성합니다.

```js
let button = document.getElementById("get-location");
let latText = document.getElementById("latitude");
let longText = document.getElementById("longitude");

button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    latText.innerText = lat.toFixed(2);
    longText.innerText = long.toFixed(2);
  });
});
```

버튼과 위도/경도를 각각 표시할 두 요소에 대한 참조를 쉽게 하기 위해 변수를 설정한 후, button의 addEventListener()를 호출해서 이벤트 수신기는 부착하는 모습입니다. 사용자가 이 버튼을 클릭하면 위치 정보를 가져오고 출력할 것입니다.

click 이벤트를 수신하면, 우리 코드는 getCurrentPosition()을 호출해 장치의 현재 위치를 요청합니다. 이 요청은 비동기 작업이므로 요청 완료 시 호출될 콜백을 제공하고, 이 콜백은 알아낸 위치를 나타내는 GeolocationPosition 객체를 입력받습니다.

이 `GeolocationPosition` 객체에서 사용자의 위도와 경도를 각각 position.coords.latitude와 `position.coords.longitude`로 가져옵니다. 두 값을 소숫점 아래 두 자리까지의 값으로 변환한 후, span 요소들이 두 값을 각각 표시하도록 갱신합니다.

### HTML

결과를 출력하기 위한 HTML은 다음과 같습니다.

```html
<p>
  당신의 위치는 위도 <span id="latitude">0.00</span>°, 경도
  <span id="longitude">0.00</span>° 입니다.
</p>
<button id="get-location">내 위치 찾기</button>
```

### 결과

여기서 예제를 시험해 보세요.

예제

## 명세서



## 브라우저 호환성



## 같이 보기

- [Geolocation API 사용하기](/ko/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- 이 속성이 속한 GeolocationCoordinates
- Geolocation.getCurrentPosition()과 watchPosition()이 가져오는 위치정보를 나타내는 최상위 인터페이스, GeolocationPosition
