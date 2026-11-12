# Fox and birds

The sprites in `public/images` are generated, not hand-edited.

- `fox.py` draws every fox pose and builds `fox-sprite.svg` (40 frames, 80×56):
  sit and its idle moves (blink, tail flick, ear twitch), stand, crouch, a
  24-frame gallop with spine flex, a jump (push-off, stretched, tucked, reach), land, lie down, sleep
  (two breathing frames), then a settle-into-sit and a look-up added at the end.
  `python3 fox.py ../../public/images/fox-sprite.svg [preview.html]`
- `birds.py` builds `bird-sprite.svg` (8-frame wingbeat, 48×44).

`src/components/Fox.astro` picks fox frames by index; the order is listed at
the top of `fox.py`.
