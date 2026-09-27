---
title: CSSStyleSheet
slug: Web/API/CSSStyleSheet
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

CSSOM

**`CSSStyleSheet`** 인터페이스는 단일 [CSS](/ko/docs/Web/CSS) 스타일 시트를 나타내며, 그 안에 포함된 규칙 목록을 검사하고 수정할 수 있게 합니다. 이 인터페이스는 그 부모인 StyleSheet로부터 속성과 메서드를 상속합니다.



스타일 시트는 스타일 시트에 포함된 각 규칙을 나타내는 객체인 CSSRule의 모음으로 구성되어 있습니다. 그 규칙들은 스타일 시트의 cssRules 속성으로부터 얻을 수 있는 CSSRuleList에 포함되어 있습니다.

예를 들어, 어떤 규칙은 다음과 같은 스타일을 포함하는 CSSStyleRule 객체일 수 있습니다.

```css
h1,
h2 {
  font-size: 16pt;
}
```

또 다른 규칙은 @import 또는 @media 등과 같은 규칙일 수 있습니다.

`CSSStyleSheet` 객체를 얻을 수 있는 다양한 방법을 알아보려면 [스타일 시트 얻기](#스타일_시트_얻기) 부분을 살펴보세요. 또한 `CSSStyleSheet`는 직접 생성될 수 있습니다. 그 생성자와 CSSStyleSheet.replace(), CSSStyleSheet.replaceSync() 메서드들은 새롭게 추가된 명세들로, '생성가능한 스타일 시트'를 사용가능하게 합니다.

## 생성자

- CSSStyleSheet()
  - : 새로운 `CSSStyleSheet` 객체를 만듭니다.

## 인스턴스 속성

부모인 StyleSheet를 상속합니다.

- CSSStyleSheet.cssRules 
  - : 스타일 시트를 구성하는 최신의 CSSRule 객체 목록을 유지하는 실시간 CSSRuleList를 반환합니다.

    > [!NOTE]
    > 어떤 브라우저에서는, 다른 도메인에서 스타일 시트가 로드되면, `cssRules`에 접근시 `SecurityError`가 발생합니다.

- CSSStyleSheet.ownerRule 
  - : 만약 스타일 시트가 @import 규칙을 사용하는 문서로부터 오면, `ownerRule` 속성이 해당하는 CSSImportRule을 반환합니다. 그렇지 않으면 이 속성 값은 `null`입니다.

## 인스턴스 메서드

부모인 StyleSheet를 상속합니다.

- CSSStyleSheet.deleteRule()
  - : 스타일 시트의 규칙 목록에서 특정 인덱스의 규칙을 삭제합니다.
- CSSStyleSheet.insertRule()
  - : 주어진 규칙의 텍스트 표현에 따라 스타일 시트의 특정 위치에 새로운 규칙을 삽입합니다.
- CSSStyleSheet.replace()
  - : 비동기적으로 스타일 시트의 내용을 대체하고 업데이트된 `CSSStyleSheet`를 처리하는 Promise를 반환합니다.
- CSSStyleSheet.replaceSync()
  - : 스타일 시트의 내용을 동기적으로 대체합니다.

## 레거시 속성

이 속성들은 마이크로소프트에 의해 소개된 레거시 속성입니다. 이 속성들은 이미 운영중인 사이트의 호환성을 위해 유지됩니다.

- rules  
  - : `rules` 속성은 기능적으로 표준 cssRules와 동일합니다. 스타일 시트의 모든 규칙 목록을 최신으로 유지하는 실시간 CSSRuleList를 반환합니다.

## 레거시 메서드

이 메서드들은 마이크로소프트에 의해 소개된 레거시 메서드입니다. 이 메서드들은 이미 운영중인 사이트의 호환성을 위해 유지됩니다.

- addRule() 
  - : 적용될 선택자와 일치하는 요소들에 적용할 스타일을 고려하여 새로운 규칙을 스타일 시트에 추가합니다.

    이 메서드는 모든 규칙의 텍스트 표현을 하나의 문자열로 받는 insertRule()과는 다릅니다.

- removeRule() 
  - : 기능적으로 deleteRule()와 동일합니다. 스타일 시트 규칙 목록의 특정 인덱스 규칙을 삭제합니다.

## 스타일 시트 얻기

스타일시트는 최대 하나의 Document에 연관되어 있으며, 그 문서에 (가 아니라면)적용됩니다. 주어진 문서의 `CSSStyleSheet` 객체 목록은 Document.styleSheets 속성을 사용하여 얻을 수 있습니다. 또한 특정 스타일 시트는 그 소유자 객체 (`Node` 또는 `CSSImportRule`)로부터 접근할 수 있습니다.

`CSSStyleSheet` 객체는 스타일 시트가 문서에 로드될 때, 그 문서의 Document.styleSheets 목록으로 브라우저에 의해 자동으로 생성되고 삽입됩니다.

스타일 시트가 문서와 연관될 수 있는 (아마 완성되지 않은)방법들은 다음과 같습니다.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">
        스타일 시트가 문서와 연관된 이유
      </th>
      <th scope="col">
        <code>document.<br />styleSheets</code> 목록에 나타남
      </th>
      <th scope="col">
        스타일 시트 객체가 주어진 소유자 요소/규칙 가져오기
      </th>
      <th scope="col">소유자 객체를 위한 인터페이스</th>
      <th scope="col">소유자로부터 CSSStyleSheet 객체 가져오기</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        문서의
        style와 link
        요소
      </td>
      <td>Yes</td>
      <td>.ownerNode</td>
      <td>
        HTMLLinkElement,<br />HTMLStyleElement,<br />or
        SVGStyleElement
      </td>
      <td>
        HTMLLinkElement.sheet,<br />HTMLStyleElement.sheet,<br />or
        SVGStyleElement.sheet
      </td>
    </tr>
    <tr>
      <td>
        문서에 적용된 다른 스타일 시트의 CSS @import 규칙
      </td>
      <td>Yes</td>
      <td>
        .ownerRule
      </td>
      <td>CSSImportRule</td>
      <td>
        .styleSheet
      </td>
    </tr>
    <tr>
      <td>
        (HTML이 아닌) 문서의 <code>&#x3C;?xml-stylesheet ?></code> 처리 지시문
      </td>
      <td>Yes</td>
      <td>.ownerNode</td>
      <td>ProcessingInstruction</td>
      <td>
        .sheet
      </td>
    </tr>
    <tr>
      <td>HTTP Link Header</td>
      <td>Yes</td>
      <td><em>N/A</em></td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>사용자 에이전트 (기본) 스타일 시트</td>
      <td>No</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

## 명세서



## 브라우저 호환성



## 같이 보기

- [CSS Object Model](/ko/docs/Web/API/CSS_Object_Model)
- [Using dynamic styling information](/ko/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
