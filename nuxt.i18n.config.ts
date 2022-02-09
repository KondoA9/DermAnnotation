import { Options } from "@nuxtjs/i18n"
import env from "./env"
import messages from "./locales"

const config: Options = {
  baseUrl: env.BASE_URL,
  locales: [
    { code: "ja", iso: "ja", name: "日本語" },
    { code: "en", iso: "en", name: "English" },
  ],
  defaultLocale: "ja",
  strategy: "prefix_except_default",
  detectBrowserLanguage: false,
  vueI18n: {
    fallbackLocale: "en",
    messages: messages as any,
  },
}

export default config
