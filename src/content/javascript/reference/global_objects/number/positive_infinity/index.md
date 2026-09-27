---
title: Number.POSITIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
---



**`Number.POSITIVE_INFINITY`** 속성은 양의 무한대를 나타냅니다.

JavaScript Demo: Number.POSITIVE_INFINITY

```js interactive-example
function checkNumber(bigNumber) {
  if (bigNumber === Number.POSITIVE_INFINITY) {
    return "Process number as Infinity";
  }
  return bigNumber;
}

console.log(checkNumber(Number.MAX_VALUE));
// Expected output: 1.7976931348623157e+308

console.log(checkNumber(Number.MAX_VALUE * 2));
// Expected output: "Process number as Infinity"
```



## 설명

`Number.POSITIVE_INFINITY`의 값은 전역 객체 Infinity 속성의 값과 동일합니다.

`POSITIVE_INFINITY`는 수학에서의 무한대와 약간 다릅니다.

- `POSITIVE_INFINITY`를 포함한 아무 양의 수와 `POSITIVE_INFINITY`를 곱한 결과는 `POSITIVE_INFINITY`입니다.
- NEGATIVE_INFINITY를 포함한 아무 음의 수와 `POSITIVE_INFINITY`를 곱한 결과는 NEGATIVE_INFINITY입니다.
- 아무 양의 수를 `POSITIVE_INFINITY`로 나눈 결과는 0입니다.
- 아무 음의 수를 `POSITIVE_INFINITY`로 나눈 결과는 음의 부호를 가진 0입니다.
- 0을 `POSITIVE_INFINITY`로 나눈 결과는 NaN입니다.
- NaN에 `POSITIVE_INFINITY`를 곱한 결과는 NaN입니다.
- `POSITIVE_INFINITY`를, NEGATIVE_INFINITY를 제외한 아무 음의 수로 나눈 결과는 NEGATIVE_INFINITY입니다.
- `POSITIVE_INFINITY`를, `POSITIVE_INFINITY`를 제외한 아무 양의 수로 나눈 결과는 `NEGATIVE_INFINITY`입니다.
- `POSITIVE_INFINITY`를 NEGATIVE_INFINITY 또는 `POSITIVE_INFINITY`로 나눈 결과는 NaN입니다.

`Number.POSITIVE_INFINITY`를 사용해 성공 시 유한수를 반환하는 식의 결과를 판별할 수 있습니다. 그러나 이런 경우 isFinite()를 사용하는 편이 더 적합합니다.

`POSITIVE_INFINITY`는 Number의 정적 속성이기 때문에, 직접 생성한 Number 객체의 속성이 아니라 `Number.POSITIVE_INFINITY`의 형식으로 사용해야 합니다.

## 예제

### `POSITIVE_INFINITY` 사용하기

다음 코드에서 `bigNumber`는 JavaScript의 최댓값보다 큰 값을 할당받습니다. if 문이 실행되면, `bigNumber`의 값이 `Infinity`이므로 `bigNumber`는 계산에 좀 더 적합한 유한값을 다시 할당합니다.

```js
var bigNumber = Number.MAX_VALUE * 2;

if (bigNumber === Number.POSITIVE_INFINITY) {
  bigNumber = returnFinite();
}
```

## 명세



## 브라우저 호환성



## 같이 보기

- Number.NEGATIVE_INFINITY
- Number.isFinite()
- Infinity
- isFinite()
