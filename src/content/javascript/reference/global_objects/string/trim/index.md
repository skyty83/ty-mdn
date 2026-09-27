---
title: String.prototype.trim()
slug: Web/JavaScript/Reference/Global_Objects/String/trim
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---



String 값의 **`trim()`** 메서드는 문자열 양 끝의 공백을 제거하면서 원본 문자열을 수정하지 않고 새로운 문자열을 반환합니다.

한쪽 끝의 공백만 제거한 새로운 문자열을 반환하려면 trimStart() 또는 trimEnd()를 사용하세요.

JavaScript Demo: String.trim()

```js interactive-example
const greeting = "   Hello world!   ";

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";
```

## 구문

```js-nolint
trim()
```

### 매개변수

없음.

### 반환 값

시작과 끝에서 공백이 제거된 `str`을 나타내는 새로운 문자열입니다. 공백은 [공백](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) 문자와 [줄 종결자](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators)로 정의됩니다.

`str`의 시작이나 끝에 어떠한 공백 문자가 없더라도, 새로운 문자열이 반환됩니다. 기본적으로 `str`의 복사본입니다.

## 예제

### `trim()` 사용하기

아래 예제는 `str` 양 끝의 공백을 제거합니다.

```js
const str = "   foo  ";
console.log(str.trim()); // 'foo'
```

## 명세서



## 브라우저 호환성



## 같이 보기

- String.prototype.trimStart()
- String.prototype.trimEnd()
