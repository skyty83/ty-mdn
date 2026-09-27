---
title: WebGLRenderbuffer
slug: Web/API/WebGLRenderbuffer
---

WebGL

**WebGLRenderbuffer** 인터페이스는 [WebGL API](/ko/docs/Web/API/WebGL_API) 의 부분입니다. 그리고 이미지를 담거나 렌더링 연산의 소스나 타겟이 될 수 있는 버퍼를 말합니다.

## 설명

`WebGLRenderbuffer` 오브젝트는 메소드나 프로퍼티를 정의 하지 않으며 직접적으로 접근할 수 없습니다. When working with `WebGLRenderbuffer` 오브젝트와 작업하려면 다음의 WebGLRenderingContext 메소드가 도움이 될 것입니다.

- WebGLRenderingContext.bindRenderbuffer()
- WebGLRenderingContext.createRenderbuffer()
- WebGLRenderingContext.deleteRenderbuffer()
- WebGLRenderingContext.isRenderbuffer()

## 예

### 렌더 버퍼 만들기

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var buffer = gl.createRenderbuffer();
```

## 명세서



## 브라우저 호환성



## 함께 보기

- WebGLRenderingContext.bindRenderbuffer()
- WebGLRenderingContext.createRenderbuffer()
- WebGLRenderingContext.deleteRenderbuffer()
- WebGLRenderingContext.isRenderbuffer()
- Other buffers: WebGLBuffer, WebGLFramebuffer
