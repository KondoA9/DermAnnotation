<template>
  <div>
    <Header />

    <div class="text-center py-4 mb-5" style="background: rgb(241, 226, 201)">
      <div class="container">
        <div class="py-3">
          <h1 class="font-weight-normal">DermAnnotation</h1>
          <p class="lead">
            {{ $t("topPage.summary") }}
          </p>
        </div>
        <video
          class="pb-4"
          autoplay
          loop
          muted
          playsinline
          type="video/mp4"
          width="100%"
          :src="`${$router.options.base}overview.mp4`"
        />
        <div class="mx-auto">
          <nuxt-link :to="localePath('/download')">
            <button class="btn btn-primary" style="font-size: 1.25rem">Download</button>
          </nuxt-link>
          <p class="mt-3">
            DermAnnotation currently available only for japanese. English version and some documentations are under
            construction.
          </p>
        </div>
      </div>
    </div>

    <div class="container-fluid py-4 bg-white">
      <div class="container">
        <h3>Efficient editing</h3>
        <div class="row">
          <div>
            <ul>
              <li>{{ $t("topPage.advantages[0].points[0]") }}</li>
              <li>{{ $t("topPage.advantages[0].points[1]") }}</li>
              <li>{{ $t("topPage.advantages[0].points[2]") }}</li>
              <li>{{ $t("topPage.advantages[0].points[3]") }}</li>
              <li>{{ $t("topPage.advantages[0].points[4]") }}</li>
            </ul>
            <p>
              {{ $t("topPage.advantages[0].summary") }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid py-4 bg-white">
      <div class="container">
        <h3>Lightweight</h3>
        <div class="row">
          <div>
            <p>
              {{ $t("topPage.advantages[1].summary") }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid py-4 bg-white">
      <div class="container">
        <h3>Layers</h3>
        <div class="row">
          <div>
            <p>
              {{ $t("topPage.advantages[2].summary") }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid py-4 bg-white">
      <div class="container">
        <h3>Virtual slide</h3>
        <div class="row">
          <div>
            <p>
              {{ $t("topPage.advantages[3].summary") }}
              <nuxt-link :to="localePath('/manual/#vitrual-slide')">*</nuxt-link>
            </p>
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
  mixins: [seoMixin("top", true)],
})
</script>
