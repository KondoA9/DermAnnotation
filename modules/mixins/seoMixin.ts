import { NuxtOptionsHead } from "@nuxt/types/config/head"
import env from "@/env"

export const seoMixin = (pageName: string, ignoreTitleTemplate: boolean = false) => {
  return {
    head(): any {
      const self = this as any

      const head: NuxtOptionsHead = {
        htmlAttrs: {
          lang: self.$i18n.locale,
        },
        title: self.$t(`pages.${pageName}.title`) as string,
        meta: [
          {
            hid: "description",
            name: "description",
            content: self.$t(`pages.${pageName}.description`) as string,
          },
        ],
        link: [
          {
            rel: "canonical",
            href: `${env.BASE_URL}${self.$route.path.slice(1)}`,
          },
        ],
      }

      if (ignoreTitleTemplate) {
        return {
          ...head,
          titleTemplate: undefined,
        }
      }

      return head
    },
  }
}
