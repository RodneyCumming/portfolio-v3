"""The fox mascot: every pose and the full sprite sheet, from one rig.

    python3 fox.py ../../public/images/fox-sprite.svg [preview.html]

Cells are 80x56, paws on the floor. Frame order (Fox.astro relies on it):

    0  sit            4  stand          22 leap (stretched)    25 lie down
    1  sit, blink     5  crouch         23 leap (tucked)       26 sleep
    2  sit, tail flick 6-21 gallop x16   24 land                27 sleep, breathe in
    3  sit, ear twitch

    (indices since grown: see the comments where cells are appended; 38
    settle, 39 look up, 40-44 curled up awake: head up, blink, look back,
    look up, half up; 45-54 in-betweens for the nap; 55-63 in-betweens for
    the backflip)

The sitting fox follows Rodney's reference (big clean facets, cream chest,
plum shadows). Moving poses reuse the same head on a rigged body: a shoulder
and hip that move per frame so the back gathers and stretches, two-segment
legs, a bushy tail that sways."""
import math, sys

OUT = sys.argv[1]
PREVIEW = sys.argv[2] if len(sys.argv) > 2 else None
CELL_W, CELL_H = 80, 56
FLOOR = CELL_H - 2

# ---------------------------------------------------------------- sitting fox
# (reference-style drawing; coordinates in its own 800x880 space, floor y=800)
SIT = [
    ([(318, 165), (398, 236), (342, 262)], '#f3cfa3'),   # 0 left ear
    ([(318, 165), (362, 200), (398, 236)], '#ec8a3f'),   # 1
    ([(488, 175), (440, 250), (472, 300)], '#e07a35'),   # 2 right ear
    ([(488, 175), (452, 232), (440, 250)], '#f6dcb8'),   # 3
    ([(488, 175), (472, 300), (480, 250)], '#c9582c'),   # 4
    ([(342, 262), (398, 236), (440, 250), (380, 300)], '#f7a548'),   # 5 head
    ([(440, 250), (472, 300), (380, 300)], '#f28c33'),
    ([(258, 350), (342, 262), (380, 300)], '#f69d3e'),
    ([(258, 350), (380, 300), (330, 362)], '#ec8432'),
    ([(380, 300), (472, 300), (468, 332), (330, 362)], '#e6772b'),
    ([(262, 368), (330, 362), (468, 332), (445, 385), (300, 382)], '#fbe6c4'),
    ([(300, 382), (445, 385), (420, 396), (330, 392)], '#e8c09a'),
    ([(250, 353), (266, 344), (268, 372)], '#5a2a3a'),   # 12 nose
    ([(330, 392), (420, 396), (372, 505)], '#f3cba5'),   # 13 neck/chest
    ([(330, 392), (372, 505), (320, 512)], '#ecbd96'),
    ([(420, 396), (445, 385), (470, 420), (372, 505)], '#d38a6a'),
    ([(445, 385), (468, 332), (505, 450), (470, 420)], '#e5702c'),
    ([(320, 512), (372, 505), (345, 640), (322, 640)], '#f0d0a8'),   # body
    ([(372, 505), (470, 420), (505, 450), (400, 640), (345, 640)], '#f08a2e'),
    ([(505, 450), (480, 620), (400, 640)], '#d9662c'),
    ([(505, 450), (640, 620), (480, 620)], '#e8662a'),
    ([(480, 620), (640, 620), (570, 700)], '#f7a447'),
    ([(570, 700), (640, 620), (632, 800)], '#d9502a'),
    ([(480, 620), (570, 700), (520, 800), (470, 760)], '#c0452a'),
    ([(570, 700), (632, 800), (520, 800)], '#ef7d2f'),
    ([(345, 640), (372, 640), (377, 800), (338, 800)], '#6b2a3a'),   # legs
    ([(395, 640), (480, 620), (470, 760), (420, 800), (388, 800)], '#c8462a'),
    ([(372, 505), (400, 640), (372, 640)], '#b5352a'),
    ([(420, 800), (470, 760), (520, 800)], '#7a3340'),
    ([(322, 640), (345, 640), (338, 800), (326, 800)], '#e9c09a'),
    ([(372, 640), (395, 640), (388, 800), (377, 800)], '#e6b994'),
    ([(326, 652), (265, 652), (250, 702), (324, 722)], '#f08a33'),   # 31 tail
    ([(265, 652), (150, 730), (250, 702)], '#fbe6c4'),
    ([(150, 730), (324, 746), (250, 702)], '#f1caa0'),
    ([(250, 702), (324, 722), (324, 746)], '#e6772b'),
]
EYE_OPEN = [(362, 314), (374, 306), (380, 310), (368, 318)]
EYE_SHUT = [(358, 313), (380, 309), (381, 312), (359, 316)]
HEAD = list(range(0, 13))
TAIL = list(range(31, 35))


