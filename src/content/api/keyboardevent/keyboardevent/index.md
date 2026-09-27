---
title: "KeyboardEvent: KeyboardEvent() constructor"
slug: Web/API/KeyboardEvent/KeyboardEvent
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

UI Events

**`KeyboardEvent()`** 생성자는 새로운 KeyboardEvent 객체를 생성합니다.

## 구문

```js-nolint
new KeyboardEvent(type)
new KeyboardEvent(type, options)
```

### 매개 변수

- `type`
  - : 문자열 형식의 이벤트 이름입니다.
    대소문자를 구별하며 브라우저에서는 `keydown`, `keyup`, 그리고 `keypress` 로 설정합니다.
- `options` 
  - : UIEvent() 에 정의된 속성들과 더불어, 다음 속성들을 가질 수 있는 객체입니다.
    - `key` 
      - : `""` 를 기본값으로 가지는 문자열 형태이며, KeyboardEvent.key 의 키를 설정합니다.
    - `code` 
      - : `""` 를 기본값으로 가지는 문자열 형태이며, KeyboardEvent.code 의 값을 설정합니다.
    - `location` 
      - : `0` 을 기본값으로 가지는 문자열 형태이며, KeyboardEvent.location 의 값을 설정합니다.
    - `repeat` 
      - : `false` 를 기본값으로 가지는 불리언 형태이며, KeyboardEvent.repeat 의 값을 설정합니다.
    - `isComposing` 
      - : `false` 를 기본값으로 가지는 불리언 형태이며, KeyboardEvent.isComposing 의 값을 설정합니다.
    - `charCode`  
      - : `0` 을 기본값으로 가지는 숫자 형태이며, 사용이 중단된 KeyboardEvent.charCode 의 값을 설정합니다.
    - `keyCode`  
      - : `0` 을 기본값으로 가지는 숫자 형태이며, 사용이 중단된 KeyboardEvent.keyCode 의 값을 설정합니다.
    - `which`  
      - : `0` 을 기본값으로 가지는 숫자 형태이며, 사용이 중단된 UIEvent.which 의 값을 설정합니다.
    - `ctrlKey` 
      - : `false` 를 기본값으로 가지는 불리언 형태이며, KeyboardEvent.ctrlKey 의 값을 설정합니다.
    - `shiftKey` 
      - : `false` 를 기본값으로 가지는 불리언 형태이며, KeyboardEvent.shiftKey 의 값을 설정합니다.
    - `altKey` 
      - : `false` 를 기본값으로 가지는 불리언 형태이며, KeyboardEvent.altKey 의 값을 설정합니다.
    - `metaKey` 
      - : `false` 를 기본값으로 가지는 불리언 형태이며, KeyboardEvent.metaKey 의 값을 설정합니다.

### 반환 값

새로운 KeyboardEvent 객체를 반환합니다.

## 명세서



## 브라우저 호환성



## 같이 보기

- KeyboardEvent, 이 생성자가 구성하는 객체의 인터페이스입니다.
