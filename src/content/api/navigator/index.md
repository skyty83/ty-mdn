---
title: Navigator
slug: Web/API/Navigator
l10n:
  sourceCommit: baaf0062bf82c8ffe9c9f2948833589018c64ddd
---

DOM4

**`Navigator`** 인터페이스는 사용자 에이전트의 상태와 신원 정보를 나타내며, 스크립트로 해당 정보를 질의할 때와 애플리케이션을 특정 활동에 등록할 때 사용합니다.

`Navigator` 객체는 window.navigator 읽기 전용 속성으로 접근할 수 있습니다.

## 속성

아무 속성도 상속하지 않습니다.

### 표준 속성

- Navigator.bluetooth  
  - : 현재 문서의 Bluetooth 객체를 반환합니다. [Web Bluetooth API](/ko/docs/Web/API/Web_Bluetooth_API)의 기능에 접근할 수 있습니다.
- Navigator.clipboard  
  - : 시스템 클립보드의 읽기, 쓰기에 접근할 수 있는 Clipboard 객체를 반환합니다.
- Navigator.connection  
  - : 장치의 네트워크 연결 정보를 담은 NetworkInformation 객체를 반환합니다.
- Navigator.contacts  
  - : 사용자에게 사용자의 연락처 목록에서 항목을 선택하고 그 항목의 제한된 세부 정보를 웹사이트나 애플리케이션과 공유할 수 있게 하는 ContactsManager 인터페이스를 반환합니다.
- Navigator.cookieEnabled 
  - : 쿠키 설정을 할 수 있으면 참, 아니면 거짓을 반환합니다.
- Navigator.credentials 
  - : CredentialsContainer 인터페이스를 반환합니다. 사용자 인증 정보를 요청하거나, 로그인 및 로그아웃 등 중요한 인증 관련 이벤트가 발생한 것을 사용자 에이전트에게 알려줄 때 사용합니다.
- Navigator.deviceMemory  
  - : 장치의 메모리를 기가바이트 단위로 반환합니다. 근삿값으로, 실제 값을 가장 가까운 2의 배수로 반올림한 후에 1024로 나눠서 제공합니다.
- Navigator.geolocation 
  - : 장치의 위치 정보에 접근할 수 있는 Geolocation 객체를 반환합니다.
- Navigator.gpu  
  - : 현재 브라우징 맥략의 GPU 객체를 반환합니다. nocode의 진입점입니다.
- Navigator.hardwareConcurrency 
  - : 중앙처리장치의 사용 가능한 논리 코어 수를 반환합니다.
- Navigator.hid 
  - : HID 객체를 반환합니다. HID 장치에 연결하고, 연결된 HID 장치를 나열하고, HID 장치에 대한 이벤트 처리기를 부착할 수 있습니다.
- Navigator.ink  
  - : 현재 문서의 Ink 객체를 반환합니다. [Ink API](/ko/docs/Web/API/Ink_API)의 기능에 접근할 수 있습니다.
- Navigator.keyboard  
  - : Keyboard 객체를 반환합니다. 키보드 레이아웃 맵을 가져올 수 있고, 물리적 키보드의 키 입력 캡처를 켜고 끌 수 있습니다.
- Navigator.language 
  - : 사용자의 선호 언어(주로 브라우저 UI 언어)를 나타내는 DOMString을 반환합니다. 언어를 알 수 없는 경우 `null`을 반환합니다.
- Navigator.languages  
  - : 사용자에게 알려진 언어 목록을 나타내는 DOMString 배열을 반환합니다. 정렬 순서는 사용자의 언어 선호도입니다.
- Navigator.locks  
  - : 새로운 Lock 객체를 요청하거나, 기존 `Lock` 객체를 질의할 수 있는 LockManager 객체를 반환합니다.
- Navigator.maxTouchPoints 
  - : 현재 장치에서 지원하는 최대 동시 터치 지점의 수를 반환합니다.
- Navigator.mediaCapabilities  
  - : 주어진 형식과 출력 형태에 대한 인코딩 및 디코딩 능력을 알아낼 수 있는 MediaCapabilities 객체를 반환합니다.
