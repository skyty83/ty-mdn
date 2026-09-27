---
title: CSSMediaRule
slug: Web/API/CSSMediaRule
---

CSSOM

**`CSSMediaRule`** 인터페이스는 하나의 CSS @media 규칙을 나타냅니다. CSSConditionRule 인터페이스를 구현하므로, CSSGroupingRule과 CSSRule 인터페이스도 유형값 `4` (`CSSRule.MEDIA_RULE`)로 구현합니다.

## 구문

[WebIDL](https://heycam.github.io/webidl/) 형식을 사용해 서술합니다.

```
interface CSSMediaRule : CSSConditionRule {
    readonly attribute MediaList media;
}
```

## 속성

`CSSMediaRule`은 CSSConditionRule, 그리고 CSSGroupingRule와 CSSRule로서 해당 인터페이스의 속성을 구현합니다. 다음과 같은 자체 속성을 가집니다.

- CSSMediaRule.media 
  - : 스타일 정보를 적용할 매체 정보를 나타내는 MediaList입니다.

## 메서드

`CSSMediaRule`은 CSSConditionRule, 그리고 CSSGroupingRule와 CSSRule로서 해당 인터페이스의 메서드를 구현합니다. 자체 메서드는 가지지 않습니다.

## 명세서



## 브라우저 호환성


