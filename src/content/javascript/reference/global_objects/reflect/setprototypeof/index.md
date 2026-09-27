---
title: Reflect.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf
---



**`Reflect.setPrototypeOf()`** 정적 메서드는 주어진 객체의 프로토타입(내부 `[[Prototype]]` 속성)을 다른 객체나 null로 바꿉니다. 반환 값을 제외하면 Object.setPrototypeOf() 메서드와 같습니다.

JavaScript Demo: Reflect.setPrototypeOf()

```js interactive-example
const object1 = {};

console.log(Reflect.setPrototypeOf(object1, Object.prototype));
// Expected output: true

console.log(Reflect.setPrototypeOf(object1, null));
// Expected output: true

const object2 = {};

console.log(Reflect.setPrototypeOf(Object.freeze(object2), null));
// Expected output: false
```

## 구문

```js
Reflect.setPrototypeOf(target, prototype);
```

### 매개변수

- `target`
  - : 프로토타입을 지정할 대상 객체.
- `prototype`
  - : 대상 객체의 새로운 프로토타입. (객체 또는 null

### 반환 값

프로토타입 설정 성공 여부를 나타내는 Boolean.

### 예외

`target`이 Object가 아니거나, `prototype`이 객체도 null도 아니면 TypeError.

## 설명

`Reflect.setPrototypeOf()` 메서드는 주어진 객체의 프로토타입(즉, 내부 `[[Prototype]]` 속성)을 변경합니다.

## 예제

### `Reflect.setPrototypeOf()` 사용하기

```js
Reflect.setPrototypeOf({}, Object.prototype); // true

// It can change an object's [[Prototype]] to null.
Reflect.setPrototypeOf({}, null); // true

// Returns false if target is not extensible.
Reflect.setPrototypeOf(Object.freeze({}), null); // false

// Returns false if it cause a prototype chain cycle.
const target = {};
const proto = Object.create(target);
Reflect.setPrototypeOf(target, proto); // false
```

## 명세



## 브라우저 호환성



## 같이 보기

- Reflect
- Object.setPrototypeOf()
