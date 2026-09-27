---
title: Clients
slug: Web/API/Clients
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

Service Workers APIservice

`Clients` 인터페이스는 Client 객체에 대한 접근을 제공합니다. [서비스 워커](/ko/docs/Web/API/Service_Worker_API) 내의 `self.clients`를 통해 접근할 수 있습니다.

## 인스턴스 메서드

- Clients.get()
  - : 주어진 id와 일치하는 Client의 Promise를 반환합니다.
- Clients.matchAll()
  - : Client 객체 배열의 Promise를 반환합니다. 옵션 인수를 사용하면 반환되는 클라이언트의 유형을 제어할 수 있습니다.
- Clients.openWindow()
  - : 주어진 URL의 새 브라우저 창을 열고 새로운 WindowClient의 Promise를 반환합니다.
- Clients.claim()
  - : 활성화된 서비스 워커가 자신의 scope 내 모든 클라이언트의 controller로 설정될 수 있습니다.

## 예제

다음 예제는 사용자가 알림을 클릭했을 때 기존 채팅 창을 보여주거나 새로운 채팅 창을 생성하는 것을 보여줍니다.

```js
addEventListener("notificationclick", (event) => {
  event.waitUntil(
    (async () => {
      const allClients = await clients.matchAll({
        includeUncontrolled: true,
      });

      let chatClient;

      // 채팅 창이 이미 열려 있는지 확인해 봅시다.
      for (const client of allClients) {
        const url = new URL(client.url);

        if (url.pathname === "/chat/") {
          // 좋습니다, 이 창을 사용합시다!
          client.focus();
          chatClient = client;
          break;
        }
      }

      // 기존 채팅 창을 찾지 못했다면,
      // 새 창을 엽니다.
      if (!chatClient) {
        chatClient = await clients.openWindow("/chat/");
      }

      // 클라이언트에게 메시지를 보냅니다.
      chatClient.postMessage("New chat messages!");
    })(),
  );
});
```

## 명세서



## 브라우저 호환성



## 같이 보기

- [서비스 워커 사용하기](/ko/docs/Web/API/Service_Worker_API/Using_Service_Workers)
