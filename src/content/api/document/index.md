---
title: Document
slug: Web/API/Document
---

DOM

**`Document`** 인터페이스는 브라우저가 불러온 웹 페이지를 나타내며, 페이지 콘텐츠([DOM 트리](/ko/docs/conflicting/Web/API/Document_Object_Model_73827e330a6d9b2a25fe17acee5f6c48ee67e6f83a44f672e71afbaf429d69ee))의 진입점 역할을 수행합니다. DOM 트리는 body와 table 및 [여러 다른](/ko/docs/Web/HTML/Reference/Elements) 요소를 포함합니다. `Document`는 페이지의 URL을 얻거나 문서에 새로운 요소를 생성하는 등의 기능을 전역적으로 제공합니다.



`Document` 인터페이스는 모든 종류의 문서에 대한 공통의 속성과 메서드를 묘사합니다. 문서의 유형([HTML](/ko/docs/Web/HTML), [XML](/ko/docs/Web/XML/Guides/XML_introduction), SVG 등)에 따라서 더 다양한 API가 존재합니다. 예컨대 `"text/html"` 콘텐츠 유형으로 제공되는 HTML 문서는 HTMLDocument 인터페이스도 구현하는 반면, XML과 SVG 문서는 XMLDocument 인터페이스를 구현합니다.

## 생성자

- Document() 
  - : 새로운 `Document` 객체를 생성합니다.

## 속성

_`Document`는 Node와 EventTarget 인터페이스도 상속합니다._

- Document.anchors 
  - : 문서 내 모든 앵커의 목록을 반환합니다.
- Document.body
  - : 현재 문서의 body 또는 frameset 노드를 반환합니다.
- Document.characterSet 
  - : 문서에서 사용하는 캐릭터셋을 반환합니다.
- Document.compatMode  
  - : 문서의 렌더링 모드가 Quirks와 Strict 중 어떤 것인지 반환합니다.
- Document.contentType  
  - : 현재 문서의 MIME 헤더로부터 `Content-Type`을 반환합니다.
- Document.doctype 
  - : 현재 문서의 문서 형식 정의(Document Type Definition, DTD)를 반환합니다.
- Document.documentElement 
  - : 문서의 직속 자식인 Element를 반환합니다. HTML 문서에서는 보통 html 요소를 나타내는 HTMLHtmlElement 객체입니다.
- Document.documentURI 
  - : 문서의 위치를 문자열로 반환합니다.
- Document.embeds 
  - : 현재 문서에 포함된 embed 요소 목록을 반환합니다.
- Document.fonts
  - : 현재 문서의 FontFaceSet 인터페이스를 반환합니다.
- Document.forms 
  - : 현재 문서의 form 요소 목록을 반환합니다.
- Document.head 
  - : 현재 문서의 head 요소를 반환합니다.
- Document.hidden 
  - : 현재 문서의 숨김 여부를 반환합니다.
- Document.images 
  - : 현재 문서의 이미지 목록을 반환합니다.
- Document.implementation 
  - : 현재 문서와 연관된 DOM 구현을 반환합니다.
- Document.lastStyleSheetSet 
  - : 마지막에 활성화된 스타일 시트 세트의 이름을 반환합니다. selectedStyleSheetSet 값을 설정하여 스타일 시트가 변경되기 전에는 `null` 값을 갖습니다.
- Document.links 
  - : 문서의 모든 하이퍼링크 목록을 반환합니다.
- Document.mozSyntheticDocument 
  - : 문서가 synthetic, 즉 단일 이미지, 비디오, 오디오 파일이나 이와 비슷한 것인 경우 Boolean `true`를 반환합니다.
- Document.plugins 
  - : 사용 가능한 플러그인의 목록을 반환합니다.
- Document.policy  
  - : 특정 문서에 적용되는 기능 정책을 자성하기 위한 간단한 API 를 제공하는 Policy 인터페이스를 반환합니다.
- Document.preferredStyleSheetSet 
  - : 페이지 작성자가 지정한 선호 스타일 시트 세트를 반환합니다.
- Document.scripts 
  - : 문서의 모든 script 요소를 반환합니다.
- Document.scrollingElement 
  - : 문서를 스크롤 하는 Element에 대한 참조를 반환합니다.
- Document.selectedStyleSheetSet
  - : 현재 사용 중인 스타일 시트 세트를 반환합니다.
- Document.styleSheetSets 
  - : 문서에서 사용 가능한 스타일 시트 세트의 목록을 반환합니다.
