---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
---



**`toJSON()`** 메서드는 Date 객체의 문자열 표현을 반환합니다.

JavaScript Demo: Date.toJSON()

```js interactive-example
const event = new Date("August 19, 1975 23:15:30 UTC");

const jsonDate = event.toJSON();

console.log(jsonDate);
// Expected output: "1975-08-19T23:15:30.000Z"

console.log(new Date(jsonDate).toUTCString());
// Expected output: "Tue, 19 Aug 1975 23:15:30 GMT"
```

## 구문

```js
dateObj.toJSON();
```

### 반환 값

주어진 날짜의 문자열 표현.

## 설명

Date 인스턴스는 시간의 특정 지점을 가리킵니다. `toJSON()`을 호출하면 toISOString() 사용해 그 인스턴스가 가리키는 시간의 문자열 표현을 반환합니다. `toJSON()`은 `Date` 값을 JSON으로 직렬화할 때 유용하게 사용할 수 있도록 만들어졌습니다.

## 예제

### `toJSON()` 사용하기

```js
const jsonDate = new Date().toJSON();
const backToDate = new Date(jsonDate);

console.log(jsonDate); //2015-10-26T07:46:36.611Z
```

## 명세



## 브라우저 호환성



## 같이 보기

- Date.prototype.toLocaleDateString()
- Date.prototype.toTimeString()
- Date.prototype.toUTCString()
