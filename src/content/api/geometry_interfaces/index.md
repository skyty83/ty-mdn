---
title: Geometry interfaces
slug: Web/API/Geometry_interfaces
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

Geometry Interfaces

**Geometry interfaces**는 3D 및 2D 그래픽 작업, 특히 점, 사각형, 사변형 및 [변환 행렬(transformation matrices)](/ko/docs/Web/API/WebGL_API/Matrix_math_for_the_web#transformation_matrices)(그래픽 이동/이동, 크기 조정, 회전, 기울이기/가르기/비틀기 및 뒤집기 작업과 이러한 작업의 곱하기/연결 및 반전/실행 취소 작업)을 위한 인터페이스를 제공하는 CSS 모듈입니다.

웹 개발자는 항상 geometry interfaces를 직접 사용하지 않고 뒤에서 이를 사용하는 다른 기능, 즉 [CSS Transforms](/ko/docs/Web/CSS/CSS_transforms)의 일부, [Canvas API](/ko/docs/Web/API/Canvas_API) 및 [WebXR Device API](/ko/docs/Web/API/WebXR_Device_API), (더 직접적으로는) VideoFrame.visibleRect와 Element.getClientRects(), Element.getBoundingClientRect()를 사용합니다.

## 인터페이스

- DOMMatrix
  - : 그래픽 이동/이동, 크기 조정, 회전, 기울이기/가르기/비틀기 및 뒤집기 작업과 이러한 작업의 곱하기/연결 및 반전/실행 취소 작업을 위한 [변환 행렬](/ko/docs/Web/API/WebGL_API/Matrix_math_for_the_web#transformation_matrices)을 나타냅니다.
- DOMMatrixReadOnly
  - : DOMMatrix의 읽기 전용 버전.
- DOMPoint
  - : 좌표계의 2D 또는 3D 점을 나타내며, 최대 3차원의 좌표 값과 선택적 원근값을 포함합니다.
- DOMPointReadOnly
  - : DOMPoint의 읽기 전용 버전.
- DOMQuad
  - : [사변형(quadrilateral)](https://en.wikipedia.org/wiki/Quadrilateral)의 모서리를 정의하는 네 개의 DOMPoint 객체 모음을 나타냅니다.
- DOMRect
  - : 직사각형의 크기와 위치를 나타냅니다.
- DOMRectReadOnly
  - : DOMRect의 읽기 전용 버전.

## 예제

Path2D.addPath() 및 CanvasPattern.setTransform() 문서에는 일부 Geometry interfaces를 사용하는 예제가 있습니다.

## 명세서



## 브라우저 호환성



## 같이 보기

- Path2D.addPath()
- CanvasPattern.setTransform()
- CanvasRenderingContext2D.getTransform()
- CanvasRenderingContext2D.setTransform()
- CSSTransformValue.toMatrix()
- CSSTransformComponent.toMatrix()
- Element.getBoundingClientRect()
- Element.getClientRects()
- VideoFrame.visibleRect
- XRLightEstimate
- XRRigidTransform
