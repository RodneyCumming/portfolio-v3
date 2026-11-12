"""Small geometric bird, flying left: 8-frame wing-flap sprite sheet.

Each cell is 48x44. In side view a wingbeat is mostly vertical, so the
wrist and tip sweep up and down through the stroke, the outer wing lagging
the inner one so it folds and whips rather than hinging stiffly; the body
lifts a little on each downstroke. Usage: python3 birds.py out.svg"""
import math, sys

OUT = sys.argv[1]
CW, CH = 48, 44
N = 8
NAVY = ['#2f3b52', '#3a4762', '#455572', '#26304a', '#52637f']


def rot(p, c, deg):
    a = math.radians(deg)
    x, y = p[0] - c[0], p[1] - c[1]
    return (c[0] + x * math.cos(a) - y * math.sin(a), c[1] + x * math.sin(a) + y * math.cos(a))


def poly(pts, col):
    return '<polygon points="%s" fill="%s" stroke="%s" stroke-width="0.4" stroke-linejoin="round"/>' % (
        ' '.join('%.2f,%.2f' % p for p in pts), col, col)


def frame(k):
    t = k / N * 2 * math.pi
    up_in = math.cos(t)                    # +1 wings fully up, -1 fully down
    up_out = math.cos(t - 0.8)             # outer wing lags, so it folds and sweeps
    bob = -1.8 * math.sin(t)               # body lifts on the downstroke
    by = 22 + bob
    sh = (21, by)
    out = []
    # far wing: a darker, shorter echo behind the body
    fe = (sh[0] + 3, by - 8 * up_in)
    ft = (fe[0] + 3, fe[1] - 8 * up_out)
    out.append(poly([sh, fe, ft, (sh[0] + 9, by)], NAVY[3]))
    # body: beak, head, back, belly, tail
    out += [
        poly([(3, by + 1), (8, by - 1), (8, by + 2)], NAVY[4]),
        poly([(8, by - 1), (14, by - 3), (15, by + 2), (8, by + 2)], NAVY[1]),
        poly([(14, by - 3), (30, by - 1), (15, by + 2)], NAVY[2]),
        poly([(15, by + 2), (30, by - 1), (28, by + 3)], NAVY[0]),
        poly([(28, by - 1), (42, by - 4), (39, by + 1), (29, by + 3)], NAVY[1]),
    ]
    # near wing: inner panel to the wrist, outer panel to the tip
    elbow = (sh[0] + 3, by - 10 * up_in)
    tip = (elbow[0] + 5, elbow[1] - 10 * up_out)
    trail = (elbow[0] + 10, elbow[1] - 3 * up_out)
    back = (sh[0] + 11, by)
    out.append(poly([sh, elbow, trail, back], NAVY[1]))
    out.append(poly([sh, elbow, back], NAVY[2]))
    out.append(poly([elbow, tip, trail], NAVY[4]))
    return ''.join(out)


cells = ''.join('<g transform="translate(%d 0)">%s</g>' % (i * CW, frame(i)) for i in range(N))
open(OUT, 'w').write('<svg xmlns="http://www.w3.org/2000/svg" width="%d" height="%d" viewBox="0 0 %d %d">%s</svg>' % (
    CW * N * 2, CH * 2, CW * N, CH, cells))
print('bird sheet', CW * N, 'x', CH)
