---
title: "KeyboardEvent: isComposing property"
slug: Web/API/KeyboardEvent/isComposing
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

UI Events

**`KeyboardEvent.isComposing`** 는 읽기 전용 속성으로
compositionstart 이후나
compositionend 이전과
같은 합성 세션 내에서 이벤트가 발생하는지를 불리언 값으로 나타냅니다.

## 값

불리언 값입니다.

## 예제

```js
const kbdEvent = new KeyboardEvent("syntheticKey", false);
console.log(kbdEvent.isComposing); // false 를 반환합니다.
```

## 명세서



## 브라우저 호환성



## 같이 보기

- compositionstart 및 compositionend
- KeyboardEvent