def rot(p, c, deg):
    a = math.radians(deg)
    x, y = p[0] - c[0], p[1] - c[1]
    return (c[0] + x * math.cos(a) - y * math.sin(a), c[1] + x * math.sin(a) + y * math.cos(a))


def poly(pts, col, w=1.2):
    return '<polygon points="%s" fill="%s" stroke="%s" stroke-width="%s" stroke-linejoin="round"/>' % (
        ' '.join('%.1f,%.1f' % p for p in pts), col, col, w)


def sit_frame(blink=False, tail=0, ear=0, look=0):
    out = []
    neck = (420, 400)
    for i, (pts, col) in enumerate(SIT):
        if i in HEAD and look:
            pts = [rot(p, neck, look) for p in pts]
        if i in TAIL and tail:
            pts = [rot(p, (326, 700), tail) for p in pts]
        if i in (2, 3, 4) and ear:
            pts = [rot(p, (456, 280), ear) for p in pts]
        out.append(poly(pts, col, 1))
    eye = EYE_SHUT if blink else EYE_OPEN
    if look:
        eye = [rot(p, neck, look) for p in eye]
    out.append(poly(eye, '#2a1a20', 0.5))
    return out


def sit_head(anchor, scale, tilt=0, blink=False, ear=0):
    """The sitting fox's head, re-used on the moving fox. The head's jaw corner
    (440, 370) lands on `anchor`."""
    out = []
    for i in HEAD:
        pts, col = SIT[i]
        if i in (2, 3, 4) and ear:
            pts = [rot(p, (456, 280), ear) for p in pts]
        out.append(([(anchor[0] + (x - 440) * scale, anchor[1] + (y - 370) * scale) for x, y in pts], col))
    eye = EYE_SHUT if blink else EYE_OPEN
    out.append(([(anchor[0] + (x - 440) * scale, anchor[1] + (y - 370) * scale) for x, y in eye], '#2a1a20'))
    if tilt:
        out = [([rot(p, anchor, tilt) for p in pts], c) for pts, c in out]
    return out


# ---------------------------------------------------------------- moving fox
GROUND = 400
C = dict(
    back='#f7a447', side='#f08a2e', side2='#e8762c', belly='#c8462a', belly2='#b53d28',
    cream='#fbe6c4', cream2='#f1d0a8', chest='#f3cba5', dark='#5a2a3a',
    leg_n='#e9c09a', leg_n2='#d9a57e', leg_f='#7a3340', leg_f2='#5f2735',
    haunch='#c9502a', haunch2='#f29a44', thigh_f='#a8402a', light='#f9b25c',
    tail='#f08a33', tail2='#e0702c', tail3='#f7a447',
)


def leg(top, a_up, a_lo, l_up, l_lo, w_up, w_lo, col_up, col_lo):
    """Angles in degrees from straight down; positive swings backward (+x)."""
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
    pawp = [(paw[0] - 14, paw[1] + 2), (paw[0] + 6, paw[1] - 8), (paw[0] + 9, paw[1] + 3)]
    return [(up, col_up), (lo, col_lo), (pawp, C['dark'])], paw


