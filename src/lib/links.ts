import { resolveSlug } from "./content";

export const MDN_ORIGIN = "https://developer.mozilla.org";

export interface RewrittenLink {
  href: string;
  external: boolean;
}

/**
 * MDN 내부 링크(/ko/docs/Web/...)를 해시 라우트에 맞게 재작성한다.
 * - 변환 가능: #/javascript/... , #/api/... (페이지 내 앵커는 유지)
 * - 변환 불가(다른 섹션 등): MDN 원문 절대 URL로, 새 탭에서 열기
 */
export function rewriteHref(rawHref: string, currentSlug: string): RewrittenLink {
  const href = rawHref.trim();
  if (!href) return { href: "#", external: false };
  if (href.startsWith("#")) return { href, external: false };
  if (/^(https?:|mailto:|tel:|data:|blob:)/i.test(href)) {
    return { href, external: true };
  }

  const hashIdx = href.indexOf("#");
  const frag = hashIdx >= 0 ? href.slice(hashIdx) : "";
  const path = hashIdx >= 0 ? href.slice(0, hashIdx) : href;

  if (path.startsWith("/ko/docs/")) {
    const slug = mdnPathToSlug(path.slice("/ko/docs/".length));
    if (slug) return { href: `#/${slug}${frag}`, external: false };
    return { href: `${MDN_ORIGIN}${path}${frag}`, external: true };
  }
  if (path.startsWith("/")) {
    return { href: `${MDN_ORIGIN}${path}${frag}`, external: true };
  }

  // 상대 경로: 현재 문서 기준으로 해석
  const candidate = resolveRelative(currentSlug, path);
  const slug = resolveSlug(candidate);
  if (slug) return { href: `#/${slug}${frag}`, external: false };
  if (/\.(png|jpe?g|gif|svg|webp|avif|ogv|webm|mp4|pdf)$/i.test(path)) {
    return { href: `${import.meta.env.BASE_URL}content/${candidate}`, external: false };
  }
  return { href, external: false };
}

/** "Web/JavaScript/Reference/..." -> "javascript/reference/..." (없으면 undefined) */
function mdnPathToSlug(mdnPath: string): string | undefined {
  const m = mdnPath.match(/^Web\/(JavaScript|API)\/?(.*)$/i);
  if (!m) return undefined;
  const section = m[1].toLowerCase() === "api" ? "api" : "javascript";
  const rest = m[2].replace(/\/+$/, "");
  const candidate = rest ? `${section}/${rest}` : section;
  return resolveSlug(candidate);
}

function resolveRelative(currentSlug: string, relPath: string): string {
  const parts = currentSlug.split("/");
  parts.pop(); // 현재 파일명(index) 제거 -> 디렉토리 기준
  for (const seg of relPath.split("/")) {
    if (seg === "" || seg === ".") continue;
    else if (seg === "..") parts.pop();
    else parts.push(seg);
  }
  return parts.join("/");
}

/** 마크다운 이미지의 상대 경로를 public/content 서빙 경로로 변환 */
export function rewriteImgSrc(src: string, currentSlug: string): string {
  const s = src.trim();
  if (!s || /^(https?:|data:|blob:)/i.test(s) || s.startsWith("/")) return s;
  const dir = currentSlug.split("/").slice(0, -1);
  const parts = [...dir];
  for (const seg of s.split("/")) {
    if (seg === "" || seg === ".") continue;
    else if (seg === "..") parts.pop();
    else parts.push(seg);
  }
  return `${import.meta.env.BASE_URL}content/${parts.join("/")}`;
}
