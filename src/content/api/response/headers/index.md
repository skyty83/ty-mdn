---
title: "Response: headers 속성"
short-title: headers
slug: Web/API/Response/headers
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

Fetch API

**`headers`** 읽기 전용 속성은
Response 인터페이스의 속성으로, 해당 응답과 연관된 Headers
객체를 포함합니다.

## 값

Headers 객체입니다.

## 예제

[Fetch Response 예제](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (또는 [Fetch Response 실시간 예제](https://mdn.github.io/dom-examples/fetch/fetch-response/))에서는 Request() 생성자를 사용해 JPG 경로를 전달하여 새로운 Request 객체를 생성합니다. 그 후, fetch()를 사용해 이 요청을 가져오고, 응답에서 Response.blob을 사용해 Blob을 추출한 다음, URL.createObjectURL()을 이용해 객체 URL을 생성하고 이를 img 요소에 표시합니다.

`fetch()` 블록의 맨 위에서는 응답 헤더를 콘솔에 기록한다는 점에 주의하세요.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => {
    console.log("response.headers =", response.headers);
    return response.blob();
  })
  .then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
```

## 명세서



## 브라우저 호환성



## 같이 보기

- [ServiceWorker API](/ko/docs/Web/API/Service_Worker_API)
- [교차 출처 리소스 공유 (CORS)](/ko/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ko/docs/Web/HTTP)
