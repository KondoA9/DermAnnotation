(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{292:function(t,e,n){var content=n(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(89).default)("5bb614cd",content,!0,{sourceMap:!1})},293:function(t,e,n){"use strict";n.r(e);var r=n(75),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"py-4 bg-dark text-light text-center"},[n("div",{staticClass:"container"},[n("p",{staticClass:"m-0"},[t._v("\n      © 2021\n      "),n("a",{staticClass:"text-light",attrs:{href:"https://github.com/KondoA9"}},[t._v("Ekyu Kondo")])])])])}],!1,null,"4f5c8946",null);e.default=component.exports;installComponents(component,{Footer:n(293).default})},294:function(t,e,n){"use strict";n.r(e);e.default=n(299)("./".concat("production",".ts")).env},295:function(t,e,n){"use strict";n(292)},296:function(t,e,n){var r=n(88)(!1);r.push([t.i,"#navbar[data-v-5c51b23f]{top:0;position:fixed;z-index:100;width:100%;padding-left:6.4vw;padding-right:6.4vw;min-height:4rem}.navbar-toggler[data-v-5c51b23f]{border:none}.navbar-toggler[data-v-5c51b23f]:focus{box-shadow:none}.nav-item[data-v-5c51b23f]{margin-left:1rem;margin-right:1rem;padding-top:.4rem;padding-bottom:.4rem}#header-padding[data-v-5c51b23f]{height:4rem}",""]),t.exports=r},297:function(t,e,n){"use strict";n.r(e);n(295);var r=n(75),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{staticClass:"shadow-sm",attrs:{id:"navbar",toggleable:"xl",type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{to:t.localePath("/")}},[n("img",{staticClass:"align-middle",attrs:{src:t.$router.options.base+"favicon.ico",alt:"DermAnnotation",width:"32",height:"32"}}),t._v(" "),n("span",{staticClass:"align-middle"},[t._v("DermAnnotation")])]),t._v(" "),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{attrs:{to:t.localePath("/download")}},[t._v(t._s(t.$t("pages.download.title")))]),t._v(" "),n("b-nav-item",{attrs:{to:t.localePath("/manual")}},[t._v(t._s(t.$t("pages.manual.title")))]),t._v(" "),n("b-nav-item",{attrs:{to:t.localePath("/dev")}},[t._v(t._s(t.$t("pages.dev.title")))]),t._v(" "),n("b-nav-item",{attrs:{to:t.localePath("/contact")}},[t._v(t._s(t.$t("pages.contact.title")))]),t._v(" "),n("b-nav-item-dropdown",{attrs:{text:"Language"}},[n("b-dropdown-item",{attrs:{to:t.switchLocalePath("ja")}},[t._v(" 日本語 ")]),t._v(" "),n("b-dropdown-item",{attrs:{to:t.switchLocalePath("en")}},[t._v(" English ")])],1)],1)],1)],1),t._v(" "),n("div",{attrs:{id:"header-padding"}})],1)}),[],!1,null,"5c51b23f",null);e.default=component.exports},298:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(0),o=(n(12),n(17),n(4),n(3),n(1),n(5),n(2),n(6),n(294));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{head:function(){var n=this,head={htmlAttrs:{lang:n.$i18n.locale},title:n.$t("pages.".concat(t,".title")),meta:[{hid:"description",name:"description",content:n.$t("pages.".concat(t,".description"))}],link:[{rel:"canonical",href:"".concat(o.default.BASE_URL).concat(n.$route.path.slice(1))}]};return e?l(l({},head),{},{titleTemplate:void 0}):head}}}},299:function(t,e,n){var map={"./development.ts":300,"./envType.ts":301,"./index.ts":294,"./production.ts":302};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=299},300:function(t,e,n){"use strict";n.r(e),n.d(e,"env",(function(){return r}));var r={BASE_URL:"http://localhost:3000/",ROOT_URL:"/"}},301:function(t,e,n){"use strict";n.r(e)},302:function(t,e,n){"use strict";n.r(e),n.d(e,"env",(function(){return r}));var r={BASE_URL:"https://kondoa9.github.io/DermAnnotation/",ROOT_URL:"/DermAnnotation/"}},303:function(t,e,n){var content=n(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(89).default)("1623a64c",content,!0,{sourceMap:!1})},304:function(t,e,n){"use strict";n(303)},305:function(t,e,n){var r=n(88)(!1);r.push([t.i,".form-group{margin-bottom:3.5rem}",""]),t.exports=r},307:function(t,e,n){"use strict";n.r(e);n(24),n(36),n(39);var r=n(8),o=n(298),c=r.default.extend({mixins:[Object(o.a)("contact")],data:function(){return{kind:["Bug","Request","Other"],submitting:!1,showSubmittedMessage:!1}},methods:{required:function(t){return this.$t(t).toString()+this.$t("contact.required").toString()},submit:function(){this.submitting=!0;try{document.getElementById("contact-form").submit()}catch(t){alert("Failed to submit"),this.submitting=!1}},submitCompleted:function(){var t=this;this.submitting&&(this.submitting=!1,this.showSubmittedMessage=!0,setTimeout((function(){t.showSubmittedMessage=!1}),3e3),document.getElementById("contact-form").reset())}}}),l=(n(304),n(75)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("div",{staticClass:"container-fluid py-5"},[n("div",{staticClass:"container my-4"},[n("div",{staticClass:"text-center"},[n("h1",{staticClass:"mb-5"},[t._v("Contact")]),t._v(" "),n("p",[t._v(t._s(t.$t("contact.description")))])]),t._v(" "),n("iframe",{staticStyle:{width:"0px",height:"0px",border:"0px"},attrs:{name:"dummy"},on:{load:t.submitCompleted}}),t._v(" "),n("form",{attrs:{id:"contact-form",action:"https://docs.google.com/forms/u/2/d/e/1FAIpQLSf9uG4U0mHk3DKKbd61QIs3mtaLMUOGlhJUXgWCkLZI3C9o7w/formResponse",target:"dummy"},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[n("div",{staticClass:"form-group"},[n("label",[t._v(t._s(t.required("contact.email")))]),t._v(" "),n("input",{staticClass:"form-control",attrs:{type:"email",required:"",name:"emailAddress"}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v(t._s(t.$t("contact.name")))]),t._v(" "),n("input",{staticClass:"form-control",attrs:{type:"text",name:"entry.1030544017"}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v(t._s(t.required("contact.type")))]),t._v(" "),n("select",{staticClass:"custom-select",attrs:{required:"",name:"entry.261537126"}},[n("option",{attrs:{hidden:""}}),t._v(" "),t._l(t.kind,(function(e,r){return n("option",{key:e,domProps:{value:e}},[t._v("\n              "+t._s(t.$t("contact.kind")[r])+"\n            ")])}))],2)]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v(t._s(t.$t("contact.version")))]),t._v(" "),n("input",{staticClass:"form-control",attrs:{type:"text",name:"entry.82995904"}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v(t._s(t.required("contact.message")))]),t._v(" "),n("textarea",{staticClass:"form-control",attrs:{rows:"6",required:"",name:"entry.626982020"}})]),t._v(" "),n("center",[t.showSubmittedMessage?n("div",[n("h3",[t._v(t._s(t.$t("contact.submitted")))])]):n("div",[n("p",{staticClass:"mb-5"},[t._v(t._s(t.$t("contact.confirmation")))]),t._v(" "),t.submitting?n("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Submitting...")])]):n("button",{staticClass:"btn btn-primary px-4",attrs:{type:"submit"}},[t._v("\n              "+t._s(t.$t("contact.submit"))+"\n            ")])])])],1)])]),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(297).default,Footer:n(293).default})}}]);