import Vue from "vue"
import { MetaInfo } from "vue-meta"
import { NuxtOptionsHead } from "@nuxt/types/config/head"

export const seoMixin = (pageName: string, ignoreTitleTemplate: boolean = false) => {
  return {
    head(): MetaInfo {
      const self = this as unknown as Vue

      const i18nHead = self.$nuxtI18nHead({ addSeoAttributes: true })

      const head: NuxtOptionsHead = {
        htmlAttrs: { ...i18nHead.htmlAttrs },
        meta: [
          {
            hid: "description",
            name: "description",
            content: self.$t(`pages.${pageName}.description`) as string,
          },
          ...i18nHead.meta,
        ],
        link: [...i18nHead.link],
        title: self.$t(`pages.${pageName}.title`) as string,
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
