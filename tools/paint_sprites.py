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

    # almond ink eyes on the cream face — symmetric, angled forward
    for side in (-1, 1):
        cx, cy = 470, 180 + side * 33
        eye = path(
            [(cx - 26, cy), (cx - 12, cy - 14), (cx + 14, cy - 11), (cx + 24, cy)],
            [(cx + 24, cy), (cx + 12, cy + 11), (cx - 12, cy + 12), (cx - 26, cy)],
            n=24)
        d.polygon(eye, fill=INK)
        gx, gy = S_(cx + 6), S_(cy - 4)
        r = S_(3.8)
        d.ellipse([gx - r, gy - r, gx + r, gy + r], fill=BONE)

    save(img, "fish-body.png", W, H)


def fish_tail():
    # 400x360, pivot at (56,180); blades flow to +x (page rotates it behind body)
    W, H = 400, 360
    img, d = canvas(W, H)

    for side in (-1, 1):
        yb = 180
        blade = path(
            [(56, yb), (120, yb + side * 10), (230, yb + side * 40), (330, yb + side * 128)],
            [(330, yb + side * 128), (350, yb + side * 60), (300, yb + side * 26), (250, yb + side * 18)],
            [(250, yb + side * 18), (180, yb + side * 8), (100, yb + side * 2), (56, yb)],
            n=36)
        d.polygon(blade, fill=FISH)
        # hard shade streak inside the blade, following its curve
        streak = path(
            [(90, yb + side * 6), (180, yb + side * 20), (260, yb + side * 48), (316, yb + side * 106)],
            [(316, yb + side * 106), (300, yb + side * 60), (250, yb + side * 34), (180, yb + side * 22)],
            [(180, yb + side * 22), (140, yb + side * 14), (105, yb + side * 8), (90, yb + side * 6)],
            n=28)
        d.polygon(streak, fill=FISH_SHADE)
        d.line(blade + [blade[0]], fill=INK, width=int(7 * SS), joint="curve")

    # peduncle wedge at the pivot (tucks under the body)
    hub = path(
        [(30, 160), (60, 150), (86, 162), (92, 180)],
        [(92, 180), (86, 198), (60, 210), (30, 200)],
        [(30, 200), (44, 180), (44, 180), (30, 160)],
        n=20)
    d.polygon(hub, fill=FISH)
    d.line(hub + [hub[0]], fill=INK, width=int(6 * SS), joint="curve")

    save(img, "fish-tail.png", W, H)


if __name__ == "__main__":
    fish_body()
    fish_tail()
