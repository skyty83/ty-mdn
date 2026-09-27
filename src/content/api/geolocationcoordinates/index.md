---
title: GeolocationCoordinates
slug: Web/API/GeolocationCoordinates
l10n:
  sourceCommit: 066257cb0d23e29e269703450e4b1216a65e3b26
---

Geolocation API

**`GeolocationCoordinates`** 인터페이스는 지구상에서의 장치 위치와 고도, 그리고 이 정보들의 정확도를 나타냅니다.

## 인스턴스 속성

`GeolocationCoordinates` 인터페이스는 어떤 속성도 상속하지 않습니다.

- GeolocationCoordinates.latitude  
  - : 위치의 위도를 도(°) 단위의 `double`로 반환합니다.
- GeolocationCoordinates.longitude  
  - : 위치의 경도를 도(°) 단위의 `double`로 반환합니다.
- GeolocationCoordinates.altitude  
  - : 위치의 해발고도를 미터 단위의 `double`로 반환합니다. 구현체가 고도 데이터를 제공하지 못하면 `null`입니다.
- GeolocationCoordinates.accuracy  
  - : `latitude`와 `longitude`의 오차범위를 미터 단위의 `double`로 반환합니다.
- GeolocationCoordinates.altitudeAccuracy  
  - : `altitude`의 오차범위를 미터 단위의 `double`로 반환합니다. 이 값은 `null`일 수 있습니다.
- GeolocationCoordinates.heading  
  - : 장치가 향한 방위를 나타내는 `double`을 반환합니다. 진북(真北)에서 벗어난 각도를 도(°) 단위로 표현한 값으로, 진북인 `0`부터 시계방향(동쪽은 `90`도, 서쪽은 `270`도)으로 나아갑니다. `speed`가 `0`이면 `heading`은 [`NaN`](/ko/docs/Web/JavaScript/Reference/Global_Objects/NaN)입니다. 장치가 `heading`을 제공하지 못하면 `null`입니다.
- GeolocationCoordinates.speed  
  - : 장치의 속도를 초속 미터 단위의 `double`로 반환합니다. 이 값은 `null`일 수 있습니다.

## 인스턴스 메서드

`GeolocationCoordinates` 인터페이스는 어떤 메서드도 상속하거나 구현하지 않습니다.

## 명세서



## 브라우저 호환성



## 같이 보기

- [Geolocation API 사용하기](/ko/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- Geolocation
