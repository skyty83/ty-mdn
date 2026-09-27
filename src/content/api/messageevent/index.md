---
title: MessageEvent
slug: Web/API/MessageEvent
---

HTML DOM

**`MessageEvent`** 는 WebSocket 또는 WebRTC RTCDataChannel 으로 된 타겟으로 부터 전달받은 메시지를 보여주는 interface 입니다.

이 이벤트는 WebSocket.onmessage 또는 RTCDataChannel.onmessage 으로 설정된 이벤트 핸들러를 통해 실행이 되게 됩니다.



## 생성자

- MessageEvent()
  - : 새로운 `MessageEvent를 생성합니다.`

## 속성

_이 interface는 부모 객체인 Event의 속성을 상속받습니다._

- MessageEvent.data 
  - : emitter에 의해 보내진 데이터인 DOMString, Blob 또는 ArrayBuffer를 포함합니다.
- MessageEvent.origin
  - : DOMString 입니다.…
- MessageEvent.ports
  - : …
- MessageEvent.source
  - : …

## 메서드

_이 interface는 부모 객체인 Event의 메서드를 상속받습니다._

- MessageEvent.initMessageEvent() 
  - : … **더 이상 사용하지 마십시오**
    : MessageEvent() 생성자를 대신 사용하십시오.

## Browser 호환성



## See also

- ExtendableMessageEvent, 와 유사한 interface이며, 개발자에게 더 유연성을 제공하기 위해 사용되는 interface 입니다.
- [WebSocket API](/ko/docs/Web/API/WebSockets_API)
- [WebRTC API](/ko/docs/Web/API/WebRTC_API)