def fox(F, R, head_dy, tail_deg, legs, head_tilt=0, blink=False):
    fx, fy = F
    rx, ry = R
    arch = max(0, 250 - (rx - fx)) * 0.35
    neck = (fx + 30, fy - 92)
    withers = (fx + 70, fy - 70 - arch * 0.5)
    mid = ((fx + rx) / 2, min(fy, ry) - 70 - arch)
    rump = (rx + 24, ry - 78 - arch * 0.3)
    tail_base = (rx + 46, ry - 64)
    chest_lo = (fx - 12, fy + 48)
    belly = ((fx + rx) / 2 - 30, max(fy, ry) + 22)
    groin = (rx - 34, ry + 2)
    thigh_b = (rx + 48, ry + 26)
    thigh_lo = (rx - 6, ry + 40)

    parts, paws = [], []
    for key, top, l_up, l_lo, w_up, w_lo, cu, cl in (
            ('ff', (fx + 14, fy + 14), 74, 70, 18, 12, C['leg_f2'], C['leg_f']),
            ('hf', (rx - 8, ry + 16), 80, 82, 30, 13, C['thigh_f'], C['leg_f2'])):
        lp, paw = leg(top, *legs[key], l_up, l_lo, w_up, w_lo, cu, cl)
        parts += lp
        paws.append(paw)

    tb = tail_base
    tail = [
        ([tb, (tb[0] + 120, tb[1] - 52), (tb[0] + 62, tb[1] + 40)], C['tail']),
        ([(tb[0] + 62, tb[1] + 40), (tb[0] + 120, tb[1] - 52), (tb[0] + 156, tb[1] + 2)], C['tail2']),
        ([tb, (tb[0] + 64, tb[1] - 50), (tb[0] + 120, tb[1] - 52)], C['tail3']),
        ([(tb[0] + 30, tb[1] + 22), (tb[0] + 62, tb[1] + 40), (tb[0] + 4, tb[1] + 18)], C['tail2']),
        ([(tb[0] + 120, tb[1] - 52), (tb[0] + 206, tb[1] - 38), (tb[0] + 156, tb[1] + 2)], C['cream']),
        ([(tb[0] + 156, tb[1] + 2), (tb[0] + 206, tb[1] - 38), (tb[0] + 184, tb[1] + 4)], C['cream2']),
    ]
    parts += [([rot(p, tb, tail_deg) for p in pts], c) for pts, c in tail]

    parts += [
        ([neck, withers, chest_lo], C['side']),
        ([withers, mid, belly, chest_lo], C['side']),
        ([withers, mid, (mid[0] - 30, mid[1] + 40)], C['back']),
        ([withers, (mid[0] - 30, mid[1] + 40), (fx + 20, fy + 20)], C['side2']),
        ([(mid[0] - 30, mid[1] + 40), (mid[0] + 10, mid[1] + 6), (mid[0] + 20, mid[1] + 50)], C['light']),
        ([mid, rump, groin, belly], C['side2']),
        ([mid, rump, (mid[0] + 40, mid[1] + 36)], C['back']),
        ([chest_lo, belly, (fx + 40, fy + 30)], C['belly']),
        ([belly, groin, (rx - 60, ry + 16)], C['belly2']),
        ([rump, tail_base, thigh_b], C['haunch2']),
        ([rump, thigh_b, thigh_lo, groin], C['side2']),
    ]

    for key, top, l_up, l_lo, w_up, w_lo, cu, cl in (
            ('hn', (rx + 8, ry + 8), 80, 84, 38, 14, C['haunch'], C['leg_n2']),
            ('fn', (fx + 2, fy + 12), 76, 72, 22, 13, C['cream2'], C['leg_n'])):
        lp, paw = leg(top, *legs[key], l_up, l_lo, w_up, w_lo, cu, cl)
        parts += lp
        paws.append(paw)

    parts += [
        ([(fx - 60, fy - 40), neck, (fx + 4, fy - 6), chest_lo], C['chest']),
        ([neck, withers, (fx + 4, fy - 6)], C['side2']),
    ]
    parts += sit_head((fx + 26, fy - 58 + head_dy), 0.62, head_tilt, blink)
    return parts, paws


