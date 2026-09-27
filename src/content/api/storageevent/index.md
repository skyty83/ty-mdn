---
title: StorageEvent
slug: Web/API/StorageEvent
---

Web Storage API

**`StorageEvent`** 인터페이스는 storage 이벤트가 구현합니다. `storage` 이벤트는 `window`에서 접근 가능한 저장소가 다른 문서에서 변경될 경우 발생합니다.



## 생성자

- StorageEvent()
  - : 새로 생성한 `StorageEvent` 객체를 반환합니다.

## 속성

부모 인터페이스인 Event의 속성을 상속합니다.

- key 
  - : 바뀐 키를 나타내는 DOMString을 반환합니다. `clear()` 메서드에 의해 발생한 이벤트에서는 null입니다.
- newValue 
  - : `key`가 가리키는 새로운 값을 나타내는 DOMString을 반환합니다. `clear()` 메서드에 의해, 또는 `key`가 저장소에서 제거되어 발생한 이벤트에서는 null입니다.
- oldValue 
  - : `key`가 가리키던 원래 값을 나타내는 DOMString을 반환합니다. 저장소에 `key`를 새로 추가해서 발생한 경우, 이전 값이 존재할 수 없으므로 `oldValue`도 null입니다.
- storageArea 
  - : 영향을 받은 저장소를 나타내는 Storage 객체를 반환합니다.
- url 
  - : `key`를 바꾼 문서의 URL DOMString을 반환합니다.

## 메서드

부모 인터페이스인 Event의 메서드를 상속합니다.

## 명세



## 브라우저 호환성


