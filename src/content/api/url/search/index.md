---
title: URL.search
slug: Web/API/URL/search
---

URL API

URL 인터페이스의 **`search`** 속성은 맨 앞의 `'?'`와 함께 URL의 쿼리 문자열, 즉 검색 매개변수를 나타내는 USVString입니다.

신형 브라우저에서는 URL.searchParams 속성을 통해 간편한 쿼리 문자열 분석을 지원합니다.



## 구문

```js
const searchParams = object.search;
url.search = newSearchParams;
```

### 값

USVString.

## Examples

```js
const url = new URL(
  "https://developer.mozilla.org/ko/docs/Web/API/URL/search?q=123",
);
console.log(url.search); // Logs "?q=123"
```

## 명세서



## 브라우저 호환성



## See also

- 속성이 속한 URL 인터페이스.
