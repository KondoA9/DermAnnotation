(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,3,4],{299:function(t,e,n){var content=n(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(89).default)("28b58370",content,!0,{sourceMap:!1})},300:function(t,e,n){var content=n(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(89).default)("4a10a108",content,!0,{sourceMap:!1})},301:function(t,e,n){"use strict";n(299)},302:function(t,e,n){var r=n(88)(!1);r.push([t.i,"#navbar[data-v-cda63be4]{top:0;position:fixed;z-index:100;width:100%;padding-left:6.4vw;padding-right:6.4vw;min-height:4rem}.navbar-toggler[data-v-cda63be4]{border:none}.navbar-toggler[data-v-cda63be4]:focus{box-shadow:none}.nav-item[data-v-cda63be4]{margin-left:1rem;margin-right:1rem;padding-top:.4rem;padding-bottom:.4rem}#header-padding[data-v-cda63be4]{height:4rem}",""]),t.exports=r},303:function(t,e,n){"use strict";n.r(e);n(301);var r=n(74),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{staticClass:"shadow-sm",attrs:{id:"navbar",toggleable:"xl",type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{to:t.localePath("/")}},[n("img",{staticClass:"align-middle",attrs:{src:t.$router.options.base+"favicon.ico",alt:"DermAnnotation",width:"32",height:"32"}}),t._v(" "),n("span",{staticClass:"align-middle"},[t._v("DermAnnotation")])]),t._v(" "),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{attrs:{to:t.localePath("/download")}},[t._v(t._s(t.$t("pages.download.title")))]),t._v(" "),n("b-nav-item",{attrs:{to:t.localePath("/manual")}},[t._v(t._s(t.$t("pages.manual.title")))]),t._v(" "),n("b-nav-item",{attrs:{to:t.localePath("/dev")}},[t._v(t._s(t.$t("pages.dev.title")))]),t._v(" "),n("b-nav-item",{attrs:{to:t.localePath("/contact")}},[t._v(t._s(t.$t("pages.contact.title")))]),t._v(" "),n("b-nav-item-dropdown",{attrs:{text:"Language"}},[n("b-dropdown-item",{attrs:{to:t.switchLocalePath("ja")}},[t._v(" 日本語 ")]),t._v(" "),n("b-dropdown-item",{attrs:{to:t.switchLocalePath("en")}},[t._v(" English ")])],1)],1)],1)],1),t._v(" "),n("div",{attrs:{id:"header-padding"}})],1)}),[],!1,null,"cda63be4",null);e.default=component.exports},304:function(t,e,n){"use strict";n.r(e);var r=n(74),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"py-4 bg-dark text-light text-center"},[n("div",{staticClass:"container"},[n("p",{staticClass:"m-0"},[t._v("\n      © 2021\n      "),n("a",{staticClass:"text-light",attrs:{href:"https://github.com/KondoA9"}},[t._v("Ekyu Kondo")])])])])}],!1,null,"07303c28",null);e.default=component.exports},305:function(t,e,n){"use strict";n(300)},306:function(t,e,n){var r=n(88)(!1);r.push([t.i,".page-wrapper[data-v-a3814124]{min-height:calc(100vh - 8rem)}",""]),t.exports=r},307:function(t,e,n){"use strict";n.r(e);var r=n(8).default.extend({}),l=(n(305),n(74)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("CustomHeader"),t._v(" "),n("div",{staticClass:"page-wrapper"},[t._t("default")],2),t._v(" "),n("CustomFooter")],1)}),[],!1,null,"a3814124",null);e.default=component.exports;installComponents(component,{CustomHeader:n(303).default,CustomFooter:n(304).default})},308:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));n(4),n(3),n(1),n(5),n(2),n(6);var r=n(31),l=n(0);n(12),n(172);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{head:function(){var n=this,l=n.$nuxtI18nHead({addSeoAttributes:!0}),head={htmlAttrs:c({},l.htmlAttrs),meta:[{hid:"description",name:"description",content:n.$t("pages.".concat(t,".description"))}].concat(Object(r.a)(l.meta)),link:Object(r.a)(l.link),title:n.$t("pages.".concat(t,".title"))};return e?c(c({},head),{},{titleTemplate:void 0}):head}}}},317:function(t,e,n){"use strict";n.r(e);var r=n(8),l=n(308),o=r.default.extend({mixins:[Object(l.a)("manual")]}),c=n(74),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("PageTemplate",[n("div",{staticClass:"container-fluid py-5",staticStyle:{"min-height":"90vh"}},[n("div",{staticClass:"container py-4"},[n("h2",{attrs:{id:"basic-usage"}},[t._v(t._s(t.$t("manualPage.basicUsage.name")))]),t._v(" "),n("div",{staticClass:"container"},t._l(t.$t("manualPage.basicUsage.contents"),(function(p){return n("p",{key:p},[t._v("\n          "+t._s(p)+"\n        ")])})),0)]),t._v(" "),n("div",{staticClass:"container py-4"},[n("h2",{attrs:{id:"available-images"}},[t._v("\n        "+t._s(t.$t("manualPage.availableImage.name"))+"\n      ")]),t._v(" "),n("div",{staticClass:"container"},[n("ul",t._l(t.$t("manualPage.availableImage.contents"),(function(li,e){return n("li",{key:li},[t._v("\n            "+t._s(li)+" "),2===e?n("nuxt-link",{attrs:{to:t.localePath("/dev")}},[t._v("*")]):t._e()],1)})),0)])]),t._v(" "),n("div",{staticClass:"container py-4"},[n("h2",{attrs:{id:"pencil-setting"}},[t._v(t._s(t.$t("manualPage.pencilSettings.name")))]),t._v(" "),n("div",{staticClass:"container"},t._l(t.$t("manualPage.pencilSettings.contents"),(function(p){return n("p",{key:p},[t._v("\n          "+t._s(p)+"\n        ")])})),0)]),t._v(" "),n("div",{staticClass:"container py-4"},[n("h2",{attrs:{id:"virtual-slide"}},[t._v(t._s(t.$t("manualPage.virtualSlide.name")))]),t._v(" "),n("div",{staticClass:"container"},t._l(t.$t("manualPage.virtualSlide.contents"),(function(p){return n("p",{key:p},[t._v("\n          "+t._s(p)+"\n        ")])})),0)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageTemplate:n(307).default})}}]);