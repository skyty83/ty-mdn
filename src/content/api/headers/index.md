---
title: Headers
slug: Web/API/Headers
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

Fetch API 

**`Headers`** 인터페이스는 [Fetch API](/ko/docs/Web/API/Fetch_API)의 일부로, [HTTP 요청 및 응답 헤더](/ko/docs/Web/HTTP/Reference/Headers)에서 다양한 작업을 수행할 수 있도록 합니다. 이러한 작업에는 요청 헤더 목록에서 헤더를 조회, 설정, 추가 및 제거하는 것이 포함됩니다.

`Headers` 객체는 Request.headers 및 Response.headers 속성을 통해 조회할 수 있으며, Headers() 생성자를 사용하여 새로 생성할 수 있습니다. 일반 객체를 사용하는 것과 비교하여, `Headers` 객체를 사용하면 입력값에 대해 추가적인 정제 작업이 이루어집니다. 예를 들어, 헤더 이름을 소문자로 정규화하고, 헤더 값의 앞뒤 공백을 제거하며, 특정 헤더가 설정되는 것을 방지합니다.

> [!NOTE]
> 사용 가능한 헤더에 대해 더 알아보려면 [HTTP 헤더](/ko/docs/Web/HTTP/Reference/Headers) 참조 페이지를 읽어보세요.

## 설명

`Headers` 객체는 연관된 헤더 목록을 가지며, 초기에는 비어있고 0개 이상의 이름과 값 쌍으로 구성됩니다. append()와 같은 메서드를 사용하여 헤더를 추가할 수 있습니다(자세한 예제는 [예제](#examples)를 참고하세요). 이 인터페이스의 모든 메서드에서는 헤더 이름을 대소문자 구분 없이 비교합니다.

`Headers`를 구현한 객체는 entries() 대신 바로 for...of 구문에서 사용할 수 있습니다. 즉, `for (const p of myHeaders)`는 `for (const p of myHeaders.entries())`와 동일합니다.

### 수정 제한

일부 `Headers` 객체는 set(), delete(), 그리고 append() 메서드를 통해 헤더를 변경할 수 있는지에 대해 제한이 있습니다. 이러한 수정 제한은 `Headers` 객체가 생성된 방식에 따라 설정됩니다.

- Headers() 생성자로 생성된 헤더에는 수정 제한이 없습니다.
- Request 객체의 헤더
  - 요청의 mode가 `no-cors`인 경우, 모든 CORS-safelisted request header 이름/값을 수정할 수 있습니다.
  - 그렇지 않은 경우, 모든 non-forbidden request header 이름/값을 수정할 수 있습니다.
- Response 객체의 헤더
  - 응답이 Response.error() 또는 Response.redirect()를 사용하여 생성되었거나 fetch() 호출에서 받은 경우, 헤더는 불변이며 수정할 수 없습니다.
  - 그렇지 않은 경우, 응답이 Response() 또는 Response.json()를 사용하여 생성된 경우, 모든 non-forbidden response header 이름/값을 수정할 수 있습니다.

모든 Headers 메서드는 [유효한 HTTP 헤더 이름](https://fetch.spec.whatwg.org/#concept-header-name)이 아닌 이름에 대한 참조를 전달하려고 할 경우 TypeError를 발생시킵니다. 또한, 헤더가 불변인 경우 변경 작업은 `TypeError`를 발생시키며, 그 외의 실패 상황에서는 실패를 조용히 처리합니다.

## 생성자

- Headers()
  - : 새로운 `Headers` 객체를 생성합니다.

## 인스턴스 메서드

- Headers.append()
  - : `Headers` 객체 내의 기존 헤더에 새 값을 추가하거나, 헤더가 존재하지 않는 경우 헤더를 추가합니다.
- Headers.delete()
  - : `Headers` 객체에서 헤더를 삭제합니다.
- Headers.entries()
  - : 이 객체에 포함된 모든 키/값 쌍을 순회할 수 있는 iterator를 반환합니다.
- Headers.forEach()
  - : 이 `Headers` 객체의 각 키/값 쌍에 대해 제공된 함수를 한 번 실행합니다.
- Headers.get()
  - : 주어진 이름을 가진 `Headers` 객체 내 헤더의 모든 값을 String 시퀀스로 반환합니다.
- Headers.getSetCookie()
  - : 응답과 연관된 모든 Set-Cookie 헤더의 값을 포함하는 배열을 반환합니다.
- Headers.has()
  - : `Headers` 객체에 특정 헤더가 포함되어 있는지 여부를 나타내는 boolean 값을 반환합니다.
- Headers.keys()
  - : 이 객체에 포함된 모든 키/값 쌍의 키를 순회할 수 있는 iterator를 반환합니다.
- Headers.set()
  - : `Headers` 객체 내의 기존 헤더에 대해 새 값을 설정하거나, 헤더가 존재하지 않는 경우 헤더를 추가합니다.
- Headers.values()
  - : 이 객체에 포함된 모든 키/값 쌍의 값을 순회할 수 있는 iterator를 반환합니다.

> [!NOTE]
> 분명히 하자면, Headers.set()과 Headers.append()의 차이점은, 지정된 헤더가 이미 존재하고 여러 값을 허용하는 경우, Headers.set()은 기존 값을 새 값으로 덮어쓰는 반면, Headers.append()은 기존 값의 끝에 새 값을 추가한다는 점입니다. 각 메서드의 예제 코드는 해당 페이지를 참고하세요.

> [!NOTE]
> 헤더 값을 순회할 때, 값들은 자동으로 사전 순으로 정렬되며, 동일한 헤더 이름의 값들은 결합됩니다.

## 예제

다음 스니펫에서는 `Headers()` 생성자를 사용하여 새 헤더를 생성한 후, `append()`를 사용해 헤더를 추가하고, `get()`을 사용하여 해당 헤더 값을 반환하는 예를 보여줍니다.

```js
const myHeaders = new Headers();

myHeaders.append("Content-Type", "text/xml");
myHeaders.get("Content-Type"); // 'text/xml' 반환
```

동일한 작업은 배열의 배열 또는 객체 리터럴을 생성자에 전달하여도 가능합니다.

```js
let myHeaders = new Headers({
  "Content-Type": "text/xml",
});

// 또는, 배열의 배열을 사용하여
myHeaders = new Headers([["Content-Type", "text/xml"]]);

myHeaders.get("Content-Type"); // 'text/xml' 반환
```

## 명세서



## 브라우저 호환성



## 같이 보기

- [Service Worker API](/ko/docs/Web/API/Service_Worker_API)
- [교차 출처 리소스 공유 (CORS)](/ko/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ko/docs/Web/HTTP)
