---
title: RTCPeerConnection.generateCertificate()
slug: Web/API/RTCPeerConnection/generateCertificate_static
---

WebRTC

RTCPeerConnection 인터페이스의 **`generateCertificate()`** 메소드는 X.509 인증서와 해당하는 개인 키를 생성하고 저장합니다. 그리고 접근이 가능한 RTCCertificate를 반환합니다.

## Syntax

```js
var cert = RTCPeerConnection.generateCertificate(keygenAlgorithm);
```

### 매개변수

- `keygenAlgorithm`
  - : 키를 생성하는데 사용하는 알고리즘을 식별하는 DOMString입니다.

> [!NOTE]
> `RTCPeerConnection.generateCertificate()` 은 정적인 메소드로, 따라서 인스턴스가 아닌 `RTCPeerConnection` 인터페이스에서 항상 호출됩니다.

### 반환 값

RTCCertificate 객체에 대한 참조 값입니다.

### 예제

```js
RTCPeerConnection.generateCertificate({
  name: "RSASSA-PKCS1-v1_5",
  hash: "SHA-256",
  modulusLength: 2048,
  publicExponent: new Uint8Array([1, 0, 1]),
}).then(function (cert) {
  var pc = new RTCPeerConnection({ certificates: [cert] });
});
```

## 명세



## 브라우저 호환성



## 참조

- [Using Service Workers](/ko/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- Cache
- WorkerGlobalScope.caches
