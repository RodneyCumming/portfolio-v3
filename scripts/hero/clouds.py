"""Low-poly clouds for the hero sky.

Each cloud is a few overlapping round lobes on a flat base, every lobe cut
into facets like a low-poly sphere seen side on. Light comes from the upper
right, where the warm glow sits: facets turned toward it are white with a
hint of warmth, those turned away fall into a soft cool grey.

    python3 scripts/hero/clouds.py   # writes public/images/cloud-a.svg, cloud-b.svg
"""
import math

LX, LY = 0.6, -0.8  # toward the light (right and up)

LIT = (255, 255, 255)
WARM = (255, 247, 236)
MID = (236, 242, 247)
SHADOW = (211, 222, 233)


def mix(a, b, t):
    t = max(0.0, min(1.0, t))
    return tuple(round(a[i] + (b[i] - a[i]) * t) for i in range(3))


def colour(k, warm):
    c = mix(SHADOW, MID, k / 0.5) if k < 0.5 else mix(MID, LIT, (k - 0.5) / 0.5)
    return '#%02x%02x%02x' % mix(c, WARM, warm * max(0, k - 0.55) / 0.45)


def poly(pts, fill):
    return '<polygon points="%s" fill="%s" stroke="%s" stroke-width=".5" stroke-linejoin="round"/>' % (
        ' '.join('%.1f,%.1f' % p for p in pts), fill, fill)


def cloud(lobes, w, h):
    """lobes: (cx, r, segments), drawn back to front; base at y = h."""
    out = []
    for cx, r, seg in lobes:
        cy = h - r * 0.55               # sits on the base, partly sunk
        hub = (cx + r * 0.12, cy + r * 0.18)  # off-centre hub: facets of different sizes
        # Upper arc only, from the base on the left round to the base on the right
        a0 = math.pi - math.asin(min(1, (h - cy) / r))
        a1 = 2 * math.pi + math.asin(min(1, (h - cy) / r))
        pts = []
        for i in range(seg + 1):
            a = a0 + (a1 - a0) * i / seg
            # small jitter so lobes aren't perfect polygons
            j = 1 + 0.06 * math.sin(i * 2.7 + cx)
            pts.append((cx + math.cos(a) * r * j, min(h, cy + math.sin(a) * r * j)))
        for i in range(seg):
            p, q = pts[i], pts[i + 1]
            mx, my = (p[0] + q[0]) / 2 - cx, (p[1] + q[1]) / 2 - cy
            n = math.hypot(mx, my) or 1
            k = 0.5 + 0.5 * (mx / n * LX + my / n * LY)       # facing the light
            k = 0.15 + 0.85 * k
            out.append(poly([hub, p, q], colour(k, cx / w)))
        # underside of the lobe, down to the base
        out.append(poly([pts[0], hub, pts[-1], (pts[-1][0], h), (pts[0][0], h)], colour(0.32, 0)))
    # flat base shadow
    out.append(poly([(lobes[0][0] - lobes[0][1] * 0.8, h - 3), (lobes[-1][0] + lobes[-1][1] * 0.8, h - 3),
                     (lobes[-1][0] + lobes[-1][1] * 0.75, h), (lobes[0][0] - lobes[0][1] * 0.75, h)],
                    colour(0.18, 0)))
    return ('<svg xmlns="http://www.w3.org/2000/svg" width="%d" height="%d" viewBox="0 0 %d %d">%s</svg>'
            % (w, h, w, h, ''.join(out)))


# Lobes listed back to front: big middle ones first, small edge ones last
# One dominant dome with a few smaller lobes either side
A = ([(130, 40, 10), (84, 27, 8), (178, 29, 8), (44, 17, 6), (216, 17, 6)], 240, 64)
B = ([(92, 31, 9), (138, 23, 7), (54, 19, 6), (174, 14, 5)], 196, 52)

for name, (lobes, w, h) in (('a', A), ('b', B)):
    path = 'public/images/cloud-%s.svg' % name
    open(path, 'w').write(cloud(lobes, w, h))
    print(path)
