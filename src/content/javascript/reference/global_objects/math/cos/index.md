---
title: Math.cos()
slug: Web/JavaScript/Reference/Global_Objects/Math/cos
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---



**`Math.cos()`** 정적 메서드는 숫자의 코사인을 라디안 단위로 반환합니다.

JavaScript Demo: Math.cos()

```js interactive-example
function getCircleX(radians, radius) {
  return Math.cos(radians) * radius;
}

console.log(getCircleX(1, 10));
// Expected output: 5.403023058681398

console.log(getCircleX(2, 10));
// Expected output: -4.161468365471424

console.log(getCircleX(Math.PI, 10));
// Expected output: -10
```

## 구문

```js-nolint
Math.cos(x)
```

### 매개변수

- `x`
  - : 라디안 단위로 각도를 나타내는 숫자입니다.

### 반환 값

-1 이상 1 이하의 `x`의 코사인을 포함합니다. `x`가 Infinity, `-Infinity` 또는 NaN이면 NaN을 반환합니다.

## 설명

`cos()`는 `Math`의 정적 메서드이므로, 생성한 `Math` 객체의 메서드가 아닌 `Math.cos()`로 항상 사용합니다(`Math`는 생성자가 아닙니다).

## 예제

### Math.cos() 사용하기

```js
Math.cos(-Infinity); // NaN
Math.cos(-0); // 1
Math.cos(0); // 1
Math.cos(1); // 0.5403023058681398
Math.cos(Math.PI); // -1
Math.cos(2 * Math.PI); // 1
Math.cos(Infinity); // NaN
```

## 명세서



## 브라우저 호환성



## 같이 보기

- Math.acos()
- Math.asin()
- Math.atan()
- Math.atan2()
- Math.sin()
- Math.tan()
