---
title: EventTarget
slug: Web/API/EventTarget
---

DOM

**`EventTarget`** 인터페이스는 이벤트를 수신할 수 있고, 수신한 이벤트에 대한 수신기(listener)를 가질 수 있는 객체가 구현하는 인터페이스입니다. 즉, 이벤트의 대상이 될 수 있는 객체는 `EventTarget`의 세 메서드를 구현합니다.

Element, Document, Window가 가장 흔한 이벤트 대상이며, 이외에도 XMLHttpRequest, AudioNode, AudioContext 등의 객체도 이벤트 대상입니다.

많은 이벤트 대상(요소, 문서, 창, ...)은 `onevent` 속성과 특성을 사용한 [이벤트 처리기](/ko/docs/conflicting/Web/API/Document_Object_Model/Events) 등록도 지원합니다.



## 생성자

- EventTarget()
  - : 새로운 `EventTarget` 객체 인스턴스를 생성합니다.

## 메서드

- EventTarget.addEventListener()
  - : `EventTarget`에 특정 이벤트 유형의 처리기를 등록합니다.
- EventTarget.removeEventListener()
  - : `EventTarget`에서 이벤트 수신기를 하나 제거합니다.
- EventTarget.dispatchEvent()
  - : `EventTarget`으로 이벤트를 발송합니다.

## 명세



## 브라우저 호환성



## 같이 보기

- [이벤트 참고서](/ko/docs/Web/API/Document_Object_Model/Events) - 웹 플랫폼에서 사용할 수 있는 이벤트 목록
- [이벤트 입문](/ko/docs/Learn_web_development/Core/Scripting/Events)
- Event 인터페이스
