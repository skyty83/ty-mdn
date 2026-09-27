---
title: Date.prototype.getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
---



**getUTCMilliseconds()** 메서드는 표준시에 따라 지정된 날짜의 밀리 초를 반환합니다.

## Syntax

```js
dateObj.getUTCMilliseconds();
```

### Return value

0부터 999까지의 정수로, 표준시에 따라 지정된 날짜의 밀리 초를 나타냅니다.

## Examples

### Using `getUTCMilliseconds()`

다음 예제에서는 현재 시간의 밀리 초 부분을 밀리 초 변수에 할당합니다.

```js
var today = new Date();
var milliseconds = today.getUTCMilliseconds();
```

## 명세



## 브라우저 호환성



## See also

- Date.prototype.getMilliseconds()
- Date.prototype.setUTCMilliseconds()
