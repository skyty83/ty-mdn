import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { pages, sectionMeta } from "../contentIndex";

const sectionTitle: Record<string, string> = Object.fromEntries(
  sectionMeta.map((s) => [s.id, s.title]),
);

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
    // 제목 일치 우선 정렬
    hits.sort((a, b) => {
      const aq = a.title.toLowerCase().includes(query) ? 0 : 1;
      const bq = b.title.toLowerCase().includes(query) ? 0 : 1;
      return aq - bq || a.title.localeCompare(b.title, "ko");
    });
    return hits.slice(0, 200);
  }, [q]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">문서 검색</h1>
      <form
        className="mt-4"
        onSubmit={(e) => {
          e.preventDefault();
          const url = new URL(window.location.href);
          url.hash = `#/search?q=${encodeURIComponent(q.trim())}`;
          window.location.href = url.toString();
        }}
      >
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="예: fetch, Promise, 배열…"
          aria-label="문서 검색"
          autoFocus
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 outline-none placeholder:text-slate-400 focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        />
      </form>

      {q.trim() && (
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          "{q.trim()}" — {results.length}개 결과
          {results.length >= 200 && " (상위 200개만 표시)"}
        </p>
      )}

      <ul className="mt-4 divide-y divide-slate-100 dark:divide-slate-800">
        {results.map((r) => (
          <li key={r.slug}>
            <Link to={`/${r.slug}`} className="block py-3 hover:bg-slate-50 dark:hover:bg-slate-900">
              <span className="mr-2 inline-block rounded bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                {sectionTitle[r.section] ?? r.section}
              </span>
              <span className="font-medium text-slate-900 dark:text-slate-100">{r.title}</span>
              <span className="block truncate text-xs text-slate-400">/{r.slug}</span>
            </Link>
          </li>
        ))}
      </ul>

      {q.trim() && results.length === 0 && (
        <p className="mt-8 text-center text-slate-500 dark:text-slate-400">
          검색 결과가 없어요. 다른 키워드로 검색해 보세요.
        </p>
      )}
    </div>
  );
}
