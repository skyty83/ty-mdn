---
title: BroadcastChannel()
short-title: BroadcastChannel()
slug: Web/API/BroadcastChannel/BroadcastChannel
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

BroadCastChannel API

**`BroadcastChannel()`** 생성자는 새 BroadcastChannel을 생성하고 이를 채널에 연결합니다.



## 구문

```js-nolint
new BroadcastChannel(channelName)
```

### 매개변수

- `channelName`
  - : 채널의 이름을 나타내는 문자열로, 출처가 동일한 모든 브라우징 맥락들에 대해 이 이름을 가진 채널이 단 하나만 존재합니다.

## 예제

```js
// "internal_notification" 채널을 수신하는 새 채널을 만듭니다.

const bc = new BroadcastChannel("internal_notification");
bc.postMessage("New listening connected!");
```

## 명세서



## 브라우저 호환성



## 같이 보기

- BroadcastChannel, the interface it belongs to.
