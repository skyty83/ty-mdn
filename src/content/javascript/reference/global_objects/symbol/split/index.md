---
title: Symbol.split
slug: Web/JavaScript/Reference/Global_Objects/Symbol/split
l10n:
  sourceCommit: 427e8d03276b4915c08c5f0541452fb1c830c295
---



**`Symbol.split`** 정적 데이터 속성은 [잘 알려진 심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol#잘_알려진_심볼) `@@split`을 나타냅니다. String.prototype.split() 메서드는 현재 객체와 일치하는 인덱스에서 문자열을 분할하는 메서드의 첫 번째 인수에서 이 심볼을 찾습니다.

보다 상세한 내용은 [`RegExp.prototype[@@split]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@split) 및 String.prototype.split()를 참조하시기 바랍니다.

JavaScript Demo: Symbol.split

```js interactive-example
class Split1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.split](string) {
    const index = string.indexOf(this.value);
    return `${this.value}${string.substring(0, index)}/${string.substring(
      index + this.value.length,
    )}`;
  }
}

console.log("foobar".split(new Split1("foo")));
// Expected output: "foo/bar"
```

## 값

잘 알려진 심볼 `@@split`.



## 예제

### 사용자 정의 역분할

```js
class ReverseSplit {
  [Symbol.split](string) {
    const array = string.split(" ");
    return array.reverse();
  }
}

console.log("Another one bites the dust".split(new ReverseSplit()));
// [ "dust", "the", "bites", "one", "Another" ]
```

## 명세서



## 브라우저 호환성



## 같이 보기

- [Polyfill of `Symbol.split` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- Symbol.match
- Symbol.matchAll
- Symbol.replace
- Symbol.search
- String.prototype.split()
- [`RegExp.prototype[@@split]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@split)
