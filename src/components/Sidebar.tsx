import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { TreeNode } from "../contentIndex";

interface SidebarProps {
  tree: TreeNode;
  currentSlug: string;
  ancestors: Set<string>;
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-150 ${open ? "rotate-90" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Node({
  node,
  depth,
  currentSlug,
  ancestors,
}: {
  node: TreeNode;
  depth: number;
  currentSlug: string;
  ancestors: Set<string>;
}) {
  const hasKids = node.children.length > 0;
  const [open, setOpen] = useState<boolean>(
    () => depth === 0 || (node.slug != null && ancestors.has(node.slug)),
  );

  useEffect(() => {
    if (node.slug && ancestors.has(node.slug)) setOpen(true);
  }, [ancestors, node.slug]);

  const active = node.slug === currentSlug;

  return (
    <div>
      <div
        className={`flex items-center gap-1 rounded-xl pr-2 transition-colors ${
          active ? "bg-indigo-50 dark:bg-indigo-950/40" : "hover:bg-slate-100 dark:hover:bg-slate-800/60"
        }`}
        style={{ paddingLeft: depth * 12 + 4 }}
      >
        {hasKids ? (
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "접기" : "펼치기"}
            className="rounded-lg p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          >
            <Chevron open={open} />
          </button>
        ) : (
          <span className="w-[1.625rem] shrink-0" />
        )}
        {node.slug ? (
          <Link
            to={`/${node.slug}`}
            className={`flex-1 truncate py-2 text-sm leading-snug ${
              active
                ? "font-semibold text-indigo-600 dark:text-indigo-400"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            }`}
          >
            {node.title}
          </Link>
        ) : (
          <span className="flex-1 truncate py-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            {node.title}
          </span>
        )}
      </div>
      {hasKids && open && (
        <div className="border-l border-slate-100 ml-5 dark:border-slate-800/60">
          {node.children.map((c) => (
            <Node
              key={c.slug ?? c.title}
              node={c}
              depth={depth + 1}
              currentSlug={currentSlug}
              ancestors={ancestors}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function Sidebar({ tree, currentSlug, ancestors }: SidebarProps) {
  return (
    <nav aria-label="문서 목차" className="py-3">
      {tree.slug && (
        <Link
          to={`/${tree.slug}`}
          className={`mb-3 block rounded-xl px-3 py-2 text-[15px] font-bold transition-colors ${
            currentSlug === tree.slug
              ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400"
              : "text-slate-900 hover:bg-slate-100 hover:text-indigo-600 dark:text-white dark:hover:bg-slate-800 dark:hover:text-indigo-400"
          }`}
        >
          {tree.title}
        </Link>
      )}
      {tree.children.map((c) => (
        <Node
          key={c.slug ?? c.title}
          node={c}
          depth={0}
          currentSlug={currentSlug}
          ancestors={ancestors}
        />
      ))}
    </nav>
  );
}
