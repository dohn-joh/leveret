# Extracts QMK `info.json` layout data from kicad pcb
# You need to have the `pcbnew` module importable (should be installed when kicad is installed)

import re, pcbnew, json
from typing import Callable
from functools import reduce

kicad7 = pcbnew.Version().startswith("7")

if kicad7:
    iu2mm = lambda iu: iu / pcbnew.PCB_IU_PER_MM
    PrimPointType = lambda *a: pcbnew.VECTOR2I(pcbnew.wxPoint(*a))
    def check_layers(fp: pcbnew.FOOTPRINT) -> list:
        return pcbnew.LSET.AllNonCuMask().Seq()
else:
    iu2mm = pcbnew.Iu2Millimeter
    PrimPointType = pcbnew.wxPoint
    def check_layers(fp: pcbnew.FOOTPRINT) -> list:
        layers = (pcbnew.LSET_PhysicalLayersMask()
            .removeLayer(pcbnew.F_SilkS).removeLayer(pcbnew.B_SilkS)
            .addLayer(pcbnew.F_CrtYd).addLayer(pcbnew.B_CrtYd).addLayer(pcbnew.Margin).addLayer(pcbnew.Edge_Cuts))
        l = fp.GetLayerSet()
        return l.RemoveLayerSet(layers).Seq()

def get_layout(fn: str, f: Callable[[pcbnew.FOOTPRINT], bool]) -> None:
    board: pcbnew.BOARD = pcbnew.LoadBoard(fn)
    switches = sorted((fp for fp in board.GetFootprints() if f(fp)), key=lambda sw: int(re.search("\\d+", sw.GetReference()).group(0)))

    def get_params(fp: pcbnew.FOOTPRINT) -> list[float]:
        deg = fp.GetOrientationDegrees()
        if deg != 0:
            deg -= 90 * round(deg / 90)     # snap to nearest 90deg
            if kicad7:
                rot = pcbnew.EDA_ANGLE(-deg * 10, pcbnew.DEGREES_T)
            else:
                rot = -deg * 10
            fp.Rotate(fp.GetCenter(), rot)
        bb = fp.GetBoundingBox(False, False)
        gis = fp.GraphicalItems()
        def get_param(layer: int) -> list[float] | None:
            gs = [g for g in gis if g.GetLayer() == layer]
            if len(gs) == 0:
                return None
            bbs = [g.GetBoundingBox() for g in gs]
            merged = reduce(lambda a, b: a.Merge(b) or a, bbs)
            if not kicad7:
                merged = merged.getWxRect()
            width = list(set(g.GetWidth() for g in gs))
            if len(width) > 1:
                raise ValueError(f"more than 1 width: {width} on layer: {pcbnew.LayerName(layer)}")
            width = width[0]
            pos = bb.GetOrigin() + PrimPointType(width / 2, width / 2)
            w, h = merged.GetWidth() - width, merged.GetHeight() - width
            return [iu2mm(i) for i in [pos.x, pos.y, w, h]]
        p = max((p for layer in check_layers(fp) if (p := get_param(layer)) != None), key=lambda p: p[2:4])
        if deg != 0:
            p += [-deg]
        return p

    params = [get_params(sw) for sw in switches]
    min_size = min(s for p in params for s in p[2:4])
    min_x, min_y = min(p[0] for p in params), min(p[1] for p in params)
    params = [[round(i / min_size, 3) for i in [(p[0] - min_x), (p[1] - min_y), p[2], p[3]]] + p[4:5] for p in params]
    def to_dict(p) -> dict[str, float]:
        d = {"x": p[0], "y": p[1]}
        if p[3] == 1:
            d["w"] = p[2]
        elif p[2] == 1:
            d["h"] = p[3]
        if len(p) == 5:
            d["r"] = p[4]
        return d
    print(json.dumps({"layouts": {"default": {"layout": [to_dict(p) for p in params]}}}))

# Example:
# `f` is a footprint filtering function to get the switches. docs for the `FOOTPRINT` type: https://docs.kicad.org/doxygen-python-6.0/classpcbnew_1_1FOOTPRINT.html
get_layout("/home/n/src/ergogen/output/pcbs/send_it.kicad_pcb", lambda sw: str(sw.GetReference()).startswith("K"))
