---
title: NodeList.keys()
slug: Web/API/NodeList/keys
---

DOM

**`NodeList.keys()`** 메서드는 이 객체에 포함된 모든 키를 통과할 수 있는 iterator 를 반환합니다. 이 키는 부호없는 정수형(`unsigned integer`) 입니다.

## Syntax

```js
nodeList.keys();
```

### Return value

iterator를 반환합니다.

## Example

```js
var node = document.createElement("div");
var kid1 = document.createElement("p");
var kid2 = document.createTextNode("hey");
var kid3 = document.createElement("span");

node.appendChild(kid1);
node.appendChild(kid2);
node.appendChild(kid3);

var list = node.childNodes;

// Using for..of
for (var key of list.keys()) {
  console.log(key);
}
```

결과는 다음과 같습니다 :

```
0
1
2
```

## 명세서



## 브라우저 호환성



## See also

- Node
- NodeList
