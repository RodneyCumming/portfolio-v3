"""Rigged geometric fox (facing left). Produces the run-cycle sprite sheet:
[sit, gallop x12, crouch, leap, land], each cell 80x56, paws on the cell floor.

The body is built from two anchors (shoulder, hip) that move per frame, so the
back gathers and stretches through the stride. Legs are two segments with a
knee/hock, angled by the gallop phase. Each frame is dropped so the lowest paw
touches the ground, except during the suspension where he may lift a little."""
import math, re, sys

OUT, SIT_SVG = sys.argv[1], open(sys.argv[2]).read()
PREVIEW = sys.argv[3] if len(sys.argv) > 3 else None
CELL_W, CELL_H = 80, 56
GROUND = 400
FLOOR = CELL_H - 2  # paws stop just above the cell edge

C = dict(
    back='#f7a447', side='#f08a2e', side2='#e8762c', belly='#c8462a', belly2='#b53d28',
    cream='#fbe6c4', cream2='#f1d0a8', chest='#f3cba5', ear_in='#f6dcb8', dark='#5a2a3a',
    leg_n='#e9c09a', leg_n2='#d9a57e', leg_f='#7a3340', leg_f2='#5f2735', thigh='#e2662a', thigh_f='#a8402a',
    haunch='#c9502a', haunch2='#f29a44',
    tail='#f08a33', tail2='#e0702c', tail3='#f7a447', head='#f69d3e', head2='#f28c33', head3='#ec8432',
    head4='#e6772b', ear='#ec8a3f', ear2='#c9582c', eye='#2a1a20',
)


def rot(p, c, deg):
    a = math.radians(deg)
    x, y = p[0] - c[0], p[1] - c[1]
    return (c[0] + x * math.cos(a) - y * math.sin(a), c[1] + x * math.sin(a) + y * math.cos(a))


def P(pts, col):
    return (pts, col)


def leg(top, a_up, a_lo, l_up, l_lo, w_up, w_lo, col_up, col_lo):
    """a_* in degrees from straight down; positive swings backward (+x)."""
    ka = math.radians(a_up)
    knee = (top[0] + l_up * math.sin(ka), top[1] + l_up * math.cos(ka))
    la = math.radians(a_lo)
    paw = (knee[0] + l_lo * math.sin(la), knee[1] + l_lo * math.cos(la))
    nx, ny = math.cos(ka), -math.sin(ka)
    up = [(top[0] - nx * w_up, top[1] - ny * w_up), (top[0] + nx * w_up, top[1] + ny * w_up),
          (knee[0] + nx * w_lo, knee[1] + ny * w_lo), (knee[0] - nx * w_lo, knee[1] - ny * w_lo)]
    mx, my = math.cos(la), -math.sin(la)
    lo = [(knee[0] - mx * w_lo, knee[1] - my * w_lo), (knee[0] + mx * w_lo, knee[1] + my * w_lo),
          (paw[0] + mx * w_lo * 0.6, paw[1] + my * w_lo * 0.6), (paw[0] - mx * w_lo * 0.6, paw[1] - my * w_lo * 0.6)]
    pawp = [(paw[0] - 13, paw[1] + 2), (paw[0] + 6, paw[1] - 7), (paw[0] + 8, paw[1] + 3)]
    return [P(up, col_up), P(lo, col_lo), P(pawp, C['dark'])], paw


