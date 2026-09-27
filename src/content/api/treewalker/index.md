---
title: TreeWalker
slug: Web/API/TreeWalker
---

DOM

**`TreeWalker`** 오브젝트는 도큐먼트 서브트리의 노드들과 그 안에서의 위치를 나타낸다.

`TreeWalker` 는 Document.createTreeWalker() 메소드로 생성할 수 있다.

## 속성

_이 인터페이스는 어떤 프라퍼티도 상속하지 않는다._

- TreeWalker.root 
  - : `TreeWalker` 를 생성할 때 지정한 루트 노드를 나타대는 Node를 반환한다.
- TreeWalker.whatToShow 
  - : 제공해야할 Node 유형을 기술하는 `unsigned long` 비트마스크를 반환한다. 일치하지 않는 노드들은 건너뛰지만 관련된 경우 그 자식들을 포함할 수 있다. 가능한 값들은:

    | 상수                                                     | 숫자 값                           | 설명                                                                                                                                                                                                                                                                                                                      |
    | -------------------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `-1` ( `unsigned long의 최대 값`) | 모든 노드를 보여준다.                                                                                                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_ATTRIBUTE`         | `2`                               | 속성 Attr 노드들을 보여준다. Attr노드가 루트인 TreeWalker를 생성할 때에만 의미가 있다. 이 경우, 그 속성 노드가 그 반복 또는 순회에 첫 위치로 나타남을 의미한다. 속성은 결코 다른 노드의 자식이 아니기 때문에 도큐먼트 트리를 순회할 때는 나타나지 않는다.              |
    | `NodeFilter.SHOW_CDATA_SECTION`     | `8`                               | CDATASection 노드들을 보여준다.                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                             | Comment 노드들을 보여준다.                                                                                                                                                                                                                                                                               |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                             | Document 노드들을 보여준다.                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                            | DocumentFragment 노드들을 보여준다.                                                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                             | DocumentType 노드들을 보여준다.                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                               | Element 노드들을 보여준다.                                                                                                                                                                                                                                                                               |
    | `NodeFilter.SHOW_ENTITY`            | `32`                              | Entity 노드들을 보여준다. Entity 노드를 루트로 하여 TreeWalker를 생성할 때만 의미가 있다; 이 경우, 그 Entity 노드가 그 순회의 첫 위치에 나타남을 의미한다. 엔티티들은 도큐먼트 트리의 일부가 아니기 때문에 도큐먼트 트리를 순회할 때 나타나지 않는다. |
    | `NodeFilter.SHOW_ENTITY_REFERENCE`  | `16`                              | EntityReference 노드들을 보여준다.                                                                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_NOTATION`          | `2048`                            | Notation 노드들을 보여준다. Notation 노드를 루트로 하여 TreeWalker를 생성할 때만 의미가 있다; 이 경우, 그 Notation 노드가 순회의 첫 위치에 나타남을 의미한다, 그들은 도큐먼트 트리를 순회할 때 나타나지 않는다.                                       |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                              | ProcessingInstruction 노드들을 보여준다.                                                                                                                                                                                                                                                                 |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                               | Text 노드들을 보여준다.                                                                                                                                                                                                                                                                                  |

- TreeWalker.filter 
  - : 의미있는 노드들을 선택하기 위해 사용하는 NodeFilter를 반환한다.
- TreeWalker.expandEntityReferences 
  - : 한 EntityReference를 버릴 때 그 것의 전체 서브트리도 같이 버려야함을 표시하는 Boolean이다.
- TreeWalker.currentNode
  - : `TreeWalker`가 현재 가리키고 있는 Node이다.

## 메서드

_이 인터페이스는 아무 메서드도 상속하지 않는다._

> [!NOTE]
> _TreeWalker는 보이는 DOM 노드만 고려한다는 것에주의하라._

- TreeWalker.parentNode()
  - : 현재 Node를 도큐먼트 순서의 첫번째 보이는 조상으로 이동하고 찾은 노드를 반환한다. 그런 노드가 없거나 오브젝트 생성시에 정의한 *루트 노드*보다 앞이면 `null`을 반환하고 현재 노드는 바뀌지 않는다.
- TreeWalker.firstChild()
  - : 현재 Node를 현재 노드의 첫번째 보이는 자식으로 이동하고 찾은 자식을 반환한다. 그런 자식이 없으면 `null`을 반환하고 현재 노드는 바뀌지 않는다.
- TreeWalker.lastChild()
  - : 현재 Node를 현재 노드의 마지막 보이는 자식으로 이동하고 찾은 자식을 반환한다. 그런 자식이 없으면 `null`을 반환하고 현재 노드는 바뀌지 않는다.
- TreeWalker.previousSibling()
  - : 현재 Node를 이전 형제로 이동하고 찾은 형제를 반환한다. 그런 노드가 없으면 `null`을 반환하고 현재 노드는 바뀌지 않는다.
- TreeWalker.nextSibling()
  - : 현재 Node를 다음 형제로 이동하고 찾은 형제를 반환한다. 그런 노드가 없으면 `null`을 반환하고 현재 노드는 바뀌지 않는다.
- TreeWalker.previousNode()
  - : 현재 Node를 도큐먼트 순서의 이전 보이는 노드로 이동하고 찾은 노드를 반환한다. 그런 노드가 없거나 오브젝트 생성시에 정의한 *루트 노드*보다 앞이면 `null`을 반환하고 현재 노드는 바뀌지 않는다.
- TreeWalker.nextNode()
  - : 현재 Node를 도큐먼트 순서의 다음 보이는 노드로 이동하고 찾은 노드를 반환한다. 그런 노드가 없거나 오브젝트 생성시에 정의한 *루트 노드*보다 앞이면 `null`을 반환하고 현재 노드는 바뀌지 않는다.

## 명세



## 브라우저 호환성



## 같이 보기

- 생성 메소드: Document.createTreeWalker().
- 관련된 인터페이스: NodeFilter, NodeIterator.
