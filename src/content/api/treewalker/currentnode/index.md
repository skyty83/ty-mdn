---
title: TreeWalker.currentNode
slug: Web/API/TreeWalker/currentNode
---

DOM

**`TreeWalker.currentNode`** 속성은 TreeWalker가 현재 가리키고 있는 Node를 나타낸다.

## 구문

```js
node = treeWalker.currentNode;
treeWalker.currentNode = node;
```

## 예제

```js
var treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode: function (node) {
      return NodeFilter.FILTER_ACCEPT;
    },
  },
  false,
);
root = treeWalker.currentNode; // 첫번째 엘리먼트인 루트 엘리먼트!
```

## 명세



## 브라우저 호환성



## 같이 보기

- TreeWalker 인터페이스
