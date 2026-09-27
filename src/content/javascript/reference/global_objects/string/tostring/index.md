---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
---



**`toString()`** 메서드는 객체의 문자열 표현을 반환합니다.

JavaScript Demo: String.toString()

```js interactive-example
const stringObj = new String("foo");

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());
// Expected output: "foo"
```

## 구문

```js
toString();
```

### 반환 값

메서드를 호출하는 객체의 문자열 표현.

## 설명

String 객체는 Object 객체의 `toString()` 메서드를 상속하지 않고 재정의합니다. String 의 `toString()` 메서드는 객체의 문자열 표현을 반환하며 String.prototype.valueOf() 메서드와 동일합니다.

## 예제

### `toString()` 사용하기

String 객체의 문자열 값을 표시하는 예제입니다.

```js
var x = new String("Hello world");

console.log(x.toString()); // logs 'Hello world'
```

## 명세



## 브라우저 호환성



## 같이 보기

- String.prototype.valueOf()
