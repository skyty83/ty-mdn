---
title: "WebGLRenderingContext: drawArrays() 메서드"
short-title: drawArrays()
slug: Web/API/WebGLRenderingContext/drawArrays
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

WebGL

[WebGL API](/ko/docs/Web/API/WebGL_API) 의 **`WebGLRenderingContext.drawArrays()`** 메서드는 배열 데이터로부터 기본 그래픽 형상을 렌더링합니다.

## 구문

```js-nolint
drawArrays(mode, first, count)
```

### 매개변수

- `mode`
  - : 렌더링할 기본 그래픽 형상의 타입을 지정하는 GLenum 입니다. 가능한 값은 다음과 같습니다.
    - `gl.POINTS`: 한 점을 그립니다.
    - `gl.LINE_STRIP`: 다음 정점까지 직선을 그립니다.
    - `gl.LINE_LOOP`: 다음 정점까지 직선을 그리고, 마지막 정점을 처음 정점에 연결합니다.
    - `gl.LINES`: 정점 쌍 사이에 선을 그립니다.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: 세 개의 정점 그룹에 대한 삼각형을 그립니다.

- `first`
  - : 벡터 포인트 배열에서의 시작 인덱스를 지정하는 GLint 입니다.
- `count`
  - : 렌더링 될 인덱스의 개수를 지정하는 GLsizei 입니다.

### 반환 값

없음 (undefined).

### 예외

- `mode` 가 허용된 값 중 하나가 아닌 경우,
  `gl.INVALID_ENUM` 오류가 발생합니다.
- `first` 또는 `count` 가 음수인 경우,
  `gl.INVALID_VALUE` 오류가 발생합니다.
- `gl.CURRENT_PROGRAM` 이 [`null`](/ko/docs/Web/JavaScript/Reference/Operators/null)인 경우,
  `gl.INVALID_OPERATION` 오류가 발생합니다.

## 예제

```js
gl.drawArrays(gl.POINTS, 0, 8);
```

## 명세서



## 브라우저 호환성



## 같이 보기

- WebGLRenderingContext.drawElements()
- ext.drawArraysInstancedANGLE()
- ext.drawElementsInstancedANGLE()
- ext.vertexAttribDivisorANGLE()
- WebGL2RenderingContext.drawArraysInstanced()
- WebGL2RenderingContext.drawElementsInstanced()
- WebGL2RenderingContext.vertexAttribDivisor()
- WEBGL_multi_draw.multiDrawArraysWEBGL()
