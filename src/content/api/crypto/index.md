---
title: Crypto
slug: Web/API/Crypto
---

Web Crypto API

**`Crypto`** 인터페이스는 현재 환경에서 사용 가능한 기본적인 암호화 기법을 제공합니다. 이 인터페이스를 통해 암호학적으로 강력한 무작위 숫자 생성기나 암호화에 필요한 기본 요소에 접근할 수 있습니다.

이 인터페이스 객체는 Window.crypto 속성을 통해 웹에서 사용 가능합니다.

## 속성

_이 인터페이스는 RandomSource에 정의된 속성을 구현하고 있습니다._

- Crypto.subtle 
  - : 해싱, 서명, 암호화, 복호화같은 암호화 기법에 필요한 공통 요소들에 접근할 수 있는 객체를 반환.

## 메소드

_이 인터페이스는 RandomSource에 정의된 속성을 구현하고 있습니다._

- RandomSource.getRandomValues()
  - : 넘겨받은 TypedArray를 암호학적으로 무작위인 값으로 채움.

## 더보기

- [Components.utils.importGlobalProperties](/ko/docs/Components.utils.importGlobalProperties)
