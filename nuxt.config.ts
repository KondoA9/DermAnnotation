import { NuxtConfig } from "@nuxt/types"
import messages from "./locales"
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

  buildModules: ["@nuxt/typescript-build"],

  modules: ["bootstrap-vue/nuxt", "@nuxtjs/i18n", "@nuxtjs/google-gtag"],

  build: {
    babel: {
      compact: true,
    },
  },

  i18n: {
    locales: [
      { code: "ja", iso: "ja_JP", name: "日本語" },
      { code: "en", iso: "en-US", name: "English" },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: "root",
    },
    vueI18n: {
      fallbackLocale: "en",
      messages: messages as any,
    },
    strategy: "prefix_and_default",
  },

  "google-gtag": {
    id: "G-712HVZXFDS",
    config: {
      anonymize_ip: true,
      send_page_view: false,
    },
    debug: true,
    disableAutoPageTrack: false,
  },
}

export default config