def gallop(phi):
    """Rotary gallop at phase phi in [0, 1)."""
    off = dict(hn=0.0, hf=0.10, fn=0.50, ff=0.62)
    legs = {}
    for k, o in off.items():
        t = 2 * math.pi * (phi + o)
        u = math.cos(t)
        swing = max(0.0, -math.sin(t))
        if k[0] == 'f':
            a_up = 10 - 52 * u
            legs[k] = (a_up, a_up + 70 * swing - 6 * (1 - swing))
        else:
            a_up = 6 - 50 * u
            legs[k] = (a_up, a_up - 34 - 40 * swing)
    w = 2 * math.pi * phi
    # The spine gathers (hind legs reach under) and stretches (all legs out)
    c = 58 * math.cos(w + math.pi / 2)
    # The body rocks: forehand rises as the hind legs drive, then the rear
    pitch = 9 * math.sin(w + 0.6)
    F = (250 - c / 2, 262 - pitch)
    R = (510 + c / 2, 258 + pitch * 0.7)
    head_dy = 6 * math.sin(w) + pitch * 0.4
    # The tail streams out and swings against the body, a beat behind it
    tail = -10 + 15 * math.sin(w + 2.2)
    return dict(F=F, R=R, head_dy=head_dy, tail_deg=tail, legs=legs, head_tilt=-3 * math.sin(2 * math.pi * phi))


def moving(F, R, head_dy, tail_deg, legs, head_tilt=0, blink=False, lift_max=10, lift=0):
    parts, paws = fox(F, R, head_dy, tail_deg, legs, head_tilt, blink)
    low = max(p[1] for p in paws)
    dy = GROUND - low
    if dy < 0:
        dy = max(dy, -lift_max)
    return dy - lift, parts


# ---------------------------------------------------------------- sleeping fox
def sleep_frame(breathe=0.0, head=None):
    """Curled up nose-to-tail. breathe 0..1 swells the body slightly.
    head None rests it on the tail, asleep; otherwise a dict lifts it:
    up 0..1 (how far), tilt (degrees), blink, turn (1 looking ahead, -1
    looking back over the tail; in between the head swings round)."""
    cx, cy = 400, 318
    rx, ry = 220, 92 + 7 * breathe
    out = []
    # body mound: a fan of facets around the centre
    ring = []
    for k in range(13):
        a = math.pi + k / 12 * math.pi
        ring.append((cx + rx * math.cos(a), cy + ry * 1.25 * math.sin(a) * (1 if k else 0.4) + 20))
    shades = ['#e8762c', '#f08a2e', '#f7a447', '#f29a44', '#e8662a', '#f08a2e', '#f9b25c',
              '#e8762c', '#d9662c', '#f08a2e', '#e8662a', '#c9502a']
    top = (cx + 10, cy - ry * 0.4)
    for k in range(12):
        out.append(poly([top, ring[k], ring[k + 1]], shades[k]))
    out.append(poly([ring[0], ring[12], (cx + 180, cy + 76), (cx - 190, cy + 76)], '#c0452a'))
    # haunch bump
    out.append(poly([(cx + 70, cy - 92 - 7 * breathe), (cx + 214, cy + 14), (cx + 86, cy + 40)], '#e8662a'))
    out.append(poly([(cx + 70, cy - 92 - 7 * breathe), (cx + 86, cy + 40), (cx - 14, cy - 14)], '#f7a447'))
    # tail wrapped around the front, tip under the chin
    out += [
        poly([(cx + 214, cy + 40), (cx + 50, cy + 76), (cx - 70, cy + 74), (cx - 36, cy + 40)], '#f08a33'),
        poly([(cx + 214, cy + 40), (cx - 36, cy + 40), (cx + 70, cy + 20)], '#e0702c'),
        poly([(cx - 70, cy + 74), (cx - 210, cy + 62), (cx - 130, cy + 36), (cx - 36, cy + 40)], '#f7a447'),
        poly([(cx - 210, cy + 62), (cx - 250, cy + 38), (cx - 130, cy + 36)], '#fbe6c4'),
        poly([(cx - 210, cy + 62), (cx - 250, cy + 38), (cx - 262, cy + 64)], '#f1caa0'),
    ]
    if head is None:
        # head resting on the tail, eyes closed, tipped down
        hd = sit_head((cx - 70, cy + 14), 0.74, tilt=14, blink=True)
    else:
        # head lifted off the tail on its neck, awake
        up = head.get('up', 1)
        anchor = (cx - 70 + 26 * up, cy + 14 - 74 * up)
        tilt = 14 + (head.get('tilt', -4) - 14) * up
        hd = sit_head(anchor, 0.74, tilt=tilt, blink=head.get('blink', False))
        turn = head.get('turn', 1)
        if turn != 1:
            # turning to look back over the tail: the head narrows as it swings
            # round, then the same head faces the other way (mirrored)
            pivot = anchor[0] + 30
            hd = [([(pivot + (x - pivot) * turn, y) for x, y in pts], c) for pts, c in hd]
        # the neck, so the head isn't floating
        out.append(poly([(cx - 96, cy + 20), (anchor[0] - 10, anchor[1] + 6), (anchor[0] + 52, anchor[1] + 24),
                         (cx + 6, cy + 10)], '#f08a2e'))
        out.append(poly([(cx - 96, cy + 20), (anchor[0] - 10, anchor[1] + 6), (cx - 60, cy + 36)], '#fbe6c4'))
    out += [poly(p, c) for p, c in hd]
    return out


