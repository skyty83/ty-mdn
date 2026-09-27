---
title: Number.NaN
slug: Web/JavaScript/Reference/Global_Objects/Number/NaN
---



**`Number.NaN`** 속성은 Not-A-Number(숫자가 아님)를 나타냅니다. NaN과 같습니다.

JavaScript Demo: Number.NaN

```js interactive-example
function clean(x) {
  // eslint-disable-next-line use-isnan
  if (x === Number.NaN) {
    // Can never be true
    return null;
  }
  if (isNaN(x)) {
    return 0;
  }
}

console.log(clean(Number.NaN));
// Expected output: 0
```

정적 속성이므로 접근하기 위해 Number 객체를 생성할 필요는 없습니다. (`Number.NaN` 사용)



## 예제

### 값이 숫자형인지 확인하기

```js
function sanitise(x) {
  if (isNaN(x)) {
    return Number.NaN;
  }
  return x;
}
```

### NaN에 대한 테스트

`NaN` 페이지에서 [NaN에 대한 테스트](/ko/docs/Web/JavaScript/Reference/Global_Objects/NaN#testing_against_nan) 를 참고하세요.

## 명세



## 브라우저 호환성



## 같이보기

- 전역 NaN 객체.
- 본 속성이 속한 Number 객체.
