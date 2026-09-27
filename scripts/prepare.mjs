/**
 * MDN 한국어 문서(md)를 PWA 프로젝트로 가져오는 준비 스크립트.
 * - ../mdn-ko-prototype/docs (읽기 전용)에서 정제된 index.md를 src/content로 복사
 * - 이미지 등 에셋은 public/content으로 복사 (빌드 시 그대로 서빙)
 * - frontmatter title을 읽어 src/contentIndex.ts (페이지 목록 + 사이드바 트리) 생성
 *
 * usage: node scripts/prepare.mjs
 */
import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
  rmSync,
  statSync,
} from "node:fs";
import { join, dirname, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const protoDocs = join(root, "..", "mdn-ko-prototype", "docs");
const contentDir = join(root, "src", "content");
const publicContentDir = join(root, "public", "content");

const SECTIONS = [
  { id: "javascript", title: "JavaScript" },
  { id: "api", title: "Web APIs" },
];

function* walkFiles(dir) {
  for (const e of readdirSync(dir)) {
    const full = join(dir, e);
    if (statSync(full).isDirectory()) yield* walkFiles(full);
    else yield full;
  }
}

function prettify(name) {
  return name.replace(/[-_]+/g, " ").trim() || name;
}

if (!existsSync(protoDocs)) {
  console.error(`원본 문서 폴더가 없습니다: ${protoDocs}`);
  process.exit(1);
}

rmSync(contentDir, { recursive: true, force: true });
rmSync(publicContentDir, { recursive: true, force: true });

/** slug -> { title, section, origSlug } */
const pages = {};
let assetCount = 0;

for (const sec of SECTIONS) {
  const srcDir = join(protoDocs, sec.id);
  if (!existsSync(srcDir)) {
    console.error(`섹션 폴더가 없습니다: ${srcDir}`);
    process.exit(1);
  }
  for (const full of walkFiles(srcDir)) {
    const rel = relative(srcDir, full);
    if (full.endsWith("index.md")) {
      const dest = join(contentDir, sec.id, rel);
      mkdirSync(dirname(dest), { recursive: true });
      cpSync(full, dest);
      const { data } = matter(readFileSync(full, "utf8"));
      const dirRel = dirname(rel);
      const slug =
        dirRel === "." ? sec.id : join(sec.id, dirRel).split(sep).join("/");
      pages[slug] = {
        title: String(data.title || slug),
        section: sec.id,
        origSlug: String(data.slug || ""),
      };
    } else {
      const dest = join(publicContentDir, sec.id, rel);
      mkdirSync(dirname(dest), { recursive: true });
      cpSync(full, dest);
      assetCount++;
    }
  }
}

function buildTree(sectionId) {
  const rootNode = { key: "", slug: null, title: "", children: [] };
  const slugs = Object.keys(pages)
    .filter((s) => s === sectionId || s.startsWith(sectionId + "/"))
    .sort();
  for (const slug of slugs) {
    const rest = slug === sectionId ? [] : slug.slice(sectionId.length + 1).split("/");
    let node = rootNode;
    for (let i = 0; i < rest.length; i++) {
      const key = rest[i];
      let child = node.children.find((c) => c.key === key);
      if (!child) {
        child = { key, slug: null, title: prettify(key), children: [] };
        node.children.push(child);
      }
      node = child;
      if (i === rest.length - 1) {
        node.slug = slug;
        node.title = pages[slug].title;
      }
    }
    if (rest.length === 0) {
      rootNode.slug = slug;
      rootNode.title = pages[slug].title;
    }
  }
  const clean = (n) => {
    n.children.sort((a, b) => a.title.localeCompare(b.title, "ko"));
    n.children.forEach(clean);
    delete n.key;
  };
  clean(rootNode);
  return rootNode;
}

const trees = {};
const sectionMeta = SECTIONS.map((sec) => {
  trees[sec.id] = buildTree(sec.id);
  const count = Object.keys(pages).filter((s) => pages[s].section === sec.id).length;
  return { id: sec.id, title: sec.title, count };
});

const ts =
  `// 자동 생성 파일 — scripts/prepare.mjs 로 다시 만들 수 있습니다. 직접 수정하지 마세요.\n` +
  `export interface PageMeta {\n  title: string;\n  section: string;\n  origSlug: string;\n}\n` +
  `export interface TreeNode {\n  slug: string | null;\n  title: string;\n  children: TreeNode[];\n}\n` +
  `export interface SectionMeta {\n  id: string;\n  title: string;\n  count: number;\n}\n` +
  `export const pages: Record<string, PageMeta> = ${JSON.stringify(pages)};\n` +
  `export const trees: Record<string, TreeNode> = ${JSON.stringify(trees)};\n` +
  `export const sectionMeta: SectionMeta[] = ${JSON.stringify(sectionMeta)};\n`;

writeFileSync(join(root, "src", "contentIndex.ts"), ts);

const total = Object.keys(pages).length;
console.log(`페이지 ${total}개 복사 (에셋 ${assetCount}개), src/contentIndex.ts 생성 완료`);
