import { pages } from "../contentIndex";

/**
 * 정제된 마크다운을 지연 로딩으로 가져온다.
 * 각 md 파일은 별도 청크로 분리되어 문서 페이지를 열 때만 로드된다.
 */
const mdModules = import.meta.glob<string>("../content/**/*.md", {
  query: "?raw",
  import: "default",
}) as Record<string, () => Promise<string>>;

export interface LoadedPage {
  title: string;
  body: string;
}

function stripFrontmatter(raw: string): string {
  return raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");
}

/** slug (예: "javascript/guide") 로 문서 로드. 없으면 null. */
export async function loadPage(slug: string): Promise<LoadedPage | null> {
  const loader = mdModules[`../content/${slug}/index.md`];
  if (!loader) return null;
  const raw = await loader();
  const meta = pages[slug];
  return { title: meta?.title ?? slug, body: stripFrontmatter(raw) };
}

/** 링크 재작성용: 소문자 slug -> 실제 slug 맵 */
const lowerSlugMap = new Map<string, string>();
for (const slug of Object.keys(pages)) {
  lowerSlugMap.set(slug.toLowerCase(), slug);
}

export function resolveSlug(candidate: string): string | undefined {
  return lowerSlugMap.get(candidate.toLowerCase());
}

/** 현재 slug의 조상 slug 목록 (브레드크럼/사이드바 펼침용) */
export function ancestorSlugs(slug: string): string[] {
  const parts = slug.split("/");
  const out: string[] = [];
  for (let i = 1; i <= parts.length; i++) {
    const s = parts.slice(0, i).join("/");
    if (pages[s]) out.push(s);
  }
  return out;
}
