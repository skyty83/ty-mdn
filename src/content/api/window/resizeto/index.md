---
title: Window.resizeTo()
slug: Web/API/Window/resizeTo
---



**`Window.resizeTo()`** 메서드는 동적으로 창의 크기를 변경합니다.

## 구문

```js
window.resizeTo(width, height);
```

### 매개변수

- `width`
  - : 새로운 outerWidth를 나타내는 픽셀 단위 정수. 스크롤 바, 제목 표시줄 등을 모두 포함한 너비입니다.
- `height`
  - : 새로운 outerHeight를 나타내는 픽셀 단위 정수. 스크롤 바, 제목 표시줄 등을 모두 포함한 높이입니다.

## 예제

다음 함수는 창의 크기를 화면에서 사용 가능한 크기의 1/4로 설정합니다. Screen.availWidth, Screen.availHeight 속성도 참고하세요.

```js
function quarter() {
  window.resizeTo(window.screen.availWidth / 2, window.screen.availHeight / 2);
}
```

## 명세



## 브라우저 호환성



## 같이 보기

- window.resizeBy()
