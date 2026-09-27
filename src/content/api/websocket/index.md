---
title: WebSocket
slug: Web/API/WebSocket
---

Web Sockets API

`WebSocket` 객체는 [WebSocket](/ko/docs/Web/API/WebSockets_API) 서버 연결의 생성과 관리 및 연결을 통한 데이터 송수신 API를 제공합니다.

`WebSocket` 객체를 생성하려면 [`WebSocket()`](/ko/docs/Web/API/WebSocket/WebSocket) 생성자를 사용하세요.





## 생성자

- WebSocket()
  - : 새로운 `WebSocket` 객체를 생성해 반환합니다.

## 속성

- WebSocket.binaryType
  - : 연결에 사용되는 이진 데이터의 유형입니다.
- WebSocket.bufferedAmount 
  - : 큐에 대기 중인 데이터의 바이트 수입니다.
- WebSocket.extensions 
  - : 서버에서 선택한 확장입니다.
- WebSocket.protocol 
  - : 서버에서 선택한 하위 프로토콜입니다.
- WebSocket.readyState 
  - : 연결의 현재 상태입니다.
- WebSocket.url 
  - : WebSocket의 절대 URL입니다.

## 메서드

- WebSocket.close()
  - : 연결을 닫습니다.
- WebSocket.send()
  - : 전송할 데이터를 큐에 등록합니다.

## 이벤트

`addEventListener()` 메서드를 사용하거나 `WebSocket` 인터페이스의 `oneventname` 속성에 수신기를 할당해서 아래의 이벤트를 수신할 수 있습니다.

- close
  - : `WebSocket`의 연결이 닫힐 때 발생합니다. `onclose` 속성으로도 수신할 수 있습니다.
- error
  - : `WebSocket`의 연결이, 일부 데이터 전송의 실패 등 오류로 인해 닫힐 때 발생합니다. `onerror` 속성으로도 수신할 수 있습니다.
- message
  - : `WebSocket`으로 데이터를 수신했을 때 발생합니다. `onmessage` 속성으로도 수신할 수 있습니다.
- open
  - : `WebSocket` 연결이 열렸을 때 발생합니다. `onopen` 속성으로도 수신할 수 있습니다.

## 예제

```js
// WebSocket 연결 생성
const socket = new WebSocket("ws://localhost:8080");

// 연결이 열리면
socket.addEventListener("open", function (event) {
  socket.send("Hello Server!");
});

// 메시지 수신
socket.addEventListener("message", function (event) {
  console.log("Message from server ", event.data);
});
```

## 명세



## 브라우저 호환성



## 같이 보기

- [WebSocket을 이용하여 클라이언트 애플리케이션 작성하기](/ko/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
