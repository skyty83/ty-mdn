import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { pages, sectionMeta } from "../contentIndex";

const sectionTitle: Record<string, string> = Object.fromEntries(
  sectionMeta.map((s) => [s.id, s.title]),
);

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" strokeLinecap="round" />
    </svg>
  );
}

export function SearchPage() {
  const [params] = useSearchParams();
  const initial = params.get("q") ?? "";
  const [q, setQ] = useState(initial);

  useEffect(() => {
    setQ(params.get("q") ?? "");
  }, [params]);

  useEffect(() => {
    document.title = q ? `"${q}" 검색 결과 | MDN 한국어 문서` : "검색 | MDN 한국어 문서";
  }, [q]);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];
    const hits: { slug: string; title: string; section: string }[] = [];
    for (const [slug, meta] of Object.entries(pages)) {
      if (
        meta.title.toLowerCase().includes(query) ||
        slug.toLowerCase().includes(query.replace(/\s+/g, "_"))
      ) {
        hits.push({ slug, title: meta.title, section: meta.section });
      }
    }
    hits.sort((a, b) => {
      const aq = a.title.toLowerCase().includes(query) ? 0 : 1;
      const bq = b.title.toLowerCase().includes(query) ? 0 : 1;
      return aq - bq || a.title.localeCompare(b.title, "ko");
    });
    return hits.slice(0, 200);
  }, [q]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:py-10">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">문서 검색</h1>

      {/* 검색 입력 */}
      <div className="mt-5">
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <SearchIcon />
          </span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="예: fetch, Promise, 배열…"
            aria-label="문서 검색"
            autoFocus
            className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-[15px] text-slate-900 outline-none placeholder:text-slate-400 transition-shadow focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-indigo-400"
          />
        </div>
      </div>

      {/* 결과 수 */}
      {q.trim() && (
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          <span className="font-medium text-slate-700 dark:text-slate-200">"{q.trim()}"</span> —{" "}
          {results.length}개 결과
          {results.length >= 200 && " (상위 200개만 표시)"}
        </p>
      )}

      {/* 결과 목록 */}
      <ul className="mt-3 divide-y divide-slate-100 dark:divide-slate-800/60" role="list">
        {results.map((r) => (
          <li key={r.slug}>
            <Link
              to={`/${r.slug}`}
              className="flex items-start gap-3 py-3.5 px-2 rounded-xl transition-colors hover:bg-slate-50 active:bg-slate-100 dark:hover:bg-slate-900 dark:active:bg-slate-800"
            >
              <span className="mt-0.5 inline-block shrink-0 rounded-lg bg-indigo-100 px-2 py-1 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                {sectionTitle[r.section] ?? r.section}
              </span>
              <div className="min-w-0">
                <span className="block font-semibold text-slate-900 dark:text-slate-100 leading-tight">
                  {r.title}
                </span>
                <span className="block truncate text-xs text-slate-400 mt-0.5">/{r.slug}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* 빈 결과 */}
      {q.trim() && results.length === 0 && (
        <div className="mt-16 text-center">
          <div className="mb-3 text-4xl">🔍</div>
          <p className="text-slate-500 dark:text-slate-400">
            검색 결과가 없어요.
          </p>
          <p className="mt-1 text-sm text-slate-400 dark:text-slate-500">
            다른 키워드로 검색해 보세요.
          </p>
        </div>
      )}

      {/* 초기 상태 */}
      {!q.trim() && (
        <div className="mt-12 text-center">
          <div className="mb-3 text-4xl">📚</div>
          <p className="text-slate-500 dark:text-slate-400">
            검색어를 입력하면 바로 결과가 나타납니다.
          </p>
        </div>
      )}
    </div>
  );
}