- Document.timeline 
  - : 페이지 로드 시 자동으로 생성하는 DocumentTimeline의 인스턴스를 반환합니다.
- Document.undoManager  
  - : …
- Document.visibilityState 
  - : 문서의 표시 상태를 나타내는 문자열을 반환합니다. 가능한 값은 `visible`, `hidden`, `prerender`, `unloaded`입니다.

### HTMLDocument 확장

HTML 문서를 위한 `Document` 인터페이스는 HTML5 이전엔 HTMLDocument 인터페이스를 상속하고, 이후로는 확장합니다.

- Document.cookie
  - : 문서의 쿠키 리스트를 세미콜론으로 분리해 반환하거나, 하나의 쿠키를 설정합니다.
- Document.defaultView 
  - : Window 객체의 참조를 반환합니다.
- Document.designMode
  - : 문서 전체의 수정 가능 여부를 설정/반환합니다.
- Document.dir
  - : 문서의 쓰기 방향(rtl/ltr)을 설정/반환합니다.
- Document.domain
  - : 현재 문서의 도메인을 설정/반환합니다.
- Document.lastModified 
  - : 문서가 마지막으로 수정된 날짜를 반환합니다.
- Document.location 
  - : 현재 문서의 URI를 반환합니다.
- Document.readyState 
  - : 문서의 불러오기 상태를 반환합니다.
- Document.referrer 
  - : 현재 페이지로 연결한 페이지의 URI를 반환합니다.
- Document.title
  - : 문서의 제목을 설정하거나 반환합니다.
- Document.URL 
  - : 문서의 위치를 문자열로 반환합니다.

### DocumentOrShadowRoot에서 포함한 속성

`Document` 인터페이스는 DocumentOrShadowRoot 믹스인이 정의하는 다음의 속성을 포함합니다. 지금은 Chrome만 `DocumentOrShadowRoot` 믹스인으로 구현한 상태라는 점에 유의하세요. 다른 브라우저는 `Document` 인터페이스에 직접 구현합니다.

- DocumentOrShadowRoot.activeElement 
  - : 섀도 트리 내에서 포커스를 가진 Element 를 반환합니다.
- Document.fullscreenElement 
  - : 현재 문서에서 전체 화면 모드 중인 요소를 반환합니다.
- DocumentOrShadowRoot.pointerLockElement  
  - : 포인터가 잠긴 동안 마우스 이벤트의 대상으로 설정한 요소를 반환합니다. 잠금 대기 중이거나, 포인터의 잠금이 해제됐거나, 대상이 다른 문서에 존재하는 경우 `null`입니다.
- DocumentOrShadowRoot.styleSheets 
  - : 문서가 포함하거나 명시적으로 연결한 스타일 시트를 나타내는, CSSStyleSheet의 StyleSheetList 객체를 반환합니다.

## 이벤트

`addEventListener()`를 사용하거나 이 인터페이스의 `oneventname` 속성에 이벤트 수신기를 할당하여 이러한 이벤트를 수신합니다.

- afterscriptexecute 
  - : 정적 script 요소가 스크립트 실행을 완료하면 발생합니다.
- beforescriptexecute 
  - : 정적 script가 실행을 시작하려고 할 때 발생합니다.
- securitypolicyviolation
  - : 콘텐츠 보안 정책을 위반하면 발생합니다.
- scroll
  - : 문서 보기 또는 요소가 스크롤 되었을 때 발생합니다.
- visibilitychange
  - : 탭의 내용이 표시되거나 숨겨지면 발생합니다.
- wheel
  - : 사용자가 포인팅 장치(일반적으로 마우스)에서 휠 버튼을 회전할 때 발생합니다.

### 사용하지 않는 속성

- Document.alinkColor 
  - : 다큐먼트 바디에 있는 활성 링크의 색상을 설정하거나 반환합니다.
- Document.all  
  - : 다큐먼트의 모든 엘리먼트로의 접근을 제공합니다. 레거시이며 비표준 속성이므로 사용되면 안됩니다.
- Document.applets  
  - : 다큐먼트에 있는 애플릿의 정렬된 리스트를 반환합니다.
- Document.async 
  - : Document.load 와 사용되어 비동기 요청을 나타냅니다.
- Document.bgColor 
  - : 현재 다큐먼트의 배경 색상을 설정하거나 반환합니다.
- Document.charset  
  - : Document.characterSet 과 동일합니다. Document.characterSet 속성을 사용하시기 바랍니다.
