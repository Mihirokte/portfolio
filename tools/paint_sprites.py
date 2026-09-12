#!/usr/bin/env python3
"""Pond sprites, Nine Sols cel grammar: flat fills, hard two-tone shading,
bold uniform ink outlines, zero blur. Body + tail split for 2-part rigging.
Fish reads like the game's protagonist: bone-cream face, mustard body."""
import math
import os
from PIL import Image, ImageDraw

SS = 4
INK = (12, 14, 11, 255)
FISH = (232, 163, 29, 255)
FISH_SHADE = (183, 118, 12, 255)
BELLY = (245, 214, 138, 255)
BONE = (236, 227, 200, 255)
BONE_SHADE = (208, 196, 162, 255)

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "assets")
os.makedirs(OUT, exist_ok=True)


def canvas(w, h):
    img = Image.new("RGBA", (w * SS, h * SS), (0, 0, 0, 0))
    return img, ImageDraw.Draw(img)


def save(img, name, w, h):
    img = img.resize((w, h), Image.LANCZOS)
    img.save(os.path.join(OUT, name))
    print("wrote", os.path.join(OUT, name))


def bez(pts, n=40):
    """Sample a quadratic or cubic bezier."""
    out = []
    for i in range(n + 1):
        t = i / n
        if len(pts) == 3:
            p0, p1, p2 = pts
            x = (1 - t) ** 2 * p0[0] + 2 * (1 - t) * t * p1[0] + t ** 2 * p2[0]
            y = (1 - t) ** 2 * p0[1] + 2 * (1 - t) * t * p1[1] + t ** 2 * p2[1]
        else:
            p0, p1, p2, p3 = pts
            x = ((1 - t) ** 3 * p0[0] + 3 * (1 - t) ** 2 * t * p1[0]
                 + 3 * (1 - t) * t ** 2 * p2[0] + t ** 3 * p3[0])
            y = ((1 - t) ** 3 * p0[1] + 3 * (1 - t) ** 2 * t * p1[1]
                 + 3 * (1 - t) * t ** 2 * p2[1] + t ** 3 * p3[1])
        out.append((x, y))
    return out


def S_(v):
    return v * SS


def path(*segs, n=40):
    pts = []
    for seg in segs:
        pts.extend(bez([(S_(x), S_(y)) for x, y in seg], n))
    return pts


def clipped(img, silhouette, draw_fn):
    """Draw hard shapes clipped to the silhouette polygon."""
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw_fn(ImageDraw.Draw(layer))
    mask = Image.new("L", img.size, 0)
    ImageDraw.Draw(mask).polygon(silhouette, fill=255)
    clip = Image.composite(layer.split()[3], Image.new("L", img.size, 0), mask)
    img.paste(layer, (0, 0), clip)


def fish_body():
    # 560x360, head pointing RIGHT, top-down. Tail joint at x=95.
    W, H = 560, 360
    img, d = canvas(W, H)

    # silhouette: smooth teardrop — round head, tapered rear
    top = path(
        [(95, 180), (110, 130), (210, 96), (330, 92)],
        [(330, 92), (430, 90), (500, 130), (505, 180)],
        n=50)
    bottom = path(
        [(505, 180), (500, 230), (430, 270), (330, 268)],
        [(330, 268), (210, 264), (110, 230), (95, 180)],
        n=50)
    sil = top + bottom

    d.polygon(sil, fill=FISH)

    # hard cel shade: rear third + trailing lower flank (one crisp shape)
    def shade(ds):
        p = path(
            [(95, 180), (110, 132), (200, 100), (260, 96)],
            [(260, 96), (215, 170), (250, 240), (300, 262)],
            [(300, 262), (210, 262), (112, 228), (95, 180)],
            n=36)
        ds.polygon(p, fill=FISH_SHADE)
    clipped(img, sil, shade)

    # belly light: crisp cream shape low-center, clear of the face cap
    def belly(ds):
        p = path(
            [(280, 266), (262, 224), (306, 202), (360, 210)],
            [(360, 210), (398, 218), (408, 244), (388, 258)],
            [(388, 258), (352, 268), (312, 270), (280, 266)],
            n=30)
        ds.polygon(p, fill=BELLY)
    clipped(img, sil, belly)

    # bone-cream face cap with a deeper C-curve seam
    def face(ds):
        p = path(
            [(408, 98), (456, 106), (496, 142), (504, 180)],
            [(504, 180), (496, 218), (456, 254), (408, 262)],
            [(408, 262), (446, 216), (446, 144), (408, 98)],
            n=36)
        ds.polygon(p, fill=BONE)
        edge = path([(408, 98), (446, 144), (446, 216), (408, 262)], n=40)
        ds.line(edge, fill=INK, width=int(5 * SS), joint="curve")
    clipped(img, sil, face)

    # pectoral fins: curved blades swept back, mid-body
    for side in (-1, 1):
        yb = 180 + side * 86
        blade = path(
            [(300, yb), (250, yb + side * 46), (196, yb + side * 56), (176, yb + side * 40)],
            [(176, yb + side * 40), (208, yb + side * 26), (248, yb + side * 8), (300, yb)],
            n=30)
        d.polygon(blade, fill=FISH_SHADE, outline=None)
        d.line(blade + [blade[0]], fill=INK, width=int(6 * SS), joint="curve")

    # ink outline — bold, uniform
    d.line(sil + [sil[0]], fill=INK, width=int(8 * SS), joint="curve")

    save(img, "fish-body.png", W, H)


def fish_tail():
    # 400x360, pivot at (56,180); one flowing fan, three soft lobes
    W, H = 400, 360
    img, d = canvas(W, H)

    fan = path(
        # upper edge sweeping out
        [(56, 176), (140, 118), (240, 84), (322, 80)],
        # top lobe trailing edge curling into the first notch
        [(322, 80), (332, 122), (312, 142), (286, 152)],
        # notch out to the middle lobe tip
        [(286, 152), (330, 158), (354, 170), (356, 180)],
        # mirror: middle lobe back to second notch
        [(356, 180), (354, 190), (330, 202), (286, 208)],
        # second notch out to bottom lobe tip
        [(286, 208), (312, 218), (332, 238), (322, 280)],
        # lower edge flowing back to the pivot
        [(322, 280), (240, 276), (140, 242), (56, 184)],
        n=32)
    d.polygon(fan, fill=FISH)

    # shade ribbons following the flow into the upper and lower lobes
    for sgn in (-1, 1):
        rib = path(
            [(70, 180 + sgn * 4), (150, 180 + sgn * 34), (230, 180 + sgn * 56), (300, 180 + sgn * 84)],
            [(300, 180 + sgn * 84), (280, 180 + sgn * 52), (210, 180 + sgn * 34), (140, 180 + sgn * 20)],
            [(140, 180 + sgn * 20), (110, 180 + sgn * 12), (85, 180 + sgn * 6), (70, 180 + sgn * 4)],
            n=26)
        d.polygon(rib, fill=FISH_SHADE)

    # light ribbon into the middle lobe
    mid = path(
        [(90, 180), (180, 178), (260, 176), (330, 178)],
        [(330, 178), (260, 186), (180, 186), (90, 182)],
        n=24)
    d.polygon(mid, fill=BELLY)

    # ink outline
    d.line(fan + [fan[0]], fill=INK, width=int(7 * SS), joint="curve")

    save(img, "fish-tail.png", W, H)


if __name__ == "__main__":
    fish_body()
    fish_tail()
