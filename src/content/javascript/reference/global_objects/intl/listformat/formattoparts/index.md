---
title: Intl.ListFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/formatToParts
l10n:
  sourceCommit: c607c483fe079c61de5e32fba1a6cce61896e97d
---



Intl.ListFormat 인스턴스의 **`formatToParts()`** 메서드는
로케일을 고려하여 값의 목록을 형식화하는 데 사용할 수 있는
다양한 구성 요소를 나타내는 객체들의 Array을 반환합니다.

taller

```js interactive-example
const vehicles = ["Motorcycle", "Bus", "Car"];

const formatterEn = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});

const formatterFr = new Intl.ListFormat("fr", {
  style: "long",
  type: "conjunction",
});

const partValuesEn = formatterEn.formatToParts(vehicles).map((p) => p.value);
const partValuesFr = formatterFr.formatToParts(vehicles).map((p) => p.value);

console.log(partValuesEn);
// Expected output: "["Motorcycle", ", ", "Bus", ", and ", "Car"]"
console.log(partValuesFr);
// Expected output: "["Motorcycle", ", ", "Bus", " et ", "Car"]"
```

## 구문

```js-nolint
formatToParts(list)
```

### 매개변수

- `list`
  - : Array와 같은 로케일에 따라 형식을 맞출 순회 가능한 객체.

### 반환 값

목록의 형식화된 부분을 포함하는 구성 요소의 Array.

## 설명

Intl.ListFormat.prototype.format()가
주어진 로케일과 스타일 옵션에 따라 형식이 맞춰진
목록의 문자열 버전을 반환하지만,
`formatToParts()`는 형식이 맞춰진 문자열의
다양한 구성 요소를 배열로 반환합니다.

결과 배열의 각 요소는 `type`과 `value` 두 가지 속성을 가집니다.
`type` 속성은 목록의 값을 나타내는 `"element"`나
언어적 구조를 나타내는 `"literal"` 중 하나일 수 있습니다.
`value` 속성은 토큰의 내용을
문자열로 제공합니다.

형식화에 사용되는 로케일과 스타일 옵션은 Intl.ListFormat
인스턴스를 생성할 때 지정됩니다.

## 예제

### formatToParts 사용하기

```js
const fruits = ["Apple", "Orange", "Pineapple"];
const myListFormat = new Intl.ListFormat("en-GB", {
  style: "long",
  type: "conjunction",
});

console.table(myListFormat.formatToParts(fruits));
// [
//  { "type": "element", "value": "Apple" },
//  { "type": "literal", "value": ", " },
//  { "type": "element", "value": "Orange" },
//  { "type": "literal", "value": ", and " },
//  { "type": "element", "value": "Pineapple" }
// ]
```

## 명세서



## 브라우저 호환성



## 같이 보기

- Intl.ListFormat
- Intl.ListFormat.prototype.format()
- Intl.RelativeTimeFormat.prototype.formatToParts()
- Intl.NumberFormat.prototype.formatToParts()
- Intl.DateTimeFormat.prototype.formatToParts()
