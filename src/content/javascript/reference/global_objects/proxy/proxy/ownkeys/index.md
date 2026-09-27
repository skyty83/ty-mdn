---
title: handler.ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys
---



**`handler.ownKeys()`** 메서드는 Reflect.ownKeys()에 대한 트랩입니다.

taller

```js interactive-example
const monster1 = {
  _age: 111,
  [Symbol("secret")]: "I am scared!",
  eyeCount: 4,
};

const handler1 = {
  ownKeys(target) {
    return Reflect.ownKeys(target);
  },
};

const proxy1 = new Proxy(monster1, handler1);

for (const key of Object.keys(proxy1)) {
  console.log(key);
  // Expected output: "_age"
  // Expected output: "eyeCount"
}
```

## 구문

```js
new Proxy(target, {
  ownKeys(target) {},
});
```

### 매개 변수

다음 매개변수는 `ownKeys()` 메서드에 전달됩니다. `this`는 처리기에 바인딩됩니다.

- `target`
  - : 대상 객체

### 반환 값

`ownKeys()` 메서드는 열거 가능한 객체를 반환합니다.

## 설명

**`handler.ownKeys()`** 메서드는 Reflect.ownKeys()에 대한 트랩입니다.

### 가로채기

이 트랩은 다음 작업을 가로챌 수 있습니다.

- Object.getOwnPropertyNames()
- Object.getOwnPropertySymbols()
- Object.keys()
- Reflect.ownKeys()

### 불변 조건

다음 불변 조건이 위반되면 프록시에서 TypeError가 발생합니다.

- `ownKeys()`의 결과는 배열이어야 합니다.
- 각 배열 요소의 유형은 String 또는 Symbol입니다.
- 결과 목록에는 대상 객체의 구성할 수 없는 모든 고유 속성의 키가 포함되어야 합니다.
- 대상 개체를 확장할 수 없는 경우, 결과 목록에는 대상 객체의 자체 속성에 대한 모든 키가 포함되어야 하며, 다른 값은 포함되지 않아야 합니다.

## 예제

### getOwnPropertyNames 트랩

다음 코드는 Object.getOwnPropertyNames()를 트랩합니다.

```js
const p = new Proxy(
  {},
  {
    ownKeys(target) {
      console.log("called");
      return ["a", "b", "c"];
    },
  },
);

console.log(Object.getOwnPropertyNames(p)); // "called"
// [ 'a', 'b', 'c' ]
```

다음 코드는 불변 조건을 위반합니다.

```js example-bad
const obj = {};
Object.defineProperty(obj, "a", {
  configurable: false,
  enumerable: true,
  value: 10,
});

const p = new Proxy(obj, {
  ownKeys(target) {
    return [123, 12.5, true, false, undefined, null, {}, []];
  },
});

console.log(Object.getOwnPropertyNames(p));

// TypeError: proxy [[OwnPropertyKeys]] must return an array
// with only string and symbol elements
```

## 명세서



## 브라우저 호환성



## 같이 보기

- Proxy
- [`Proxy()` 생성자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- Object.getOwnPropertyNames()
- Reflect.ownKeys()
