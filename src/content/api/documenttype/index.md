---
title: DocumentType
slug: Web/API/DocumentType
---

DOM

**`DocumentType`** 인터페이스는 doctype을 포함하는 Node 를 나타냅니다.



## 프로퍼티

_부모 Node 로부터 프로퍼티를 상속받고 ChildNode 인터페이스를 구현합니다._

- DocumentType.entities  
  - : DTD에 선언된 엔티티의 NamedNodeMap 입니다. 이 맵의 모든 노드는 Entity 인터페이스를 구현합니다.
- DocumentType.internalSubset  
  - : 내부 하위 집합의 DOMString 입니다. 하위 집합이 존재하지 않을 경우 `null`입니다. 예, `"<!ELEMENT foo (bar)>"`.
- DocumentType.name 
  - : DOMString 입니다. 예, `<!DOCTYPE HTML>` 의 경우 `"html"`.
- DocumentType.notations  
  - : DTD에 선언된 노테이션을 포함한 NamedNodeMap 입니다. 이 맵의 모든 노드는 Notation 인터페이스를 구현합니다.
- DocumentType.publicId 
  - : DOMString 입니다. 예, `"-//W3C//DTD HTML 4.01//EN"`, HTML5의 경우 빈 문자열.
- DocumentType.systemId 
  - : DOMString 입니다. 예, `"http://www.w3.org/TR/html4/strict.dtd"`, HTML5의 경우 빈 문자열.

## 메소드

_부모 Node 로부터 메소드를 상속받고 ChildNode 인터페이스를 구현합니다._

- ChildNode.remove() 
  - : 부모의 자식 리스트로부터 객체를 제거합니다.

## 명세



## 브라우저 호환성



## 함께 보기

- [DOM 인터페이스 목차.](/ko/docs/Web/API/Document_Object_Model)
- Entity
- Notation
