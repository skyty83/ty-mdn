---
title: FileReader.readAsText()
slug: Web/API/FileReader/readAsText
---

File API

**`readAsText()`** 메서드는 지정된 Blob 이나 File 의 컨텐츠를 읽기 위해 사용합니다. 읽기 연산이 끝나면, readyState 가 `DONE`으로 바뀌고, loadend 이벤트가 트리거 되고, result 프로퍼티는 파일의 내용을 텍스트 문자열로 가집니다.

> [!NOTE]
> Blob.text() 메서드는 파일을 텍스트로 읽는 프로미스 기반의 새 API 입니다.

## 문법

```js
instanceOfFileReader.readAsText(blob[, encoding]);
```

### 매개변수

- `blob`
  - : 읽어 들일 Blob 이나 File
- `encoding` 
  - : 반환 데이터에 사용될 문자열 인코딩을 지정. 매개변수가 지정되지 않으면 기본적으로 UTF-8이라고 가정합니다.

## 명세



## 브라우저 호환성



## 함께 보기

- FileReader
