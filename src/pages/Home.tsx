import { useEffect } from "react";
import { Link } from "react-router-dom";
import { sectionMeta, trees } from "../contentIndex";

const sectionDesc: Record<string, string> = {
  javascript:
    "가볍고 유연한 프로그래밍 언어 JavaScript의 문법, 내장 객체, 문(Statement) 레퍼런스까지.",
  api: "웹 앱을 만들 때 사용하는 Web API 인터페이스 전체 레퍼런스.",
};

const sectionIcon: Record<string, string> = {
  javascript: "JS",
  api: "API",
};

/** 인기 문서 바로가기 */
const featured = [
  { slug: "javascript/guide", label: "JavaScript 가이드" },
  { slug: "javascript/reference/global_objects/array", label: "Array" },
  { slug: "javascript/reference/global_objects/promise", label: "Promise" },
  { slug: "api/fetch", label: "fetch()" },
  { slug: "api/document", label: "Document" },
  { slug: "api/window", label: "Window" },
];

const features = [
  {
    emoji: "📦",
    title: "오프라인 지원",
    desc: "한 번 연 문서는 기기에 저장되어 인터넷 없이도 볼 수 있어요.",
  },
  {
    emoji: "⚡",
    title: "빠른 검색",
    desc: "1,600여 개 문서 제목을 즉시 검색할 수 있어요.",
  },
  {
    emoji: "🌙",
    title: "다크 모드",
    desc: "눈이 편한 다크 모드를 지원해요.",
  },
];

export function Home() {
  useEffect(() => {
    document.title = "MDN 한국어 문서";
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:py-12">
      {/* 히어로 */}
      <section className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 mb-4">
          <span>📖</span>
          <span>PWA — 오프라인 지원</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          MDN 한국어 문서
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 sm:text-lg dark:text-slate-300 leading-relaxed">
          MDN Web Docs의 JavaScript와 Web APIs 문서를 한국어로 모아 놓은 나만의 문서 사이트입니다.
        </p>
      </section>

      {/* 섹션 카드 */}
      <section className="mt-8 grid gap-4 sm:grid-cols-2" aria-label="문서 섹션">
        {sectionMeta.map((s) => (
          <Link
            key={s.id}
            to={`/${s.id}`}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-indigo-100 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-none"
          >
            {/* 배경 그라디언트 장식 */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-indigo-950/40" />

            <div className="relative">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-sm font-bold text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
                {sectionIcon[s.id] ?? s.id.toUpperCase()}
              </div>
              <h2 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400 transition-colors">
                {s.title}
              </h2>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {sectionDesc[s.id] ?? trees[s.id]?.title ?? ""}
              </p>
              <p className="mt-4 flex items-center gap-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                {s.count.toLocaleString()}개 문서 보기
                <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </p>
            </div>
          </Link>
        ))}
      </section>

      {/* 자주 찾는 문서 */}
      <section className="mt-10" aria-labelledby="featured-heading">
        <h2 id="featured-heading" className="text-base font-bold text-slate-900 dark:text-white sm:text-lg">
          자주 찾는 문서
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {featured.map((f) => (
            <Link
              key={f.slug}
              to={`/${f.slug}`}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 active:scale-95 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-300"
            >
              {f.label}
            </Link>
          ))}
        </div>
      </section>

      {/* 특징 */}
      <section className="mt-10 grid gap-3 sm:grid-cols-3" aria-labelledby="features-heading">
        <h2 id="features-heading" className="sr-only">주요 특징</h2>
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-2 text-2xl">{f.emoji}</div>
            <h3 className="font-bold text-slate-900 dark:text-white">{f.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
