---
title: Text
slug: Web/API/Text
---

DOM

**`Text`** 인터페이스는 Element 또는 Attr의 문자형 콘텐츠를 표현합니다.

요소의 콘텐츠에 마크업이 없을 경우 해당 요소는 요소의 텍스트를 담은 `Text` 를 구현한 단일 자식을 갖습니다. 반면에 요소에 마크업이 있을 경우 자식을 구성하는 정보 항목과 `Text` 노드로 파싱됩니다.

새로운 문서는 각각의 텍스트 블록마다 하나의 `Text` 노드를 갖습니다. 문서의 콘텐츠가 변경됨에 따라 새로운 `Text` 노드가 생성될 수 있습니다. Node.normalize() 메서드는 인접한 `Text` 객체에 대한 각각의 텍스트 블록을 다시 단일 노드로 병합합니다.



## 생성자

- Text() 
  - : 제공한 매개변수를 텍스트 콘텐츠로 하는 `Text` 노드를 반환합니다.

## 속성

부모인 CharacterData로부터 속성을 상속합니다.

- Text.isElementContentWhitespace 
  - : 텍스트 노드가 공백만 포함하는지 여부를 나타내는 Boolean 플래그를 반환합니다.
- Text.wholeText 
  - : 이 Node와 논리적으로 인접한 모든 `Text` 노드의 텍스트를 문서 내의 순서대로 이어붙인 DOMString을 반환합니다.
- Text.assignedSlot 
  - : 이 요소와 연관된 HTMLSlotElement 객체를 반환합니다.

### `Slotable`로부터 포함된 속성

`Text` 인터페이스는 Slotable 믹스인이 정의하는 다음의 속성을 포함합니다.

- Slotable.assignedSlot 
  - : 노드가 삽입된 slot을 나타내는 HTMLSlotElement를 반환합니다.

## 메서드

부모인 CharacterData로부터 메서드를 상속합니다.

- Text.replaceWholeText 
  - : 현재 노드와 논리적으로 인접한 모든 노드의 텍스트를 지정한 텍스트로 대체합니다.
- Text.splitText
  - : 노드를 지정한 오프셋에서 두 노드로 분리합니다.

## 명세



## 브라우저 호환성



## 같이 보기

- [DOM 인터페이스 목차](/ko/docs/Web/API/Document_Object_Model).
