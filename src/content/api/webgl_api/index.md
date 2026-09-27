---
title: WebGL
slug: Web/API/WebGL_API
---

WebGL

**WebGL**(Web Graphics Library)은 플러그인을 사용하지 않고 웹 브라우저에서 상호작용 가능한 3D와 2D 그래픽을 표현하기 위한 JavaScript API입니다. WebGL은 HTML5 canvas 요소에서 사용할 수 있는, OpenGL ES 2.0을 대부분 충족하는 API를 제공합니다.

WebGL은 [Firefox](https://www.mozilla.org/ko/firefox/new/) 4+, [Google Chrome](https://www.google.com/chrome/) 9+, [Opera](https://www.opera.com/) 12+, [Safari](https://www.apple.com/fr/safari/) 5.1+, [Internet Explorer](https://windows.microsoft.com/en-us/internet-explorer/download-ie) 11+, [Microsoft Edge](https://www.microsoft.com/en-us/windows/microsoft-edge) build 10240+에서 사용할 수 있습니다. 그러나 사용자 장치의 하드웨어도 WebGL 기능을 지원해야 합니다.

canvas 요소는 [캔버스 API](/ko/docs/Web/API/Canvas_API)를 사용해 웹 페이지에서 2D 그래픽을 그릴 때도 사용됩니다.

<h2 class="Documentation" id="참고서">참고서</h2>

### 표준 인터페이스

<div class="index"><ul><li>WebGLRenderingContext</li><li>WebGL2RenderingContext</li><li>WebGLActiveInfo</li><li>WebGLBuffer</li><li>WebGLContextEvent</li><li>WebGLFramebuffer</li><li>WebGLProgram</li><li>WebGLQuery</li><li>WebGLRenderbuffer</li><li>WebGLSampler</li><li>WebGLShader</li><li>WebGLShaderPrecisionFormat</li><li>WebGLSync</li><li>WebGLTexture</li><li>WebGLTransformFeedback</li><li>WebGLUniformLocation</li><li>WebGLVertexArrayObject</li></ul></div>

### 확장

<div class="index"><ul><li>ANGLE_instanced_arrays</li><li>EXT_blend_minmax</li><li>EXT_color_buffer_float</li><li>EXT_color_buffer_half_float</li><li>EXT_disjoint_timer_query</li><li>EXT_float_blend </li><li>EXT_frag_depth</li><li>EXT_sRGB</li><li>EXT_shader_texture_lod</li><li>EXT_texture_compression_bptc</li><li>EXT_texture_compression_rgtc</li><li>EXT_texture_filter_anisotropic</li><li>OES_element_index_uint</li><li>OES_fbo_render_mipmap </li><li>OES_standard_derivatives</li><li>OES_texture_float</li><li>OES_texture_float_linear</li><li>OES_texture_half_float</li><li>OES_texture_half_float_linear</li><li>OES_vertex_array_object</li><li>WEBGL_color_buffer_float</li><li>WEBGL_compressed_texture_astc</li><li>WEBGL_compressed_texture_atc</li><li>WEBGL_compressed_texture_etc</li><li>WEBGL_compressed_texture_etc1</li><li>WEBGL_compressed_texture_pvrtc</li><li>WEBGL_compressed_texture_s3tc</li><li>WEBGL_compressed_texture_s3tc_srgb</li><li>WEBGL_debug_renderer_info</li><li>WEBGL_debug_shaders</li><li>WEBGL_depth_texture</li><li>WEBGL_draw_buffers</li><li>WEBGL_lose_context</li></ul></div>

### 이벤트

- [`webglcontextlost`](/ko/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
- [`webglcontextrestored`](/ko/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
- [`webglcontextcreationerror`](/ko/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)

### 상수와 자료형

- [WebGL 상수](/ko/docs/Web/API/WebGL_API/Constants)
- [WebGL 자료형](/ko/docs/Web/API/WebGL_API/Types)

### WebGL 2

WebGL 2는 WebGL2RenderingContext 인터페이스를 통해 제공되는 WebGL 메이저 업데이트다. OpenGL ES 3.0 을 기반으로 하며 다음과 같은 특징을 포함한다:

- [3D textures](/ko/docs/Web/API/WebGL2RenderingContext/texImage3D),
- [Sampler objects](/ko/docs/Web/API/WebGLSampler),
- [Uniform Buffer objects](/ko/docs/Web/API/WebGL2RenderingContext#Uniform_buffer_objects),
- [Sync objects](/ko/docs/Web/API/WebGLSync),
- [Query objects](/ko/docs/Web/API/WebGLQuery),
- [Transform Feedback objects](/ko/docs/Web/API/WebGLTransformFeedback),
- WebGL 2의 핵심이 된 확장 기능: [Vertex Array objects](/ko/docs/Web/API/WebGLVertexArrayObject), [instancing](/ko/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced), [multiple render targets](/ko/docs/Web/API/WebGL2RenderingContext/drawBuffers), [fragment depth](/ko/docs/Web/API/EXT_frag_depth).

["WebGL 2 lands in Firefox"](https://hacks.mozilla.org/2017/01/webgl-2-lands-in-firefox/) 블로그 포스트와와 and [webglsamples.org/WebGL2Samples](https://webglsamples.org/WebGL2Samples/) 데모도 참고.

<h2 class="Documentation" id="안내서와_자습서">안내서와 자습서</h2>

### 안내서

- [WebGL의 데이터](/ko/docs/Web/API/WebGL_API/Data)
  - : WebGL 코드를 작성할 때 사용하는 변수, 버퍼와 그 외 다른 형태의 데이터를 알아봅니다.
- [WebGL 우수 사례](/ko/docs/Web/API/WebGL_API/WebGL_best_practices)
  - : WebGL 콘텐츠의 품질, 성능, 안정성을 높일 수 있는 팁과 제안입니다.
- [확장 사용](/ko/docs/Web/API/WebGL_API/Using_Extensions)
  - : WebGL 확장을 사용하는 법을 알아봅니다.

### 자습서

- [WebGL 자습서](/ko/docs/Web/API/WebGL_API/Tutorial)
  - : 초심자를 위한 WebGL 핵심 개념입니다. WebGL을 접해보지 않았다면 여기서 시작해보세요.

### 예제

- [기초 WebGL 2D 애니메이션 예제](/ko/docs/Web/API/WebGL_API/Basic_2D_animation_example)
  - : This example demonstrates the simple animation of a one-color shape. Topics examined are adapting to aspect ratio differences, a function to build shader programs from sets of multiple shaders, and the basics of drawing in WebGL.
- [예제로 알아보는 WebGL](/ko/docs/Web/API/WebGL_API/By_example)
  - : A series of live samples with short explanations that showcase WebGL concepts and capabilities. The examples are sorted according to topic and level of difficulty, covering the WebGL rendering context, shader programming, textures, geometry, user interaction, and more.

### 고급 자습서

- [WebGL 모델 뷰 프로젝션](/ko/docs/Web/API/WebGL_API/WebGL_model_view_projection)
  - : A detailed explanation of the three core matrices that are typically used to represent a 3D object view: the model, view and projection matrices.
- [웹을 위한 행렬 계산](/ko/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
  - : A useful guide to how 3D transform matrices work, and can be used on the web — both for WebGL calculations and in CSS3 transforms.

<h2 class="Related_Topics" id="참고자료">참고자료</h2>

- [Raw WebGL: An introduction to WebGL](https://www.youtube.com/embed/H4c8t6myAWU/?feature=player_detailpage) A talk by Nick Desaulniers that introduces the basics of WebGL. This is a great place to start if you've never done low-level graphics programming.
- [Khronos WebGL site](https://www.khronos.org/webgl/) The main web site for WebGL at the Khronos Group.
- [Learning WebGL](http://learningwebgl.com/blog/?page_id=1217) A site with tutorials on how to use WebGL.
- [WebGL Fundamentals](https://www.html5rocks.com/en/tutorials/webgl/webgl_fundamentals/) A basic tutorial with fundamentals of WebGL.
- [WebGL playground](http://webglplayground.net/) An online tool for creating and sharing WebGL projects. Good for quick prototyping and experimenting.
- [WebGL Academy](http://www.webglacademy.com/) An HTML/JavaScript editor with tutorials to learn basics of webgl programming.
- [WebGL Stats](https://webglreport.com/) A site with statistics about WebGL capabilities in browsers on different platforms.

### Libraries

- [glMatrix](https://github.com/toji/gl-matrix) is a JavaScript matrix and vector library for high-performance WebGL apps.
- [PhiloGL](http://senchalabs.github.com/philogl/) is a WebGL framework for data visualization, creative coding, and game development.
- [Pixi.js](https://www.pixijs.com/) is a fast, open-source 2D WebGL renderer.
- [PlayCanvas](https://playcanvas.com/) is an open-source game engine.
- [Sylvester](http://sylvester.jcoglan.com/) is an open-source library for manipulating vectors and matrices. Not optimized for WebGL but extremely robust.
- [three.js](https://threejs.org/) is an open-source, fully featured 3D WebGL library.
- [Phaser](https://phaser.io/) is a fast, free and fun open source framework for Canvas and WebGL powered browser games

## 명세



## 브라우저 호환성



## 같이 보기

- [Canvas API](/ko/docs/Web/API/Canvas_API)
- [Compatibility info about WebGL extensions](/ko/docs/Web/API/WebGLRenderingContext/getSupportedExtensions#Browser_compatibility)
