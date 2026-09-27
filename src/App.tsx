import { useEffect, useMemo, useState } from "react";
import { HashRouter, Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { OfflineBanner } from "./components/OfflineBanner";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";
import { DocPage } from "./pages/DocPage";
import { SearchPage } from "./pages/SearchPage";
import { NotFound, OfflinePage } from "./pages/NotFound";
import { ancestorSlugs } from "./lib/content";
import { trees } from "./contentIndex";

function DocsLayout({ section }: { section: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const tree = trees[section];

  const currentSlug = useMemo(() => {
    const p = location.pathname.replace(/^\/+|\/+$/g, "");
    return p || section;
  }, [location.pathname, section]);

  const ancestors = useMemo(() => new Set(ancestorSlugs(currentSlug)), [currentSlug]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <div className="mx-auto flex max-w-7xl">
      <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-72 shrink-0 overflow-y-auto border-r border-slate-200 px-2 dark:border-slate-800 lg:block">
        <Sidebar tree={tree} currentSlug={currentSlug} ancestors={ancestors} />
      </aside>
      <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10">
        <Outlet />
      </main>

      {/* 모바일 목차 버튼 + 오버레이 */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed bottom-6 right-6 z-40 rounded-full bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg lg:hidden"
      >
        목차
      </button>
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 max-h-[75vh] overflow-y-auto rounded-t-2xl bg-white px-4 pb-8 dark:bg-slate-950">
            <div className="sticky top-0 flex items-center justify-between bg-white py-3 dark:bg-slate-950">
              <span className="font-bold text-slate-900 dark:text-white">목차</span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="닫기"
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                ✕
              </button>
            </div>
            <Sidebar tree={tree} currentSlug={currentSlug} ancestors={ancestors} />
          </div>
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-slate-500 dark:text-slate-400">
        <p className="font-bold text-slate-700 dark:text-slate-200">MDN 한국어 문서</p>
        <p className="mt-2">
          문서 콘텐츠 © Mozilla contributors,{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/2.5/deed.ko"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            CC-BY-SA 2.5
          </a>{" "}
          라이선스. MDN Web Docs의 한국어 번역을 가져와 만든 개인 학습용 사이트입니다.
        </p>
        <nav className="mt-4 flex gap-4">
          <Link to="/javascript" className="hover:text-indigo-600">
            JavaScript
          </Link>
          <Link to="/api" className="hover:text-indigo-600">
            Web APIs
          </Link>
          <Link to="/search" className="hover:text-indigo-600">
            검색
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <Header />
        <OfflineBanner />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/offline" element={<OfflinePage />} />
            <Route path="/javascript/*" element={<DocsLayout section="javascript" />}>
              <Route index element={<DocPage section="javascript" />} />
              <Route path="*" element={<DocPage section="javascript" />} />
            </Route>
            <Route path="/api/*" element={<DocsLayout section="api" />}>
              <Route index element={<DocPage section="api" />} />
              <Route path="*" element={<DocPage section="api" />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}
