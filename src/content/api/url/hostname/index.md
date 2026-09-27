---
title: URL.hostname
slug: Web/API/URL/hostname
---

URL API

URL 인터페이스의 **`hostname`** 속성은 URL의 도메인 이름을 담은 USVString을 반환합니다.



## 구문

```js
const domain = url.hostname;
url.hostname = domain;
```

### 값

USVString,

## 예제

```js
const url = new URL(
  "https://developer.mozilla.org/ko/docs/Web/API/URL/hostname",
);
console.log(url.hostname); // Logs: 'developer.mozilla.org'
```

## 명세



## 브라우저 호환성



## 같이 보기

- 속성이 속한 URL 인터페이스.
