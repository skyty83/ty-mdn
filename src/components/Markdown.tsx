import React, { type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import { rewriteHref, rewriteImgSrc } from "../lib/links";

function textOf(node: ReactNode): string {
  let s = "";
  React.Children.forEach(node, (c) => {
    if (typeof c === "string" || typeof c === "number") s += String(c);
    else if (React.isValidElement(c)) {
      const props = c.props as { children?: ReactNode };
      s += textOf(props.children);
    }
  });
  return s;
}

/** "[!NOTE]" 마커를 children에서 제거 */
function removeNoteMarker(node: ReactNode): ReactNode {
  let removed = false;
  const walk = (n: ReactNode): ReactNode =>
    React.Children.map(n, (c) => {
      if (removed) return c;
      if (typeof c === "string") {
        const i = c.indexOf("[!NOTE]");
        if (i !== -1) {
          removed = true;
          return c.slice(i + "[!NOTE]".length).replace(/^\s*/, "");
        }
        return c;
      }
      if (React.isValidElement(c)) {
        const props = c.props as { children?: ReactNode };
        if (props.children != null) {
          return React.cloneElement(c as React.ReactElement<Record<string, unknown>>, {
            children: walk(props.children),
          });
        }
      }
      return c;
    });
  return walk(node);
}

function Blockquote({ children }: { children?: ReactNode }) {
  if (textOf(children).trimStart().startsWith("[!NOTE]")) {
    return (
      <div className="my-4 rounded-lg border-l-4 border-indigo-500 bg-indigo-50 px-4 py-3 dark:border-indigo-400 dark:bg-indigo-950/50">
        <p className="mb-1 text-sm font-bold text-indigo-700 dark:text-indigo-300">참고</p>
        <div className="[&>p]:my-1">{removeNoteMarker(children)}</div>
      </div>
    );
  }
  return <blockquote>{children}</blockquote>;
}

interface DocMarkdownProps {
  slug: string;
  source: string;
}

/** MDN 문서 마크다운 렌더러 (내부 링크 재작성 + 이미지 경로 변환 + NOTE 콜아웃) */
export function DocMarkdown({ slug, source }: DocMarkdownProps) {
  return (
    <div className="prose prose-slate max-w-none dark:prose-invert prose-pre:bg-slate-900 dark:prose-pre:bg-black/60">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        components={{
          a: ({ href, children }) => {
            const r = rewriteHref(href ?? "", slug);
            return r.external ? (
              <a href={r.href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ) : (
              <a href={r.href}>{children}</a>
            );
          },
          img: ({ src, alt }) => (
            <img src={rewriteImgSrc(src ?? "", slug)} alt={alt ?? ""} loading="lazy" />
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto">
              <table>{children}</table>
            </div>
          ),
          blockquote: Blockquote,
        }}
      >
        {source}
      </ReactMarkdown>
    </div>
  );
}
