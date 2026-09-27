---
title: Window.self
slug: Web/API/Window/self
---



**`Window.self`** 읽기전용 속성은 자기 자신을 WindowProxy로써 반환합니다. `window.self`로도 사용할 수 있고, `self`만 독립적으로 사용해 접근할 수 있습니다. 독립적으로 접근했을 때의 이점은 비 Window 환경인  등도 비슷한 표기법을 사용한다는 것입니다. 이 때 `self`는 `Window` 문맥에서는 `window.self`, 워커 문맥에서는 WorkerGlobalScope.self와 같습니다.

## 예제

아래와 같이 쓴 `window.self`는 그냥 `window`로 바꿨을 때와 동일합니다.

```js
if (window.parent.frames[0] != window.self) {
  // this window is not the first frame in the list
}
```

이에 더해 브라우징 문맥의 현재 활성확된 문서에서는 `window`가 현재 전역 객체를 가리키므로 다음 네 줄의 코드는 모두 동일합니다.

```js
var w1 = window;
var w2 = self;
var w3 = window.window;
var w4 = window.self;
// w1, w2, w3, w4 모두 일치. 그러나 워커에서는 w2만 작동함
```

## 명세



## 브라우저 호환성



## 같이 보기

- Worker에서 같은 역할을 하는 WorkerGlobalScope.self.
