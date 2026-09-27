---
title: Document.timeline
short-title: timeline
slug: Web/API/Document/timeline
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

Web Animations

Document 인터페이스의 `timeline` 읽기 전용 속성은 현재 문서의 기본 타임라인을 나타냅니다. 이 타임라인은 DocumentTimeline의 특수 인스턴스입니다.

이 타임라인은 각각의 `document` 마다 고유하며 Document.open() 호출 또한 포함하는 문서의 생명주기 동안 유지됩니다.

이 타임라인은 Performance.timeOrigin 이후 시간을 밀리초 단위로 연산합니다.
원점 이전의 시간은 타임라인에서 고려하지 않으며 이 경우 currentTime은 `null`입니다.

> [!NOTE]
> 문서 타임라인은 비활성 문서 (Document 가 Window, iframe, 혹은 frame 과 연결되지 않은 문서)일 경우 비활성화 됩니다.

## 값

DocumentTimeline 객체.

## 명세서



## 브라우저 호환성



## 같이보기

- [웹 애니메이션 API](/ko/docs/Web/API/Web_Animations_API)
- AnimationTimeline
- AnimationTimeline.currentTime
- DocumentTimeline