- Document.domConfig 
  - : DOMConfiguration 객체를 반환합니다.
- document.fgColor 
  - : 현재 다큐먼트의 foreground 색상이나 텍스트 색상을 설정하거나 반환합니다.
- Document.fullscreen 
  - : 다큐먼트가 full-screen mode에 있을 때 `true` 를 반환합니다.
- Document.height  
  - : 현재 다큐먼트의 높이를 설정하거나 반환합니다.
- Document.inputEncoding  
  - : Document.characterSet 과 동일합니다. Document.characterSet 속성을 사용하시기 바랍니다.
- Document.linkColor 
  - : 다큐먼트내 하이퍼링크의 색상을 설정하거나 반환합니다.
- Document.vlinkColor 
  - : 방문한 하이퍼링크의 색상을 설정하거나 반환합니다.
- Document.width  
  - : 현재 다큐먼트의 너비를 반환합니다.
- Document.xmlEncoding 
  - : XML 선언으로 결정된 인코딩을 반환합니다.
- Document.xmlStandalone 
  - : XML 선언이 다큐먼트를 독립되도록 지정하면 `true` 를(_예,_ DTD 의 외부가 다큐먼트의 컨텐츠에 영향을 줌), 그렇지 않은 경우 `false` 를 반환합니다.
- Document.xmlVersion 
  - : XML 선언에 명시된 버전 넘버를 반환합니다. 선언에 명시되어 있지 않은 경우, `"1.0"` 을 반환합니다.

## 메서드

_`Document`는 Node와 EventTarget 인터페이스도 상속합니다._

- Document.adoptNode()
  - : 외부 문서로부터 노드를 가져옵니다.
- Document.captureEvents() 
  - : Window.captureEvents를 확인하세요.
- Document.caretRangeFromPoint()
  - : 지정한 좌표에 위치한 문서 프래그먼트에 대한 Range 객체를 반환합니다.
- Document.createAttribute()
  - : 새로운 Attr 객체를 생성하고 반환합니다.
- Document.createAttributeNS()
  - : 주어진 네임스페이스에 새로운 속성 노드를 생성하고 반환합니다.
- Document.createCDATASection()
  - : 새로운 CDATA 노드를 생성하고 반환합니다.
- Document.createComment()
  - : 새로운 주석 노드를 생성하고 반환합니다.
- Document.createDocumentFragment()
  - : 새로운 문서 조각을 생성합니다.
- Document.createElement()
  - : 주어진 태그명을 사용해 새로운 요소를 생성합니다.
- Document.createElementNS()
  - : 주어진 태그명과 네임스페이스 URI를 갖는 새로운 요소를 생성합니다.
- Document.createEntityReference() 
  - : 새로운 개체 참조를 생성하고 반환합니다.
- Document.createEvent()
  - : 이벤트 객체를 생성합니다.
- Document.createNodeIterator()
  - : NodeIterator 객체를 생성합니다.
- Document.createProcessingInstruction()
  - : 새로운 ProcessingInstruction 객체를 생성합니다.
- Document.createRange()
  - : Range 객체를 생성합니다.
- Document.createTextNode()
  - : 텍스트 노드를 생성합니다.
- Document.createTouch() 
  - : Touch 객체를 생성합니다.
- Document.createTouchList()
  - : TouchList 객체를 생성합니다.
- Document.createTreeWalker()
  - : TreeWalker 객체를 생성합니다.
- Document.enableStyleSheetsForSet()
  - : 지정한 스타일 시트 세트의 스타일 시트를 활성화합니다.
- Document.exitPointerLock() 
  - : 포인터 잠금을 해제합니다.
- Document.getAnimations() 
  - : 문서의 자손 요소를 대상으로 하고, 현재 실행 중인 모든 Animation 객체를 배열로 반환합니다.
- Document.getElementsByClassName()
  - : 주어진 클래스 이름을 갖는 요소의 목록을 반환합니다.
- Document.getElementsByTagName()
  - : 주어진 태그명을 갖는 요소의 목록을 반환합니다.
- Document.getElementsByTagNameNS()
  - : 주어진 태그명과 네임스페이스를 갖는 요소의 목록을 반환합니다.
- Document.hasStorageAccess()
  - : 문서가 퍼스트파티first-party 저장소에 접근할 수 있는지 나타내는 Boolean으로 이행하는 Promise를 반환합니다.
- Document.importNode()
  - : 외부 문서의 노드 복제본을 반환합니다.
