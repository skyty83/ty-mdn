---
title: XMLHttpRequest.setRequestHeader()
slug: Web/API/XMLHttpRequest/setRequestHeader
---

XMLHttpRequest

**XMLHttpRequest.setRequestHeader()** 메소드는 HTTP요청 헤더의 값을 설정합니다. 반드시 `setRequestHeader()`를 [`open()`](#open)뒤에 호출하여야 하며, 또한 `send()`가 호출되기 전에 호출해야 합니다. 만약 이 메소드가 같은 헤더에 대하여 여러번 호출이 되면, 그 값은 단일 요청 헤더에 병합됩니다.

만약 이것을 이용해 Accept 헤더를 설정하지 않으면, send()가 호출될 때 `Accept` 헤더가 `*/*`와 함께 전송됩니다.

보안상의 이유로, 어떤 헤더는 오직 사용자 에이전트에 의해서만 관리될 수 있습니다. 이 헤더는 forbidden header names와 forbidden response header names를 포함합니다.

> [!NOTE]
> 여러분의 필드에 대해서, 상호교차(cross-domain) 요청시 "**not allowed by Access-Control-Allow-Headers in preflight response**" Exception이 나타날 수 있습니다. 이런 경우, "Access-Control-Allow-Headers"를 서버 측 응답 헤더에 설정하면 됩니다.

## 구문

```js
myReq.setRequestHeader(header, value);
```

### 매개변수

- `header`
  - : 설정 될 값을 가진 헤더의 이름
- `value`
  - : 헤더의 본문(body)에 설정될 값

## 명세



## 브라우저 호환성



## 더 보기

[Using XMLHttpRequest](/ko/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
