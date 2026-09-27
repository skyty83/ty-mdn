---
title: "AnimationEvent: elapsedTime 속성"
short-title: elapsedTime
slug: Web/API/AnimationEvent/elapsedTime
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

Web Animations

**`AnimationEvent.elapsedTime`** 읽기 전용 속성은 이벤트가 발생한 시점까지 애니메이션이 재생된 총 시간을 나타내는 `float` 값입니다. 초 단위며, 애니메이션이 일시정지된 시간은 제외합니다. animationstart 이벤트의 `elapsedTime`은 animation-delay의 값이 음수인 경우에만 `(-1 * delay)`가 되고, 그 외에는 `0.0`입니다.

## 값

초 단위의 시간을 나타내는 `float`입니다.

## 명세서



## 브라우저 호환성



## 같이 보기

- [CSS 애니메이션 사용하기](/ko/docs/Web/CSS/Guides/Animations/Using)
- 애니메이션 관련 CSS 속성과 @규칙: animation,
  animation-delay, animation-direction,
  animation-duration, animation-fill-mode,
  animation-iteration-count, animation-name,
  animation-play-state, animation-timing-function,
  @keyframes
- 이 속성이 속한 AnimationEvent 인터페이스.
