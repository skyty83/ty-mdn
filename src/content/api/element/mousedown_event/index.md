---
title: "Element: mousedown 이벤트"
slug: Web/API/Element/mousedown_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---



**`mousedown`** 이벤트는 포인터가 요소 안에 있는 동안 포인팅 장치의 버튼을 눌렀을 때 Element에서 발생합니다.

> [!NOTE]
> 이는 완전한 `click` 동작, 즉, 포인터가 같은 요소 안에 있으면서 마우스 버튼을 눌렀다가 떼는 동작 이후 발생하는 click 이벤트와는 차이가 있습니다. `mousedown`은 버튼을 처음 누른 순간 발생합니다.

## 구문

이벤트 이름을 addEventListener() 등의 메서드에 제공하거나, 이벤트 처리기 속성을 사용하세요.

```js
addEventListener("mousedown", (event) => {});

onmousedown = (event) => {};
```

## 이벤트 유형

MouseEvent입니다. UIEvent와 Event를 상속합니다.

MouseEvent

## 이벤트 속성

부모인 UIEvent와 Event의 속성을 상속합니다.

- MouseEvent.altKey 
  - : 마우스 이벤트 발생 시점에 <kbd>alt</kbd>가 눌려있었으면 `true`를 반환합니다.
- MouseEvent.button 
  - : (해당하는 경우) 마우스 이벤트 발생 시점에 누르고 있던 버튼의 번호입니다.
- MouseEvent.buttons 
  - : (버튼이 있는 경우) 마우스 이벤트 발생 시점에 누르고 있던 버튼 번호입니다.
- MouseEvent.clientX 
  - : [뷰포트 좌표계](/ko/docs/Web/API/CSSOM_view_API/Coordinate_systems#뷰포트)에서 마우스 포인터의 X 좌표입니다.
- MouseEvent.clientY 
  - : [뷰포트 좌표계](/ko/docs/Web/API/CSSOM_view_API/Coordinate_systems#뷰포트)에서 마우스 포인터의 Y 좌표입니다.
- MouseEvent.ctrlKey 
  - : 마우스 이벤트 발생 시점에 <kbd>control</kbd>이 눌려있었으면 `true`를 반환합니다.
- MouseEvent.layerX  
  - : 이벤트의 가로축 좌표를 현재 레이어에 상대적인 값으로 반환합니다.
- MouseEvent.layerY  
  - : 이벤트의 세로축 좌표를 현재 레이어에 상대적인 값으로 반환합니다.
- MouseEvent.metaKey 
  - : 마우스 이벤트 발생 시점에 <kbd>meta</kbd>가 눌려있었으면 `true`를 반환합니다.
- MouseEvent.movementX 
  - : 가장 최근 mousemove 이벤트에 상대적인 마우스 포인터의 X 좌표입니다.
- MouseEvent.movementY 
  - : 가장 최근 mousemove 이벤트에 상대적인 마우스 포인터의 Y 좌표입니다.
- MouseEvent.offsetX 
  - : 대상 노드의 안쪽 여백 경계에 상대적인 마우스 포인터의 X 좌표입니다.
- MouseEvent.offsetY 
  - : 대상 노드의 안쪽 여백 경계에 상대적인 마우스 포인터의 Y 좌표입니다.
- MouseEvent.pageX 
  - : 전제 문서에 상대적인 마우스 포인터의 X 좌표입니다.
- MouseEvent.pageY 
  - : 전제 문서에 상대적인 마우스 포인터의 Y 좌표입니다.
- MouseEvent.relatedTarget 
  - : 존재하는 경우, 이벤트의 보조 대상입니다.
- MouseEvent.screenX 
  - : [화면 좌표계](/ko/docs/Web/API/CSSOM_view_API/Coordinate_systems#화면)에서 마우스 포인터의 X 좌표입니다.
- MouseEvent.screenY 
  - : [화면 좌표계](/ko/docs/Web/API/CSSOM_view_API/Coordinate_systems#화면)에서 마우스 포인터의 Y 좌표입니다.
- MouseEvent.shiftKey 
  - : 마우스 이벤트 발생 시점에 <kbd>shift</kbd>가 눌려있었으면 `true`를 반환합니다
- MouseEvent.mozInputSource  
  - : 이벤트를 발생시킨 장치의 유형으로 `MOZ_SOURCE_*` 상수 중 하나입니다. 이 값을 사용하면 이벤트가 실제 마우스에 의해 발생했는지, 아니면 터치에 의해 발생했는지 확인해 정확도 보정 등을 적용할 수 있습니다.
- MouseEvent.webkitForce  
  - : 클릭했을 때 가해진 압력의 양입니다.
- MouseEvent.x 
  - : MouseEvent.clientX의 별칭입니다.
- MouseEvent.y 
  - : MouseEvent.clientY의 별칭입니다.

## 예제

예제 코드를 [`mousemove` 이벤트](/ko/docs/Web/API/Element/mousemove_event#examples)에서 확인하세요.

## 명세서



## 브라우저 호환성



## 같이 보기

- [이벤트 입문](/ko/docs/Learn_web_development/Core/Scripting/Events)
- mouseup
- mousemove
- click
- dblclick
- mouseover
- mouseout
- mouseenter
- mouseleave
- contextmenu
