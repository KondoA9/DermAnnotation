(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{285:function(t,e,n){var content=n(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(101).default)("4999ae70",content,!0,{sourceMap:!1})},286:function(t,e,n){"use strict";n.r(e);var r=n(70),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"py-4 bg-dark text-light text-center"},[n("div",{staticClass:"container"},[n("p",{staticClass:"m-0"},[t._v("\n      © 2021\n      "),n("a",{staticClass:"text-light",attrs:{href:"https://github.com/KondoA9"}},[t._v("Ekyu Kondo")])])])])}],!1,null,"4f5c8946",null);e.default=component.exports;installComponents(component,{Footer:n(286).default})},287:function(t,e,n){"use strict";n.r(e);e.default=n(292)("./".concat("production",".ts")).env},288:function(t,e,n){"use strict";n(285)},289:function(t,e,n){var r=n(100)(!1);r.push([t.i,"#navbar[data-v-3966821c]{top:0;position:fixed;z-index:100;width:100%;padding-left:6.4vw;padding-right:6.4vw;min-height:4rem}.navbar-toggler[data-v-3966821c]{border:none}.navbar-toggler[data-v-3966821c]:focus{box-shadow:none}.nav-item[data-v-3966821c]{margin-left:1rem;margin-right:1rem;padding-top:.4rem;padding-bottom:.4rem}#header-padding[data-v-3966821c]{height:4rem}",""]),t.exports=r},290:function(t,e,n){"use strict";n.r(e);n(288);var r=n(70),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{staticClass:"shadow-sm",attrs:{id:"navbar",toggleable:"lg",type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{to:t.localePath("/")}},[n("img",{staticClass:"align-middle",attrs:{src:t.$router.options.base+"favicon.ico",alt:"DermAnnotation",width:"32",height:"32"}}),t._v(" "),n("span",{staticClass:"align-middle"},[t._v("DermAnnotation")])]),t._v(" "),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{attrs:{to:t.localePath("/download")}},[t._v(t._s(t.$t("pages.download.title")))]),t._v(" "),n("b-nav-item",{attrs:{to:t.localePath("/manual")}},[t._v(t._s(t.$t("pages.manual.title")))]),t._v(" "),n("b-nav-item",{attrs:{to:t.localePath("/dev")}},[t._v(t._s(t.$t("pages.dev.title")))]),t._v(" "),n("b-nav-item",{attrs:{to:t.localePath("/contact")}},[t._v(t._s(t.$t("pages.contact.title")))]),t._v(" "),n("b-nav-item-dropdown",{attrs:{text:"Language"}},[n("b-dropdown-item",{attrs:{to:t.switchLocalePath("ja")}},[t._v("\n            日本語\n          ")]),t._v(" "),n("b-dropdown-item",{attrs:{to:t.switchLocalePath("en")}},[t._v("\n            English\n          ")])],1)],1)],1)],1),t._v(" "),n("div",{attrs:{id:"header-padding"}})],1)}),[],!1,null,"3966821c",null);e.default=component.exports},291:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(0),o=(n(11),n(15),n(4),n(3),n(1),n(5),n(2),n(6),n(287));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{head:function(){var n=this,head={htmlAttrs:{lang:n.$i18n.locale},title:n.$t("pages.".concat(t,".title")),meta:[{hid:"description",name:"description",content:n.$t("pages.".concat(t,".description"))}],link:[{rel:"canonical",href:"".concat(o.default.BASE_URL).concat(n.$route.path.slice(1))}]};return e?l(l({},head),{},{titleTemplate:void 0}):head}}}},292:function(t,e,n){var map={"./development.ts":293,"./envType.ts":294,"./index.ts":287,"./production.ts":295};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=292},293:function(t,e,n){"use strict";n.r(e),n.d(e,"env",(function(){return r}));var r={BASE_URL:"http://localhost:3000/",ROOT_URL:"/"}},294:function(t,e,n){"use strict";n.r(e)},295:function(t,e,n){"use strict";n.r(e),n.d(e,"env",(function(){return r}));var r={BASE_URL:"https://kondoa9.github.io/DermAnnotation/",ROOT_URL:"/DermAnnotation/"}},297:function(t,e,n){"use strict";n.r(e);var r=n(7),o=n(291),c=r.default.extend({mixins:[Object(o.a)("contact")]}),l=n(70),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),t._m(0),t._v(" "),n("Footer")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-fluid py-5"},[e("div",{staticClass:"container"},[e("iframe",{attrs:{src:"https://docs.google.com/forms/d/e/1FAIpQLSf9uG4U0mHk3DKKbd61QIs3mtaLMUOGlhJUXgWCkLZI3C9o7w/viewform?embedded=true",width:"100%",height:"1050",frameborder:"0",marginheight:"0",marginwidth:"0"}})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(290).default,Footer:n(286).default})}}]);