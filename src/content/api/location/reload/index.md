---
title: Location.reload()
slug: Web/API/Location/reload
---

HTML DOM

**`Location.reload()`** 메서드는 새로고침 버튼처럼 현재 리소스를 다시 불러옵니다.

새로고침은 `SECURITY_ERROR` DOMException과 함께 거부당할 수 있습니다. 이는 `location.reload()`를 호출한 스크립트의 출처와 Location 객체를 소유한 문서의 출처가 다를 때 발생합니다. 더 자세한 정보는 [동일 출처 정책](/ko/docs/Web/Security/Defenses/Same-origin_policy) 문서를 참고하세요.

## 구문

```js
location.reload();
```

## 명세



## 브라우저 호환성



## 같이 보기

- 메서드가 속한 Location 인터페이스.
- 비슷한 메서드: Location.assign(), Location.replace().
