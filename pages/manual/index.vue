<template>
  <div>
    <Header />

    <div class="container-fluid py-5" style="min-height: 90vh">
      <div class="container py-4">
        <h2 id="basic-usage">{{ $t("manualPage.basicUsage.name") }}</h2>
        <div class="container">
          <p v-for="p in $t('manualPage.basicUsage.contents')">
            {{ p }}
          </p>
        </div>
      </div>

      <div class="container py-4">
        <h2 id="available-images">
          {{ $t("manualPage.availableImage.name") }}
        </h2>
        <div class="container">
          <ul>
            <li v-for="li in $t('manualPage.availableImage.contents')">
              {{ li }}
            </li>
          </ul>
        </div>
      </div>

      <div class="container py-4">
        <h2 id="pencil-setting">{{ $t("manualPage.pencilSettings.name") }}</h2>
        <div class="container">
          <p v-for="p in $t('manualPage.pencilSettings.contents')">
            {{ p }}
          </p>
        </div>
      </div>

      <div class="container py-4">
        <h2 id="virtual-slide">病理画像</h2>
        <div class="container">
          <p v-for="p in $t('manualPage.virtualSlide.contents')">
            {{ p }}
          </p>
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
  mixins: [seoMixin("manual")],
})
</script>
