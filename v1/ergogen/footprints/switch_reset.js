// reversible footprint for side-actuated SMD switch
// compatible with Panasonic EVQPUC02K
// https://www.aliexpress.us/item/2251832616044011.html

module.exports = {
    params: {
        designator: 'SW',
        side: 'F',
        from: {type: 'net', value: 'GND'},
        to: {type: 'net', value: 'RST'},
    },
    body: p => `
(module sw_reset_side (layer F.Cu)
    ${p.at /* parametric position */}
  (attr smd)
  (fp_text reference "${p.ref}" (at 0 -0.5 ${p.rot}) (layer ${p.side}.SilkS) ${p.ref_hide}
      (effects (font (size 1 1) (thickness 0.1)))
  )
  (fp_text value "Reset" (at 2.6 3.8 ${p.rot}) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user "Reset" (at 2.6 3.8 ${p.rot}) (layer "B.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_rect (start 0.275 -0.8875) (end 4.975 2.6125)
    (stroke (width 0.2) (type default)) (fill none) (layer "Dwgs.User"))
  (fp_rect (start 1.325 -0.8875) (end 3.925 -1.8875)
    (stroke (width 0.2) (type default)) (fill none) (layer "Dwgs.User"))
  (fp_rect (start 3.925 -0.8875) (end 1.325 -1.8875)
    (stroke (width 0.2) (type default)) (fill none) (layer "Dwgs.User"))
  (fp_rect (start 4.975 -0.8875) (end 0.275 2.6125)
    (stroke (width 0.2) (type default)) (fill none) (layer "Dwgs.User"))
  (pad "" np_thru_hole circle (at 2.625 -0.5125 ${p.rot}) (size 0.75 0.75) (drill 0.75) (layers "F&B.Cu" "*.Mask"))
  (pad "" np_thru_hole circle (at 2.625 2.2375 ${p.rot}) (size 0.75 0.75) (drill 0.75) (layers "F&B.Cu" "*.Mask"))
  (pad "1" smd roundrect (at 0 0 ${p.rot}) (size 1.55 1.025) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25)
    (thermal_bridge_angle 45) ${p.from.str})
  (pad "1" smd roundrect (at 0 0 ${p.rot}) (size 1.55 1.025) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)
    (thermal_bridge_angle 45) ${p.from.str})
  (pad "1" smd roundrect (at 5.25 0 ${p.rot}) (size 1.55 1.025) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25)
    (thermal_bridge_angle 45) ${p.from.str})
  (pad "1" smd roundrect (at 5.25 0 ${p.rot}) (size 1.55 1.025) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)
    (thermal_bridge_angle 45) ${p.from.str})
  (pad "2" smd roundrect (at 0 1.725 ${p.rot}) (size 1.55 1.025) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25)
    (thermal_bridge_angle 45) ${p.to.str})
  (pad "2" smd roundrect (at 0 1.725 ${p.rot}) (size 1.55 1.025) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)
    (thermal_bridge_angle 45) ${p.to.str})
  (pad "2" smd roundrect (at 5.25 1.725 ${p.rot}) (size 1.55 1.025) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25)
    (thermal_bridge_angle 45) ${p.to.str})
  (pad "2" smd roundrect (at 5.25 1.725 ${p.rot}) (size 1.55 1.025) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)
    (thermal_bridge_angle 45) ${p.to.str})
)
    `
}