- Navigator.mediaDevices 
  - : MediaStream 객체를 반환합니다. 사용 가능한 미디어 장치들의 정보를 가져오고(MediaDevices.enumerateDevices()), 사용자의 컴퓨터와 사용자 에이전트가 지원하는 미디어 제약 조건 속성을 알아내고(MediaDevices.getSupportedConstraints()), 미디어 접근을 요청할 수 있습니다(MediaDevices.getUserMedia()).
- Navigator.mediaSession  
  - : 현재 재생 중인 미디어에 대한 메타데이터를 브라우저에게 제공할 때 사용하는 MediaSession 객체를 반환합니다. 브라우저는 이 데이터를 전역 미디어 컨트롤 UI 등에 표시할 수 있습니다.
- Navigator.onLine 
  - : 브라우저가 온라인 상태인지 나타내는 불리언 값을 반환합니다.
- Navigator.pdfViewerEnabled 
  - : 브라우저가 PDF 파일을 탐색할 때 인라인으로 표시할 수 있으면 `true`, 그렇지 않으면 `false`를 반환합니다.
- Navigator.permissions  
  - : Permissions 객체를 반환합니다. [Permissions API](/ko/docs/Web/API/Permissions_API)의 권한을 질의하고 상태를 변경할 수 있습니다.
- Navigator.presentation  
  - : Presentation API 참조를 반환합니다.
- Navigator.serial 
  - : Serial 객체를 반환합니다. 직렬 포트를 제어할 수 있는 [Web Serial API](/ko/docs/Web/API/Web_Serial_API)의 진입점입니다.
- Navigator.serviceWorker 
  - : ServiceWorkerContainer 객체를 반환합니다. [연관 문서(associated document)](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window)의 ServiceWorker에 대한 등록, 제거, 업그레이드, 통신 기능을 제공합니다.
- Navigator.storage 
  - : StorageManager 싱글턴 객체를 반환합니다. 사이트/앱에 할당된 저장 공간 권한을 관리하고, 남은 공간을 계산할 때 사용합니다.
- Navigator.usb 
  - : 현재 문서의 USB 객체를 반환합니다. [WebUSB API](/ko/docs/Web/API/WebUSB_API)의 기능에 접근할 수 있습니다.
- Navigator.userActivation 
  - : 현재 창의 사용자 활성화 상태에 대한 정보가 포함된 UserActivation 객체를 반환합니다.
- Navigator.userAgent 
  - : 현재 브라우저의 사용자 에이전트 문자열을 반환합니다.
- Navigator.userAgentData 
  - : NavigatorUAData 객체를 반환합니다. 사용자의 브라우저와 운영체제에 대한 정보를 제공합니다.
- Navigator.virtualKeyboard  
  - : 화면에 보이는 가상 키보드를 제어하기 위해 VirtualKeyboard API의 참조를 반환합니다.
- Navigator.wakeLock 
  - : WakeLock 인터페이스를 반환합니다. 화면 깨우기를 잠그도록 요청하거나, 화면을 어둡게 하기, 끄기, 화면 보호기 표시하기를 방지할 수 있도록 요청할 수 있습니다.
- Navigator.webdriver  
  - : 사용자 에이전트가 자동화에 의해 제어 중인지 나타냅니다.
- Navigator.windowControlsOverlay 
  - : WindowControlsOverlay 객체를 반환합니다. 데스크톱 PWA 제목표시줄의 형태에 대한 정보를 제공하고, 형태가 변화하는 것을 감지할 수 있는 이벤트도 발송합니다.
- Navigator.xr  
  - : [WebXR API](/ko/docs/Web/API/WebXR_Device_API)의 진입점인 XR 객체를 반환합니다.

### 비표준 속성

- Navigator.buildID  
  - : 브라우저의 빌드 식별자를 리턴합니다. 현재 최신 브라우저에서 이 속성은 개인 정보 보호 조치로 고정된 타임스탬프를 리턴합니다. 예를 들어 Firefox 64 이상에서는 `20181001000000`을 반환합니다.
- Navigator.globalPrivacyControl   
  - : 자신의 정보가 공유되거나 판매되는 것에 대한 사용자의 동의를 나타내는 불리언 값을 리턴합니다.
- Navigator.standalone 
  - : 브라우저가 독립 실행 모드로 실행중인지를 나타내는 불리언 값을 리턴합니다. Apple의 iOS Safari에서만 지원합니다.

