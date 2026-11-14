"""Recolour the fox sprite into another palette, keeping its shading.

Every fill is mapped by lightness onto a ramp: warm, saturated colours (the
orange coat) onto the coat ramp, pale low-saturation ones (chest, tail tip)
onto the light ramp, very dark ones (paws, eyes) onto the dark ramp.

    python3 scripts/fox/recolour.py in.svg out.svg slate
"""
import colorsys, re, sys

PALETTES = {
    # The back and middle ranges: blue slate, with snow for the cream parts
    'slate': dict(coat=['#3b4462', '#4a5576', '#5a6889', '#6c7b9e', '#8291b4'],
                  light=['#b9c3da', '#d6dcea', '#eef2f8'], dark=['#232838', '#2c3346']),
    # The dark front range: nearly a silhouette, picked out by its facets
    'shadow': dict(coat=['#272d3f', '#2f3649', '#383f56', '#424a63', '#4e5772'],
                   light=['#69739a', '#8790b2', '#a3acc8'], dark=['#191d29', '#202533']),
    # The snowy peaks: pale grey-blue with white
    'snow': dict(coat=['#6c7898', '#8290b0', '#9aa7c4', '#b2bdd6', '#c8d1e4'],
                 light=['#dfe5f0', '#eef2f8', '#ffffff'], dark=['#3a4258', '#4a5370']),
}


def hexrgb(h):
    h = h.lstrip('#')
    if len(h) == 3:
        h = ''.join(c * 2 for c in h)
    return tuple(int(h[i:i + 2], 16) / 255 for i in (0, 2, 4))


def pick(ramp, t):
    t = max(0.0, min(0.9999, t))
    return ramp[int(t * len(ramp))]


def recolour(hexcol, pal):
    r, g, b = hexrgb(hexcol)
    h, l, s = colorsys.rgb_to_hls(r, g, b)
    if l < 0.28:
        return pick(pal['dark'], l / 0.28)
    if l > 0.72 and s < 0.85 or (s < 0.35 and l > 0.55):
        return pick(pal['light'], (l - 0.55) / 0.45)
    return pick(pal['coat'], (l - 0.28) / 0.5)


def main(src, dst, name):
    pal = PALETTES[name]
    svg = open(src).read()
    svg = re.sub(r'#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b', lambda m: recolour(m.group(0), pal), svg)
    open(dst, 'w').write(svg)


if __name__ == '__main__':
    main(*sys.argv[1:4])
