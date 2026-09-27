import { useEffect } from "react";
import { Link } from "react-router-dom";
import { sectionMeta, trees } from "../contentIndex";

const sectionDesc: Record<string, string> = {
  javascript:
    "가볍고 유연한 프로그래밍 언어 JavaScript의 문법, 내장 객체, 문(Statement) 레퍼런스까지.",
  api: "웹 앱을 만들 때 사용하는 Web API 인터페이스 전체 레퍼런스.",
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

export function Home() {
  useEffect(() => {
    document.title = "MDN 한국어 문서";
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <section className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          MDN 한국어 문서
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          MDN Web Docs의 JavaScript와 Web APIs 문서를 한국어로 모아 놓은 나만의 문서
          사이트입니다. PWA라서 오프라인에서도 볼 수 있어요.
        </p>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        {sectionMeta.map((s) => (
          <Link
            key={s.id}
            to={`/${s.id}`}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <h2 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
              {s.title}
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              {sectionDesc[s.id] ?? trees[s.id]?.title ?? ""}
            </p>
            <p className="mt-4 text-sm font-medium text-indigo-600 dark:text-indigo-400">
              {s.count.toLocaleString()}개 문서 보기 →
            </p>
          </Link>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">자주 찾는 문서</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {featured.map((f) => (
            <Link
              key={f.slug}
              to={`/${f.slug}`}
              className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-700 hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
            >
              {f.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-3">
        {[
          { title: "오프라인 지원", desc: "한 번 연 문서는 기기에 저장되어 인터넷 없이도 볼 수 있어요." },
          { title: "빠른 검색", desc: "1,600여 개 문서 제목을 바로 검색할 수 있어요." },
          { title: "다크 모드", desc: "눈이 편한 다크 모드를 지원해요." },
        ].map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="font-bold text-slate-900 dark:text-white">{f.title}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