# ---------------------------------------------------------------- the sheet
RUN_SCALE = CELL_W / 760
# Same head size in every pose: the moving fox draws the head at 0.62
SIT_SCALE = RUN_SCALE * 0.62


def sit_cell(i, parts):
    w = 530 * SIT_SCALE
    return '<g transform="translate(%.2f %.2f) scale(%.4f) translate(-130 -150)">%s</g>' % (
        i * CELL_W + (CELL_W - w) / 2, FLOOR - 650 * SIT_SCALE, SIT_SCALE, ''.join(parts))


def run_cell(i, dy, parts):
    body = ''.join(poly(p, c) for p, c in parts) if parts and isinstance(parts[0], tuple) else ''.join(parts)
    return '<g transform="translate(%.2f %.2f) scale(%.4f) translate(-30 %.1f)">%s</g>' % (
        i * CELL_W, FLOOR - GROUND * RUN_SCALE, RUN_SCALE, dy, body)


cells = [
    sit_cell(0, sit_frame()),
    sit_cell(1, sit_frame(blink=True)),
    sit_cell(2, sit_frame(tail=-16)),
    sit_cell(3, sit_frame(ear=9)),
]
stand = moving((248, 252), (508, 250), -10, -10,
               dict(fn=(2, -2), ff=(6, 2), hn=(-6, -40), hf=(-2, -36)), head_tilt=-4)
cells.append(run_cell(4, *stand))
crouch = moving((262, 290), (488, 286), 10, -2, dict(fn=(-6, -4), ff=(4, 2), hn=(-30, -64), hf=(-24, -60)))
cells.append(run_cell(5, *crouch))
GALLOP_FRAMES = 24
for k in range(GALLOP_FRAMES):
    cells.append(run_cell(6 + k, *moving(**gallop(k / GALLOP_FRAMES))))
# Push-off: hind legs straighten behind, front legs fold up
push = moving((238, 256), (514, 266), -8, -10, dict(fn=(-40, 20), ff=(-34, 30), hn=(38, 30), hf=(30, 22)), head_tilt=-8,
              lift_max=0)
