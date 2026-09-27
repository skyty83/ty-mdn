/**
 * PWA 아이콘 생성 (의존성 없음 — Node 내장 zlib로 PNG 인코딩).
 * - public/favicon.svg
 * - public/icons/icon-192.png, icon-512.png, maskable-512.png, apple-touch-icon.png
 *
 * usage: node scripts/make-icons.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { deflateSync } from "node:zlib";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const publicDir = join(root, "public");
const iconsDir = join(publicDir, "icons");
mkdirSync(iconsDir, { recursive: true });

function crc32(buf) {
  let table = crc32.t;
  if (!table) {
    table = crc32.t = new Int32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      table[n] = c;
    }
  }
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const td = Buffer.from(type, "ascii");
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([td, data])));
  return Buffer.concat([len, td, data, crc]);
}

/** RGBA 픽셀 버퍼를 PNG로 인코딩 */
function encodePng(size, px) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type: RGBA
  const stride = 1 + size * 4;
  const raw = Buffer.alloc(size * stride);
  for (let y = 0; y < size; y++) {
    raw[y * stride] = 0; // filter: none
    px.copy(raw, y * stride + 1, y * size * 4, (y + 1) * size * 4);
  }
  return Buffer.concat([
    sig,
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw)),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function distToSeg(px, py, ax, ay, bx, by) {
  const dx = bx - ax;
  const dy = by - ay;
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)));
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}

// 흰색 "M" 글리프 (정규화 좌표)
const GLYPH = [
  [[0.22, 0.7], [0.22, 0.3]],
  [[0.22, 0.3], [0.5, 0.58]],
  [[0.5, 0.58], [0.78, 0.3]],
  [[0.78, 0.3], [0.78, 0.7]],
];

function draw(size, { maskable = false } = {}) {
  const BG = [30, 27, 75]; // indigo-950
  const FG = [255, 255, 255];
  const px = Buffer.alloc(size * size * 4);
  const radius = size * 0.225;
  const lw = size * 0.075;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const nx = (x + 0.5) / size;
      const ny = (y + 0.5) / size;
      let alpha = 255;
      if (!maskable) {
        const cx = Math.min(Math.max(nx * size, radius), size - radius) / size;
        const cy = Math.min(Math.max(ny * size, radius), size - radius) / size;
        if (Math.hypot(nx - cx, ny - cy) > radius / size) alpha = 0;
      }
      let d = Infinity;
      for (const [a, b] of GLYPH) d = Math.min(d, distToSeg(nx, ny, a[0], a[1], b[0], b[1]));
      const isFg = d < lw;
      const o = (y * size + x) * 4;
      const c = isFg ? FG : BG;
      px[o] = c[0];
      px[o + 1] = c[1];
      px[o + 2] = c[2];
      px[o + 3] = isFg ? 255 : alpha;
    }
  }
  return encodePng(size, px);
}

writeFileSync(join(iconsDir, "icon-192.png"), draw(192));
writeFileSync(join(iconsDir, "icon-512.png"), draw(512));
writeFileSync(join(iconsDir, "maskable-512.png"), draw(512, { maskable: true }));
writeFileSync(join(iconsDir, "apple-touch-icon.png"), draw(180));

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#1e1b4b"/>
  <path d="M14 45 V21 L32 38 L50 21 V45" stroke="#ffffff" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
writeFileSync(join(publicDir, "favicon.svg"), svg);

console.log("아이콘 생성 완료: favicon.svg, icons/*.png");
