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
      <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
        <Outlet />
      </main>

      {/* 모바일 목차 버튼 (FAB) */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed bottom-8 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-xl ring-4 ring-white transition-transform active:scale-95 dark:ring-slate-900 lg:hidden"
        aria-label="목차 열기"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" />
        </svg>
      </button>

      {/* 모바일 사이드바 오버레이 (Bottom Sheet 스타일) */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 flex max-h-[85vh] flex-col rounded-t-[2rem] bg-white shadow-2xl transition-transform dark:bg-slate-950">
            {/* 드래그 핸들 바 */}
            <div className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-slate-200 dark:bg-slate-800" />
            
            <div className="flex items-center justify-between px-6 py-4">
              <span className="text-lg font-bold text-slate-900 dark:text-white">전체 목차</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-slate-100 p-2 text-slate-500 transition-colors hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 pb-12">
              <Sidebar tree={tree} currentSlug={currentSlug} ancestors={ancestors} />
            </div>
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
