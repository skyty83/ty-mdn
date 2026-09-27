import { useEffect, useMemo, useState, useRef } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { DocMarkdown } from "../components/Markdown";
import { ancestorSlugs, loadPage, type LoadedPage } from "../lib/content";
import { MDN_ORIGIN } from "../lib/links";
import { pages } from "../contentIndex";

/* ── 브레드크럼 ─────────────────────────────────────── */
function Breadcrumb({ slug }: { slug: string }) {
  const crumbs = useMemo(() => ancestorSlugs(slug), [slug]);
  if (crumbs.length <= 1) return null;

  // 모바일에선 마지막 2개만 표시
  const displayCrumbs = crumbs;

  return (
    <nav aria-label="브레드크럼" className="mb-5 flex flex-wrap items-center gap-1 text-sm">
      {displayCrumbs.map((c, i) => (
        <span key={c} className="flex items-center gap-1 shrink-0">
          {i > 0 && (
            <svg viewBox="0 0 12 12" className="h-3 w-3 text-slate-300 dark:text-slate-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m3.5 1.5 4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          {i === displayCrumbs.length - 1 ? (
            <span className="font-medium text-slate-500 dark:text-slate-400 max-w-[200px] truncate">
              {pages[c]?.title}
            </span>
          ) : (
            <Link
              to={`/${c}`}
              className="text-indigo-600 dark:text-indigo-400 hover:underline max-w-[120px] truncate"
            >
              {pages[c]?.title ?? c}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}

/* ── 인페이지 목차 (h2 헤딩 추출) ─────────────────── */
function TableOfContents({ source }: { source: string }) {
  const headings = useMemo(() => {
    const matches = [...source.matchAll(/^## (.+)$/gm)];
    return matches.map((m) => ({
      text: m[1].replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"), // 링크 텍스트만
      id: m[1]
        .toLowerCase()
        .replace(/[^\w\s가-힣-]/g, "")
        .replace(/\s+/g, "-"),
    }));
  }, [source]);

  if (headings.length < 2) return null;

  return (
    <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/50">
      <p className="mb-2.5 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
        📋 이 페이지 내용
      </p>
      <ol className="space-y-1.5">
        {headings.map((h, i) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className="flex items-baseline gap-2 text-sm text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
            >
              <span className="text-xs font-semibold text-slate-300 dark:text-slate-600 w-4 flex-shrink-0">
                {i + 1}
              </span>
              <span className="leading-snug">{h.text}</span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ── 독페이지 ────────────────────────────────────────── */
export function DocPage({ section }: { section: string }) {
  const splat = useParams()["*"] ?? "";
  const slug = splat ? `${section}/${splat}` : section;
  const { hash } = useLocation();
  const [page, setPage] = useState<LoadedPage | null>(null);
  const [missing, setMissing] = useState(false);
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cancelled = false;
    setPage(null);
    setMissing(false);
    loadPage(slug).then((p) => {
      if (cancelled) return;
      if (p) setPage(p);
      else setMissing(true);
    });
    return () => { cancelled = true; };
  }, [slug]);

  useEffect(() => {
    if (!page) return;
    document.title = `${page.title} | MDN 한국어 문서`;
    if (hash) {
      const t = setTimeout(() => {
        const el = document.getElementById(decodeURIComponent(hash.slice(1)));
        el?.scrollIntoView({ block: "start" });
      }, 50);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [page, hash, slug]);

  /* 문서 없음 */
  if (missing) {
    return (
      <article className="py-16 text-center">
        <div className="mb-4 text-5xl">📄</div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          문서를 찾을 수 없습니다
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          요청한 문서가 이 사이트에 없어요. MDN 원문에서 확인해 보세요.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 active:scale-95"
        >
          홈으로 돌아가기
        </Link>
      </article>
    );
  }

  /* 로딩 스켈레톤 */
  if (!page) {
    return (
      <div className="py-6 space-y-4 max-w-3xl">
        <div className="skeleton h-7 w-3/4 rounded-xl" />
        <div className="skeleton h-4 w-1/2" />
        {/* 목차 스켈레톤 */}
        <div className="skeleton h-28 w-full rounded-2xl mt-6" />
        {/* 본문 스켈레톤 */}
        <div className="mt-4 space-y-3">
          {[100, 92, 96, 84, 88, 76, 94].map((w, i) => (
            <div key={i} className="skeleton h-4" style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="skeleton h-32 w-full rounded-xl mt-2" />
        <div className="space-y-3 mt-2">
          {[90, 82, 78].map((w, i) => (
            <div key={i} className="skeleton h-4" style={{ width: `${w}%` }} />
          ))}
        </div>
      </div>
    );
  }

  const origSlug = pages[slug]?.origSlug;

  return (
    <article ref={articleRef} className="mx-auto max-w-3xl">
      {/* 브레드크럼 */}
      <Breadcrumb slug={slug} />

      {/* 문서 제목 */}
      <h1 className="text-[1.625rem] font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl lg:text-[2rem] leading-tight mb-2">
        {page.title}
      </h1>

      {/* 섹션 배지 */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
          {section === "javascript" ? "JavaScript" : "Web API"}
        </span>
        {origSlug && (
          <a
            href={`${MDN_ORIGIN}/ko/docs/${origSlug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-indigo-500 dark:text-slate-500 dark:hover:text-indigo-400 transition-colors"
          >
            MDN 원문
            <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M2 10L10 2M6 2h4v4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        )}
      </div>

      {/* 인페이지 목차 */}
      <TableOfContents source={page.body} />

      {/* 본문 */}
      <DocMarkdown slug={slug} source={page.body} />

      {/* 하단 정보 */}
      <div className="mt-10 space-y-3">
        <div className="h-px bg-slate-100 dark:bg-slate-800" />
        <p className="text-xs text-slate-400 dark:text-slate-500">
          콘텐츠 © Mozilla contributors,{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/2.5/deed.ko"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-slate-600 dark:hover:text-slate-300"
          >
            CC-BY-SA 2.5
          </a>{" "}
          라이선스
        </p>
      </div>
    </article>
  );
}
