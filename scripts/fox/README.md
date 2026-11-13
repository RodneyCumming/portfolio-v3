# Fox and birds

The sprites in `public/images` are generated, not hand-edited.

- `fox.py` draws every fox pose and builds `fox-sprite.svg` (40 frames, 80×56):
  sit and its idle moves (blink, tail flick, ear twitch), stand, crouch, a
  24-frame gallop with spine flex, a jump (push-off, stretched, tucked, reach), land, lie down, sleep
  (two breathing frames), then a settle-into-sit and a look-up added at the end.
  `python3 fox.py ../../public/images/fox-sprite.svg [preview.html]`
- `recolour.py` maps the sprite onto another palette, keeping its shading.
  The site uses the `shadow` palette (the dark front range), so after
  regenerating run:
  `python3 fox.py ../../public/images/fox-sprite.svg && python3 recolour.py ../../public/images/fox-sprite.svg ../../public/images/fox-sprite.svg shadow`
- `birds.py` builds `bird-sprite.svg` (8-frame wingbeat, 48×44).

`src/components/Fox.astro` picks fox frames by index; the order is listed at
the top of `fox.py`.
