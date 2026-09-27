# MDN 한국어 문서 (PWA)

MDN Web Docs 한국어판의 **JavaScript**(808개) · **Web APIs**(805개) 문서를 담은
React + TypeScript + Tailwind CSS 기반 PWA 문서 사이트입니다.

## 실행 방법

```bash
cd ~/workspace/mdn-ko-pwa
npm install        # 최초 1회
npm run dev        # 개발 서버 (http://localhost:5173)
npm run build      # 프로덕션 빌드 -> dist/
npm run preview    # 빌드 결과 미리보기 (http://localhost:4173)
```

> `npm run dev` / `npm run build` 실행 시 `scripts/prepare.mjs`가 자동으로
> `../mdn-ko-prototype/docs` (읽기 전용)에서 정제된 마크다운을 `src/content`로 복사하고
> `src/contentIndex.ts`(페이지 목록 + 사이드바 트리)를 생성합니다.

## 주요 기능

- **1,613개 문서** — `import.meta.glob` + `?raw` 지연 로딩으로 페이지별 청크 분리
- **HashRouter** — 정적 호스팅에서도 404 없이 동작 (`#/javascript/...`, `#/api/...`)
- **자동 사이드바** — 폴더 구조 + frontmatter title 기반 트리, 현재 경로 자동 펼침
- **MDN 내부 링크 재작성** — `/ko/docs/Web/...` 링크를 내부 해시 라우트로 변환 (대소문자 무시),
  변환 불가 링크는 MDN 원문으로 새 탭 연결
- **제목 기반 검색** (`#/search?q=...`)
- **PWA** — `vite-plugin-pwa` (generateSW)
  - 한글 manifest (`MDN 한국어 문서`), 테마색 `#1e1b4b`
  - 앱 셸 + 1,613개 문서 청크 + 이미지 에셋 전체 precache (오프라인 완전 동작)
  - MDN 원문 링크는 NetworkFirst 런타임 캐시
  - 오프라인 폴백: `navigateFallback → index.html` + `#/offline` 안내 페이지 + 오프라인 배너
  - 아이콘: `public/icons/` (192/512/maskable/애플터치) + `favicon.svg`
- **다크 모드** — 헤더 토글, localStorage 저장
- **`[!NOTE]` 콜아웃** — 파란색 "참고" 박스로 렌더링

## 라이선스 표기

문서 콘텐츠 © Mozilla contributors, [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/deed.ko).
MDN Web Docs 한국어 번역(`mdn/translated-content`)을 가져와 만든 개인 학습용 사이트입니다.
