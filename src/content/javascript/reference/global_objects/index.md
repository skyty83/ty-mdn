---
title: 표준 내장 객체
slug: Web/JavaScript/Reference/Global_Objects
---

Objects

이 장은 JavaScript의 모든 표준 내장 객체와 그 메서드 및 속성을 나열합니다.

표준 내장 객체와 **전역 객체**를 헷갈리지 않도록 주의하세요. 표준 내장 객체는 **전역 범위의 여러 객체**를 일컫습니다. 전역 객체는 엄격 모드를 사용하지 않을 땐 전역 범위에서 this, 지원하는 환경에선 globalThis를 사용해 접근할 수 있는 객체입니다. 사실 전역 범위는 **전역 객체와 전역 객체가 상속한 속성**으로 이루어집니다.

전역 범위의 나머지 객체는 [사용자 스크립트가 생성](/ko/docs/Web/JavaScript/Guide/Working_with_objects#creating_new_objects)하거나, 호스트 응용 프로그램이 제공합니다. 브라우저 맥락에서 사용 가능한 호스트 객체는 [API 참고서](/ko/docs/Web/API)에서 읽을 수 있습니다. [DOM](/ko/docs/Web/API/Document_Object_Model) 및 코어 [JavaScript](/ko/docs/Web/JavaScript)의 차이에 관한 자세한 정보는 [JavaScript 기술 개요](/ko/docs/Web/JavaScript/Reference/JavaScript_technologies_overview)를 참고하세요.

## 항목별 표준 객체

### 값 속성

아래 전역 속성은 간단한 값을 반환하며 속성이나 메서드를 가지고 있지 않습니다.

- Infinity
- NaN
- undefined
- globalThis

### 함수 속성

객체에 붙지 않고 전역으로 호출하는 함수로, 반환 값을 호출자에게 바로 반환합니다.

- eval()
- isFinite()
- isNaN()
- parseFloat()
- parseInt()
- encodeURI()
- encodeURIComponent()
- decodeURI()
- decodeURIComponent()
- **Deprecated**
  - escape() 
  - unescape() 

### 기초 객체

다른 모든 객체의 기반이 되는 기초이자 기본 객체입니다. 일반 객체, 함수, 오류를 나타내는 객체를 포함합니다.

- Object
- Function
- Boolean
- Symbol

#### 오류 객체

오류 객체는 기초 객체의 특별한 유형으로, 기본적인 Error 객체와 함께 특정 용도에 최적화된 오류 형태도 포함합니다.

- Error
- AggregateError
- EvalError
- InternalError 
- RangeError
- ReferenceError
- SyntaxError
- TypeError
- URIError

### 숫자 및 날짜

숫자, 날짜, 수학 계산을 나타내는 기본 객체입니다.

- Number
- BigInt
- Math
- Date

### 텍스트 처리

문자열을 나타내는 객체로 문자열을 조작할 방법도 제공합니다.

- String
- RegExp

### 인덱스 콜렉션

인덱스 값으로 정렬된 데이터의 콜렉션을 나타냅니다. 배열(형식배열 포함)과 배열형 객체를 포함합니다.

- Array
- Int8Array
- Uint8Array
- Uint8ClampedArray
- Int16Array
- Uint16Array
- Int32Array
- Uint32Array
- Float32Array
- Float64Array
- BigInt64Array
- BigUint64Array

### 키 콜렉션

키를 사용하는 콜렉션을 나타냅니다. Map, Set 등 순회 가능한 콜렉션은 요소를 삽입 순서대로 순회할 수 있습니다.

- Map
- Set
- WeakMap
- WeakSet

### 구조화된 데이터

구조화된 데이터 버퍼 및 JavaScript Object Notation(JSON)을 사용하여 작성한 데이터를 나타내고 상호작용합니다.

- ArrayBuffer
- SharedArrayBuffer
- Atomics
- DataView
- JSON

### 제어 추상화 객체

제어 추상화는 코드 구조화에 도움을 줍니다. 특히, 비동기 코드를 (예를 들어) 깊게 중첩된 콜백 함수 없이 작성할 수 있습니다.

- Promise
- Generator
- GeneratorFunction
- AsyncFunction
- AsyncGenerator
- AsyncGeneratorFunction

### 리플렉션

- Reflect
- Proxy

### 국제화

ECMAScript 코어에 추가된 언어 구분 기능입니다.

- Intl
- Intl.Collator
- Intl.DateTimeFormat
- Intl.ListFormat
- Intl.NumberFormat
- Intl.PluralRules
- Intl.RelativeTimeFormat
- Intl.Locale
