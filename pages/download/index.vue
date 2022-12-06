<template>
  <PageTemplate>
    <div class="container-fluid py-5 text-center bg-light my-auto" style="min-height: 90vh">
      <h2 class="display-5 pt-3">Download DermAnnotation v2.3.7</h2>
      <p class="my-3">{{ $t("downloadPage.date") }}</p>

      <div class="container mt-4">
        <b-card no-body bg-variant="light">
          <b-tabs align="center" pills card>
            <b-tab title="Windows" active>
              <div>
                <p class="lead mb-2">Windows 10 / 11 64bit</p>
                <div class="d-flex justify-content-center flex-wrap">
                  <button class="btn btn-outline-primary px-5 py-2 m-3" @click="download('windows.installer')">
                    <p>Installer (.msi)</p>
                    <small>Recommended</small>
                  </button>
                  <button class="btn btn-outline-primary px-5 py-2 m-3" @click="download('windows.standalone')">
                    Standalone (.zip)
                  </button>
                </div>
              </div>
            </b-tab>
            <b-tab title="macOS">
              <div>
                <p class="lead mb-2">macOS Big Sur 11.0+</p>
                <div class="d-flex justify-content-center flex-wrap">
                  <button class="btn btn-outline-primary px-5 py-2 m-3" @click="download('macOS')">
                    <p>Standalone (.zip)</p>
                  </button>
                </div>
              </div>
            </b-tab>
            <b-tab title="Linux">
              <div>
                <p class="lead mb-2">Ubuntu 20.04 / 22.04 LTS</p>
                <p>{{ $t("downloadPage.noteForLinux") }}</p>
                <!--<div class="d-flex justify-content-center flex-wrap">
                  <button class="btn btn-outline-primary px-5 py-2 m-3" @click="download('linux')">
                    <p>Installer</p>
                  </button>
                </div>-->
              </div>
            </b-tab>
          </b-tabs>
        </b-card>

        <p class="my-5">*{{ $t("downloadPage.noteForMac") }}</p>

        <div class="container" style="text-align: left">
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
  </PageTemplate>
</template>

<script lang="ts">
import Vue from "vue"
import { seoMixin } from "@/modules/mixins/seoMixin"

export default Vue.extend({
  mixins: [seoMixin("download")],
  methods: {
    download(platform: "windows.installer" | "windows.standalone" | "macOS" | "linux") {
      const installer = (() => {
        switch (platform) {
          case "windows.installer":
            return "DermAnnotationSetup_Windows.msi"
          case "windows.standalone":
            return "DermAnnotationSetup_Windows.zip"
          case "macOS":
            return "DermAnnotationSetup_macOS.zip"
          default:
            return undefined
        }
      })()

      if (installer) {
        window.location.href = `${this.$router.options.base}publish/installer/${installer}`
        ;(this as any).$gtag("event", "download", {
          event_category: "installer",
          event_label: platform,
        })
      }
    },
  },
})
</script>
