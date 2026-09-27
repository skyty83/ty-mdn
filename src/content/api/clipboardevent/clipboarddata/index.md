---
title: ClipboardEvent.clipboardData
slug: Web/API/ClipboardEvent/clipboardData
---

Clipboard API 

**`ClipboardEvent.clipboardData`** 속성은 다음과 같은 용도로 사용할 수 있는 DataTransfer 객체입니다.

- cut, copy 이벤트 처리기 내에서, 어떤 데이터를 클립보드에 넣어야 하는지 지정하기. 보통 setData(format, data)를 호출해서 수행합니다.
- paste 이벤트 처리기 내에서 데이터를 가져오기. 보통 getData(format)을 호출해서 수행합니다.

cut, copy, paste 이벤트 문서에서 자세한 정보를 확인하세요.

## 구문

```js
data = ClipboardEvent.clipboardData;
```

## 명세



## 브라우저 호환성



## 같이 보기

- 복사 관련 이벤트: cut, copy, paste
- 이 속성이 속한 ClipboardEvent 인터페이스.
