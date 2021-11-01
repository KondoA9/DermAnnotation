<template>
  <div>
    <Header />
    <div class="container-fluid py-5 text-center bg-light my-auto" style="min-height: 90vh">
      <h2 class="display-5 pt-3">Download DermAnnotation v2.1.0</h2>
      <p class="my-3">{{ $t("downloadPage.date") }}</p>
      <div class="container" style="display: table">
        <div class="align-middle" style="display: table-cell">
          <div>
            <button class="btn btn-primary py-3 px-5 m-3" @click="download('windows')">
              <p class="lead m-0">Windows (64bit)</p>
              <p class="m-0">10 ver1803+ / 11</p>
            </button>
            <button class="btn btn-primary py-3 px-5 m-3" @click="download('macOS')">
              <p class="lead m-0">macOS</p>
              <p class="m-0">Mojave 10.14+</p>
            </button>
          </div>

          <p class="my-3">*{{ $t("downloadPage.noteForMac") }}</p>

          <div class="container pt-5 pb-3" style="text-align: left">
            <div v-show="$t('downloadPage.releases').length !== 0">
              <h5 class="pt-4">{{ $t("downloadPage.releaseLabel") }}</h5>
              <ul class="py-2">
                <li v-for="release in $t('downloadPage.releases')" :key="release">
                  {{ release }}
                </li>
              </ul>
            </div>

            <div v-show="$t('downloadPage.bugs').length !== 0">
              <h5 class="pt-4">{{ $t("downloadPage.bugLabel") }}</h5>
              <ul class="py-2">
                <li v-for="bug in $t('downloadPage.bugs')" :key="bug">
                  {{ bug }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { seoMixin } from "@/modules/mixins/seoMixin"

export default Vue.extend({
  mixins: [seoMixin("download")],
  methods: {
    download(platform: "windows" | "macOS") {
      const installer = platform === "windows" ? "DermAnnotationSetup_Windows.msi" : "DermAnnotationSetup_macOS.zip"
      window.location.href = `${this.$router.options.base}publish/installer/${installer}`
      ;(this as any).$gtag("event", "download", {
        event_category: "installer",
        event_label: platform,
      })
    },
  },
})
</script>
