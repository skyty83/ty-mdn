---
title: Date.prototype.setUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
---



**`setUTCHours()`** 메서드는 표준시에 따라 지정된 날짜의 시간을 설정하고 1970년 1월 1일 00:00:00 UTC 이후 업데이트 된 Date 인스턴스에 의해 표시되는 시간(밀리 초)을 반환합니다.

JavaScript Demo: Date.setUTCHours()

```js interactive-example
const event = new Date("August 19, 1975 23:15:30 GMT-3:00");

console.log(event.toUTCString());
// Expected output: "Wed, 20 Aug 1975 02:15:30 GMT"

console.log(event.getUTCHours());
// Expected output: 2

event.setUTCHours(23);

console.log(event.toUTCString());
// Expected output: "Wed, 20 Aug 1975 23:15:30 GMT"
```

## 구문

```js-nolint
setUTCHours(hoursValue)
setUTCHours(hoursValue, minutesValue)
setUTCHours(hoursValue, minutesValue, secondsValue)
setUTCHours(hoursValue, minutesValue, secondsValue, msValue)
```

### 매개변수

- `hoursValue`
  - : 시를 나타내는 0에서 23 사이의 정수입니다.
- `minutesValue`
  - : 선택적 입력값. 분을 나타내는 0에서 59 사이의 정수입니다.
- `secondsValue`
  - : 선택적 입력값. 초를 나타내는 0에서 59 사이의 정수입니다. `secondsValue` 매개 변수를 지정하면 minutesValue도 지정해야 합니다.
- `msValue`
  - : 선택적 입력값. 밀리 초를 나타내는 0에서 999 사이의 숫자입니다. `msValue` 매개 변수를 지정하는 경우 `minutesValue` 및 `secondsValue`도 지정해야 합니다.

### 반환 값

1970년 1월 1일 00:00:00 UTC와 업데이트 된 날짜 사이의 밀리 초 숫자입니다.

## 설명

`minutesValue`, `secondsValue` 및 `msValue` 매개 변수를 지정하지 않으면 getUTCMinutes(), getUTCSeconds() 및 getUTCMilliseconds() 메서드가 사용됩니다.

지정한 매개 변수가 예상 범위를 벗어나면 `setUTCHours()`는 그에 따라 Date 객체의 날짜 정보를 업데이트하려고 시도합니다. 예를 들어 `secondsValue`에 100을 사용하면 분은 1 (`minutesValue + 1`)만큼 증가하고 40은 초 단위로 사용됩니다.

## 예제

### `setUTCHours()` 사용하기

```js
var theBigDay = new Date();
theBigDay.setUTCHours(8);
```

## 명세



## 브라우저 호환성



## 같이 보기

- Date.prototype.getUTCHours()
- Date.prototype.setHours()
