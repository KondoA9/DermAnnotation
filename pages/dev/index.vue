<template>
  <PageTemplate>
    <div class="container-fluid py-5" style="min-height: 90vh">
      <div class="container col-lg-6">
        <h2>{{ $t("devPage.pythonPackage.name") }}</h2>
        <div class="container py-3">
          <p>
            {{ $t("devPage.pythonPackage.sentences")[0] }}
            <a href="https://pypi.org/project/DermTiff/">DermTiff</a>
            {{ $t("devPage.pythonPackage.sentences")[1] }}
          </p>
        </div>
      </div>

      <div class="container col-lg-6 mt-4">
        <h2>{{ $t("devPage.annotatedFile.name") }}</h2>
        <div class="container py-3">
          <h4>{{ $t("devPage.annotatedFile.overview.name") }}</h4>
          <div class="container">
            <p v-for="p in $t('devPage.annotatedFile.overview.contents')" :key="p">
              {{ p }}
            </p>
          </div>
        </div>

        <div class="container py-3">
          <h4>{{ $t("devPage.annotatedFile.tiffStructure.name") }}</h4>
          <div class="container">
            <div v-for="content in $t('devPage.annotatedFile.tiffStructure.contents')" :key="content.sentence">
              <p>{{ content.sentence }}</p>
              <ul>
                <li v-for="li in content.list" :key="li">{{ li }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="container py-3">
          <h4>{{ $t("devPage.annotatedFile.saveFormat.name") }}</h4>
          <div class="container">
            <div v-for="content in $t('devPage.annotatedFile.saveFormat.contents')" :key="content.sentence">
              <p>{{ content.sentence }}</p>
              <ul>
                <li v-for="li in content.list" :key="li">{{ li }}</li>
              </ul>
            </div>
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
  mixins: [seoMixin("dev")],
})
</script>
