<template>
  <PageTemplate>
    <div class="container-fluid py-5" style="min-height: 90vh">
      <div class="container py-4">
        <h2 id="basic-usage">{{ $t("manualPage.basicUsage.name") }}</h2>
        <div class="container">
          <p v-for="p in $t('manualPage.basicUsage.contents')" :key="p">
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
            <li v-for="(li, index) in $t('manualPage.availableImage.contents')" :key="li">
              {{ li }} <nuxt-link v-if="index === 2" :to="localePath('/dev')">*</nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="container py-4">
        <h2 id="pencil-setting">{{ $t("manualPage.pencilSettings.name") }}</h2>
        <div class="container">
          <p v-for="p in $t('manualPage.pencilSettings.contents')" :key="p">
            {{ p }}
          </p>
        </div>
      </div>

      <div class="container py-4">
        <h2 id="virtual-slide">{{ $t("manualPage.virtualSlide.name") }}</h2>
        <div class="container">
          <p v-for="p in $t('manualPage.virtualSlide.contents')" :key="p">
            {{ p }}
          </p>
        </div>
      </div>
    </div>
  </PageTemplate>
</template>

<script lang="ts">
import Vue from "vue"
import { seoMixin } from "@/modules/mixins/seoMixin"

export default Vue.extend({
  mixins: [seoMixin("manual")],
})
</script>
