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
      className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${open ? "rotate-90" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m9 6 6 6-6 6" />
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
        className="flex items-center gap-1 rounded-md pr-2"
        style={{ paddingLeft: depth * 12 + 4 }}
      >
        {hasKids ? (
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "접기" : "펼치기"}
            className="rounded p-0.5 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            <Chevron open={open} />
          </button>
        ) : (
          <span className="w-5 shrink-0" />
        )}
        {node.slug ? (
          <Link
            to={`/${node.slug}`}
            className={`flex-1 truncate py-1.5 text-sm ${
              active
                ? "font-semibold text-indigo-600 dark:text-indigo-400"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            }`}
          >
            {node.title}
          </Link>
        ) : (
          <span className="flex-1 truncate py-1.5 text-sm font-medium text-slate-400 dark:text-slate-500">
            {node.title}
          </span>
        )}
      </div>
      {hasKids && open && (
        <div>
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
    <nav aria-label="문서 목차" className="py-4">
      {tree.slug && (
        <Link
          to={`/${tree.slug}`}
          className={`mb-2 block px-2 text-base font-bold ${
            currentSlug === tree.slug
              ? "text-indigo-600 dark:text-indigo-400"
              : "text-slate-900 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
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