def fox(F, R, head_dy, tail_deg, legs, crouch=0):
    """F shoulder, R hip anchors. legs = dict of (a_up, a_lo) for fn, ff, hn, hf."""
    fx, fy = F
    rx, ry = R
    arch = max(0, 250 - (rx - fx)) * 0.35  # gathered back arches up
    neck = (fx + 30, fy - 92)
    withers = (fx + 70, fy - 70 - arch * 0.5)
    mid = ((fx + rx) / 2, min(fy, ry) - 70 - arch)
    rump = (rx + 24, ry - 78 - arch * 0.3)
    tail_base = (rx + 46, ry - 64)
    chest_lo = (fx - 12, fy + 48)          # deep chest
    belly = ((fx + rx) / 2 - 30, max(fy, ry) + 22)
    groin = (rx - 34, ry + 2)              # tucked waist
    thigh_b = (rx + 48, ry + 26)
    thigh_lo = (rx - 6, ry + 40)

    parts, paws = [], []
    # far legs (behind body)
    for key, top, l_up, l_lo, w_up, w_lo, cu, cl in (
            ('ff', (fx + 14, fy + 14), 74, 70, 16, 10, C['leg_f2'], C['leg_f']),
            ('hf', (rx - 8, ry + 16), 80, 82, 28, 11, C['thigh_f'], C['leg_f2'])):
        a_up, a_lo = legs[key]
        lp, paw = leg(top, a_up, a_lo, l_up, l_lo, w_up, w_lo, cu, cl)
        parts += lp
        paws.append(paw)

    # tail (behind body), rotated about its base
    tail = [
        P([tail_base, (tail_base[0] + 130, tail_base[1] - 40), (tail_base[0] + 60, tail_base[1] + 40)], C['tail']),
        P([(tail_base[0] + 60, tail_base[1] + 40), (tail_base[0] + 130, tail_base[1] - 40), (tail_base[0] + 150, tail_base[1] + 4)], C['tail2']),
        P([tail_base, (tail_base[0] + 70, tail_base[1] - 44), (tail_base[0] + 130, tail_base[1] - 40)], C['tail3']),
        P([(tail_base[0] + 130, tail_base[1] - 40), (tail_base[0] + 200, tail_base[1] - 34), (tail_base[0] + 150, tail_base[1] + 4)], C['cream']),
        P([(tail_base[0] + 150, tail_base[1] + 4), (tail_base[0] + 200, tail_base[1] - 34), (tail_base[0] + 176, tail_base[1] + 2)], C['cream2']),
    ]
    parts += [P([rot(p, tail_base, tail_deg) for p in pts], c) for pts, c in tail]

    # torso facets
    parts += [
        P([neck, withers, chest_lo], C['side']),
        P([withers, mid, belly, chest_lo], C['side']),
        P([withers, mid, (mid[0] - 30, mid[1] + 40)], C['back']),
        P([withers, (mid[0] - 30, mid[1] + 40), (fx + 20, fy + 20)], C['side2']),
        P([mid, rump, groin, belly], C['side2']),
        P([mid, rump, (mid[0] + 40, mid[1] + 36)], C['back']),
        P([chest_lo, belly, (fx + 40, fy + 30)], C['belly']),
        P([belly, groin, (rx - 60, ry + 16)], C['belly2']),
        P([rump, tail_base, thigh_b], C['haunch2']),
        P([rump, thigh_b, thigh_lo, groin], C['side2']),
    ]

    # near legs (in front of body)
    for key, top, l_up, l_lo, w_up, w_lo, cu, cl in (
            ('hn', (rx + 8, ry + 8), 80, 84, 36, 12, C['haunch'], C['leg_n2']),
            ('fn', (fx + 2, fy + 12), 76, 72, 20, 11, C['cream2'], C['leg_n'])):
        a_up, a_lo = legs[key]
        lp, paw = leg(top, a_up, a_lo, l_up, l_lo, w_up, w_lo, cu, cl)
        parts += lp
        paws.append(paw)

    # neck ruff + chest
    parts += [
        P([(fx - 70, fy - 46), neck, (fx + 4, fy - 6), chest_lo], C['chest']),
        P([neck, withers, (fx + 4, fy - 6)], C['side2']),
    ]

    # head, translated with the shoulder and bobbing
    hx, hy = fx - 250, fy - 260 + head_dy
    head = [
        P([(170, 58), (150, 132), (202, 120)], C['cream2']),
        P([(170, 58), (186, 96), (202, 120)], C['ear']),
        P([(226, 74), (206, 126), (250, 150)], C['ear2']),
        P([(226, 74), (213, 110), (206, 126)], C['ear_in']),
        P([(60, 170), (150, 132), (160, 176)], C['head']),
        P([(150, 132), (202, 120), (250, 150), (160, 176)], C['head2']),
        P([(60, 170), (160, 176), (120, 212)], C['head3']),
        P([(160, 176), (250, 150), (246, 196)], C['head4']),
        P([(66, 183), (160, 178), (246, 196), (226, 222), (122, 222)], C['cream']),
        P([(52, 168), (66, 162), (68, 183)], C['dark']),
    ]
    parts += [P([(x + hx, y + hy) for x, y in pts], c) for pts, c in head]
    eye = [(132 + hx, 156 + hy), (144 + hx, 148 + hy), (150 + hx, 152 + hy), (138 + hx, 160 + hy)]
    parts.append(P(eye, C['eye']))
    return parts, paws


