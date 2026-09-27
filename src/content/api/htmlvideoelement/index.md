---
title: HTMLVideoElement
slug: Web/API/HTMLVideoElement
---

HTML DOM

**`HTMLVideoElement`** 인터페이스는 Video object를 조작하는데 필요한 프로퍼티와 메소드를 제공합니다. HTMLMediaElement와 HTMLElement를 상속합니다.

[지원하는 미디어 포맷](/ko/docs/Web/Media/Formats) 목록은 브라우저마다 다릅니다. 여러분은 적절한 범위의 브라우저에서 지원하는 한가지 비디어 포맷을 제공하던가, 지원할 모든 브라우저를 위한 여러 종류의 미디어 포맷을 제공해야 합니다.



## 속성(Properties)

_HTMLMediaElement와_ _HTMLElement의 속성들도 상속 받습니다._

- HTMLVideoElement.height
  - : 표시 영역의 높이를 나타내는 HTML Attribute [`height`](/ko/docs/Web/HTML/Reference/Elements/video#height)의 값을 DOMString으로 반환합니다. 단위는 pixel입니다.
- HTMLVideoElement.poster
  - : 비디오 데이터가 없을 때 보여줄 이미지를 지정하는 HTML Attribute [`poster`](/ko/docs/Web/HTML/Reference/Elements/video#poster)의 값을 DOMString로 반환합니다.
- HTMLVideoElement.videoHeight 
  - : 비디오의 height를 부호 없는 정수로 나타낸 값을 반환합니다. 비디오가 없는 경우 0을 반환합니다.
- HTMLVideoElement.videoWidth 
  - : 비디오의 width를 부호 없는 정수로 나타낸 값을 반환합니다. 비디오가 없는 경우 0을 반환합니다.
- HTMLVideoElement.width
  - : 표시 영역의 높이를 나타내는 HTML Attribute [`width`](/ko/docs/Web/HTML/Reference/Elements/video#width)의 값을 DOMString으로 반환합니다. 단위는 pixel입니다.

### Gecko 전용 속성

- HTMLVideoElement.mozParsedFrames 
  - : 미디어 소스에서 파싱된 비디오 프레임 수를 `unsigned long` 값으로 반환합니다.
- HTMLVideoElement.mozDecodedFrames 
  - : 화상으로 디코딩 된 비디오 프레임 수를 `unsigned long` 값으로 반환합니다.
- HTMLVideoElement.mozPresentedFrames 
  - : 렌더링 파이프 라인을 통해 출력된 디코드 프레임 수를 `unsigned long` 값으로 반환합니다.
- HTMLVideoElement.mozPaintedFrames 
  - : 화면에 그려진 프레임 수를 `unsigned long` 값으로 반환합니다.
- HTMLVideoElement.mozFrameDelay 
  - : 지연 출력된 비디오 프레임을 초 단위로 `double` 값으로 반환한다.
- HTMLVideoElement.mozHasAudio 
  - : 비디오와 연관된 오디오 존재 여부를 Boolean 값으로 반환한다.

### Microsoft 확장 속성

- HTMLVideoElement.msFrameStep() 
  - : 프레임 단위로 앞/뒤로 이동합니다.
- HTMLVideoElement.msHorizontalMirror 
  - : 비디오의 좌/우 반전 시키거나 반전된 상태를 반환합니다.
- HTMLVideoElement.msInsertVideoEffect() 
  - : 미디어 파이프라인에 특정 비디오 효과를 추가합니다.
- HTMLVideoElement.msIsLayoutOptimalForPlayback 
  - : 더 효과적인 비디오 렌더링이 가능하면 true를 반환합니다.
- HTMLVideoElement.msIsStereo3D 
  - : 시스템이 비디오를 stereo 3-D로 판단하였는지 여부를 반환합니다. 값을 true로 지정한다면 video를 stereo 3-D로 인식합니다..
- HTMLVideoElement.msZoom 
  - : 비디오 프레임을 출력부에 딱 맞게 트림합니다.

## 메소드

_HTMLMediaElement와 HTMLElement의 메소드도 상속 받습니다._

- HTMLVideoElement.getVideoPlaybackQuality() 
  - : 현재 재생 결과를 담고 있는 VideoPlaybackQuality 객체를 반환합니다. 전체 프레임 중 drop 되거나 손실된 프레임 등 재생 정보를 포함합니다.

## Events

_HTMLMediaElement와 HTMLElement의 이벤트를 상속합니다._ [`addEventListener()`](/ko/docs/Web/API/EventTarget/addEventListener) 메소드 또는 `oneventname` 프로퍼티에 리스너를 전달하여 이벤트를 수신합니다.

## 명세



## 브라우저 호환성



## 더 보기

- HTML 엘리먼트 구현체: video.
- [Demo of video paint statistics](https://people.mozilla.org/~cpearce/paint-stats-demo.html)(링크 소멸)
- [지원하는 미디어 포맷](/ko/docs/Web/Media/Formats)
