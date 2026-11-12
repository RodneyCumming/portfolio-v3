# Fox sprite

`public/images/fox-sprite.svg` is generated, not hand-edited.

- `sit.py` draws the sitting fox (`python3 sit.py fox-sit.svg`).
- `rig.py` builds the sprite sheet from a rigged fox: sit, a 12-frame gallop,
  crouch, leap and land, each 80×56 (`python3 rig.py ../../public/images/fox-sprite.svg fox-sit.svg`).

`src/components/Fox.astro` picks frames by index, so keep the order if you add frames.