def gallop(phi):
    """One frame of a rotary gallop at phase phi in [0,1)."""
    off = dict(hn=0.0, hf=0.10, fn=0.50, ff=0.62)
    legs = {}
    for k, o in off.items():
        t = 2 * math.pi * (phi + o)
        u = math.cos(t)          # +1 reaching forward, -1 pushed back
        swing = max(0.0, -math.sin(t))  # recovering forward: fold the leg
        if k[0] == 'f':
            a_up = 10 - 52 * u
            a_lo = a_up + 70 * swing - 6 * (1 - swing)
        else:
            a_up = 6 - 50 * u
            a_lo = a_up - 34 - 40 * swing
        legs[k] = (a_up, a_lo)
    c = 34 * math.cos(2 * math.pi * (phi + 0.25))  # spine stretch
    F = (250 - c / 2, 262)
    R = (510 + c / 2, 258)
    head_dy = 8 * math.sin(2 * math.pi * phi)
    tail = -6 + 8 * math.sin(2 * math.pi * (phi + 0.3))
    return F, R, head_dy, tail, legs


def frame_svg(parts, paws, lift_max=10):
    low = max(p[1] for p in paws)
    dy = GROUND - low
    dy = max(dy, -lift_max) if dy < 0 else min(dy, 999)
    return dy, ''.join('<polygon points="%s" fill="%s" stroke="%s" stroke-width="1.2" stroke-linejoin="round"/>' % (
        ' '.join('%.1f,%.1f' % (x, y) for x, y in pts), c, c) for pts, c in parts)


frames = []
for i in range(12):
    parts, paws = fox(*gallop(i / 12))
    frames.append(frame_svg(parts, paws))
# crouch: gathered, low, ready to go
parts, paws = fox((262, 290), (488, 286), 10, -2, dict(fn=(-6, -4), ff=(4, 2), hn=(-30, -64), hf=(-24, -60)))
frames.append(frame_svg(parts, paws))
# leap: fully stretched, legs reaching fore and aft
parts, paws = fox((222, 250), (540, 250), -6, -14, dict(fn=(-62, -70), ff=(-50, -56), hn=(62, 40), hf=(54, 30)))
leap = frame_svg(parts, paws)
frames.append((leap[0] - 30, leap[1]))
# land: front paws down, hind tucked
parts, paws = fox((244, 272), (514, 250), 12, -4, dict(fn=(-14, -10), ff=(-4, -2), hn=(40, 4), hf=(30, -6)))
frames.append(frame_svg(parts, paws))

# Source box for run frames: x 20..760, ground at GROUND. Scale to the cell.
SRC_W = 760
s = CELL_W / SRC_W
cells = []
sit_inner = re.sub(r'^<svg[^>]*>|</svg>$', '', SIT_SVG)
ss = (CELL_H - 2) / 652
cells.append('<g transform="translate(%.2f %.2f) scale(%.4f) translate(-130 -150)">%s</g>' % (
    (CELL_W - 530 * ss) / 2, CELL_H - 652 * ss, ss, sit_inner))
for i, (dy, body) in enumerate(frames):
    x0 = (i + 1) * CELL_W
    cells.append('<g transform="translate(%.2f %.2f) scale(%.4f) translate(-20 %.1f)">%s</g>' % (
        x0, FLOOR - GROUND * s, s, dy, body))
N = len(cells)
W = CELL_W * N
svg = '<svg xmlns="http://www.w3.org/2000/svg" width="%d" height="%d" viewBox="0 0 %d %d">%s</svg>' % (W, CELL_H, W, CELL_H, ''.join(cells))
open(OUT, 'w').write(svg)
print('frames', N, 'sheet', W, 'x', CELL_H)
if PREVIEW:
    open(PREVIEW, 'w').write('<!doctype html><body style="margin:0;background:#2b3245;padding:16px">'
                             '<div style="display:flex;flex-wrap:wrap;gap:8px">%s</div></body>' % ''.join(
                                 '<div style="width:%dpx;height:%dpx;background:url(/images/fox-sprite.svg) -%dpx 0/%dpx %dpx;outline:1px solid #ffffff22"></div>' % (
                                     CELL_W * 4, CELL_H * 4, i * CELL_W * 4, W * 4, CELL_H * 4) for i in range(N)))