- Document.normalizeDocument() 
  - : 개체 대체, 텍스트 노드 정규화 등의 작업을 실행합니다.
- Document.releaseCapture() 
  - : 문서의 요소에 현재 마우스 캡쳐가 있다면 이를 해제합니다.
- Document.releaseEvents()  
  - : Window.releaseEvents()를 확인하세요.
- Document.requestStorageAccess()
  - : 퍼스트파티first-party 저장소로의 접근이 가능한 경우 이행하고 불가능한 경우 거부하는 Promise를 반환합니다.
- Document.routeEvent()  
  - : Window.routeEvent()를 확인하세요.
- Document.mozSetImageElement() 
  - : 지정한 요소 ID를 위한 배경 이미지로 사용되도록 요소 변경을 허용합니다.

`Document` 인터페이스는 ParentNode 인터페이스를 확장합니다.

- document.getElementById()
  - : 주어진 ID를 가진 요소의 참조를 반환합니다.
- document.querySelector()
  - : 문서 내에서 주어진 선택자를 만족하는 첫 번째 Element를 반환합니다.
- document.querySelectorAll()
  - : 주어진 선택자를 만족하는 모든 요소의 NodeList를 반환합니다.

`Document` 인터페이스는 XPathEvaluator 인터페이스를 확장합니다.

- document.createExpression()
  - : 나중에 (여러 번) 평가할 수 있도록 [`XPathExpression`](/ko/docs/Web/API/XPathExpression)을 컴파일합니다.
- document.createNSResolver()
  - : XPathNSResolver 객체를 생성합니다.
- document.evaluate()
  - : XPath 표현을 평가합니다.

### HTML 문서의 확장

HTML 문서를 위한 `Document` 인터페이스는 HTML5 이전엔 HTMLDocument 인터페이스를 상속하고, 이후로는 확장합니다.

- document.clear()  
  - : 최근의 Firefox와 Internet Explorer를 포함하는 주요 최신 브라우저에서, 이 메소드는 아무것도 하지 않습니다.
- document.close()
  - : 작성을 위한 문서 스트림을 닫습니다.
- document.execCommand()
  - : 수정 가능한 문서에서 서식 명령을 실행합니다.
- document.getElementsByName()
  - : 주어진 이름을 갖는 요소의 목록을 반환합니다.
- document.hasFocus()
  - : 포커스가 지정한 문서 내 어느 곳이든 위치한 경우 `true`를 반환합니다.
- document.open()
  - : 작성을 위한 문서 스트림을 엽니다.
- document.queryCommandEnabled()
  - : 현재 범위에서 서식 명령을 실행할 수 있다면 `true`를 반환합니다.
- document.queryCommandIndeterm()
  - : 현재 범위에서 서식 명령의 상태를 알 수 없으면 `true`를 반환합니다.
- document.queryCommandState()
  - : 현재 범위에서 서식 명령을 실행했다면 `true`를 반환합니다.
- document.queryCommandSupported()
  - : 현재 범위에서 서식 명령이 지원된다면 `true`를 반환합니다.
- document.queryCommandValue()
  - : 현재 범위에서 서식 명령을 위한 현재 값을 반환합니다.
- document.write()
  - : 문서에 텍스트를 작성합니다.
- document.writeln()
  - : 문서에 텍스트 한 줄을 작성합니다.

### DocumentOrShadowRoot로부터 포함된 메소드

`Document` 인터페이스는 DocumentOrShadowRoot 믹스인mixin이 정의하는 다음의 메서드를 포함합니다. 지금은 Chrome만 구현한 상태라는 점에 유의하세요. 다른 브라우저는 `Document` 인터페이스에 구현 중입니다.

- DocumentOrShadowRoot.getSelection()
  - : 사용자에의해 선택된 텍스트의 범위 또는 캐럿의 현재 위치를 나타내는 Selection 객체를 반환합니다.
- DocumentOrShadowRoot.elementFromPoint()
  - : 지정한 위치에 있는 최상단 엘리먼트를 반환합니다.
- DocumentOrShadowRoot.elementsFromPoint()
  - : 지정한 위치에 있는 모든 엘리먼트의 배열을 반환합니다.
- DocumentOrShadowRoot.caretPositionFromPoint()
  - : 캐럿을 포함하는 DOM 노드와 그 노드내 캐첫의 문자 오프셋을 포함하는 CaretPosition 객체를 반환합니다.

## 명세



## 브라우저 호환성


