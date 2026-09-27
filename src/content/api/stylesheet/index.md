---
title: StyleSheet
slug: Web/API/StyleSheet
l10n:
  sourceCommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

CSSOM

`StyleSheet` 인터페이스를 구현하는 객체는 단일 스타일 시트를 나타냅니다. CSS 스타일 시트는 보다 특수화된 CSSStyleSheet 인터페이스를 추가로 구현합니다.

## 인스턴스 속성

- StyleSheet.disabled
  - : 현재 스타일시트가 적용되었는지 여부를 나타내는 불리언 값입니다.
- StyleSheet.href 
  - : 스타일시트의 위치를 나타내는 문자열을 반환합니다.
- StyleSheet.media 
  - : 스타일 정보에 대해 원하는 대상 매체를 나타내는 MediaList를 반환합니다.
- StyleSheet.ownerNode 
  - : 현재 문서와 이 스타일 시트를 연결하는 Node를 반환합니다.
- StyleSheet.parentStyleSheet 
  - : 이 시트를 포함하는 StyleSheet를 반환합니다. 없으면 `null`을 반환합니다.
- StyleSheet.title 
  - : 현재 스타일 시트의 추가적인 제목을 나타내는 문자열을 반환합니다.
- StyleSheet.type
  - : 이 스타일 시트의 스타일 시트 언어를 나타내는 문자열을 반환합니다.

## 명세서



## 브라우저 호환성



## 같이 보기

- CSSStyleSheet