cells.append(run_cell(len(cells), push[0] - 8, push[1]))
leap = moving((222, 250), (540, 250), -6, -14, dict(fn=(-62, -70), ff=(-50, -56), hn=(62, 40), hf=(54, 30)), head_tilt=-6)
cells.append(run_cell(len(cells), leap[0] - 30, leap[1]))
tuck = moving((246, 250), (500, 250), -4, -18, dict(fn=(34, 96), ff=(42, 104), hn=(-34, -96), hf=(-26, -88)), lift_max=0)
cells.append(run_cell(len(cells), tuck[0] - 28, tuck[1]))
# Reach: front legs stretch down for the ground, hind legs still tucked
reach = moving((236, 262), (510, 246), 4, -12, dict(fn=(-24, -16), ff=(-14, -6), hn=(-20, -70), hf=(-12, -62)), head_tilt=4,
               lift_max=0)
cells.append(run_cell(len(cells), reach[0] - 10, reach[1]))
land = moving((244, 272), (514, 250), 12, -4, dict(fn=(-14, -10), ff=(-4, -2), hn=(40, 4), hf=(30, -6)), head_tilt=8)
cells.append(run_cell(len(cells), *land))
lie = moving((246, 318), (492, 312), 26, 6, dict(fn=(-74, -88), ff=(-66, -84), hn=(-54, -110), hf=(-48, -104)), head_tilt=10)
cells.append(run_cell(len(cells), *lie))
cells.append(run_cell(len(cells), 0, sleep_frame(0)))
cells.append(run_cell(len(cells), 0, sleep_frame(1)))

# Appended so earlier indices stay put
# Settle: arriving, the rear sinks toward a sit while the front stays up
settle = moving((250, 246), (492, 300), -14, 8, dict(fn=(2, -2), ff=(6, 2), hn=(-58, -128), hf=(-50, -120)), head_tilt=-6,
                lift_max=0)
cells.append(run_cell(len(cells), *settle))
# Look: sitting, head tipped up (watching the birds)
cells.append(sit_cell(len(cells), sit_frame(look=-14)))
# Curled up but awake (40-44): head up, blink, looking back over the tail,
# looking up, and half up (lifting or lowering it)
cells.append(run_cell(len(cells), 0, sleep_frame(0, dict(up=1))))
cells.append(run_cell(len(cells), 0, sleep_frame(0, dict(up=1, blink=True))))
cells.append(run_cell(len(cells), 0, sleep_frame(0, dict(up=1, turn=-1))))
cells.append(run_cell(len(cells), 0, sleep_frame(0, dict(up=1, tilt=-16))))
cells.append(run_cell(len(cells), 0, sleep_frame(0, dict(up=0.45, blink=True))))
# In-betweens for a smooth nap (45-54): lifting the head (45, 46 eyes still
# shut; 47, 48 open), swinging it round to look back (49, 50), tipping it up
# (51, 52), and two more breaths between sleep and breathe-in (53, 54)
for up, blink in ((0.15, True), (0.3, True), (0.65, False), (0.85, False)):
    cells.append(run_cell(len(cells), 0, sleep_frame(0, dict(up=up, blink=blink))))
for turn in (0.45, -0.45):
    cells.append(run_cell(len(cells), 0, sleep_frame(0, dict(up=1, turn=turn))))
for tilt in (-8, -12):
    cells.append(run_cell(len(cells), 0, sleep_frame(0, dict(up=1, tilt=tilt))))
for b in (0.33, 0.66):
    cells.append(run_cell(len(cells), 0, sleep_frame(b)))

