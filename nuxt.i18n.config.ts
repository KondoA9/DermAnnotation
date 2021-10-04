import { Options } from "@nuxtjs/i18n"
import messages from "./locales"

const config: Options = {
  locales: [
    { code: "ja", iso: "ja", name: "日本語" },
    { code: "en", iso: "en", name: "English" },
  ],
  defaultLocale: "ja",
  strategy: "prefix_except_default",
  detectBrowserLanguage: {
    useCookie: true,
    redirectOn: "root",
  },
  vueI18n: {
    fallbackLocale: "en",
    messages: messages as any,
  },
}

export default config
