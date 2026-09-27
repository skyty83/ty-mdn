---
title: AudioNode.context
slug: Web/API/AudioNode/context
---

Web Audio API

AudioNode 인터페이스의 읽기 전용 `context` 속성은 연관된 BaseAudioContext를 반환하는데, BaseAudioContext는 이 노드가 관여하고 있는 프로세싱 그래프를 나타내는 객체입니다.

## 구문

```js
var aContext = anAudioNode.context;
```

### 값

이 `AudioNode` 를 생성하기 위해 사용된 AudioContext 또는 OfflineAudioContext 객체.

## 예제

```js
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();
oscillator.connect(gainNode).connect(audioCtx.destination);

console.log(oscillator.context); // AudioContext
console.log(oscillator.context === audioCtx); // true
```

## 명세서



## 브라우저 호환성



## 같이 보기

- [Web Audio
  API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