# In-betweens for the backflip (55-63), blended from the jump poses above so
# the body moves smoothly between them: stand>crouch (55), crouch>push (56),
# push>leap (57), leap>tuck (58, 59), tuck>reach (60, 61), reach>land (62),
# land>stand (63)
JUMP = dict(
    stand=(dict(F=(248, 252), R=(508, 250), head_dy=-10, tail_deg=-10,
                legs=dict(fn=(2, -2), ff=(6, 2), hn=(-6, -40), hf=(-2, -36)), head_tilt=-4), 0),
    crouch=(dict(F=(262, 290), R=(488, 286), head_dy=10, tail_deg=-2,
                 legs=dict(fn=(-6, -4), ff=(4, 2), hn=(-30, -64), hf=(-24, -60))), 0),
    push=(dict(F=(238, 256), R=(514, 266), head_dy=-8, tail_deg=-10,
               legs=dict(fn=(-40, 20), ff=(-34, 30), hn=(38, 30), hf=(30, 22)), head_tilt=-8, lift_max=0), -8),
    leap=(dict(F=(222, 250), R=(540, 250), head_dy=-6, tail_deg=-14,
               legs=dict(fn=(-62, -70), ff=(-50, -56), hn=(62, 40), hf=(54, 30)), head_tilt=-6), -30),
    tuck=(dict(F=(246, 250), R=(500, 250), head_dy=-4, tail_deg=-18,
               legs=dict(fn=(34, 96), ff=(42, 104), hn=(-34, -96), hf=(-26, -88)), lift_max=0), -28),
    reach=(dict(F=(236, 262), R=(510, 246), head_dy=4, tail_deg=-12,
                legs=dict(fn=(-24, -16), ff=(-14, -6), hn=(-20, -70), hf=(-12, -62)), head_tilt=4, lift_max=0), -10),
    land=(dict(F=(244, 272), R=(514, 250), head_dy=12, tail_deg=-4,
               legs=dict(fn=(-14, -10), ff=(-4, -2), hn=(40, 4), hf=(30, -6)), head_tilt=8), 0),
)


def blend(a, b, k):
    """A pose part way (k) from jump pose a to b."""
    (pa, da), (pb, db) = JUMP[a], JUMP[b]
    mix = lambda x, y: x + (y - x) * k
    out = dict(
        F=(mix(pa['F'][0], pb['F'][0]), mix(pa['F'][1], pb['F'][1])),
        R=(mix(pa['R'][0], pb['R'][0]), mix(pa['R'][1], pb['R'][1])),
        head_dy=mix(pa['head_dy'], pb['head_dy']), tail_deg=mix(pa['tail_deg'], pb['tail_deg']),
        legs={key: (mix(pa['legs'][key][0], pb['legs'][key][0]), mix(pa['legs'][key][1], pb['legs'][key][1]))
              for key in pa['legs']},
        head_tilt=mix(pa.get('head_tilt', 0), pb.get('head_tilt', 0)),
        lift_max=mix(pa.get('lift_max', 10), pb.get('lift_max', 10)))
    dy, parts = moving(**out)
    return dy + mix(da, db), parts


for a, b, k in (('stand', 'crouch', 0.5), ('crouch', 'push', 0.5), ('push', 'leap', 0.5),
                ('leap', 'tuck', 0.33), ('leap', 'tuck', 0.66), ('tuck', 'reach', 0.33), ('tuck', 'reach', 0.66),
                ('reach', 'land', 0.5), ('land', 'stand', 0.5)):
    cells.append(run_cell(len(cells), *blend(a, b, k)))

N = len(cells)
W = CELL_W * N
open(OUT, 'w').write('<svg xmlns="http://www.w3.org/2000/svg" width="%d" height="%d" viewBox="0 0 %d %d">%s</svg>' % (
    W, CELL_H, W, CELL_H, ''.join(cells)))
print('frames', N, 'sheet', W, 'x', CELL_H)

if PREVIEW:
    tiles = ''.join(
        '<div style="position:relative;width:%dpx;height:%dpx;background:url(/images/fox-sprite.svg) -%dpx 0/%dpx %dpx;outline:1px solid #ffffff22">'
        '<span style="position:absolute;left:4px;top:2px;font:11px sans-serif;color:#fff8">%d</span></div>' % (
            CELL_W * 3, CELL_H * 3, i * CELL_W * 3, W * 3, CELL_H * 3, i) for i in range(N))
    open(PREVIEW, 'w').write('<!doctype html><body style="margin:0;background:#2b3245;padding:12px">'
                             '<div style="display:flex;flex-wrap:wrap;gap:6px">%s</div></body>' % tiles)
