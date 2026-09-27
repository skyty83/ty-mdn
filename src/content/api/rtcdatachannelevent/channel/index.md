---
title: RTCDataChannelEvent.channel
slug: Web/API/RTCDataChannelEvent/channel
---

WebRTC

읽기 속성인 **`RTCDataChannelEvent.channel`** 는 RTCDataChannel와 관련이 있는 이벤트를 반환합니다.

## Syntax

```js
var channel = RTCDataChannelEvent.channel;
```

### 값

RTCDataChannel 객체는 RTCPeerConnection을 원격 피어와 연결해주는 데이터 채널을 알려줍니다.

## 예시

datachannel 이벤트 핸들러 안 코드의 첫 줄에서 이벤트 객체의 채널을 가져오고, 이를 데이터 트래픽을 관리하는 코드에 사용 될 수 있도록 지역 변수로 저장합니다.

```js
pc.ondatachannel = function (event) {
  inboundDataChannel = event.channel;
  inboundDataChannel.onmessage = handleIncomingMessage;
  inboundDataChannel.onopen = handleChannelOpen;
  inboundDataChannel.onclose = handleChannelClose;
};
```

## 명세



## 브라우저 호환성



## See also

- datachannel
- RTCDataChannel
- RTCPeerConnection.ondatachannel
- [A simple RTCDataChannel sample](/ko/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- RTCPeerConnection
