---
title: Symbol.matchAll
slug: Web/JavaScript/Reference/Global_Objects/Symbol/matchAll
l10n:
  sourceCommit: 427e8d03276b4915c08c5f0541452fb1c830c295
---



**`Symbol.matchAll`** 정적 데이터 속성은 [잘 알려진 심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol#잘_알려진_심볼) `@@matchAll`을 나타냅니다. String.prototype.matchAll() 메서드는 문자열과 현재 객체의 일치 항목을 산출하는 반복자를 반환하는 메서드의 첫 번째 인수에서 이 심볼을 조회합니다.

더 많은 정보를 참고하시려면 [`RegExp.prototype[@@matchAll]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll)와 String.prototype.matchAll()를 참고하시기 바랍니다.

JavaScript Demo: Symbol.matchAll

```js interactive-example
const re = /[0-9]+/g;
const str = "2016-01-02|2019-03-07";
const result = re[Symbol.matchAll](str);

console.log(Array.from(result, (x) => x[0]));
// Expected output: Array ["2016", "01", "02", "2019", "03", "07"]
```

## 값

잘 알려진 심볼 `@@matchAll`.



## 예제

### Symbol.matchAll 사용하기

```js
const str = "2016-01-02|2019-03-07";

const numbers = {
  *[Symbol.matchAll](str) {
    for (const n of str.matchAll(/[0-9]+/g)) yield n[0];
  },
};

console.log(Array.from(str.matchAll(numbers)));
// ["2016", "01", "02", "2019", "03", "07"]
```

## 명세서



## 브라우저 호환성



## 같이 보기

- [`core-js`에서의 `Symbol.matchAll` 폴리필](https://github.com/zloirock/core-js#ecmascript-symbol)
- Symbol.match
- Symbol.replace
- Symbol.search
- Symbol.split
- String.prototype.matchAll()
- [`RegExp.prototype[@@matchAll]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll)
