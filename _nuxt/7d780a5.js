(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3],{284:function(t,e,n){var content=n(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(100).default)("5c1a3dd6",content,!0,{sourceMap:!1})},285:function(t,e,n){"use strict";n.r(e);var o=n(71),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"py-4 bg-dark text-light text-center"},[n("div",{staticClass:"container"},[n("p",{staticClass:"m-0"},[t._v("\n      © 2021\n      "),n("a",{staticClass:"text-light",attrs:{href:"https://github.com/KondoA9"}},[t._v("Ekyu Kondo")])])])])}],!1,null,"4f5c8946",null);e.default=component.exports;installComponents(component,{Footer:n(285).default})},286:function(t,e,n){"use strict";n.r(e);e.default=n(291)("./".concat("production",".ts")).env},287:function(t,e,n){"use strict";n(284)},288:function(t,e,n){var o=n(99)(!1);o.push([t.i,"#navbar[data-v-b0cd7382]{top:0;position:fixed;z-index:100;width:100%;padding-left:6.4vw;padding-right:6.4vw;min-height:4rem}.navbar-toggler[data-v-b0cd7382]{border:none}.navbar-toggler[data-v-b0cd7382]:focus{box-shadow:none}.nav-item[data-v-b0cd7382]{margin-left:1rem;margin-right:1rem;padding-top:.4rem;padding-bottom:.4rem}#header-padding[data-v-b0cd7382]{height:4rem}",""]),t.exports=o},289:function(t,e,n){"use strict";n.r(e);n(287);var o=n(71),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{staticClass:"shadow-sm",attrs:{id:"navbar",toggleable:"lg",type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{to:t.localePath("/")}},[n("img",{staticClass:"align-middle",attrs:{src:t.$router.options.base+"favicon.ico",width:"32",height:"32"}}),t._v(" "),n("span",{staticClass:"align-middle"},[t._v("DermAnnotation")])]),t._v(" "),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{attrs:{to:t.localePath("/download")}},[t._v(t._s(t.$t("pages.download.title")))]),t._v(" "),n("b-nav-item",{attrs:{to:t.localePath("/manual")}},[t._v(t._s(t.$t("pages.manual.title")))]),t._v(" "),n("b-nav-item",{attrs:{to:t.localePath("/dev")}},[t._v(t._s(t.$t("pages.dev.title")))]),t._v(" "),n("b-nav-item",{attrs:{to:t.localePath("/contact")}},[t._v(t._s(t.$t("pages.contact.title")))]),t._v(" "),n("b-nav-item-dropdown",{attrs:{text:"Language"}},[n("b-dropdown-item",{attrs:{to:t.switchLocalePath("ja")}},[t._v("\n            日本語\n          ")]),t._v(" "),n("b-dropdown-item",{attrs:{to:t.switchLocalePath("en")}},[t._v("\n            English\n          ")])],1)],1)],1)],1),t._v(" "),n("div",{attrs:{id:"header-padding"}})],1)}),[],!1,null,"b0cd7382",null);e.default=component.exports},290:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var o=n(0),r=(n(11),n(15),n(4),n(3),n(1),n(5),n(2),n(6),n(286));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{head:function(){var n=this,head={htmlAttrs:{lang:n.$i18n.locale},title:n.$t("pages.".concat(t,".title")),meta:[{hid:"description",name:"description",content:n.$t("pages.".concat(t,".description"))}],link:[{rel:"canonical",href:"".concat(r.default.BASE_URL).concat(n.$route.path.slice(1))}]};return e?c(c({},head),{},{titleTemplate:void 0}):head}}}},291:function(t,e,n){var map={"./development.ts":292,"./envType.ts":293,"./index.ts":286,"./production.ts":294};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=291},292:function(t,e,n){"use strict";n.r(e),n.d(e,"env",(function(){return o}));var o={BASE_URL:"http://localhost:3000/",ROOT_URL:"/"}},293:function(t,e,n){"use strict";n.r(e)},294:function(t,e,n){"use strict";n.r(e),n.d(e,"env",(function(){return o}));var o={BASE_URL:"https://kondoa9.github.io/DermAnnotation/",ROOT_URL:"/DermAnnotation/"}},300:function(t,e,n){"use strict";n.r(e);n(11);var o=n(7),r=n(290),l=o.default.extend({mixins:[Object(r.a)("download")],methods:{download:function(t){var e="windows"===t?"DermAnnotationSetup_Windows.msi":"DermAnnotationSetup_macOS.zip";window.location.href="".concat(this.$router.options.base,"publish/installer/").concat(e),this.$gtag("event","download",{event_category:"installer",event_label:t})}}}),c=n(71),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("div",{staticClass:"container-fluid py-5 text-center bg-light my-auto",staticStyle:{"min-height":"90vh"}},[n("h2",{staticClass:"display-5 pt-3"},[t._v("Download DermAnnotation v2.0.8")]),t._v(" "),n("p",{staticClass:"my-3"},[t._v(t._s(t.$t("downloadPage.date")))]),t._v(" "),n("div",{staticClass:"container",staticStyle:{display:"table"}},[n("div",{staticClass:"align-middle",staticStyle:{display:"table-cell"}},[n("div",[n("button",{staticClass:"btn btn-primary py-3 px-5 m-3",on:{click:function(e){return t.download("windows")}}},[n("p",{staticClass:"lead m-0"},[t._v("Windows (64bit)")]),t._v(" "),n("p",{staticClass:"m-0"},[t._v("10 ver1803+ / 11")])]),t._v(" "),n("button",{staticClass:"btn btn-primary py-3 px-5 m-3",on:{click:function(e){return t.download("macOS")}}},[n("p",{staticClass:"lead m-0"},[t._v("macOS")]),t._v(" "),n("p",{staticClass:"m-0"},[t._v("Mojave 10.14+")])])]),t._v(" "),n("p",{staticClass:"my-3"},[t._v("*"+t._s(t.$t("downloadPage.noteForMac")))]),t._v(" "),n("div",{staticClass:"container pt-5 pb-3",staticStyle:{"text-align":"left"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.$t("downloadPage.releases").length,expression:"$t('downloadPage.releases').length !== 0"}]},[n("h5",{staticClass:"pt-4"},[t._v(t._s(t.$t("downloadPage.releaseLabel")))]),t._v(" "),n("ul",{staticClass:"py-2"},t._l(t.$t("downloadPage.releases"),(function(e){return n("li",{key:e},[t._v("\n                "+t._s(e)+"\n              ")])})),0)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.$t("downloadPage.bugs").length,expression:"$t('downloadPage.bugs').length !== 0"}]},[n("h5",{staticClass:"pt-4"},[t._v(t._s(t.$t("downloadPage.bugLabel")))]),t._v(" "),n("ul",{staticClass:"py-2"},t._l(t.$t("downloadPage.bugs"),(function(e){return n("li",{key:e},[t._v("\n                "+t._s(e)+"\n              ")])})),0)])])])])]),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(289).default,Footer:n(285).default})}}]);