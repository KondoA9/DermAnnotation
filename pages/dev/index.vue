<template>
  <div>
    <Header />

    <div class="container-fluid py-5" style="min-height: 90vh">
      <div class="container col-lg-6">
        <h2>{{ $t("devPage.annotatedFile.name") }}</h2>
        <div class="container py-3">
          <h4>{{ $t("devPage.annotatedFile.overview.name") }}</h4>
          <div class="container">
            <p v-for="p in $t('devPage.annotatedFile.overview.contents')">
              {{ p }}
            </p>
          </div>
        </div>

        <div class="container py-3">
          <h4>{{ $t("devPage.annotatedFile.tiffStructure.name") }}</h4>
          <div class="container">
            <template
              v-for="content in $t(
                'devPage.annotatedFile.tiffStructure.contents'
              )"
            >
              <p>{{ content.sentence }}</p>
              <ul>
                <li v-for="li in content.list">{{ li }}</li>
              </ul>
            </template>
          </div>
        </div>

        <div class="container py-3">
          <h4>{{ $t("devPage.annotatedFile.saveFormat.name") }}</h4>
          <div class="container">
            <template
              v-for="content in $t('devPage.annotatedFile.saveFormat.contents')"
            >
              <p>{{ content.sentence }}</p>
              <ul>
                <li v-for="li in content.list">{{ li }}</li>
              </ul>
            </template>
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
  mixins: [seoMixin("dev")],
})
</script>
