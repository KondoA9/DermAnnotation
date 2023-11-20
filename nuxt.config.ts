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
      {
        name: "google-site-verification",
        content: "fnua7NL7VKa9hVOwlJ7hjNqNqTCN8bVIAsbgkjnDPm4",
      },
      { hid: "og:site_name", property: "og:site_name", content: "DermAnnotation" },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: "https://kondoa9.github.io/DermAnnotation/" },
      { hid: "og:title", property: "og:title", content: "DermAnnotation - Annotation tool for semantic segmentation" },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Derm Annotation is an image annotation tool for semantic segmentation. Various support functions enable efficient annotation work.",
      },
      { hid: "og:image", property: "og:image", content: `${env.ROOT_URL}/obp_image.png` },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: `${env.ROOT_URL}/favicon.ico` }],
  },

  css: ["~/assets/global.scss"],

  plugins: [],

  router: {
    base: `${env.ROOT_URL}/`,
    trailingSlash: true,
  },

  components: [
    {
      path: "@/components/",
      pathPrefix: false,
    },
  ],

  buildModules: ["@nuxt/typescript-build", "nuxt-compress"],

  modules: ["bootstrap-vue/nuxt", "@nuxtjs/i18n", "@nuxtjs/google-gtag", "nuxt-compress", "@nuxtjs/sitemap"],

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
