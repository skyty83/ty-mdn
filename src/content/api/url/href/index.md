---
title: URL.href
slug: Web/API/URL/href
---

URL API

URL 인터페이스의 **`href`** 속성은 전체 URL을 담은 USVString입니다.



## 구문

```js
const urlString = url.href;
url.href = newUrlString;
```

### 값

USVString.

## 예제

```js
const url = new URL("https://developer.mozilla.org/ko/docs/Web/API/URL/href");
console.log(url.href); // Logs: 'https://developer.mozilla.org/ko/docs/Web/API/URL/href'
```

## 명세



## 브라우저 호환성



## 같이 보기

- 속성이 속한 URL 인터페이스.
