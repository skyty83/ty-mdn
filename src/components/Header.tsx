import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sectionMeta } from "../contentIndex";

function Logo() {
  return (
    <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">
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

export function Header() {
  const [dark, setDark] = useState<boolean>(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false,
  );
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* 무시 */
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <Logo />
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            MDN 한국어 문서
          </span>
        </Link>
        <nav className="ml-2 hidden items-center gap-1 md:flex">
          {sectionMeta.map((s) => (
            <Link
              key={s.id}
              to={`/${s.id}`}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {s.title}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <form
            className="hidden sm:block"
            onSubmit={(e) => {
              e.preventDefault();
              if (q.trim()) navigate(`/search?q=${encodeURIComponent(q.trim())}`);
            }}
          >
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="문서 검색…"
              aria-label="문서 검색"
              className="w-40 rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:w-56 focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
          </form>
          <button
            onClick={() => setDark((d) => !d)}
            aria-label={dark ? "라이트 모드로 전환" : "다크 모드로 전환"}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {dark ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="border-t border-slate-100 px-4 py-2 sm:hidden dark:border-slate-800">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (q.trim()) navigate(`/search?q=${encodeURIComponent(q.trim())}`);
          }}
        >
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="문서 검색…"
            aria-label="문서 검색"
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm outline-none placeholder:text-slate-400 focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
        </form>
      </div>
    </header>
  );
}
