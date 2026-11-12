"""Low-poly clouds for the hero sky.

Each cloud is a long, flat-bottomed bank cut into facets, in the same style
as the mountains. Light comes from above, so the upper facets are white and
the underside falls into a cool blue-grey.

    python3 scripts/hero/clouds.py   # writes public/images/cloud-a.svg, cloud-b.svg
"""
import math


def mix(a, b, t):
    return tuple(round(a[i] + (b[i] - a[i]) * t) for i in range(3))


def hexc(c):
    return '#%02x%02x%02x' % c


SHADOW = (199, 210, 222)
MID = (232, 238, 244)
LIT = (255, 255, 255)


def shade(tri, w, h):
    (x1, y1), (x2, y2), (x3, y3) = tri
    cx, cy = (x1 + x2 + x3) / 3, (y1 + y2 + y3) / 3
    tilt = math.atan2(y2 - y1, x2 - x1) - math.atan2(y3 - y1, x3 - x1)
    up = 1 - cy / h      # higher = lighter
    k = 0.25 + 0.75 * up + 0.12 * math.sin(tilt * 3.1 + cx * 0.05)
    k = max(0, min(1, k))
    base = mix(SHADOW, MID, min(1, k * 1.6)) if k < 0.62 else mix(MID, LIT, (k - 0.62) / 0.38)
    return hexc(base)


def zipper(a, b):
    """Triangulate the strip between two left-to-right polylines."""
    tris, i, j = [], 0, 0
    while i < len(a) - 1 or j < len(b) - 1:
        if j >= len(b) - 1 or (i < len(a) - 1 and a[i + 1][0] <= b[j + 1][0]):
            tris.append((a[i], a[i + 1], b[j]))
            i += 1
        else:
            tris.append((a[i], b[j + 1], b[j]))
            j += 1
    return tris


def cloud(top, inner, w, h):
    bottom = [(0, h)] + [(x, h) for x, _ in inner] + [(w, h)]
    inner = [top[0]] + inner + [top[-1]]
    tris = zipper(top, inner) + zipper(inner, bottom)
    polys = ''.join(
        '<polygon points="%s" fill="%s" stroke="%s" stroke-width=".6" stroke-linejoin="round"/>' % (
            ' '.join('%.1f,%.1f' % p for p in t), shade(t, w, h), shade(t, w, h))
        for t in tris)
    return ('<svg xmlns="http://www.w3.org/2000/svg" width="%d" height="%d" viewBox="0 0 %d %d">%s</svg>'
            % (w, h, w, h, polys))


# A: long bank, highest point right of centre
A_W, A_H = 260, 58
A_TOP = [(0, 58), (14, 47), (34, 42), (52, 33), (74, 30), (96, 19), (118, 14), (136, 4),
         (158, 7), (176, 17), (196, 20), (216, 32), (238, 40), (252, 49), (260, 58)]
A_IN = [(40, 52), (80, 45), (120, 36), (160, 34), (200, 42), (236, 52)]

# B: shorter, two humps
B_W, B_H = 220, 52
B_TOP = [(0, 52), (12, 42), (30, 36), (46, 22), (66, 14), (84, 18), (100, 28), (118, 24),
         (136, 10), (156, 6), (174, 15), (192, 28), (208, 40), (220, 52)]
B_IN = [(34, 46), (70, 36), (108, 40), (150, 30), (190, 42)]

for name, args in (('a', (A_TOP, A_IN, A_W, A_H)), ('b', (B_TOP, B_IN, B_W, B_H))):
    path = 'public/images/cloud-%s.svg' % name
    open(path, 'w').write(cloud(*args))
    print(path)
