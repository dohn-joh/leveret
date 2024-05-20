module.exports = {
    params: {
        designator: 'MCU', //arbitrary name
        side: 'F',
        RAW: {type: 'net', value: 'RAW'},
        GND: {type: 'net', value: 'GND'},
        RST: {type: 'net', value: 'RST'},

        // commented out P4 and P21 for safety reasons
        // P4: {type: 'net', value: 'P4'},
        P5: {type: 'net', value: 'P5'},
        P6: {type: 'net', value: 'P6'},
        P7: {type: 'net', value: 'P7'},
        P8: {type: 'net', value: 'P8'},
        P9: {type: 'net', value: 'P9'},
        P10: {type: 'net', value: 'P10'},
        P11: {type: 'net', value: 'P11'},
        P12: {type: 'net', value: 'P12'},

        // P21: {type: 'net', value: 'P21'},
        P20: {type: 'net', value: 'P20'},
        P19: {type: 'net', value: 'P19'},
        P18: {type: 'net', value: 'P18'},
        P17: {type: 'net', value: 'P17'},
        P16: {type: 'net', value: 'P16'},
        P15: {type: 'net', value: 'P15'},
        P14: {type: 'net', value: 'P14'},
        P13: {type: 'net', value: 'P13'},
    },
    body: p => `
(module nice_nano_v2_expanded (layer F.Cu)
  (attr through_hole)
        ${p.at /* paramteric position */}
  (fp_text reference "${p.ref}" (at 16.51 0 ${-90 + p.rot}) (layer ${p.side}.SilkS) ${p.ref_hide}
      (effects (font (size 1 1) (thickness 0.15)))
   )
  (fp_text value "ProMicro" (at 16.01325 0 270 unlocked) (layer "F.Fab")
      (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user "L RAW" (at 14.27325 11.43 270 unlocked) (layer "B.SilkS")
      (effects (font (face "Source Code Pro") (size 1 1) (thickness 0.15)) (justify left bottom mirror))
    (render_cache "L RAW" 270
      (polygon
        (pts
          (xy 14.44325 11.242421)          (xy 14.44325 10.672602)          (xy 14.542656 10.672602)          (xy 14.542656 11.127627)
          (xy 15.36551 11.127627)          (xy 15.36551 11.242421)
        )
      )
      (polygon
        (pts
          (xy 14.44325 9.611612)          (xy 14.44325 9.495352)          (xy 14.832573 9.495352)          (xy 14.832573 9.331709)
          (xy 14.44325 9.110425)          (xy 14.44325 8.977313)          (xy 14.845029 9.211297)          (xy 14.848208 9.199747)
          (xy 14.851702 9.188458)          (xy 14.85551 9.177435)          (xy 14.859635 9.166687)          (xy 14.864076 9.15622)
          (xy 14.868834 9.146041)          (xy 14.873911 9.136157)          (xy 14.879307 9.126576)          (xy 14.885023 9.117303)
          (xy 14.891059 9.108347)          (xy 14.897417 9.099714)          (xy 14.904097 9.09141)          (xy 14.9111 9.083444)
          (xy 14.918427 9.075822)          (xy 14.926078 9.068551)          (xy 14.934056 9.061638)          (xy 14.942359 9.055089)
          (xy 14.950989 9.048913)          (xy 14.959948 9.043115)          (xy 14.969235 9.037704)          (xy 14.978852 9.032685)
          (xy 14.988799 9.028066)          (xy 14.999077 9.023854)          (xy 15.009687 9.020055)          (xy 15.02063 9.016678)
          (xy 15.031906 9.013728)          (xy 15.043517 9.011212)          (xy 15.055462 9.009139)          (xy 15.067744 9.007514)
          (xy 15.080363 9.006345)          (xy 15.093319 9.005638)          (xy 15.106613 9.005401)          (xy 15.124203 9.005792)
          (xy 15.141077 9.006955)          (xy 15.157244 9.008875)          (xy 15.172715 9.011537)          (xy 15.187501 9.014926)
          (xy 15.201612 9.019026)          (xy 15.215058 9.023823)          (xy 15.227849 9.029302)          (xy 15.239997 9.035448)
          (xy 15.251511 9.042244)          (xy 15.262401 9.049678)          (xy 15.272679 9.057732)          (xy 15.282354 9.066393)
          (xy 15.291438 9.075645)          (xy 15.299939 9.085473)          (xy 15.307869 9.095862)          (xy 15.315238 9.106797)
          (xy 15.322057 9.118263)          (xy 15.328335 9.130245)          (xy 15.334083 9.142728)          (xy 15.339312 9.155696)
          (xy 15.344032 9.169135)          (xy 15.348253 9.183029)          (xy 15.351986 9.197364)          (xy 15.35524 9.212124)
          (xy 15.358027 9.227295)          (xy 15.360357 9.242861)          (xy 15.36224 9.258807)          (xy 15.363686 9.275118)
          (xy 15.364707 9.291779)          (xy 15.365311 9.308776)          (xy 15.36551 9.326092)          (xy 15.36551 9.611612)
        )
          (pts
            (xy 14.927827 9.495352)            (xy 15.271477 9.495352)            (xy 15.271477 9.342944)            (xy 15.271349 9.329739)
            (xy 15.270959 9.316913)            (xy 15.270302 9.30447)            (xy 15.269372 9.292413)            (xy 15.268161 9.280744)
            (xy 15.266665 9.269466)            (xy 15.264875 9.25858)            (xy 15.262787 9.24809)            (xy 15.260394 9.237999)
            (xy 15.257689 9.228308)            (xy 15.25132 9.210139)            (xy 15.243629 9.193603)            (xy 15.234566 9.178722)
            (xy 15.22408 9.165514)            (xy 15.212122 9.154002)            (xy 15.19864 9.144205)            (xy 15.183584 9.136143)
            (xy 15.166904 9.129838)            (xy 15.148549 9.125308)            (xy 15.138728 9.123716)            (xy 15.128469 9.122576)
            (xy 15.117766 9.12189)            (xy 15.106613 9.12166)            (xy 15.095571 9.12189)            (xy 15.084883 9.122576)
            (xy 15.074549 9.123716)            (xy 15.06457 9.125308)            (xy 15.054944 9.12735)            (xy 15.036754 9.13277)
            (xy 15.019975 9.139956)            (xy 15.004607 9.148888)            (xy 14.990646 9.159545)            (xy 14.978092 9.171907)
            (xy 14.96694 9.185954)            (xy 14.95719 9.201665)            (xy 14.94884 9.21902)            (xy 14.945188 9.228308)
            (xy 14.941886 9.237999)            (xy 14.938933 9.24809)            (xy 14.936328 9.25858)            (xy 14.934071 9.269466)
            (xy 14.932162 9.280744)            (xy 14.930601 9.292413)            (xy 14.929387 9.30447)            (xy 14.92852 9.316913)
            (xy 14.928001 9.329739)            (xy 14.927827 9.342944)
          )
      )
      (polygon
        (pts
          (xy 14.44325 8.867648)          (xy 14.44325 8.748702)          (xy 14.724617 8.66053)          (xy 14.724617 8.327138)
          (xy 14.44325 8.240432)          (xy 14.44325 8.11709)          (xy 15.36551 8.426545)          (xy 15.36551 8.558192)
        )
          (pts
            (xy 14.95909 8.587745)            (xy 14.968726 8.584731)            (xy 14.978355 8.581731)            (xy 14.987977 8.578747)
            (xy 14.997595 8.575777)            (xy 15.00721 8.57282)            (xy 15.016822 8.569878)            (xy 15.026434 8.566948)
            (xy 15.036046 8.564031)            (xy 15.04566 8.561126)            (xy 15.055277 8.558233)            (xy 15.064898 8.555351)
            (xy 15.074525 8.55248)            (xy 15.084159 8.549619)            (xy 15.093801 8.546769)            (xy 15.103453 8.543927)
            (xy 15.113116 8.541095)            (xy 15.122791 8.538271)            (xy 15.132479 8.535456)            (xy 15.142182 8.532648)
            (xy 15.151902 8.529848)            (xy 15.161638 8.527054)            (xy 15.171393 8.524266)            (xy 15.181168 8.521485)
            (xy 15.190965 8.518709)            (xy 15.200784 8.515938)            (xy 15.210626 8.513171)            (xy 15.220494 8.510409)
            (xy 15.230388 8.50765)            (xy 15.24031 8.504895)            (xy 15.250261 8.502142)            (xy 15.260243 8.499391)
            (xy 15.270256 8.496643)            (xy 15.270256 8.491025)            (xy 15.260243 8.488384)            (xy 15.250261 8.485728)
            (xy 15.24031 8.483056)            (xy 15.230388 8.480369)            (xy 15.220494 8.477667)            (xy 15.210626 8.474951)
            (xy 15.200784 8.47222)            (xy 15.190965 8.469475)            (xy 15.181168 8.466716)            (xy 15.171393 8.463943)
            (xy 15.161638 8.461157)            (xy 15.151902 8.458357)            (xy 15.142182 8.455545)            (xy 15.132479 8.452719)
            (xy 15.122791 8.449881)            (xy 15.113116 8.447031)            (xy 15.103453 8.444169)            (xy 15.093801 8.441294)
            (xy 15.084159 8.438408)            (xy 15.074525 8.43551)            (xy 15.064898 8.432601)            (xy 15.055277 8.429681)
            (xy 15.04566 8.42675)            (xy 15.036046 8.423809)            (xy 15.026434 8.420857)            (xy 15.016822 8.417895)
            (xy 15.00721 8.414923)            (xy 14.997595 8.411942)            (xy 14.987977 8.408951)            (xy 14.978355 8.40595)
            (xy 14.968726 8.402941)            (xy 14.95909 8.399923)            (xy 14.818407 8.356692)            (xy 14.818407 8.630976)
          )
      )
      (polygon
        (pts
          (xy 14.44325 7.919253)          (xy 14.44325 7.776371)          (xy 14.815476 7.686734)          (xy 14.826067 7.684187)
          (xy 14.836599 7.681762)          (xy 14.847079 7.679448)          (xy 14.857516 7.677235)          (xy 14.867919 7.675112)
          (xy 14.878296 7.673068)          (xy 14.888655 7.671094)          (xy 14.899007 7.669179)          (xy 14.909358 7.667312)
          (xy 14.919718 7.665484)          (xy 14.930095 7.663684)          (xy 14.940497 7.661901)          (xy 14.950934 7.660125)
          (xy 14.961415 7.658347)          (xy 14.971946 7.656554)          (xy 14.982538 7.654738)          (xy 14.982538 7.650341)
          (xy 14.971946 7.64875)          (xy 14.961415 7.64709)          (xy 14.950934 7.645363)          (xy 14.940497 7.643568)
          (xy 14.930095 7.641705)          (xy 14.919718 7.639776)          (xy 14.909358 7.63778)          (xy 14.899007 7.635717)
          (xy 14.888655 7.633589)          (xy 14.878296 7.631396)          (xy 14.867919 7.629137)          (xy 14.857516 7.626814)
          (xy 14.847079 7.624426)          (xy 14.836599 7.621974)          (xy 14.826067 7.619459)          (xy 14.815476 7.61688)
          (xy 14.44325 7.527243)          (xy 14.44325 7.381674)          (xy 15.36551 7.247096)          (xy 15.36551 7.373126)
          (xy 14.787143 7.437606)          (xy 14.773154 7.439102)          (xy 14.759778 7.440484)          (xy 14.746903 7.441763)
          (xy 14.734414 7.442953)          (xy 14.722198 7.444063)          (xy 14.710143 7.445106)          (xy 14.698133 7.446095)
          (xy 14.686057 7.44704)          (xy 14.673801 7.447953)          (xy 14.661251 7.448847)          (xy 14.648294 7.449733)
          (xy 14.634816 7.450623)          (xy 14.620704 7.451529)          (xy 14.605845 7.452462)          (xy 14.590125 7.453435)
          (xy 14.573431 7.454459)          (xy 14.573431 7.460076)          (xy 14.590125 7.463101)          (xy 14.605845 7.465964)
          (xy 14.620704 7.468694)          (xy 14.634816 7.471319)          (xy 14.648294 7.473867)          (xy 14.661251 7.476365)
          (xy 14.673801 7.478842)          (xy 14.686057 7.481325)          (xy 14.698133 7.483843)          (xy 14.710143 7.486423)
          (xy 14.722198 7.489093)          (xy 14.734414 7.491881)          (xy 14.746903 7.494815)          (xy 14.759778 7.497923)
          (xy 14.773154 7.501233)          (xy 14.787143 7.504773)          (xy 15.131037 7.591723)          (xy 15.131037 7.703586)
          (xy 14.787143 7.793224)          (xy 14.773154 7.796562)          (xy 14.759778 7.799722)          (xy 14.746903 7.802727)
          (xy 14.734414 7.8056)          (xy 14.722198 7.808362)          (xy 14.710143 7.811037)          (xy 14.698133 7.813646)
          (xy 14.686057 7.816213)          (xy 14.673801 7.81876)          (xy 14.661251 7.821309)          (xy 14.648294 7.823883)
          (xy 14.634816 7.826505)          (xy 14.620704 7.829198)          (xy 14.605845 7.831982)          (xy 14.590125 7.834882)
          (xy 14.573431 7.83792)          (xy 14.573431 7.842316)          (xy 14.590125 7.843112)          (xy 14.605848 7.843944)
          (xy 14.620714 7.844815)          (xy 14.634839 7.845724)          (xy 14.648339 7.846676)          (xy 14.661328 7.84767)
          (xy 14.673924 7.84871)          (xy 14.686241 7.849796)          (xy 14.698394 7.850931)          (xy 14.7105 7.852117)
          (xy 14.722674 7.853355)          (xy 14.735032 7.854647)          (xy 14.747689 7.855994)          (xy 14.76076 7.8574)
          (xy 14.774362 7.858864)          (xy 14.788609 7.86039)          (xy 15.36551 7.927557)          (xy 15.36551 8.059204)
        )
      )
    )
  )
  (fp_text user "R RAW" (at 14.861009 -10.578595 270 unlocked) (layer "F.SilkS")
      (effects (font (face "Source Code Pro") (size 1 1) (thickness 0.15)) (justify left bottom))
    (render_cache "R RAW" 270
      (polygon
        (pts
          (xy 15.031009 -10.438643)          (xy 15.031009 -10.322384)          (xy 15.420332 -10.322384)          (xy 15.420332 -10.158741)
          (xy 15.031009 -9.937457)          (xy 15.031009 -9.804345)          (xy 15.432788 -10.038329)          (xy 15.435967 -10.026779)
          (xy 15.439461 -10.01549)          (xy 15.443269 -10.004467)          (xy 15.447394 -9.993719)          (xy 15.451835 -9.983252)
          (xy 15.456593 -9.973073)          (xy 15.46167 -9.963189)          (xy 15.467066 -9.953608)          (xy 15.472782 -9.944335)
          (xy 15.478818 -9.935379)          (xy 15.485176 -9.926746)          (xy 15.491856 -9.918442)          (xy 15.498859 -9.910476)
          (xy 15.506186 -9.902854)          (xy 15.513837 -9.895583)          (xy 15.521815 -9.88867)          (xy 15.530118 -9.882121)
          (xy 15.538748 -9.875945)          (xy 15.547707 -9.870147)          (xy 15.556994 -9.864736)          (xy 15.566611 -9.859717)
          (xy 15.576558 -9.855098)          (xy 15.586836 -9.850886)          (xy 15.597446 -9.847087)          (xy 15.608389 -9.843709)
          (xy 15.619665 -9.84076)          (xy 15.631276 -9.838244)          (xy 15.643221 -9.836171)          (xy 15.655503 -9.834546)
          (xy 15.668122 -9.833376)          (xy 15.681078 -9.83267)          (xy 15.694372 -9.832433)          (xy 15.711962 -9.832824)
          (xy 15.728836 -9.833987)          (xy 15.745003 -9.835907)          (xy 15.760474 -9.838569)          (xy 15.77526 -9.841957)
          (xy 15.789371 -9.846058)          (xy 15.802817 -9.850855)          (xy 15.815608 -9.856334)          (xy 15.827756 -9.862479)
          (xy 15.83927 -9.869276)          (xy 15.85016 -9.876709)          (xy 15.860438 -9.884764)          (xy 15.870113 -9.893425)
          (xy 15.879197 -9.902677)          (xy 15.887698 -9.912505)          (xy 15.895628 -9.922894)          (xy 15.902997 -9.933829)
          (xy 15.909816 -9.945295)          (xy 15.916094 -9.957277)          (xy 15.921842 -9.96976)          (xy 15.927071 -9.982728)
          (xy 15.931791 -9.996167)          (xy 15.936012 -10.010061)          (xy 15.939745 -10.024396)          (xy 15.942999 -10.039156)
          (xy 15.945786 -10.054327)          (xy 15.948116 -10.069893)          (xy 15.949999 -10.085839)          (xy 15.951445 -10.10215)
          (xy 15.952466 -10.118811)          (xy 15.95307 -10.135807)          (xy 15.953269 -10.153123)          (xy 15.953269 -10.438643)
        )
          (pts
            (xy 15.515586 -10.322384)            (xy 15.859236 -10.322384)            (xy 15.859236 -10.169976)            (xy 15.859108 -10.15677)
            (xy 15.858718 -10.143945)            (xy 15.858061 -10.131502)            (xy 15.857131 -10.119445)            (xy 15.85592 -10.107776)
            (xy 15.854424 -10.096497)            (xy 15.852634 -10.085612)            (xy 15.850546 -10.075122)            (xy 15.848153 -10.065031)
            (xy 15.845448 -10.05534)            (xy 15.839079 -10.037171)            (xy 15.831388 -10.020635)            (xy 15.822325 -10.005753)
            (xy 15.811839 -9.992546)            (xy 15.799881 -9.981034)            (xy 15.786399 -9.971237)            (xy 15.771343 -9.963175)
            (xy 15.754663 -9.956869)            (xy 15.736308 -9.95234)            (xy 15.726487 -9.950748)            (xy 15.716228 -9.949608)
            (xy 15.705525 -9.948921)            (xy 15.694372 -9.948692)            (xy 15.68333 -9.948921)            (xy 15.672642 -9.949608)
            (xy 15.662308 -9.950748)            (xy 15.652329 -9.95234)            (xy 15.642703 -9.954381)            (xy 15.624513 -9.959801)
            (xy 15.607734 -9.966988)            (xy 15.592366 -9.97592)            (xy 15.578405 -9.986577)            (xy 15.565851 -9.998939)
            (xy 15.554699 -10.012986)            (xy 15.544949 -10.028697)            (xy 15.536599 -10.046052)            (xy 15.532947 -10.05534)
            (xy 15.529645 -10.065031)            (xy 15.526692 -10.075122)            (xy 15.524087 -10.085612)            (xy 15.52183 -10.096497)
            (xy 15.519921 -10.107776)            (xy 15.51836 -10.119445)            (xy 15.517146 -10.131502)            (xy 15.516279 -10.143945)
            (xy 15.51576 -10.15677)            (xy 15.515586 -10.169976)
          )
      )
      (polygon
        (pts
          (xy 15.031009 -8.760207)          (xy 15.031009 -8.643947)          (xy 15.420332 -8.643947)          (xy 15.420332 -8.480304)
          (xy 15.031009 -8.25902)          (xy 15.031009 -8.125908)          (xy 15.432788 -8.359892)          (xy 15.435967 -8.348342)
          (xy 15.439461 -8.337053)          (xy 15.443269 -8.32603)          (xy 15.447394 -8.315282)          (xy 15.451835 -8.304815)
          (xy 15.456593 -8.294636)          (xy 15.46167 -8.284752)          (xy 15.467066 -8.275171)          (xy 15.472782 -8.265898)
          (xy 15.478818 -8.256942)          (xy 15.485176 -8.248309)          (xy 15.491856 -8.240005)          (xy 15.498859 -8.232039)
          (xy 15.506186 -8.224417)          (xy 15.513837 -8.217146)          (xy 15.521815 -8.210233)          (xy 15.530118 -8.203684)
          (xy 15.538748 -8.197508)          (xy 15.547707 -8.19171)          (xy 15.556994 -8.186299)          (xy 15.566611 -8.18128)
          (xy 15.576558 -8.176661)          (xy 15.586836 -8.172449)          (xy 15.597446 -8.16865)          (xy 15.608389 -8.165273)
          (xy 15.619665 -8.162323)          (xy 15.631276 -8.159807)          (xy 15.643221 -8.157734)          (xy 15.655503 -8.156109)
          (xy 15.668122 -8.15494)          (xy 15.681078 -8.154233)          (xy 15.694372 -8.153996)          (xy 15.711962 -8.154387)
          (xy 15.728836 -8.15555)          (xy 15.745003 -8.15747)          (xy 15.760474 -8.160132)          (xy 15.77526 -8.163521)
          (xy 15.789371 -8.167621)          (xy 15.802817 -8.172418)          (xy 15.815608 -8.177897)          (xy 15.827756 -8.184043)
          (xy 15.83927 -8.190839)          (xy 15.85016 -8.198273)          (xy 15.860438 -8.206327)          (xy 15.870113 -8.214988)
          (xy 15.879197 -8.22424)          (xy 15.887698 -8.234068)          (xy 15.895628 -8.244457)          (xy 15.902997 -8.255392)
          (xy 15.909816 -8.266858)          (xy 15.916094 -8.27884)          (xy 15.921842 -8.291323)          (xy 15.927071 -8.304291)
          (xy 15.931791 -8.31773)          (xy 15.936012 -8.331624)          (xy 15.939745 -8.345959)          (xy 15.942999 -8.360719)
          (xy 15.945786 -8.37589)          (xy 15.948116 -8.391456)          (xy 15.949999 -8.407402)          (xy 15.951445 -8.423713)
          (xy 15.952466 -8.440374)          (xy 15.95307 -8.457371)          (xy 15.953269 -8.474687)          (xy 15.953269 -8.760207)
        )
          (pts
            (xy 15.515586 -8.643947)            (xy 15.859236 -8.643947)            (xy 15.859236 -8.491539)            (xy 15.859108 -8.478334)
            (xy 15.858718 -8.465508)            (xy 15.858061 -8.453065)            (xy 15.857131 -8.441008)            (xy 15.85592 -8.429339)
            (xy 15.854424 -8.418061)            (xy 15.852634 -8.407175)            (xy 15.850546 -8.396685)            (xy 15.848153 -8.386594)
            (xy 15.845448 -8.376903)            (xy 15.839079 -8.358734)            (xy 15.831388 -8.342198)            (xy 15.822325 -8.327317)
            (xy 15.811839 -8.314109)            (xy 15.799881 -8.302597)            (xy 15.786399 -8.2928)            (xy 15.771343 -8.284738)
            (xy 15.754663 -8.278433)            (xy 15.736308 -8.273903)            (xy 15.726487 -8.272311)            (xy 15.716228 -8.271171)
            (xy 15.705525 -8.270485)            (xy 15.694372 -8.270255)            (xy 15.68333 -8.270485)            (xy 15.672642 -8.271171)
            (xy 15.662308 -8.272311)            (xy 15.652329 -8.273903)            (xy 15.642703 -8.275945)            (xy 15.624513 -8.281365)
            (xy 15.607734 -8.288551)            (xy 15.592366 -8.297483)            (xy 15.578405 -8.30814)            (xy 15.565851 -8.320502)
            (xy 15.554699 -8.334549)            (xy 15.544949 -8.35026)            (xy 15.536599 -8.367615)            (xy 15.532947 -8.376903)
            (xy 15.529645 -8.386594)            (xy 15.526692 -8.396685)            (xy 15.524087 -8.407175)            (xy 15.52183 -8.418061)
            (xy 15.519921 -8.429339)            (xy 15.51836 -8.441008)            (xy 15.517146 -8.453065)            (xy 15.516279 -8.465508)
            (xy 15.51576 -8.478334)            (xy 15.515586 -8.491539)
          )
      )
      (polygon
        (pts
          (xy 15.031009 -8.016243)          (xy 15.031009 -7.897297)          (xy 15.312376 -7.809125)          (xy 15.312376 -7.475733)
          (xy 15.031009 -7.389027)          (xy 15.031009 -7.265685)          (xy 15.953269 -7.57514)          (xy 15.953269 -7.706787)
        )
          (pts
            (xy 15.546849 -7.73634)            (xy 15.556485 -7.733326)            (xy 15.566114 -7.730326)            (xy 15.575736 -7.727342)
            (xy 15.585354 -7.724372)            (xy 15.594969 -7.721415)            (xy 15.604581 -7.718473)            (xy 15.614193 -7.715543)
            (xy 15.623805 -7.712626)            (xy 15.633419 -7.709721)            (xy 15.643036 -7.706828)            (xy 15.652657 -7.703946)
            (xy 15.662284 -7.701075)            (xy 15.671918 -7.698214)            (xy 15.68156 -7.695364)            (xy 15.691212 -7.692522)
            (xy 15.700875 -7.68969)            (xy 15.71055 -7.686866)            (xy 15.720238 -7.684051)            (xy 15.729941 -7.681243)
            (xy 15.739661 -7.678443)            (xy 15.749397 -7.675649)            (xy 15.759152 -7.672861)            (xy 15.768927 -7.67008)
            (xy 15.778724 -7.667304)            (xy 15.788543 -7.664533)            (xy 15.798385 -7.661766)            (xy 15.808253 -7.659004)
            (xy 15.818147 -7.656245)            (xy 15.828069 -7.65349)            (xy 15.83802 -7.650737)            (xy 15.848002 -7.647986)
            (xy 15.858015 -7.645238)            (xy 15.858015 -7.63962)            (xy 15.848002 -7.636979)            (xy 15.83802 -7.634323)
            (xy 15.828069 -7.631651)            (xy 15.818147 -7.628964)            (xy 15.808253 -7.626262)            (xy 15.798385 -7.623546)
            (xy 15.788543 -7.620815)            (xy 15.778724 -7.61807)            (xy 15.768927 -7.615311)            (xy 15.759152 -7.612538)
            (xy 15.749397 -7.609752)            (xy 15.739661 -7.606952)            (xy 15.729941 -7.60414)            (xy 15.720238 -7.601314)
            (xy 15.71055 -7.598476)            (xy 15.700875 -7.595626)            (xy 15.691212 -7.592764)            (xy 15.68156 -7.589889)
            (xy 15.671918 -7.587003)            (xy 15.662284 -7.584105)            (xy 15.652657 -7.581196)            (xy 15.643036 -7.578276)
            (xy 15.633419 -7.575345)            (xy 15.623805 -7.572404)            (xy 15.614193 -7.569452)            (xy 15.604581 -7.56649)
            (xy 15.594969 -7.563518)            (xy 15.585354 -7.560537)            (xy 15.575736 -7.557546)            (xy 15.566114 -7.554545)
            (xy 15.556485 -7.551536)            (xy 15.546849 -7.548518)            (xy 15.406166 -7.505287)            (xy 15.406166 -7.779571)
          )
      )
      (polygon
        (pts
          (xy 15.031009 -7.067848)          (xy 15.031009 -6.924966)          (xy 15.403235 -6.835329)          (xy 15.413826 -6.832782)
          (xy 15.424358 -6.830357)          (xy 15.434838 -6.828043)          (xy 15.445275 -6.82583)          (xy 15.455678 -6.823707)
          (xy 15.466055 -6.821663)          (xy 15.476414 -6.819689)          (xy 15.486766 -6.817774)          (xy 15.497117 -6.815907)
          (xy 15.507477 -6.814079)          (xy 15.517854 -6.812279)          (xy 15.528256 -6.810496)          (xy 15.538693 -6.80872)
          (xy 15.549174 -6.806942)          (xy 15.559705 -6.805149)          (xy 15.570297 -6.803333)          (xy 15.570297 -6.798936)
          (xy 15.559705 -6.797345)          (xy 15.549174 -6.795685)          (xy 15.538693 -6.793958)          (xy 15.528256 -6.792163)
          (xy 15.517854 -6.7903)          (xy 15.507477 -6.788371)          (xy 15.497117 -6.786375)          (xy 15.486766 -6.784312)
          (xy 15.476414 -6.782184)          (xy 15.466055 -6.779991)          (xy 15.455678 -6.777732)          (xy 15.445275 -6.775409)
          (xy 15.434838 -6.773021)          (xy 15.424358 -6.770569)          (xy 15.413826 -6.768054)          (xy 15.403235 -6.765475)
          (xy 15.031009 -6.675838)          (xy 15.031009 -6.530269)          (xy 15.953269 -6.395691)          (xy 15.953269 -6.521721)
          (xy 15.374902 -6.586201)          (xy 15.360913 -6.587697)          (xy 15.347537 -6.589079)          (xy 15.334662 -6.590358)
          (xy 15.322173 -6.591548)          (xy 15.309957 -6.592658)          (xy 15.297902 -6.593701)          (xy 15.285892 -6.59469)
          (xy 15.273816 -6.595635)          (xy 15.26156 -6.596548)          (xy 15.24901 -6.597442)          (xy 15.236053 -6.598328)
          (xy 15.222575 -6.599218)          (xy 15.208463 -6.600124)          (xy 15.193604 -6.601057)          (xy 15.177884 -6.60203)
          (xy 15.16119 -6.603054)          (xy 15.16119 -6.608671)          (xy 15.177884 -6.611696)          (xy 15.193604 -6.614559)
          (xy 15.208463 -6.617289)          (xy 15.222575 -6.619914)          (xy 15.236053 -6.622462)          (xy 15.24901 -6.62496)
          (xy 15.26156 -6.627437)          (xy 15.273816 -6.62992)          (xy 15.285892 -6.632438)          (xy 15.297902 -6.635018)
          (xy 15.309957 -6.637688)          (xy 15.322173 -6.640476)          (xy 15.334662 -6.64341)          (xy 15.347537 -6.646518)
          (xy 15.360913 -6.649828)          (xy 15.374902 -6.653368)          (xy 15.718796 -6.740318)          (xy 15.718796 -6.852181)
          (xy 15.374902 -6.941819)          (xy 15.360913 -6.945157)          (xy 15.347537 -6.948317)          (xy 15.334662 -6.951322)
          (xy 15.322173 -6.954195)          (xy 15.309957 -6.956957)          (xy 15.297902 -6.959632)          (xy 15.285892 -6.962241)
          (xy 15.273816 -6.964808)          (xy 15.26156 -6.967355)          (xy 15.24901 -6.969904)          (xy 15.236053 -6.972478)
          (xy 15.222575 -6.9751)          (xy 15.208463 -6.977793)          (xy 15.193604 -6.980577)          (xy 15.177884 -6.983477)
          (xy 15.16119 -6.986515)          (xy 15.16119 -6.990911)          (xy 15.177884 -6.991707)          (xy 15.193607 -6.992539)
          (xy 15.208473 -6.99341)          (xy 15.222598 -6.994319)          (xy 15.236098 -6.995271)          (xy 15.249087 -6.996265)
          (xy 15.261683 -6.997305)          (xy 15.274 -6.998391)          (xy 15.286153 -6.999526)          (xy 15.298259 -7.000712)
          (xy 15.310433 -7.00195)          (xy 15.322791 -7.003242)          (xy 15.335448 -7.004589)          (xy 15.348519 -7.005995)
          (xy 15.362121 -7.007459)          (xy 15.376368 -7.008985)          (xy 15.953269 -7.076152)          (xy 15.953269 -7.207799)
        )
      )
    )
  )
  (fp_line (start 8.39325 -7.62) (end 8.39325 -9.398)
    (stroke (width 0.254) (type default)) (layer "F.Cu"))
  (fp_line (start 10.93325 -7.62) (end 10.93325 -9.398)
    (stroke (width 0.254) (type default)) (layer "F.Cu"))
  (fp_line (start 13.47325 -7.62) (end 13.47325 -9.398)
    (stroke (width 0.254) (type default)) (layer "F.Cu"))
  (fp_line (start 8.39325 7.62) (end 8.39325 9.398)
    (stroke (width 0.254) (type default)) (layer "B.Cu"))
  (fp_line (start 10.93325 7.62) (end 10.93325 9.398)
    (stroke (width 0.254) (type default)) (layer "B.Cu"))
  (fp_line (start 13.47325 7.62) (end 13.47325 9.398)
    (stroke (width 0.254) (type default)) (layer "B.Cu"))
  (fp_line (start 17.28325 8.89) (end 17.28325 -8.89)
    (stroke (width 0.15) (type dot)) (layer "B.SilkS"))
  (fp_line (start 17.28325 8.89) (end 17.28325 -8.89)
    (stroke (width 0.15) (type dot)) (layer "F.SilkS"))
  (fp_poly
    (pts
      (xy 8.90125 10.16)
      (xy 7.88525 10.16)
      (xy 7.88525 9.144)
      (xy 8.90125 9.144)
    )

    (stroke (width 0.2) (type solid)) (fill solid) (layer "B.Mask"))
  (fp_poly
    (pts
      (xy 11.44125 10.16)
      (xy 10.42525 10.16)
      (xy 10.42525 9.144)
      (xy 11.44125 9.144)
    )

    (stroke (width 0.2) (type solid)) (fill solid) (layer "B.Mask"))
  (fp_poly
    (pts
      (xy 13.98125 10.16)
      (xy 12.96525 10.16)
      (xy 12.96525 9.144)
      (xy 13.98125 9.144)
    )

    (stroke (width 0.2) (type solid)) (fill solid) (layer "B.Mask"))
  (fp_poly
    (pts
      (xy 7.88525 -10.16)
      (xy 8.90125 -10.16)
      (xy 8.90125 -9.144)
      (xy 7.88525 -9.144)
    )

    (stroke (width 0.2) (type solid)) (fill solid) (layer "F.Mask"))
  (fp_poly
    (pts
      (xy 10.42525 -10.16)
      (xy 11.44125 -10.16)
      (xy 11.44125 -9.144)
      (xy 10.42525 -9.144)
    )

    (stroke (width 0.2) (type solid)) (fill solid) (layer "F.Mask"))
  (fp_poly
    (pts
      (xy 12.96525 -10.16)
      (xy 13.98125 -10.16)
      (xy 13.98125 -9.144)
      (xy 12.96525 -9.144)
    )

    (stroke (width 0.2) (type solid)) (fill solid) (layer "F.Mask"))
  (fp_line (start -15.73675 -8.89) (end -15.73675 8.89)
    (stroke (width 0.15) (type solid)) (layer "User.1"))
  (fp_line (start -15.73675 -8.89) (end -15.73675 8.89)
    (stroke (width 0.15) (type solid)) (layer "User.1"))
  (fp_line (start 17.28325 -8.89) (end -15.73675 -8.89)
    (stroke (width 0.15) (type solid)) (layer "User.1"))
  (fp_line (start 17.28325 -8.89) (end -15.73675 -8.89)
    (stroke (width 0.15) (type solid)) (layer "User.1"))
  (fp_line (start 17.28325 8.89) (end -15.73675 8.89)
    (stroke (width 0.15) (type solid)) (layer "User.1"))
  (fp_line (start 17.28325 8.89) (end -15.73675 8.89)
    (stroke (width 0.15) (type solid)) (layer "User.1"))
  (pad "" smd custom (at 8.39325 -9.398 ${180 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
    (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.6 -0.4)
          (xy -0.6 -0.4)
          (xy -0.6 -0.2)
          (xy 0 0.4)
          (xy 0.6 -0.2)
        )
        (width 0) (fill yes))
    ))
  (pad "" thru_hole circle (at 8.39325 -7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask"))
  (pad "" thru_hole circle (at 8.39325 7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask"))
  (pad "" smd custom (at 8.39325 9.398) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
    (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.6 -0.4)
          (xy -0.6 -0.4)
          (xy -0.6 -0.2)
          (xy 0 0.4)
          (xy 0.6 -0.2)
        )
        (width 0) (fill yes))
    ))
  (pad "" smd custom (at 10.93325 -9.398 ${180 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
    (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.6 -0.4)
          (xy -0.6 -0.4)
          (xy -0.6 -0.2)
          (xy 0 0.4)
          (xy 0.6 -0.2)
        )
        (width 0) (fill yes))
    ))
  (pad "" thru_hole circle (at 10.93325 -7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask"))
  (pad "" thru_hole circle (at 10.93325 7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask"))
  (pad "" smd custom (at 10.93325 9.398) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
    (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.6 -0.4)
          (xy -0.6 -0.4)
          (xy -0.6 -0.2)
          (xy 0 0.4)
          (xy 0.6 -0.2)
        )
        (width 0) (fill yes))
    ))
  (pad "" smd custom (at 13.47325 -9.398 ${180 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
    (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.6 -0.4)
          (xy -0.6 -0.4)
          (xy -0.6 -0.2)
          (xy 0 0.4)
          (xy 0.6 -0.2)
        )
        (width 0) (fill yes))
    ))
  (pad "" thru_hole circle (at 13.47325 -7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask"))
  (pad "" thru_hole circle (at 13.47325 7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask")
    (zone_connect 0))
  (pad "" smd custom (at 13.47325 9.398) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
    (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.6 -0.4)
          (xy -0.6 -0.4)
          (xy -0.6 -0.2)
          (xy 0 0.4)
          (xy 0.6 -0.2)
        )
        (width 0) (fill yes))
    ))
  (pad "1" smd custom (at 13.47325 -10.414) (size 1.2 0.5) (layers "F.Cu" "F.Mask") ${p.RAW.str}
    (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.6 0)
          (xy -0.6 0)
          (xy -0.6 1)
          (xy 0 0.4)
          (xy 0.6 1)
        )
        (width 0) (fill yes))
    ))
  (pad "1" smd custom (at 13.47325 10.414) (size 1.2 0.5) (layers "B.Cu" "B.Mask") ${p.RAW.str}
    (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.6 0)
          (xy -0.6 0)
          (xy -0.6 -1)
          (xy 0 -0.4)
          (xy 0.6 -1)
        )
        (width 0) (fill yes))
    ))
  (pad "2" smd custom (at 10.93325 -10.414 ${180 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") ${p.GND.str}
    (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.6 0)
          (xy -0.6 0)
          (xy -0.6 -1)
          (xy 0 -0.4)
          (xy 0.6 -1)
        )
        (width 0) (fill yes))
    ))
  (pad "2" smd custom (at 10.93325 10.414) (size 1.2 0.5) (layers "B.Cu" "B.Mask") ${p.GND.str}
    (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.6 0)
          (xy -0.6 0)
          (xy -0.6 -1)
          (xy 0 -0.4)
          (xy 0.6 -1)
        )
        (width 0) (fill yes))
    ))
  (pad "3" smd custom (at 8.39325 -10.414 ${180 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") ${p.RST.str}
    (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.6 0)
          (xy -0.6 0)
          (xy -0.6 -1)
          (xy 0 -0.4)
          (xy 0.6 -1)
        )
        (width 0) (fill yes))
    ))
  (pad "3" smd custom (at 8.39325 10.414) (size 1.2 0.5) (layers "B.Cu" "B.Mask") ${p.RST.str}
    (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.6 0)
          (xy -0.6 0)
          (xy -0.6 -1)
          (xy 0 -0.4)
          (xy 0.6 -1)
        )
        (width 0) (fill yes))
    ))
  (pad "4" thru_hole circle (at 5.85325 -7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask"))
  (pad "5" thru_hole circle (at 3.31325 -7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask") ${p.P5.str})
  (pad "6" thru_hole circle (at 0.77325 -7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask") ${p.P6.str})
  (pad "7" thru_hole circle (at -1.76675 -7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask") ${p.P7.str})
  (pad "8" thru_hole circle (at -4.30675 -7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask") ${p.P8.str})
  (pad "9" thru_hole circle (at -6.84675 -7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask") ${p.P9.str})
  (pad "10" thru_hole circle (at -9.38675 -7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask") ${p.P10.str})
  (pad "11" thru_hole circle (at -11.92675 -7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask") ${p.P11.str})
  (pad "12" thru_hole circle (at -14.46675 -7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask") ${p.P12.str})
  (pad "13" thru_hole circle (at -14.46675 7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask") ${p.P13.str})
  (pad "14" thru_hole circle (at -11.92675 7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask") ${p.P14.str})
  (pad "15" thru_hole circle (at -9.38675 7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask") ${p.P15.str})
  (pad "16" thru_hole circle (at -6.84675 7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask") ${p.P16.str})
  (pad "17" thru_hole circle (at -4.30675 7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask") ${p.P17.str})
  (pad "18" thru_hole circle (at -1.76675 7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask") ${p.P18.str})
  (pad "19" thru_hole circle (at 0.77325 7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask") ${p.P19.str})
  (pad "20" thru_hole circle (at 3.31325 7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask") ${p.P20.str})
  (pad "21" thru_hole circle (at 5.85325 7.62 ${180 + p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Paste" "*.Mask"))
)
       `
}