### 사용되지 않는 속성

- Navigator.activeVRDisplays   
  - : 현재 VRDisplay.ispresenting이 `true`인 모든 VRDisplay 객체를 담고 있는 배열을 반환합니다.
- Navigator.appCodeName  
  - : 어느 브라우저에서든 항상 `'Mozilla'`를 반환합니다.
- Navigator.appName  
  - : 어느 브라우저에서든 항상 `'Netscape'`를 반환합니다.
- Navigator.appVersion  
  - : 브라우저의 버전을 문자열로 반환합니다. 정확한 값으로 사용할 때에는 이 기능에 의존하지 마십시오.
- Navigator.doNotTrack   
  - : 사용자의 추적 금지 설정 값을 알립니다. 이 값이 "1"인 경우, 당신의 웹사이트 또는 애플리케이션은 사용자를 추적해서는 안됩니다.
- Navigator.mimeTypes  
  - : 브라우저가 지원하는 MIME 타입들을 나열하는 MimeTypeArray를 반환합니다.
- Navigator.oscpu  
  - : 현재 운영 체제를 나타내는 문자열을 반환합니다.
- Navigator.platform  
  - : 브라우저의 플랫폼을 나타내는 문자열을 반환합니다. 중요한 값으로 사용할 때에는 이 기능에 의존하지 마십시오.
- Navigator.plugins  
  - : 브라우저에 설치된 플러그인을 나열하는 PluginArray을 반환합니다.
- Navigator.product  
  - : 어느 브라우저에서든 항상 `'Gecko'`를 반환합니다.
- Navigator.productSub  
  - : `'20030107'`과 `'20100101'` 중 하나를 문자열로 반환합니다.
- Navigator.vendor  
  - : 빈 문자열, `'Apple Computer Inc.'`, `'Google Inc.'` 중 하나를 반환합니다.
- Navigator.vendorSub  
  - : 항상 빈 문자열을 반환합니다.

## 메서드

아무 메서드도 상속하지 않습니다.

- Navigator.canShare()
  - : `Navigator.share()` 호출이 성공할지 나타내는 불리언 값을 반환합니다.
- Navigator.clearAppBadge()
  - : 현재 앱 아이콘의 배지를 제거하고, undefined로 이행하는 Promise를 반환합니다.
- Navigator.getBattery()
  - : BatteryManager 객체로 이행하는 Promise를 반환합니다. `BatteryManager`는 전원 충전 상태 정보를 제공합니다.
- Navigator.registerProtocolHandler()
  - : 주어진 프로토콜에 대해 현재 웹 사이트를 사용 가능한 처리기로 등록합니다.
- Navigator.requestMediaKeySystemAccess()
  - : MediaKeySystemAccess 객체로 이행하는 Promise를 반환합니다.
- Navigator.sendBeacon()
  - : 작은 데이터를 사용자 에이전트에서 웹 서버로, HTTP를 통해 비동기적으로 전송할 때 사용합니다.
- Navigator.setAppBadge()
  - : 현재 앱 아이콘에 배지를 추가하고, undefined로 이행하는 Promise를 반환합니다.
- Navigator.share()
  - : 현재 플랫폼의 네이티브 공유 기능을 발동합니다.
- Navigator.vibrate()
  - : 지원하는 경우, 장치가 진동하도록 합니다. 진동을 지원하지 않는 장치에서는 아무것도 하지 않습니다.

### 사용되지 않는 메서드

- Navigator.getUserMedia() 
  - : 사용자에게 권한을 요청한 후에 로컬 컴퓨터의 카메라 또는 마이크와 연관된 오디오나 비디오 스트림을 반환합니다.
- Navigator.getVRDisplays()  
  - : VRDisplay 객체 배열을 이행하는 promise를 반환합니다. 이 객체는 컴퓨터에 사용 가능한 VR 기기가 연결되었는지를 나타냅니다.
- Navigator.javaEnabled() 
  - : 항상 `false`를 반환합니다.
- Navigator.taintEnabled() 
  - : `false`를 반환합니다. JavaScript taint/untaint 기능은 JavaScript 1.2에서 제거되었습니다.

## 명세



## 브라우저 호환성


