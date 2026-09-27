---
title: Date.prototype.getUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
---



**getUTCDate()** 메서드는 표준시에 따라 지정된 날짜에 해당 월의 요일 (날짜)을 반환합니다.

## Syntax

```js
dateObj.getUTCDate();
```

### Return value

보편적 인 시간에 따라 지정된 날짜의 달의 날짜를 나타내는 1에서 31 사이의 정수입니다.

## Examples

### Using `getUTCDate()`

다음 예제에서는 현재 날짜의 일 부분을 day 변수에 할당합니다.

```js
var today = new Date();
var day = today.getUTCDate();
```

## 명세



## 브라우저 호환성



## See also

- Date.prototype.getDate()
- Date.prototype.getUTCDay()
- Date.prototype.setUTCDate()
