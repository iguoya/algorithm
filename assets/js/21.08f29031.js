(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{376:function(e,t,n){"use strict";n.r(t);var s=n(10),o=function(e){e.options.__data__block__={mermaid_382ee147:'\ngraph TD\n\nquestion("queen(sample, route, &result)")\nneq0{"sample.size==0？"}\nsubgraph 尝试每条路径\n    route_add_node["逐个遍历可选节点，添加到目标路径集合"]\n    less_sample("去除已选节点，生成更小候选样本")\n    less_question("queen(less_sample, route, &result)")\n    route_pop_node("route退出已尝试节点，尝试其他可能节点")\nend\n\ncheck_rule{"增加检验规则，route是否完全斜线"}\nquestion--\x3eneq0--\x3e|yes|check_rule--\x3e|no|add_route("单一可行路径route生成，添加到整体路径集合")\nneq0--\x3e|no|route_add_node--\x3eless_sample--\x3eless_question--\x3eroute_pop_node\n\n'}},r=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"n皇后问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#n皇后问题"}},[e._v("#")]),e._v(" N皇后问题")]),e._v(" "),n("p",[e._v("候选节点集合： list< T > sample")]),e._v(" "),n("p",[e._v("单一可行路径（节点组合）：vector< T > route")]),e._v(" "),n("p",[e._v("所有可行路径：vector<vector< T > > result")]),e._v(" "),n("Mermaid",{attrs:{id:"mermaid_382ee147",graph:e.$dataBlock.mermaid_382ee147}})],1)}),[],!1,null,null,null);"function"==typeof o&&o(r);t.default=r.exports}}]);