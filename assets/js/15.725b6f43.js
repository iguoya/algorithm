(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{902:function(t,n,e){"use strict";e.r(n);var a=e(873),s={data:function(){return{items:[]}},beforeMount:function(){var t=this;a.get("https://reqres.in/api/users").then((function(n){t.$data.items=n.data.data,console.log(t.$data.items)})).catch((function(t){console.log(t)}))}},i=e(10),o=Object(i.a)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"tpl"}},[e("ul",t._l(t.items,(function(n,a){return e("li",[t._v("\n            "+t._s(n.first_name)+" ---"+t._s(n.last_name)+" ---"+t._s(n.email)+"\n        ")])})),0)])}),[],!1,null,null,null);n.default=o.exports}}]);