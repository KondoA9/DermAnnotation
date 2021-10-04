import { NuxtConfig } from "@nuxt/types"
import i18nConfig from "./nuxt.i18n.config"
import env from "./env"

const config: NuxtConfig = {
  target: "static",
  ssr: true,

  head: {
    titleTemplate: "%s - " + "DermAnnotation",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: `${env.ROOT_URL}favicon.ico` },
    ],
  },

  css: [],

  plugins: [],

  router: {
    base: env.ROOT_URL,
    trailingSlash: true,
  },

  components: [
    {
      path: "@/components/",
      pathPrefix: false,
    },
  ],

  buildModules: ["@nuxt/typescript-build", "nuxt-compress"],

  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/google-gtag",
    "nuxt-compress",
    "@nuxtjs/sitemap",
  ],

  build: {
    babel: {
      compact: true,
    },
  },

  i18n: i18nConfig,

  "google-gtag": {
    id: "G-712HVZXFDS",
    config: {
      anonymize_ip: true,
      send_page_view: false,
    },
    debug: true,
    disableAutoPageTrack: false,
  },

  "nuxt-compress": {
    gzip: {
      threshold: 8192,
    },
    brotli: {
      threshold: 8192,
    },
  },

  sitemap: {
    hostname: "https://kondoa9.github.io/",
    gzip: true,
    i18n: i18nConfig,
    defaults: {
      lastmod: new Date(),
    },
  },
}

export default config
