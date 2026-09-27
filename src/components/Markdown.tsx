import React, { useState, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import { rewriteHref, rewriteImgSrc } from "../lib/links";

/* ── 텍스트 추출 헬퍼 ───────────────────────────────── */
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

/* ── 마커 제거 헬퍼 ────────────────────────────────── */
function removeMarker(node: ReactNode, marker: string): ReactNode {
  let removed = false;
  const walk = (n: ReactNode): ReactNode =>
    React.Children.map(n, (c) => {
      if (removed) return c;
      if (typeof c === "string") {
        const i = c.indexOf(marker);
        if (i !== -1) {
          removed = true;
          return c.slice(i + marker.length).replace(/^\s*/, "");
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

/* ── Callout 설정 ──────────────────────────────────── */
type CalloutType = "note" | "warning" | "tip" | "important";

const CALLOUT_MAP: Record<string, { type: CalloutType; icon: string; label: string }> = {
  "[!NOTE]":      { type: "note",      icon: "💡", label: "참고" },
  "[!WARNING]":   { type: "warning",   icon: "⚠️", label: "주의" },
  "[!TIP]":       { type: "tip",       icon: "✅", label: "팁" },
  "[!IMPORTANT]": { type: "important", icon: "📌", label: "중요" },
};

function Blockquote({ children }: { children?: ReactNode }) {
  const raw = textOf(children).trimStart();

  for (const [marker, cfg] of Object.entries(CALLOUT_MAP)) {
    if (raw.startsWith(marker)) {
      return (
        <div className={`callout callout-${cfg.type}`}>
          <span className="callout-icon" aria-hidden="true">{cfg.icon}</span>
          <div className="callout-body">
            <div className="callout-label">{cfg.label}</div>
            <div>{removeMarker(children, marker)}</div>
          </div>
        </div>
      );
    }
  }
  return <blockquote>{children}</blockquote>;
}

/* ── 복사 버튼 ─────────────────────────────────────── */
function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback */
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`code-copy-btn ${copied ? "copied" : ""}`}
      aria-label="코드 복사"
      title="코드 복사"
    >
      {copied ? (
        <>
          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M2 8l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          복사됨
        </>
      ) : (
        <>
          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="5" y="5" width="9" height="9" rx="1.5" />
            <path d="M11 5V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2" />
          </svg>
          복사
        </>
      )}
    </button>
  );
}

/* ── 코드블록 ───────────────────────────────────────── */
function CodeBlock({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  // className 예: "language-js"
  const lang = className?.replace(/language-/, "") ?? "";
  const code = textOf(children);
  const hasLabel = lang.length > 0;

  // 언어 이름 매핑 (짧게 표시)
  const LANG_LABELS: Record<string, string> = {
    js: "JavaScript",
    javascript: "JavaScript",
    ts: "TypeScript",
    typescript: "TypeScript",
    jsx: "JSX",
    tsx: "TSX",
    html: "HTML",
    css: "CSS",
    json: "JSON",
    bash: "Bash",
    sh: "Shell",
    py: "Python",
    python: "Python",
    sql: "SQL",
    md: "Markdown",
    yaml: "YAML",
    xml: "XML",
  };
  const langLabel = LANG_LABELS[lang] ?? lang.toUpperCase();

  return (
    <div className={`code-block-wrapper ${hasLabel ? "has-label" : ""}`}>
      {hasLabel && (
        <span className="code-lang-label" aria-hidden="true">
          {langLabel}
        </span>
      )}
      <CopyButton code={code} />
      <pre className={className}>
        <code>{children}</code>
      </pre>
    </div>
  );
}



/* ── DocMarkdown ───────────────────────────────────── */
interface DocMarkdownProps {
  slug: string;
  source: string;
}

export function DocMarkdown({ slug, source }: DocMarkdownProps) {
  return (
    <div className="prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        components={{
          /* 링크 */
          a: ({ href, children }) => {
            const r = rewriteHref(href ?? "", slug);
            return r.external ? (
              <a href={r.href} target="_blank" rel="noopener noreferrer">
                {children}
                <svg
                  viewBox="0 0 12 12"
                  className="inline-block ml-0.5 mb-0.5 h-3 w-3 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M2 10L10 2M6 2h4v4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ) : (
              <a href={r.href}>{children}</a>
            );
          },

          /* 이미지 */
          img: ({ src, alt }) => (
            <img
              src={rewriteImgSrc(src ?? "", slug)}
              alt={alt ?? ""}
              loading="lazy"
              decoding="async"
            />
          ),

          /* 테이블 — 가로 스크롤 래퍼 */
          table: ({ children }) => (
            <div className="table-wrapper">
              <table>{children}</table>
            </div>
          ),

          /* Blockquote — callout 처리 */
          blockquote: Blockquote,

          /* pre — 코드블록 래퍼로 대체 */
          pre: ({ children }) => {
            // pre > code의 className을 찾아야 함
            const child = React.Children.toArray(children).find(
              (c) => React.isValidElement(c) && (c as React.ReactElement).type === "code",
            ) as React.ReactElement<{ className?: string; children?: ReactNode }> | undefined;

            const className = child?.props.className ?? "";
            return (
              <CodeBlock className={className}>{child?.props.children}</CodeBlock>
            );
          },

          /* 인라인 코드 — pre 안에 있는 code는 위에서 처리됨 */
          code: ({ className, children, ...props }) => {
            // inline code (pre 외부)
            const isInline = !className;
            if (isInline) {
              return <code {...props}>{children}</code>;
            }
            // block code — pre 컴포넌트에서 처리
            return <code className={className} {...props}>{children}</code>;
          },

          /* h2, h3 */
          h2: ({ id, children }) => (
            <h2 id={id}>
              {children}
            </h2>
          ),
          h3: ({ id, children }) => (
            <h3 id={id}>
              {children}
            </h3>
          ),
        }}
      >
        {source}
      </ReactMarkdown>
    </div>
  );
}
