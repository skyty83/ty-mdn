---
title: URL.username
slug: Web/API/URL/username
---

URL API

URL 인터페이스의 **`username`** 속성은 도메인 이전의 사용자 이름을 담은 USVString을 반환합니다.



## 구문

```js
const usernameString = url.username;
url.username = newUsername;
```

### 값

USVString.

## 예제

```js
const url = new URL(
  "https://anonymous:flabada@developer.mozilla.org/ko/docs/Web/API/URL/username",
);
console.log(url.username); // Logs "anonymous"
=======
```

## 명세



## 브라우저 호환성



## 같이 보기

- 속성이 속한 URL 인터페이스.
