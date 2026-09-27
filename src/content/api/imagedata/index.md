---
title: ImageData
slug: Web/API/ImageData
---

Canvas API

**`ImageData`** 인터페이스는 canvas 엘리먼트 영역의 기저의 픽셀데이터를 나타냅니다ImageData()생성자나 canvas객체에 연결된 CanvasRenderingContext2D객체의 createImageData()나 getImageData()메소드로 생성할 수 있습니다. **ImageData**는 putImageData()의 인자로 전달할 수 있으며, 이를 통해 canvas의 일부로 반영할 수 있습니다.

## Constructors

- ImageData() 
  - : 인자로 주어진 Uint8ClampedArray로 부터 해당 크기에 맞는 ImageData객체를 생성합니다. 만약 인자가 주어지지 않으면 검정색 사각형 이미지를 생성합니다. createImageData()는 worker에서 사용할 수 없기 때문에, ImageData의 생성자를 이용하는 것이 가장 일반적인 방법입니다.

## Properties

- ImageData.data 
  - : Uint8ClampedArray형식이며 1차원 배열로 RGBA순서로 정의된 이미지 데이터를 나타내니다. 각 원소는 정수값으로 0에서 255사이의 값을 갖습니다.
- ImageData.height 
  - : unsigned long형식으로 ImageData의 pixel기준의 실제 높이값입니다.
- ImageData.width 
  - : unsigned long형식으로 ImageData의 pixel기준의 실제 가로값입니다.

## 명세서



## 브라우저 호환성



## See also

- CanvasRenderingContext2D
- The canvas element and its associated interface, HTMLCanvasElement.
