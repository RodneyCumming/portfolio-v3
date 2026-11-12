/*
  Morphing low-poly facets, painted by the browser (CSS Paint API).

  A jittered grid of points is triangulated; every point drifts on its own
  slow, smooth path, so the triangles themselves change shape, merge and
  stretch rather than a texture sliding underneath. Each facet's shade comes
  from a light sweeping across the name plus its own flicker.

  Inputs (custom properties):
    --facet-t  time in seconds (animated by CSS)
    --facet-s  scroll progress 0..1 (scroll-driven), speeds up the morph
*/
function rand(seed) {
  let s = seed >>> 0;
  return function () {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// The faceted cyan from the 2020 name texture, dark to light
const STOPS = [
  [0, 120, 146],
  [3, 156, 180],
  [0, 184, 216],
  [0, 199, 232],
  [64, 222, 245],
];

function shade(k) {
  k = Math.max(0, Math.min(0.9999, k)) * (STOPS.length - 1);
  const i = Math.floor(k);
  const f = k - i;
  const a = STOPS[i];
  const b = STOPS[i + 1];
  return `rgb(${a[0] + (b[0] - a[0]) * f | 0},${a[1] + (b[1] - a[1]) * f | 0},${a[2] + (b[2] - a[2]) * f | 0})`;
}

class Facets {
  static get inputProperties() {
    return ['--facet-t', '--facet-s'];
  }

  paint(ctx, size, props) {
    const t = parseFloat(props.get('--facet-t')) || 0;
    const s = parseFloat(props.get('--facet-s')) || 0;
    const time = t + s * 14;
    const cell = Math.max(30, Math.min(62, size.height * 0.6));
    const cols = Math.ceil(size.width / cell) + 2;
    const rows = Math.ceil(size.height / cell) + 2;
    const r = rand(7);

    // Points: jittered grid, each with its own drift
    const pts = [];
    for (let j = 0; j <= rows; j++) {
      for (let i = 0; i <= cols; i++) {
        const bx = (i - 1 + (r() - 0.5) * 0.7) * cell;
        const by = (j - 1 + (r() - 0.5) * 0.7) * cell;
        const p1 = r() * 6.283, p2 = r() * 6.283, p3 = r() * 6.283, p4 = r() * 6.283;
        const w1 = 0.35 + r() * 0.45, w2 = 0.25 + r() * 0.4;
        const amp = cell * (0.32 + r() * 0.2);
        const x = bx + amp * (Math.sin(time * w1 + p1) * 0.7 + Math.sin(time * w2 * 1.7 + p3) * 0.3);
        const y = by + amp * (Math.cos(time * w2 + p2) * 0.7 + Math.sin(time * w1 * 1.3 + p4) * 0.3);
        pts.push([x, y]);
      }
    }

    // Base fill so no seams show between facets
    ctx.fillStyle = shade(0.55);
    ctx.fillRect(0, 0, size.width, size.height);

    const at = (i, j) => pts[j * (cols + 1) + i];
    const sweep = time * 0.18;
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const a = at(i, j), b = at(i + 1, j), c = at(i, j + 1), d = at(i + 1, j + 1);
        const flip = (i + j) % 2 === 0;
        const tris = flip ? [[a, b, d], [a, d, c]] : [[a, b, c], [b, d, c]];
        for (let n = 0; n < 2; n++) {
          const [p, q, u] = tris[n];
          const cx = (p[0] + q[0] + u[0]) / 3;
          const cy = (p[1] + q[1] + u[1]) / 3;
          // Facet orientation decides how much light it catches
          const nx = (q[1] - p[1]) * (u[0] - p[0]) - (q[0] - p[0]) * (u[1] - p[1]);
          const tilt = Math.sin(nx * 0.0009 + i * 1.7 + j * 2.3 + n * 4.1);
          const light =
            0.62 -
            (cy / size.height) * 0.42 +
            0.2 * Math.sin(cx * 0.006 - sweep * 6.283) +
            0.2 * tilt;
          ctx.fillStyle = shade(light);
          ctx.beginPath();
          ctx.moveTo(p[0], p[1]);
          ctx.lineTo(q[0], q[1]);
          ctx.lineTo(u[0], u[1]);
          ctx.closePath();
          ctx.fill();
          ctx.strokeStyle = ctx.fillStyle;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }
}

registerPaint('facets', Facets);
