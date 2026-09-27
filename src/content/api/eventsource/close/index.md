---
title: "EventSource: close() 메서드"
short-title: close()
slug: Web/API/EventSource/close
l10n:
  sourceCommit: a166ba48ceb8bccb37c67a0a8856b0e5b12e0135
---

Server Sent Events

EventSource 인터페이스의 **`close()`** 메서드는
연결이 되어 있는 경우 연결을 닫고 EventSource.readyState
속성을 `2`(닫힘)으로 설정합니다.

> [!NOTE]
> 연결이 이미 닫혀 있는 경우, 메서드는 아무 동작도 수행하지 않습니다.

## 구문

```js-nolint
close()
```

### 매개변수

없음.

### 반환 값

없음 (undefined).

## 예제

```js
const button = document.querySelector("button");
const evtSource = new EventSource("sse.php");

button.onclick = () => {
  console.log("Connection closed");
  evtSource.close();
};
```

> [!NOTE]
> GitHub에서 전체 예시를 확인할 수 있습니다. [PHP를 사용한 간단한 SSE 데모](https://github.com/mdn/dom-examples/tree/main/server-sent-events)를 참고하세요.

## 명세서



## 브라우저 호환성



## 같이 보기

- EventSource
