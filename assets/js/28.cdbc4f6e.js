(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{377:function(e,n,t){"use strict";t.r(n);var s=t(10),_=function(e){e.options.__data__block__={mermaid_382ee147:'graph TD\nquestion("result find_max_min_gold(sample)")\npart1("result1 find_max_min_gold(part1_sample)")\npart2("result2 find_max_min_gold(part2_sample)")\ndivide("将sample划分为2部分")\n\nquestion--\x3eis_gt_2{"size > 2 ?"}--\x3e|no|is_only_two--\x3e|no|is_only_one\n\nis_gt_2--\x3e|yes|divide--\x3epart1--\x3emerge("对比result1，result2, 合并生成result 并返回")==>question\ndivide--\x3epart2--\x3emerge\n\nis_only_one{"size==1?"}--\x3e|yes|one("最大最小都是你！返回")\nis_only_two{"size==2?"}--\x3e|yes|two("对比找出最大，最小 返回")\n\n'}},i=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"金块问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#金块问题"}},[e._v("#")]),e._v(" 金块问题")]),e._v(" "),t("p",[t("strong",[e._v("最少次数")]),e._v("，找出"),t("strong",[e._v("最重和最轻")]),e._v("金块")]),e._v(" "),t("p",[e._v("vector< T > sample")]),e._v(" "),t("p",[e._v("{ max, min }   find_max_min_gold(sample)")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_382ee147",graph:e.$dataBlock.mermaid_382ee147}})],1)}),[],!1,null,null,null);"function"==typeof _&&_(i);n.default=i.exports}}]);