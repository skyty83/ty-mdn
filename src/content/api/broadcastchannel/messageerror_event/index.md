---
title: "BroadcastChannel: messageerror event"
short-title: messageerror
slug: Web/API/BroadcastChannel/messageerror_event
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---



`messageerror` 이벤트는 역직렬화할 수 없는 메시지가 채널에 도착할 시, BroadcastChannel 객체에서 발생합니다.

## 구문

addEventListener() 같은 메서드에서 이벤트 이름을 사용하거나, 이벤트 처리기 속성을 설정하세요.

```js-nolint
addEventListener("messageerror", (event) => { })
onmessageerror = (event) => { }
```

## 이벤트 타입

MessageEvent. Event를 상속합니다.

MessageEvent

## 이벤트 속성

아래 나열된 속성 외에도, 부모 인터페이스인 Event의 속성들을 사용할 수 있습니다.

- data 
  - : 메시지 발신기가 보낸 데이터.
- origin 
  - : 메시지 발신기의 출처를 나타내는 문자열.
- lastEventId 
  - : 이벤트의 고유 ID를 나타내는 문자열.
- source 
  - : WindowProxy, MessagePort, 또는 ServiceWorker 객체 등 메시지 발신자를 나타내는 메시지 이벤트 소스.
- ports 
  - : 메시지가 전송되는 채널과 연결된 포트를 나타내는 MessagePort 객체의 배열(예: 채널 내 메시징, 공유된 맥락에 메시지를 보낼 때 등).

## 예제

이 코드는 메시지와 에러를 수신하기 위해 [`addEventListener`](/ko/docs/Web/API/EventTarget/addEventListener)를 사용합니다.

```js
const channel = new BroadcastChannel("example-channel");

channel.addEventListener("message", (event) => {
  received.textContent = event.data;
});

channel.addEventListener("messageerror", (event) => {
  console.error(event);
});
```

위와 동일하지만, `onmessage` 와 `onmessageerror` 이벤트 핸들러 속성을 사용합니다.

```js
const channel = new BroadcastChannel("example-channel");

channel.onmessage = (event) => {
  received.textContent = event.data;
};

channel.onmessageerror = (event) => {
  console.log(event);
};
```

## 명세서



## 브라우저 호환성



## 같이 보기

- 연관된 이벤트: [`message`](/ko/docs/Web/API/BroadcastChannel/message_event)
