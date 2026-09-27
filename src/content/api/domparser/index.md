---
title: DOMParser
slug: Web/API/DOMParser
---

DOM

The **`DOMParser`** 인터페이스는 DOM Document 문서에 맞는 XML 및 HTML 소스 코드를 해석할 수 있는 기반을 제공한다 .

> [!NOTE]
> XMLHttpRequest 객체로도 인식 가능한 URL 주소로부터 직접 XML 및 HTML 문서를 해석하여 response 속성을 통해 `Document` 객체로 제공한다.

반대로 DOM 구조를 XML 및 HTML 소스 코드로 제공하는 방식은 XMLSerializer 인터페이스를 참고하도록 한다.

HTML 문서의 경우, Element.innerHTML 속성과 outerHTML 속성을 통해 DOM 구조를 새로운 방식으로 변경할 수 있다. 또한 이들 속성을 통해 HTML 구조의 하위에 있는 HTML 구조도 불러올 수 있다.

## 문법

```js
let domparser = new DOMParser();
```

## 메소드

- DOMParser.parseFromString()

#### 문법

```js
let doc = domparser.parseFromString(string, mimeType);
```

#### 반환

**[`mimeType`](#argument02)** 인자를 통해 정의한 형식에 따른 Document 또는XMLDocument 문서를 반환한다.

#### 인자

이 메소드에는 2개의 인자가 제공되는데, 모두 필수값이다.

- `string`
  - : 해석할 DOMString 문자열. 반드시 HTML, xml, xhtml+xml 또는 svg 문서 형식에 맞아야 한다.
- `mimeType`
  - : 아래 표에 정의한 형식을 반환 값으로 제공할 DOMString 문자열.

    | `mimeType`              | `doc.constructor`            |
    | ----------------------- | ---------------------------- |
    | `text/html`             | `Document`    |
    | `text/xml`              | `XMLDocument` |
    | `application/xml`       | `XMLDocument` |
    | `application/xhtml+xml` | `XMLDocument` |
    | `image/svg+xml`         | `XMLDocument` |

## 예제

이 인터페이스의 유일한 메서드인 DOMParser.parseFromString()에 대한 설명서에는 XML, SVG 및 HTML 문자열을 구문 분석하기 위한 예제가 포함되어 있습니다.

## 명세서



## 브라우저 호환성



## 같이 보기

- [XML 문서 직렬화와 해석](/ko/docs/Web/XML/Guides/Parsing_and_serializing_XML)
- XMLHttpRequest
- XMLSerializer
- JSON.parse() - JSON 문서에 대해 같은 역할을 제공한다.
