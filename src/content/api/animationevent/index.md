---
title: AnimationEvent
slug: Web/API/AnimationEvent
l10n:
  sourceCommit: 4f5e90f47c518afd1e3c11a9fb32b933cc8434e9
---

Web Animations

**`AnimationEvent`** 인터페이스는 [애니메이션](/ko/docs/Web/CSS/Guides/Animations/Using)과 관련된 정보를 제공하는 이벤트를 나타냅니다.



## 생성자

- AnimationEvent()
  - : 주어진 매개변수로 `AnimationEvent`를 생성합니다.

## 속성

Event 인터페이스의 속성을 상속합니다.

- AnimationEvent.animationName 
  - : 애니메이션을 생성한 animation-name의 값을 담은 문자열입니다.
- AnimationEvent.elapsedTime 
  - : 이 이벤트가 발생한 시점까지 애니메이션이 재생된 총 시간을 나타내는 `float` 값입니다. 초 단위며, 애니메이션이 일시정지됐던 시간은 제외합니다. `animationstart` 이벤트의 `elapsedTime`은 animation-delay의 값이 음수인 경우에만 `(-1 * delay)`가 되고, 그 외에는 `0.0`입니다.
- AnimationEvent.pseudoElement 
  - : 애니메이션이 재생 중인 [의사 요소](/ko/docs/Web/CSS/Reference/Selectors/Pseudo-elements)의 이름을 담은, `'::'`으로 시작하는 문자열입니다. 애니메이션이 일반 요소에서 재생 중이라면 빈 문자열(`''`)을 반환합니다.

## 메서드

Event 인터페이스의 메서드를 상속합니다.

## 명세서



## 브라우저 호환성



## 같이 보기

- [CSS 애니메이션 사용하기](/ko/docs/Web/CSS/Guides/Animations/Using)
- 애니메이션 관련 CSS 속성과 @규칙: animation, animation-composition, animation-delay, animation-direction, animation-duration, animation-fill-mode, animation-iteration-count, animation-name, animation-play-state, animation-timing-function, @keyframes
