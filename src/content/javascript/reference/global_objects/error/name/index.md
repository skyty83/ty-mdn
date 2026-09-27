---
title: Error.prototype.name
slug: Web/JavaScript/Reference/Global_Objects/Error/name
l10n:
  sourceCommit: 6b728699f5f38f1070a94673b5e7afdb1102a941
---



`Error.prototype`의 **`name`** 데이터 속성은 모든 Error 인스턴스에서 공유됩니다. 이 속성은 오류의 종류를 나타내는 이름을 나타냅니다. `Error.prototype.name`의 초기 값은 `"Error"`입니다. TypeError 및 SyntaxError와 같은 하위 클래스는 자체적인 `name` 속성을 제공합니다.

## 값

문자열. `Error.prototype.name`의 초기 값은 문자열 `"Error"` 입니다.



## 설명

기본적으로 Error 인스턴스에는 "Error"라는 이름을 갖습니다. `name` 속성과
message 속성은 Error.prototype.toString() 메서드에서 오류의 문자열 표현을 생성하는 데
사용됩니다.

## 예제

### 사용자 정의 에러 발생시키기

```js
const e = new Error("Malformed input"); // e.name은 'Error'

e.name = "ParseError";
throw e;
// e.toString()은 'ParseError: Malformed input'을 반환합니다
```

## 명세



## 브라우저 호환성



## 같이 보기

- Error.prototype.message
- Error.prototype.toString()
