---
title: ServiceWorkerRegistration.active
slug: Web/API/ServiceWorkerRegistration/active
---

Service Workers API

ServiceWorkerRegistration 인터페이스의 **`active`** 속성은 ServiceWorker.state 가 `activating` 또는 `activated` 상태인 서비스 워커를 반환한다. 이 속성은 `null` 로 초기 설정되어 있다.

클라이언트들의 URL이 등록 scope 내에 있을 경우 active 워커는 ServiceWorkerClient 를 제어한다. (ServiceWorkerContainer.register 가 처음으로 호출될 때 그 `scope` 옵션은 정의된다.)

> [!NOTE]
> 이 기능은 [Web Workers](/ko/docs/Web/API/Web_Workers_API) 에서 사용 가능하다.

## Syntax

```js
sw = ServiceWorker.active;
```

### Value

현재 `activating` 또는 `activated` 상태에 있다면, ServiceWorker 객체.

## 명세서



## 브라우저 호환성



## See also

- [Using Service Workers](/ko/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- Promise
- [Using web workers](/ko/docs/Web/API/Web_Workers_API/Using_web_workers)
