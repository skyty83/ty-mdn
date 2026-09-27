import { useEffect, useMemo, useState } from "react";
import { HashRouter, Link, Outlet, Route, Routes, useLocation, NavLink } from "react-router-dom";
import { Header } from "./components/Header";
import { OfflineBanner } from "./components/OfflineBanner";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";
import { DocPage } from "./pages/DocPage";
import { SearchPage } from "./pages/SearchPage";
import { NotFound, OfflinePage } from "./pages/NotFound";
import { ancestorSlugs } from "./lib/content";
import { trees } from "./contentIndex";

/* ── 아이콘 컴포넌트 ─────────────────────────────────── */
function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
      <path d="M3 12L12 3l9 9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21V12h6v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function JSIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="4" />
      <path d="M8 17V10M12 17c0 1.5 2 1.5 2 0v-7" strokeLinecap="round" />
    </svg>
  );
}

function APIIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
      <path d="M4 6h16M4 12h10M4 18h7" strokeLinecap="round" />
    </svg>
  );
}

function SearchTabIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={active ? 2.5 : 2}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
    </svg>
  );
}

/* ── 모바일 하단 탭 내비게이션 ─────────────────────────── */
function BottomNav() {
  const location = useLocation();
  const path = location.pathname;

  const tabs = [
    { to: "/", label: "홈", icon: HomeIcon, exact: true },
    { to: "/javascript", label: "JS", icon: JSIcon, exact: false },
    { to: "/api", label: "API", icon: APIIcon, exact: false },
    { to: "/search", label: "검색", icon: SearchTabIcon, exact: false },
  ] as const;

  return (
    <nav className="bottom-nav lg:hidden" aria-label="모바일 하단 내비게이션">
      {tabs.map((tab) => {
        const active = tab.exact ? path === tab.to : path.startsWith(tab.to);
        const Icon = tab.icon;
        return (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={active ? "active" : ""}
            aria-current={active ? "page" : undefined}
          >
            <Icon active={active} />
            <span>{tab.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}

/* ── Docs 레이아웃 ──────────────────────────────────── */
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

  // 오버레이 열릴 때 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <div className="mx-auto flex max-w-7xl">
      {/* 데스크탑 사이드바 */}
      <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-72 shrink-0 overflow-y-auto border-r border-slate-200 px-2 dark:border-slate-800 lg:block">
        <Sidebar tree={tree} currentSlug={currentSlug} ancestors={ancestors} />
      </aside>

      {/* 본문 */}
      <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
        <Outlet />
      </main>

      {/* 모바일 목차 FAB */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed bottom-[calc(4rem+env(safe-area-inset-bottom,0px))] right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 ring-4 ring-white transition-transform active:scale-90 dark:ring-slate-900 lg:hidden"
        aria-label="목차 열기"
      >
        <MenuIcon />
      </button>

      {/* 모바일 사이드바 Bottom Sheet */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* 백드롭 */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm fade-in"
            onClick={() => setMobileOpen(false)}
          />
          {/* 시트 */}
          <div className="absolute bottom-0 left-0 right-0 flex max-h-[88vh] flex-col rounded-t-[1.5rem] bg-white shadow-2xl dark:bg-slate-950 slide-up">
            {/* 드래그 핸들 */}
            <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-slate-200 dark:bg-slate-800" />

            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-[17px] font-bold text-slate-900 dark:text-white">전체 목차</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-xl bg-slate-100 p-2 text-slate-500 transition-colors hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
                aria-label="닫기"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 pb-8">
              <Sidebar tree={tree} currentSlug={currentSlug} ancestors={ancestors} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Footer ─────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-slate-500 dark:text-slate-400">
        <p className="font-bold text-slate-700 dark:text-slate-200">MDN 한국어 문서</p>
        <p className="mt-2 leading-relaxed">
          문서 콘텐츠 © Mozilla contributors,{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/2.5/deed.ko"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            CC-BY-SA 2.5
          </a>{" "}
          라이선스. MDN Web Docs의 한국어 번역을 가져와 만든 개인 학습용 사이트입니다.
        </p>
        <nav className="mt-4 flex gap-4" aria-label="푸터 내비게이션">
          <Link to="/javascript" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            JavaScript
          </Link>
          <Link to="/api" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            Web APIs
          </Link>
          <Link to="/search" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            검색
          </Link>
        </nav>
      </div>
    </footer>
  );
}

/* ── App ─────────────────────────────────────────────── */
export default function App() {
  return (
    <HashRouter>
      {/* 모바일 하단 탭 공간 확보 */}
      <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <Header />
        <OfflineBanner />
        <div className="flex-1 pb-16 lg:pb-0">
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
        <BottomNav />
      </div>
    </HashRouter>
  );
}
