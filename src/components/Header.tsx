import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { sectionMeta } from "../contentIndex";

function Logo() {
  return (
    <svg viewBox="0 0 64 64" className="h-8 w-8 shrink-0" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#1e1b4b" />
      <path
        d="M14 45 V21 L32 38 L50 21 V45"
        stroke="#ffffff"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}

function SearchIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" strokeLinecap="round" />
    </svg>
  );
}

export function Header() {
  const [dark, setDark] = useState<boolean>(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false,
  );
  const [q, setQ] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* 무시 */
    }
  }, [dark]);

  // 페이지 이동 시 검색창 닫기
  useEffect(() => {
    setSearchOpen(false);
    setQ("");
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (q.trim()) {
      navigate(`/search?q=${encodeURIComponent(q.trim())}`);
      setSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/95">
      {/* 메인 헤더 행 */}
      <div className="flex h-14 items-center gap-2 px-4 sm:px-6">
        {/* 로고 */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <Logo />
          <span className="text-[15px] font-bold tracking-tight text-slate-900 dark:text-white sm:text-base">
            MDN 한국어
          </span>
        </Link>

        {/* 데스크탑 nav */}
        <nav className="ml-3 hidden items-center gap-0.5 md:flex" aria-label="섹션 내비게이션">
          {sectionMeta.map((s) => (
            <Link
              key={s.id}
              to={`/${s.id}`}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {s.title}
            </Link>
          ))}
        </nav>

        {/* 우측 도구 */}
        <div className="ml-auto flex items-center gap-1">
          {/* 데스크탑 검색 */}
          <form className="hidden sm:block" onSubmit={handleSearch}>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="문서 검색…"
              aria-label="문서 검색"
              className="w-40 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:w-52 focus:border-indigo-500 focus:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:bg-slate-900"
            />
          </form>

          {/* 모바일 검색 버튼 */}
          <button
            onClick={() => setSearchOpen((o) => !o)}
            aria-label="검색"
            className="sm:hidden rounded-xl p-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <SearchIcon />
          </button>

          {/* 다크모드 토글 */}
          <button
            onClick={() => setDark((d) => !d)}
            aria-label={dark ? "라이트 모드로 전환" : "다크 모드로 전환"}
            className="rounded-xl p-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>

      {/* 모바일 검색창 슬라이드다운 */}
      {searchOpen && (
        <div className="border-t border-slate-100 px-4 py-2.5 sm:hidden dark:border-slate-800 fade-in">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="문서 검색…"
                aria-label="문서 검색"
                autoFocus
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-[15px] outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              />
            </div>
          </form>
        </div>
      )}
    </header>
  );
}
