---
title: class
slug: Web/JavaScript/Reference/Statements/class
---

Statements

**`class` 선언**은 프로토타입 기반 상속을 사용하여, 주어진 이름의 새로운 클래스를 만듭니다.

JavaScript Demo: Statement - Class

```js interactive-example
class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}

console.log(new Polygon(4, 3).area);
// Expected output: 12
```

을 사용하여 클래스를 정의할 수도 있습니다. 표현식과 달리 선언문으로는 같은 클래스를 다시 선언하면 오류가 발생합니다.

## 구문

```js
    class name [extends] {
      // class body
    }
```

## 설명

클래스 본문은 [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)에서 실행됩니다. 생성자 속성은 선택 사항입니다..

클래스 선언은 과 달리 호이스팅의 대상이 아닙니다.

## 예제

### 간단한 클래스 선언

다음 예제는 우선 `Polygon` 클래스를 정의하고, `Square`라는 이름의 새로운 클래스가 `Polygon`을 상속합니다. 생성자 내부의 `super()`는 생성자 내에서만, 그리고 this 키워드를 사용하기 전에만 쓸 수 있다는 점을 주의하세요.

```js
class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = "Square";
  }
}
```

> [!WARNING]
> 같은 클래스를 두 번 선언하려고 시도할 때 클래스 선언문으로 같은 클래스를 두 번 선언하면 오류가 발생합니다.

```js
class Foo {}
class Foo {} // Uncaught SyntaxError: Identifier 'Foo' has already been declared
```

이전에 표현식으로 정의한 경우에도 오류가 발생합니다.

```js
var Foo = class {};
class Foo {} // Uncaught TypeError: Identifier 'Foo' has already been declared
```

## 명세서



## 브라우저 호환성



## 참조

- function 선언문
- class 표현식
- [클래스](/ko/docs/Web/JavaScript/Reference/Classes)
