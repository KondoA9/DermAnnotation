(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3,4],{344:function(t,e,n){var content=n(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(98).default)("d4c2ae8c",content,!0,{sourceMap:!1})},345:function(t,e,n){var content=n(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(98).default)("4a10a108",content,!0,{sourceMap:!1})},346:function(t,e,n){"use strict";n(344)},347:function(t,e,n){var o=n(97)(!1);o.push([t.i,"#navbar[data-v-03400dc2]{top:0;position:fixed;z-index:100;width:100%;padding-left:6.4vw;padding-right:6.4vw;min-height:4rem}.navbar-toggler[data-v-03400dc2]{border:none}.navbar-toggler[data-v-03400dc2]:focus{box-shadow:none}.nav-item[data-v-03400dc2]{margin-left:1rem;margin-right:1rem;padding-top:.4rem;padding-bottom:.4rem}#header-padding[data-v-03400dc2]{height:4rem}",""]),t.exports=o},348:function(t,e,n){"use strict";n.r(e);n(346);var o=n(78),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{staticClass:"shadow-sm",attrs:{id:"navbar",toggleable:"xl",type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{to:t.localePath("/")}},[n("img",{staticClass:"align-middle",attrs:{src:t.$router.options.base+"icon.png",alt:"DermAnnotation",width:"32",height:"32"}}),t._v(" "),n("span",{staticClass:"align-middle"},[t._v("DermAnnotation")])]),t._v(" "),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{attrs:{to:t.localePath("/download")}},[t._v(t._s(t.$t("pages.download.title")))]),t._v(" "),n("b-nav-item",{attrs:{to:t.localePath("/manual")}},[t._v(t._s(t.$t("pages.manual.title")))]),t._v(" "),n("b-nav-item",{attrs:{to:t.localePath("/dev")}},[t._v(t._s(t.$t("pages.dev.title")))]),t._v(" "),n("b-nav-item-dropdown",{attrs:{text:"Language"}},[n("b-dropdown-item",{attrs:{to:t.switchLocalePath("ja")}},[t._v(" 日本語 ")]),t._v(" "),n("b-dropdown-item",{attrs:{to:t.switchLocalePath("en")}},[t._v(" English ")])],1)],1)],1)],1),t._v(" "),n("div",{attrs:{id:"header-padding"}})],1)}),[],!1,null,"03400dc2",null);e.default=component.exports},349:function(t,e,n){"use strict";n.r(e);var o=n(78),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"py-4 bg-dark text-light text-center"},[n("div",{staticClass:"container"},[n("p",{staticClass:"m-0"},[t._v("\n      © 2021-2022\n      "),n("a",{staticClass:"text-light",attrs:{href:"https://github.com/KondoA9"}},[t._v("Ekyu Kondo")])])])])}],!1,null,"78f4d7c7",null);e.default=component.exports},350:function(t,e,n){"use strict";n(345)},351:function(t,e,n){var o=n(97)(!1);o.push([t.i,".page-wrapper[data-v-a3814124]{min-height:calc(100vh - 8rem)}",""]),t.exports=o},352:function(t,e,n){"use strict";n.r(e);var o=n(7).default.extend({}),r=(n(350),n(78)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("CustomHeader"),t._v(" "),n("div",{staticClass:"page-wrapper"},[t._t("default")],2),t._v(" "),n("CustomFooter")],1)}),[],!1,null,"a3814124",null);e.default=component.exports;installComponents(component,{CustomHeader:n(348).default,CustomFooter:n(349).default})},353:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));n(4),n(3),n(1),n(5),n(2),n(6);var o=n(32),r=n(0);n(12),n(185);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{head:function(){var n=this,r=n.$nuxtI18nHead({addSeoAttributes:!0}),head={htmlAttrs:c({},r.htmlAttrs),meta:[{hid:"description",name:"description",content:n.$t("pages.".concat(t,".description"))}].concat(Object(o.a)(r.meta)),link:Object(o.a)(r.link),title:n.$t("pages.".concat(t,".title"))};return e?c(c({},head),{},{titleTemplate:void 0}):head}}}},356:function(t,e,n){"use strict";n.r(e);n(12);var o=n(7),r=n(353),l=o.default.extend({mixins:[Object(r.a)("download")],methods:{download:function(t){var e=function(){switch(t){case"windows.installer":return"DermAnnotationSetup_Windows.msi";case"windows.standalone":return"DermAnnotationSetup_Windows.zip";case"macOS":return"DermAnnotationSetup_macOS.zip";default:return}}();e&&(window.location.href="".concat(this.$router.options.base,"publish/installer/").concat(e),this.$gtag("event","download",{event_category:"installer",event_label:t}))}}}),c=n(78),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("PageTemplate",[n("div",{staticClass:"container-fluid py-5 text-center bg-light my-auto",staticStyle:{"min-height":"90vh"}},[n("h2",{staticClass:"display-5 pt-3"},[t._v("Download DermAnnotation v2.3.7")]),t._v(" "),n("p",{staticClass:"my-3"},[t._v(t._s(t.$t("downloadPage.date")))]),t._v(" "),n("div",{staticClass:"container mt-4"},[n("b-card",{attrs:{"no-body":"","bg-variant":"light"}},[n("b-tabs",{attrs:{align:"center",pills:"",card:""}},[n("b-tab",{attrs:{title:"Windows",active:""}},[n("div",[n("p",{staticClass:"lead mb-2"},[t._v("Windows 10 / 11 64bit")]),t._v(" "),n("div",{staticClass:"d-flex justify-content-center flex-wrap"},[n("button",{staticClass:"btn btn-outline-primary px-5 py-2 m-3",on:{click:function(e){return t.download("windows.installer")}}},[n("p",[t._v("Installer (.msi)")]),t._v(" "),n("small",[t._v("Recommended")])]),t._v(" "),n("button",{staticClass:"btn btn-outline-primary px-5 py-2 m-3",on:{click:function(e){return t.download("windows.standalone")}}},[t._v("\n                  Standalone (.zip)\n                ")])])])]),t._v(" "),n("b-tab",{attrs:{title:"macOS"}},[n("div",[n("p",{staticClass:"lead mb-2"},[t._v("macOS Big Sur 11.0+")]),t._v(" "),n("div",{staticClass:"d-flex justify-content-center flex-wrap"},[n("button",{staticClass:"btn btn-outline-primary px-5 py-2 m-3",on:{click:function(e){return t.download("macOS")}}},[n("p",[t._v("Standalone (.zip)")])])])])])],1)],1),t._v(" "),n("p",{staticClass:"my-5"},[t._v("*"+t._s(t.$t("downloadPage.noteForMac")))]),t._v(" "),n("div",{staticClass:"container",staticStyle:{"text-align":"left"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.$t("downloadPage.releases").length,expression:"$t('downloadPage.releases').length !== 0"}]},[n("h5",{staticClass:"pt-4"},[t._v(t._s(t.$t("downloadPage.releaseLabel")))]),t._v(" "),n("ul",{staticClass:"py-2"},t._l(t.$t("downloadPage.releases"),(function(e){return n("li",{key:e},[t._v("\n              "+t._s(e)+"\n            ")])})),0)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.$t("downloadPage.bugs").length,expression:"$t('downloadPage.bugs').length !== 0"}]},[n("h5",{staticClass:"pt-4"},[t._v(t._s(t.$t("downloadPage.bugLabel")))]),t._v(" "),n("ul",{staticClass:"py-2"},t._l(t.$t("downloadPage.bugs"),(function(e){return n("li",{key:e},[t._v("\n              "+t._s(e)+"\n            ")])})),0)])])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageTemplate:n(352).default})}}]);