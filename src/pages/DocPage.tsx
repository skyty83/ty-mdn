import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { DocMarkdown } from "../components/Markdown";
import { ancestorSlugs, loadPage, type LoadedPage } from "../lib/content";
import { MDN_ORIGIN } from "../lib/links";
import { pages } from "../contentIndex";

function Breadcrumb({ slug }: { slug: string }) {
  const crumbs = useMemo(() => ancestorSlugs(slug), [slug]);
  if (crumbs.length <= 1) return null;
  return (
    <nav aria-label="브레드크럼" className="mb-6 flex flex-wrap items-center gap-1.5 text-sm">
      {crumbs.map((c, i) => (
        <span key={c} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-slate-300 dark:text-slate-600">/</span>}
          {i === crumbs.length - 1 ? (
            <span className="font-medium text-slate-600 dark:text-slate-300">{pages[c]?.title}</span>
          ) : (
            <Link to={`/${c}`} className="text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400">
              {pages[c]?.title ?? c}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}

export function DocPage({ section }: { section: string }) {
  const splat = useParams()["*"] ?? "";
  const slug = splat ? `${section}/${splat}` : section;
  const { hash } = useLocation();
  const [page, setPage] = useState<LoadedPage | null>(null);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setPage(null);
    setMissing(false);
    loadPage(slug).then((p) => {
      if (cancelled) return;
      if (p) setPage(p);
      else setMissing(true);
    });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  useEffect(() => {
    if (!page) return;
    document.title = `${page.title} | MDN 한국어 문서`;
    if (hash) {
      // 렌더 후 앵커로 스크롤 (헤딩 id는 rehype-slug가 생성)
      const t = setTimeout(() => {
        const el = document.getElementById(decodeURIComponent(hash.slice(1)));
        el?.scrollIntoView({ block: "start" });
      }, 50);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [page, hash, slug]);

  if (missing) {
    return (
      <article className="py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          문서를 찾을 수 없습니다
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          요청한 문서가 이 사이트에 없어요. MDN 원문에서 확인해 보세요.
        </p>
        <Link to="/" className="mt-6 inline-block text-indigo-600 hover:underline">
          홈으로 돌아가기
        </Link>
      </article>
    );
  }

  if (!page) {
    return (
      <div className="animate-pulse py-10">
        <div className="h-8 w-2/3 rounded bg-slate-200 dark:bg-slate-800" />
        <div className="mt-6 space-y-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="h-4 rounded bg-slate-100 dark:bg-slate-800/60" />
          ))}
        </div>
      </div>
    );
  }

  const origSlug = pages[slug]?.origSlug;

  return (
    <article className="mx-auto max-w-4xl">
      <Breadcrumb slug={slug} />
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {page.title}
      </h1>
      <div className="mt-8 leading-relaxed">
        <DocMarkdown slug={slug} source={page.body} />
      </div>
      <footer className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        {origSlug && (
          <p>
            <a
              href={`${MDN_ORIGIN}/ko/docs/${origSlug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline dark:text-indigo-400"
            >
              MDN 원문에서 보기 ↗
            </a>
          </p>
        )}
        <p className="mt-2">
          이 문서의 콘텐츠 © Mozilla contributors, CC-BY-SA 2.5 라이선스
        </p>
      </footer>
    </article>
  );
}
